import type { Giro, Rubro } from "../types.ts";

export const rubro: Rubro = {
  "id": "actividades-de-los-hogares-como-empleadores-actividades-no-diferenciadas-de-los-hogares",
  "nombre": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES; ACTIVIDADES NO DIFERENCIADAS DE LOS HOGARES",
  "grupos": [
    {
      "id": "actividades-de-los-hogares-como-empleadores-actividades-no-diferenciadas-de-los-hogares:actividades-de-los-hogares-como-empleadores-de-personal-domestico",
      "nombre": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES DE PERSONAL DOMÉSTICO",
      "giros": [
        {
          "codigo": "970000",
          "descripcion": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES DE PERSONAL DOMÉSTICO",
          "afectoIva": "NO",
          "categoriaTributaria": "G",
          "disponibleInternet": "NO",
          "rubroId": "actividades-de-los-hogares-como-empleadores-actividades-no-diferenciadas-de-los-hogares",
          "rubro": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES; ACTIVIDADES NO DIFERENCIADAS DE LOS HOGARES",
          "grupoId": "actividades-de-los-hogares-como-empleadores-actividades-no-diferenciadas-de-los-hogares:actividades-de-los-hogares-como-empleadores-de-personal-domestico",
          "grupo": "ACTIVIDADES DE LOS HOGARES COMO EMPLEADORES DE PERSONAL DOMÉSTICO"
        }
      ]
    }
  ]
};

export const giros: readonly Giro[] = rubro.grupos.flatMap((grupo) => grupo.giros);
