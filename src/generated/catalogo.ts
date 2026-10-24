import type { Giro, Rubro } from "../types.ts";
import { rubro as rubro0 } from "../categorias/agricultura-ganaderia-silvicultura-y-pesca.ts";
import { rubro as rubro1 } from "../categorias/explotacion-de-minas-y-canteras.ts";
import { rubro as rubro2 } from "../categorias/industria-manufacturera.ts";
import { rubro as rubro3 } from "../categorias/suministro-de-electricidad-gas-vapor-y-aire-acondicionado.ts";
import { rubro as rubro4 } from "../categorias/suministro-de-agua-evacuacion-de-aguas-residuales-gestion-de-desechos-y-descontaminacion.ts";
import { rubro as rubro5 } from "../categorias/construccion.ts";
import { rubro as rubro6 } from "../categorias/comercio-al-por-mayor-y-al-por-menor-reparacion-de-vehiculos-automotores-y-motocicletas.ts";
import { rubro as rubro7 } from "../categorias/transporte-y-almacenamiento.ts";
import { rubro as rubro8 } from "../categorias/actividades-de-alojamiento-y-de-servicio-de-comidas.ts";
import { rubro as rubro9 } from "../categorias/informacion-y-comunicaciones.ts";
import { rubro as rubro10 } from "../categorias/actividades-financieras-y-de-seguros.ts";
import { rubro as rubro11 } from "../categorias/actividades-inmobiliarias.ts";
import { rubro as rubro12 } from "../categorias/actividades-profesionales-cientificas-y-tecnicas.ts";
import { rubro as rubro13 } from "../categorias/actividades-de-servicios-administrativos-y-de-apoyo.ts";
import { rubro as rubro14 } from "../categorias/administracion-publica-y-defensa-planes-de-seguridad-social-de-afiliacion-obligatoria.ts";
import { rubro as rubro15 } from "../categorias/ensenanza.ts";
import { rubro as rubro16 } from "../categorias/actividades-de-atencion-de-la-salud-humana-y-de-asistencia-social.ts";
import { rubro as rubro17 } from "../categorias/actividades-artisticas-de-entretenimiento-y-recreativas.ts";
import { rubro as rubro18 } from "../categorias/otras-actividades-de-servicios.ts";
import { rubro as rubro19 } from "../categorias/actividades-de-los-hogares-como-empleadores-actividades-no-diferenciadas-de-los-hogares.ts";
import { rubro as rubro20 } from "../categorias/actividades-de-organizaciones-y-organos-extraterritoriales.ts";

export const rubros: readonly Rubro[] = [
  rubro0,
  rubro1,
  rubro2,
  rubro3,
  rubro4,
  rubro5,
  rubro6,
  rubro7,
  rubro8,
  rubro9,
  rubro10,
  rubro11,
  rubro12,
  rubro13,
  rubro14,
  rubro15,
  rubro16,
  rubro17,
  rubro18,
  rubro19,
  rubro20,
];

export const giros: readonly Giro[] = rubros.flatMap((rubro) =>
  rubro.grupos.flatMap((grupo) => grupo.giros),
);
