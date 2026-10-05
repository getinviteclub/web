/**
 * Las fotos del sitio, en un solo lugar.
 *
 * ⚠️ PLACEHOLDERS. Son fotos de Unsplash (licencia libre, uso comercial
 * permitido, sin atribución obligatoria). Lo ideal es reemplazarlas por
 * fotos de casamientos reales de clientes, con su permiso. Para cambiar
 * una: pisar la URL acá —o apuntar a /images/...—; ningún componente la
 * tiene escrita.
 *
 * Todas a COLOR (decisión de Facu): nada de fotos en blanco y negro.
 * Las del board de Pinterest no se usan: son trabajo de otros fotógrafos.
 */
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`

export const FOTOS = {
  veloCampo: { src: u("1502955422409-06e43fd3eff3"), alt: "Novia con el velo al viento en un campo, al atardecer" },
  besoInvitados: { src: u("1697929617839-7074dfec445c"), alt: "Pareja besándose entre los invitados" },
  noviaFlash: { src: u("1542598688-f8edef5d3d97"), alt: "Novia de noche, iluminada con flash" },
  ventana: { src: u("1615164825769-b9bbba2906e9"), alt: "Novia junto a una ventana" },
  espaldaVelo: { src: u("1529635004337-98bdc35214a7"), alt: "Novia de espaldas con velo, frente a un lago" },
  sonrisa: { src: u("1484849457281-191e439a0431"), alt: "Novia sonriendo con el velo al viento" },
  anillos: { src: u("1707294285115-bbbef91a6f7c"), alt: "Anillos de casamiento junto a los zapatos de la novia" },
  veloPareja: { src: u("1654994088609-ffd4c1d2b605"), alt: "Pareja abrazada bajo el velo" },
  fiesta: { src: u("1758810409996-583f3bad7d51"), alt: "Pareja bailando en la fiesta" },
  noche: { src: u("1713925919053-bf388cc18a1d"), alt: "Pareja caminando de noche" },
  luces: { src: u("1656515643198-aac4c4e7294a"), alt: "Pareja frente a una pared de lamparitas" },
  mesas: { src: u("1707333514312-39cf7658479c"), alt: "Mesas de la recepción iluminadas con guirnaldas" },
  pasillo: { src: u("1607861884586-c7cfaed16290"), alt: "Pasillo de la ceremonia iluminado con velas" },
  bengalas: { src: u("1513725673171-537abba17912"), alt: "Pareja besándose entre bengalas" },
  bailando: { src: u("1575425909772-5c831442e679"), alt: "Pareja bailando de noche entre bengalas" },
  velas: { src: u("1613068431228-8cb6a1e92573"), alt: "Mesa con velas encendidas" },
  brindis: { src: u("1624634564754-e45be6d06159"), alt: "Brindis con copas de champagne" },
} as const

export type Foto = (typeof FOTOS)[keyof typeof FOTOS]
