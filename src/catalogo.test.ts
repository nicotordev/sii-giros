import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { giros as girosConstruccion, rubro as rubroConstruccion } from "./categorias/construccion.ts";
import { giros as girosRaiz } from "../index.ts";
import {
  CatalogoError,
  RUBRO_IDS,
  exportar,
  giros,
  listarGrupos,
  listarRubros,
  obtenerRubro,
  rubros,
  seleccionar,
  type Giro,
  type RubroId,
} from "./index.ts";

describe("catálogo publicado", () => {
  test("reúne las 21 categorías", () => {
    expect(rubros).toHaveLength(21);
    expect(giros).toHaveLength(674);
    expect(new Set(giros.map((giro) => giro.codigo)).size).toBe(674);
    expect(rubros[0]?.id).toBe("agricultura-ganaderia-silvicultura-y-pesca");
    expect(rubros.at(-1)?.id).toBe("actividades-de-organizaciones-y-organos-extraterritoriales");
    expect(girosRaiz).toBe(giros);
  });

  test("tiene un módulo por rubro", async () => {
    const archivos = (await readdir(join(import.meta.dir, "categorias")))
      .filter((nombre) => nombre.endsWith(".ts"))
      .sort();
    expect(archivos).toEqual(RUBRO_IDS.map((id) => `${id}.ts`).sort());
    expect(rubroConstruccion.id).toBe("construccion");
    expect(seleccionar({ rubros: ["construccion"] }).map((giro) => giro.codigo)).toEqual(
      girosConstruccion.map((giro) => giro.codigo),
    );
  });
});

describe("seleccionar", () => {
  test("filtra por rubro, grupo, código y texto", () => {
    const trigo = giros.find((giro) => giro.codigo === "011101");
    if (trigo === undefined) throw new Error("falta 011101");

    expect(trigo).toMatchObject({
      descripcion: "CULTIVO DE TRIGO",
      afectoIva: "SI",
      categoriaTributaria: "1",
      disponibleInternet: "SI",
    });
    expect(seleccionar({ grupos: [trigo.grupoId] }).map((giro) => giro.codigo)).toEqual(
      seleccionar({ grupos: ["cultivo de plantas no perennes"] }).map((giro) => giro.codigo),
    );
    expect(seleccionar({ texto: "cultivo de maiz" }).some((giro) => giro.codigo === "011102")).toBe(
      true,
    );
    expect(seleccionar({ codigos: ["990000", "011101"] }).map((giro) => giro.codigo)).toEqual([
      "011101",
      "990000",
    ]);
    expect(seleccionar({ rubros: [trigo.rubroId], grupos: ["construccion:construccion-de-edificios"] })).toEqual(
      [],
    );
    expect(seleccionar()).toHaveLength(674);
    expect(seleccionar({ rubros: [] })).toEqual([]);
  });

  test("combina IVA y categoría tributaria", () => {
    const esperados = giros.filter(
      (giro) => giro.afectoIva === "NO" && giro.categoriaTributaria === "2",
    );
    expect(seleccionar({ afectoIva: "NO", categoriaTributaria: "2" })).toEqual(esperados);
    expect(esperados.some((giro) => giro.codigo === "750002")).toBe(true);
    expect(seleccionar({ afectoIva: ["G", "NO"] }).every((giro) => giro.afectoIva !== "SI")).toBe(
      true,
    );
  });

  test("rechaza filtros que no existen", () => {
    expect(() => seleccionar({ rubros: ["no-existe" as RubroId] })).toThrow(CatalogoError);
    expect(() => seleccionar({ grupos: ["grupo-inexistente"] })).toThrow(/Grupo desconocido/);
    expect(() => seleccionar({ codigos: ["011101", "000000"] })).toThrow(/000000/);
  });

  test("lista rubros y grupos", () => {
    const resumen = listarRubros();
    expect(resumen).toHaveLength(21);
    expect(resumen.reduce((total, rubro) => total + rubro.giros, 0)).toBe(674);
    expect(obtenerRubro("ensenanza").nombre).toBe("ENSEÑANZA");
    expect(listarGrupos("construccion").every((grupo) => grupo.rubroId === "construccion")).toBe(
      true,
    );
    expect(listarGrupos().length).toBeGreaterThan(21);
  });
});

describe("exportar", () => {
  test("escribe json y csv", () => {
    const cereal = giros.find((giro) => giro.codigo === "011105");
    if (cereal === undefined) throw new Error("falta 011105");
    expect(cereal.descripcion.includes(",")).toBe(true);

    const json = exportar({ codigos: ["011105"] });
    const filas: unknown = JSON.parse(json);
    expect(filas).toEqual([cereal]);

    const csv = exportar([cereal], "csv");
    expect(csv.startsWith("codigo,descripcion,afectoIva,categoriaTributaria,disponibleInternet,")).toBe(
      true,
    );
    expect(csv).toContain(`"${cereal.descripcion}"`);

    const excel = exportar([cereal], "csv-punto-y-coma");
    expect(excel.startsWith("codigo;descripcion;afectoIva;")).toBe(true);
    expect(excel).toContain(`;"${cereal.descripcion}";`);
  });

  test("escapa comillas y rechaza un giro suelto", () => {
    const rubroId = RUBRO_IDS[0];
    if (rubroId === undefined) throw new Error("sin rubros");
    const sintetico: Giro = {
      codigo: "000001",
      descripcion: 'DICE "HOLA", MUNDO',
      afectoIva: "SI",
      categoriaTributaria: "1",
      disponibleInternet: "NO",
      rubroId,
      rubro: "RUBRO",
      grupoId: `${rubroId}:grupo`,
      grupo: "GRUPO",
    };
    expect(exportar([sintetico], "csv")).toContain('"DICE ""HOLA"", MUNDO"');
    expect(() => exportar(sintetico as never)).toThrow(CatalogoError);
  });
});
