# Pagina Web de Spicy.rg | React + Vite

## Descripción del proyecto

En este proyecto se desarrollará una página web con React para promocionar el trabajo de un DJ. Esta página incluira sets, eventos, galeria de fotos e información de contacto del artista.

## Estilos

Se implementa **BEM** (**{B}**lock - **{E}**lement - **{M}**odifire) con **SuitCSS** para el nombramiento de las clases.


### Ejemplos

- **Bloque:** .Header (Utiliza PascalCase, este define el bloque de un componente).

- **Elemento:** .Header-nav (Utiliza camelCase, sirve para diferencias los elementos de un bloque).

- **Modificador:** .Header-nav--backgroundRed (Utiliza camelCase, se separa con dos guiones y son utilizados para agregar estilos diferentes).

- **Estado:** .Header-nav.is-open (Utiliza camelCase, se utiliza para manejar estados de un componente o un elemento).

- **Utilidades:** .u-block { display: block} (Utiliza camelCase, empiezan con la letra u y separado por un guion el nombre de la utilidad).

- **Documentación:** https://dev.to/ignacio_cuadra/css-convenciones-de-nombres-bem-suit-css-y-title-css-365o

## Componentes

### Button (Componente reutilizable)

1. **Importaciones:** FontAwesome de '@fortawesome/react-fontawesome'
2. **Parametros nombrados:** { text, icon, handleClick, modifire }.
    + text: Texto del boton, si lo tiene.
    + icon: Icono del boton, si lo tiene. Este parametro se maneja en conjunto con el componente FontAwesomeIcon   de FontAwesome ('@fortawesome/react-fontawesome').
    + handleClick: Manejo del click del boton, aquí se pasaria la funcion encargada de manejar el mismo.
    + modifire: Parametro encargado de agregar un modificador al className del componente.
3. **Elementos utilizados:** < button />, < span />

### LinkTo (Componente reutilizable)

1. **Importaciones:** useState de 'react', FontAwesome de '@fortawesome/react-fontawesome'
2. **Parametros nombrados:** { linkTo, isBlankInitialization, text, icon, modifire }.
    + linkTo: url del link.
    + isBlankInitialization: este parametro define si el link se cargara en la misma pestaña o en una pestaña aparte.
    + text: Texto del link, si lo tiene.
    + icon: Icono del link, si lo tiene. Este parametro se maneja en conjunto con el componente FontAwesomeIcon   de FontAwesome ('@fortawesome/react-fontawesome').
    + modifire: Parametro encargado de agregar un modificador al className del componente.
3. **Elementos utilizados:** < a />, < span />