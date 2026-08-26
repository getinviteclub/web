/**
 * IDs de elementos que un componente necesita encontrar en el DOM.
 *
 * Viven en su propio módulo —y no junto al componente que los usa— porque
 * los importa también una página, que es un Server Component. Exportar una
 * constante desde el mismo archivo que un componente cliente rompe Fast
 * Refresh: Next avisa "you might have a file which exports a React component
 * but also exports a value imported by a non-React component file" y fuerza
 * un full reload en cada edición.
 */

/** El CTA dentro del detalle de un diseño, al que <StickyCta> le hace relevo. */
export const CTA_INLINE_ID = "cta-inline"
