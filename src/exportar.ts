import { CatalogoError } from "./errores.ts";
import { seleccionar } from "./seleccionar.ts";
import type { FormatoExportacion, Giro, Seleccion } from "./types.ts";

const COLUMNAS = [
  "codigo",
  "descripcion",
  "afectoIva",
  "categoriaTributaria",
  "disponibleInternet",
  "rubroId",
  "rubro",
  "grupoId",
  "grupo",
] as const satisfies readonly (keyof Giro)[];

/** Serializa una selección o un arreglo de giros. JSON es el formato por defecto. */
export function exportar(
  entrada: Seleccion | readonly Giro[],
  formato: FormatoExportacion = "json",
): string {
  const filas = resolverFilas(entrada);
  switch (formato) {
    case "json":
      return `${JSON.stringify(filas, null, 2)}\n`;
    case "csv":
      return aCsv(filas, ",");
    case "csv-punto-y-coma":
      return aCsv(filas, ";");
    default: {
      const nunca: never = formato;
      throw new CatalogoError(`Formato desconocido: ${String(nunca)}`);
    }
  }
}

function resolverFilas(entrada: Seleccion | readonly Giro[]): readonly Giro[] {
  if (esListaGiros(entrada)) {
    if (!entrada.every(esGiro)) {
      throw new CatalogoError("El arreglo debe contener giros del catálogo.");
    }
    return entrada;
  }
  if (esGiro(entrada)) {
    throw new CatalogoError("Pasa una selección o un arreglo de giros.");
  }
  return seleccionar(entrada);
}

function esListaGiros(valor: Seleccion | readonly Giro[]): valor is readonly Giro[] {
  return Array.isArray(valor);
}

function esGiro(valor: unknown): valor is Giro {
  if (typeof valor !== "object" || valor === null) return false;
  if (!("codigo" in valor) || !("descripcion" in valor) || !("rubroId" in valor)) return false;
  return (
    typeof valor.codigo === "string" &&
    typeof valor.descripcion === "string" &&
    typeof valor.rubroId === "string"
  );
}

function aCsv(filas: readonly Giro[], separador: "," | ";"): string {
  const lineas = [
    COLUMNAS.join(separador),
    ...filas.map((giro) => COLUMNAS.map((columna) => celda(giro[columna], separador)).join(separador)),
  ];
  return `${lineas.join("\n")}\n`;
}

function celda(valor: string, separador: string): string {
  if (valor.includes(separador) || /[",\n\r]/.test(valor)) {
    return `"${valor.replaceAll("\"", "\"\"")}"`;
  }
  return valor;
}
