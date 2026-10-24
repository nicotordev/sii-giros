import { RUBRO_IDS, type RubroId } from "./generated/ids.ts";
import { giros, rubros } from "./generated/catalogo.ts";
import { CatalogoError } from "./errores.ts";
import { normalizar } from "./texto.ts";
import type {
  Giro,
  ResumenGrupo,
  ResumenRubro,
  Rubro,
  Seleccion,
} from "./types.ts";

const gruposCatalogo = rubros.flatMap((rubro) => rubro.grupos);
const codigosCatalogo = new Set(giros.map((giro) => giro.codigo));

export function listarRubros(): readonly ResumenRubro[] {
  return rubros.map((rubro) => ({
    id: rubro.id,
    nombre: rubro.nombre,
    grupos: rubro.grupos.length,
    giros: rubro.grupos.reduce((total, grupo) => total + grupo.giros.length, 0),
  }));
}

export function listarGrupos(rubroId?: RubroId): readonly ResumenGrupo[] {
  const origen = rubroId === undefined ? rubros : [obtenerRubro(rubroId)];
  return origen.flatMap((rubro) =>
    rubro.grupos.map((grupo) => ({
      id: grupo.id,
      nombre: grupo.nombre,
      rubroId: rubro.id,
      giros: grupo.giros.length,
    })),
  );
}

export function obtenerRubro(id: RubroId): Rubro {
  const rubro = rubros.find((item) => item.id === id);
  if (rubro === undefined) throw new CatalogoError(`Rubro desconocido: ${id}`);
  return rubro;
}

export function esRubroId(valor: string): valor is RubroId {
  return (RUBRO_IDS as readonly string[]).includes(valor);
}

/** Devuelve los giros que cumplen la selección. Sin filtros, devuelve el catálogo completo. */
export function seleccionar(seleccion: Seleccion = {}): readonly Giro[] {
  if (seleccion.rubros !== undefined) exigirRubros(seleccion.rubros);
  const grupos = seleccion.grupos === undefined ? undefined : exigirGrupos(seleccion.grupos);
  const codigos = seleccion.codigos === undefined ? undefined : exigirCodigos(seleccion.codigos);
  const texto = textoNormalizado(seleccion.texto);

  return giros.filter((giro) => {
    if (seleccion.rubros !== undefined && !seleccion.rubros.includes(giro.rubroId)) return false;
    if (grupos !== undefined && !grupos.has(giro.grupoId)) return false;
    if (codigos !== undefined && !codigos.has(giro.codigo)) return false;
    if (!coincide(seleccion.afectoIva, giro.afectoIva)) return false;
    if (!coincide(seleccion.categoriaTributaria, giro.categoriaTributaria)) return false;
    if (!coincide(seleccion.disponibleInternet, giro.disponibleInternet)) return false;
    if (texto !== undefined && !textoDe(giro).includes(texto)) return false;
    return true;
  });
}

function exigirRubros(ids: readonly RubroId[]): void {
  const desconocidos = ids.filter((id) => !esRubroId(id));
  if (desconocidos.length > 0) {
    throw new CatalogoError(`Rubro desconocido: ${desconocidos.join(", ")}`);
  }
}

function exigirGrupos(tokens: readonly string[]): ReadonlySet<string> {
  const ids = new Set<string>();
  const desconocidos: string[] = [];
  for (const token of tokens) {
    const clave = normalizar(token);
    const coincidencias = gruposCatalogo.filter(
      (grupo) => grupo.id === token || normalizar(grupo.nombre) === clave,
    );
    if (coincidencias.length === 0) {
      desconocidos.push(token);
      continue;
    }
    for (const grupo of coincidencias) ids.add(grupo.id);
  }
  if (desconocidos.length > 0) {
    throw new CatalogoError(`Grupo desconocido: ${desconocidos.join(", ")}`);
  }
  return ids;
}

function exigirCodigos(codigos: readonly string[]): ReadonlySet<string> {
  const desconocidos = codigos.filter((codigo) => !codigosCatalogo.has(codigo));
  if (desconocidos.length > 0) {
    throw new CatalogoError(`Código desconocido: ${desconocidos.join(", ")}`);
  }
  return new Set(codigos);
}

function coincide<T extends string>(filtro: T | readonly T[] | undefined, valor: T): boolean {
  if (filtro === undefined) return true;
  if (typeof filtro === "string") return filtro === valor;
  return filtro.includes(valor);
}

function textoNormalizado(texto: string | undefined): string | undefined {
  if (texto === undefined) return undefined;
  const clave = normalizar(texto).trim();
  return clave.length === 0 ? undefined : clave;
}

function textoDe(giro: Giro): string {
  return normalizar(
    [giro.codigo, giro.descripcion, giro.rubro, giro.rubroId, giro.grupo, giro.grupoId].join(" "),
  );
}
