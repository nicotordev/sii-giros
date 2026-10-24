import { listarRubros as mostrarRubros } from "./src/index.ts";

export {
  AFECTO_IVA,
  CATEGORIAS_TRIBUTARIAS,
  CatalogoError,
  DISPONIBLE_INTERNET,
  FUENTE,
  GLOSARIO,
  RUBRO_IDS,
  esRubroId,
  exportar,
  giros,
  listarGrupos,
  listarRubros,
  obtenerRubro,
  rubros,
  seleccionar,
} from "./src/index.ts";
export type {
  AfectoIva,
  CategoriaTributaria,
  DisponibleInternet,
  FormatoExportacion,
  Giro,
  Grupo,
  ResumenGrupo,
  ResumenRubro,
  Rubro,
  RubroId,
  Seleccion,
} from "./src/index.ts";

if (import.meta.main) {
  for (const rubro of mostrarRubros()) {
    console.log(`${rubro.id}\t${rubro.giros}\t${rubro.nombre}`);
  }
}
