export const FUENTE =
  "https://www.sii.cl/ayudas/ayudas_por_servicios/1956-codigos-1959.html" as const;

export const AFECTO_IVA = ["SI", "NO", "G"] as const;
export type AfectoIva = (typeof AFECTO_IVA)[number];

export const CATEGORIAS_TRIBUTARIAS = ["1", "2", "G"] as const;
export type CategoriaTributaria = (typeof CATEGORIAS_TRIBUTARIAS)[number];

export const DISPONIBLE_INTERNET = ["SI", "NO"] as const;
export type DisponibleInternet = (typeof DISPONIBLE_INTERNET)[number];

/** G en IVA o en categoría tributaria: el SII la resuelve según la actividad concreta. */
export const GLOSARIO = {
  G: "La categoría tributaria y la calidad de afecto a IVA se determinan por las características propias de la actividad.",
} as const;
