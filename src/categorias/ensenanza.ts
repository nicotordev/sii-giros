import type { Giro, Rubro } from "../types.ts";

export const rubro: Rubro = {
  "id": "ensenanza",
  "nombre": "ENSEÑANZA",
  "grupos": [
    {
      "id": "ensenanza:ensenanza-preescolar-primaria-secundaria-cientifico-humanista-y-tecnico-profesional",
      "nombre": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL",
      "giros": [
        {
          "codigo": "850011",
          "descripcion": "ENSEÑANZA PREESCOLAR PÚBLICA",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-preescolar-primaria-secundaria-cientifico-humanista-y-tecnico-profesional",
          "grupo": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL"
        },
        {
          "codigo": "850012",
          "descripcion": "ENSEÑANZA PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL PÚBLICA",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-preescolar-primaria-secundaria-cientifico-humanista-y-tecnico-profesional",
          "grupo": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL"
        },
        {
          "codigo": "850021",
          "descripcion": "ENSEÑANZA PREESCOLAR PRIVADA",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-preescolar-primaria-secundaria-cientifico-humanista-y-tecnico-profesional",
          "grupo": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL"
        },
        {
          "codigo": "850022",
          "descripcion": "ENSEÑANZA PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL PRIVADA",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-preescolar-primaria-secundaria-cientifico-humanista-y-tecnico-profesional",
          "grupo": "ENSEÑANZA PREESCOLAR, PRIMARIA, SECUNDARIA CIENTÍFICO HUMANISTA Y TÉCNICO PROFESIONAL"
        }
      ]
    },
    {
      "id": "ensenanza:ensenanza-superior",
      "nombre": "ENSEÑANZA SUPERIOR",
      "giros": [
        {
          "codigo": "853110",
          "descripcion": "ENSEÑANZA SUPERIOR EN UNIVERSIDADES PÚBLICAS",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-superior",
          "grupo": "ENSEÑANZA SUPERIOR"
        },
        {
          "codigo": "853120",
          "descripcion": "ENSEÑANZA SUPERIOR EN UNIVERSIDADES PRIVADAS",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-superior",
          "grupo": "ENSEÑANZA SUPERIOR"
        },
        {
          "codigo": "853201",
          "descripcion": "ENSEÑANZA SUPERIOR EN INSTITUTOS PROFESIONALES",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-superior",
          "grupo": "ENSEÑANZA SUPERIOR"
        },
        {
          "codigo": "853202",
          "descripcion": "ENSEÑANZA SUPERIOR EN CENTROS DE FORMACIÓN TÉCNICA",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:ensenanza-superior",
          "grupo": "ENSEÑANZA SUPERIOR"
        }
      ]
    },
    {
      "id": "ensenanza:otros-tipos-de-ensenanza",
      "nombre": "OTROS TIPOS DE ENSEÑANZA",
      "giros": [
        {
          "codigo": "854100",
          "descripcion": "ENSEÑANZA DEPORTIVA Y RECREATIVA",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:otros-tipos-de-ensenanza",
          "grupo": "OTROS TIPOS DE ENSEÑANZA"
        },
        {
          "codigo": "854200",
          "descripcion": "ENSEÑANZA CULTURAL",
          "afectoIva": "NO",
          "categoriaTributaria": "G",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:otros-tipos-de-ensenanza",
          "grupo": "OTROS TIPOS DE ENSEÑANZA"
        },
        {
          "codigo": "854901",
          "descripcion": "ENSEÑANZA PREUNIVERSITARIA",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:otros-tipos-de-ensenanza",
          "grupo": "OTROS TIPOS DE ENSEÑANZA"
        },
        {
          "codigo": "854902",
          "descripcion": "SERVICIOS PERSONALES DE EDUCACIÓN",
          "afectoIva": "NO",
          "categoriaTributaria": "2",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:otros-tipos-de-ensenanza",
          "grupo": "OTROS TIPOS DE ENSEÑANZA"
        },
        {
          "codigo": "854909",
          "descripcion": "OTROS TIPOS DE ENSEÑANZA N.C.P.",
          "afectoIva": "NO",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:otros-tipos-de-ensenanza",
          "grupo": "OTROS TIPOS DE ENSEÑANZA"
        }
      ]
    },
    {
      "id": "ensenanza:actividades-de-apoyo-a-la-ensenanza",
      "nombre": "ACTIVIDADES DE APOYO A LA ENSEÑANZA",
      "giros": [
        {
          "codigo": "855000",
          "descripcion": "ACTIVIDADES DE APOYO A LA ENSEÑANZA",
          "afectoIva": "G",
          "categoriaTributaria": "G",
          "disponibleInternet": "SI",
          "rubroId": "ensenanza",
          "rubro": "ENSEÑANZA",
          "grupoId": "ensenanza:actividades-de-apoyo-a-la-ensenanza",
          "grupo": "ACTIVIDADES DE APOYO A LA ENSEÑANZA"
        }
      ]
    }
  ]
};

export const giros: readonly Giro[] = rubro.grupos.flatMap((grupo) => grupo.giros);
