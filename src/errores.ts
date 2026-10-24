export class CatalogoError extends Error {
  constructor(mensaje: string) {
    super(mensaje);
    this.name = "CatalogoError";
  }
}
