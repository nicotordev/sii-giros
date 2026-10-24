import type { Giro, Rubro } from "../types.ts";

export const rubro: Rubro = {
  "id": "actividades-financieras-y-de-seguros",
  "nombre": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
  "grupos": [
    {
      "id": "actividades-financieras-y-de-seguros:intermediacion-monetaria",
      "nombre": "INTERMEDIACIÓN MONETARIA",
      "giros": [
        {
          "codigo": "641100",
          "descripcion": "BANCA CENTRAL",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:intermediacion-monetaria",
          "grupo": "INTERMEDIACIÓN MONETARIA"
        },
        {
          "codigo": "641910",
          "descripcion": "ACTIVIDADES BANCARIAS",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:intermediacion-monetaria",
          "grupo": "INTERMEDIACIÓN MONETARIA"
        },
        {
          "codigo": "641990",
          "descripcion": "OTROS TIPOS DE INTERMEDIACIÓN MONETARIA N.C.P.",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:intermediacion-monetaria",
          "grupo": "INTERMEDIACIÓN MONETARIA"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:actividades-de-sociedades-de-cartera",
      "nombre": "ACTIVIDADES DE SOCIEDADES DE CARTERA",
      "giros": [
        {
          "codigo": "642000",
          "descripcion": "ACTIVIDADES DE SOCIEDADES DE CARTERA",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-de-sociedades-de-cartera",
          "grupo": "ACTIVIDADES DE SOCIEDADES DE CARTERA"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:fondos-y-sociedades-de-inversion-y-entidades-financieras-similares",
      "nombre": "FONDOS Y SOCIEDADES DE INVERSIÓN Y ENTIDADES FINANCIERAS SIMILARES",
      "giros": [
        {
          "codigo": "643000",
          "descripcion": "FONDOS Y SOCIEDADES DE INVERSIÓN Y ENTIDADES FINANCIERAS SIMILARES",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:fondos-y-sociedades-de-inversion-y-entidades-financieras-similares",
          "grupo": "FONDOS Y SOCIEDADES DE INVERSIÓN Y ENTIDADES FINANCIERAS SIMILARES"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:otras-actividades-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
      "nombre": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "giros": [
        {
          "codigo": "649100",
          "descripcion": "LEASING FINANCIERO",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:otras-actividades-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "649201",
          "descripcion": "FINANCIERAS",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:otras-actividades-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "649202",
          "descripcion": "ACTIVIDADES DE CRÉDITO PRENDARIO",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:otras-actividades-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "649203",
          "descripcion": "CAJAS DE COMPENSACIÓN",
          "afectoIva": "G",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:otras-actividades-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "649209",
          "descripcion": "OTRAS ACTIVIDADES DE CONCESIÓN DE CRÉDITO N.C.P.",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:otras-actividades-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "649900",
          "descripcion": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES N.C.P.",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:otras-actividades-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "OTRAS ACTIVIDADES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:seguros",
      "nombre": "SEGUROS",
      "giros": [
        {
          "codigo": "651100",
          "descripcion": "SEGUROS DE VIDA",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:seguros",
          "grupo": "SEGUROS"
        },
        {
          "codigo": "651210",
          "descripcion": "SEGUROS GENERALES, EXCEPTO ACTIVIDADES DE ISAPRES",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:seguros",
          "grupo": "SEGUROS"
        },
        {
          "codigo": "651220",
          "descripcion": "ACTIVIDADES DE ISAPRES",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:seguros",
          "grupo": "SEGUROS"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:reaseguros",
      "nombre": "REASEGUROS",
      "giros": [
        {
          "codigo": "652000",
          "descripcion": "REASEGUROS",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:reaseguros",
          "grupo": "REASEGUROS"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:fondos-de-pensiones",
      "nombre": "FONDOS DE PENSIONES",
      "giros": [
        {
          "codigo": "653000",
          "descripcion": "FONDOS DE PENSIONES",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:fondos-de-pensiones",
          "grupo": "FONDOS DE PENSIONES"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
      "nombre": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES",
      "giros": [
        {
          "codigo": "661100",
          "descripcion": "ADMINISTRACIÓN DE MERCADOS FINANCIEROS",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661201",
          "descripcion": "ACTIVIDADES DE SECURITIZADORAS",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661202",
          "descripcion": "CORREDORES DE BOLSA",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661203",
          "descripcion": "AGENTES DE VALORES",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661204",
          "descripcion": "ACTIVIDADES DE CASAS DE CAMBIO Y OPERADORES DE DIVISA",
          "afectoIva": "G",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661209",
          "descripcion": "OTROS SERVICIOS DE CORRETAJE DE VALORES Y COMMODITIES N.C.P.",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661901",
          "descripcion": "ACTIVIDADES DE CÁMARAS DE COMPENSACIÓN",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661902",
          "descripcion": "ADMINISTRACIÓN DE TARJETAS DE CRÉDITO",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661903",
          "descripcion": "EMPRESAS DE ASESORÍA Y CONSULTORÍA EN INVERSIÓN FINANCIERA; SOCIEDADES DE APOYO AL GIRO",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661904",
          "descripcion": "ACTIVIDADES DE CLASIFICADORAS DE RIESGO",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "661909",
          "descripcion": "OTRAS ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SERVICIOS FINANCIEROS N.C.P.",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-servicios-financieros-excepto-las-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE SERVICIOS FINANCIEROS, EXCEPTO LAS DE SEGUROS Y FONDOS DE PENSIONES"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-las-actividades-de-seguros-y-fondos-de-pensiones",
      "nombre": "ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES",
      "giros": [
        {
          "codigo": "662100",
          "descripcion": "EVALUACIÓN DE RIESGOS Y DAÑOS (INCLUYE ACTIVIDADES DE LIQUIDADORES DE SEGUROS)",
          "afectoIva": "G",
          "categoriaTributaria": "G",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-las-actividades-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "662200",
          "descripcion": "ACTIVIDADES DE AGENTES Y CORREDORES DE SEGUROS",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-las-actividades-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES"
        },
        {
          "codigo": "662900",
          "descripcion": "OTRAS ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES",
          "afectoIva": "G",
          "categoriaTributaria": "G",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-auxiliares-de-las-actividades-de-seguros-y-fondos-de-pensiones",
          "grupo": "ACTIVIDADES AUXILIARES DE LAS ACTIVIDADES DE SEGUROS Y FONDOS DE PENSIONES"
        }
      ]
    },
    {
      "id": "actividades-financieras-y-de-seguros:actividades-de-gestion-de-fondos",
      "nombre": "ACTIVIDADES DE GESTIÓN DE FONDOS",
      "giros": [
        {
          "codigo": "663010",
          "descripcion": "ADMINISTRADORAS DE FONDOS DE PENSIONES (AFP)",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "NO",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-de-gestion-de-fondos",
          "grupo": "ACTIVIDADES DE GESTIÓN DE FONDOS"
        },
        {
          "codigo": "663091",
          "descripcion": "ADMINISTRADORAS DE FONDOS DE INVERSIÓN",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-de-gestion-de-fondos",
          "grupo": "ACTIVIDADES DE GESTIÓN DE FONDOS"
        },
        {
          "codigo": "663092",
          "descripcion": "ADMINISTRADORAS DE FONDOS MUTUOS",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-de-gestion-de-fondos",
          "grupo": "ACTIVIDADES DE GESTIÓN DE FONDOS"
        },
        {
          "codigo": "663093",
          "descripcion": "ADMINISTRADORAS DE FICES (FONDOS DE INVERSIÓN DE CAPITAL EXTRANJERO)",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-de-gestion-de-fondos",
          "grupo": "ACTIVIDADES DE GESTIÓN DE FONDOS"
        },
        {
          "codigo": "663094",
          "descripcion": "ADMINISTRADORAS DE FONDOS PARA LA VIVIENDA",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-de-gestion-de-fondos",
          "grupo": "ACTIVIDADES DE GESTIÓN DE FONDOS"
        },
        {
          "codigo": "663099",
          "descripcion": "ADMINISTRADORAS DE FONDOS PARA OTROS FINES N.C.P.",
          "afectoIva": "SI",
          "categoriaTributaria": "1",
          "disponibleInternet": "SI",
          "rubroId": "actividades-financieras-y-de-seguros",
          "rubro": "ACTIVIDADES FINANCIERAS Y DE SEGUROS",
          "grupoId": "actividades-financieras-y-de-seguros:actividades-de-gestion-de-fondos",
          "grupo": "ACTIVIDADES DE GESTIÓN DE FONDOS"
        }
      ]
    }
  ]
};

export const giros: readonly Giro[] = rubro.grupos.flatMap((grupo) => grupo.giros);
