# @nicotordev/sii-giros

Códigos de actividad económica del Servicio de Impuestos Internos de Chile, tomados de la [tabla oficial de códigos](https://www.sii.cl/ayudas/ayudas_por_servicios/1956-codigos-1959.html).

Cada categoría del selector «Seleccione el rubro» es un rubro. Dentro hay grupos y, en cada grupo, los giros con afectación a IVA, categoría tributaria y disponibilidad en internet.

## Uso

```ts
import { exportar, listarRubros, seleccionar } from "@nicotordev/sii-giros";

listarRubros();

const filas = seleccionar({
  rubros: ["construccion", "ensenanza"],
  afectoIva: "SI",
  disponibleInternet: "SI",
});

const csv = exportar(filas, "csv");
const excel = exportar({ rubros: ["construccion"] }, "csv-punto-y-coma");
```

Los filtros presentes se combinan con Y. Varios valores del mismo filtro se combinan con O. `texto` busca en código, descripción, rubro y grupo, sin distinguir mayúsculas ni tildes.

`exportar` acepta una selección o un arreglo de giros. Formatos: `json` (por defecto), `csv` y `csv-punto-y-coma` para Excel en español.

Para cargar un solo rubro:

```ts
import { giros, rubro } from "@nicotordev/sii-giros/categorias/construccion";
```

El id de cada rubro es el que devuelve `listarRubros()`. `bun index.ts` imprime id, cantidad de giros y nombre.

`G` en IVA o en categoría tributaria significa que el SII la determina según la actividad concreta. La categoría tributaria queda como texto (`"1"`, `"2"` o `"G"`).
