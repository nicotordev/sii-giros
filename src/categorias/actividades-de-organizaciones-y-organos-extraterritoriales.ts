import type { Giro, Rubro } from "../types.ts";

export const rubro: Rubro = {
  "id": "actividades-de-organizaciones-y-organos-extraterritoriales",
  "nombre": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES",
  "grupos": [
    {
      "id": "actividades-de-organizaciones-y-organos-extraterritoriales:actividades-de-organizaciones-y-organos-extraterritoriales",
      "nombre": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES",
      "giros": [
        {
          "codigo": "990000",
          "descripcion": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES",
          "afectoIva": "G",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-de-organizaciones-y-organos-extraterritoriales",
          "rubro": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES",
          "grupoId": "actividades-de-organizaciones-y-organos-extraterritoriales:actividades-de-organizaciones-y-organos-extraterritoriales",
          "grupo": "ACTIVIDADES DE ORGANIZACIONES Y ÓRGANOS EXTRATERRITORIALES"
        }
      ]
    }
  ]
};

export const giros: readonly Giro[] = rubro.grupos.flatMap((grupo) => grupo.giros);
