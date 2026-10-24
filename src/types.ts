import type {
  AfectoIva,
  CategoriaTributaria,
  DisponibleInternet,
} from "./dominio.ts";
import type { RubroId } from "./generated/ids.ts";

export type { AfectoIva, CategoriaTributaria, DisponibleInternet, RubroId };

/** Un código de actividad económica. */
export type Giro = {
  readonly codigo: string;
  readonly descripcion: string;
  readonly afectoIva: AfectoIva;
  readonly categoriaTributaria: CategoriaTributaria;
  readonly disponibleInternet: DisponibleInternet;
  readonly rubroId: RubroId;
  readonly rubro: string;
  readonly grupoId: string;
  readonly grupo: string;
};

/** Subcategoría dentro de un rubro. En la tabla del SII es el título de cada bloque. */
export type Grupo = {
  readonly id: string;
  readonly nombre: string;
  readonly giros: readonly Giro[];
};

/**
 * Categoría del selector «Seleccione el rubro» del SII.
 * `id` es estable y sirve para importar `./categorias/<id>`.
 */
export type Rubro = {
  readonly id: RubroId;
  readonly nombre: string;
  readonly grupos: readonly Grupo[];
};

export type ResumenRubro = {
  readonly id: RubroId;
  readonly nombre: string;
  readonly grupos: number;
  readonly giros: number;
};

export type ResumenGrupo = {
  readonly id: string;
  readonly nombre: string;
  readonly rubroId: RubroId;
  readonly giros: number;
};

/**
 * Filtro del catálogo.
 * Los campos presentes se combinan con Y. Los valores de un mismo campo se combinan con O.
 * Un arreglo vacío no coincide con ningún giro.
 */
export type Seleccion = {
  readonly rubros?: readonly RubroId[];
  readonly grupos?: readonly string[];
  readonly codigos?: readonly string[];
  readonly afectoIva?: AfectoIva | readonly AfectoIva[];
  readonly categoriaTributaria?: CategoriaTributaria | readonly CategoriaTributaria[];
  readonly disponibleInternet?: DisponibleInternet | readonly DisponibleInternet[];
  /** Busca en código, descripción, rubro y grupo. Ignora mayúsculas y tildes. */
  readonly texto?: string;
};

export type FormatoExportacion = "json" | "csv" | "csv-punto-y-coma";
