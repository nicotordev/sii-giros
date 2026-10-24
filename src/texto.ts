/** Minúsculas, sin tildes. La eñe pasa a ene para poder buscar y armar ids. */
export function normalizar(valor: string): string {
  return valor
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replaceAll("ñ", "n");
}

export function slug(valor: string): string {
  return normalizar(valor)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
