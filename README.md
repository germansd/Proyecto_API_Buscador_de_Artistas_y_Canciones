# Proyecto API - Buscador de Artistas y Canciones

Este es un proyecto que permite interactuar con una API para buscar información sobre artistas y canciones de Spotify. El objetivo es proporcionar detalles de un artista, como su nombre, género, álbum más famoso, así como información sobre canciones populares, sus letras y enlaces para escuchar y descargar canciones.

## Características del Proyecto

1. **Búsqueda de Artistas**: Permite buscar un artista y mostrar información como su nombre, género, el álbum más famoso, fecha de lanzamiento y su canción más popular.
2. **Búsqueda de Canciones**: Permite buscar una canción, ver al artista, escuchar la canción en Spotify y ver su letra.
3. **Descarga de Canción**: Si se encuentra una canción, se ofrece la posibilidad de descargarla directamente.

## Tecnologías Utilizadas

- **HTML**: Estructura básica del proyecto.
- **CSS**: Estilos para la interfaz de usuario.
- **JavaScript**: Funciones para interactuar con la API y manejar la interfaz.
- **API de Spotify**: Utilizada para obtener información de artistas y canciones a través de consultas a los endpoints proporcionados.

## Funcionamiento

### 1. Búsqueda de Artistas

Cuando el usuario ingresa el nombre de un artista en el campo de texto "Artista" y presiona el botón "Buscar Artista", se realiza una consulta a la API de Spotify para obtener la información relevante del artista. Esta información incluye:

- **Nombre del Artista**: Se muestra el nombre del artista encontrado.
- **Género Musical**: Se muestra el género o los géneros musicales del artista.
- **Enlace a Spotify**: Se proporciona un enlace para ir al perfil del artista en Spotify.
- **Álbum más Famoso**: Muestra el nombre del álbum más famoso del artista, junto con la fecha de lanzamiento del mismo.
- **Canción Más Popular**: Muestra el nombre de la canción más famosa del álbum.

### 2. Búsqueda de Canciones

Cuando el usuario ingresa el nombre de una canción en el campo de texto "Canción" y presiona el botón "Buscar Canción", se realiza una consulta a la API para obtener los detalles de la canción. Esta información incluye:

- **Artista de la Canción**: El nombre del artista que interpreta la canción.
- **Enlace a Spotify**: Un enlace para escuchar la canción en Spotify.
- **Reproductor de Spotify**: Se inserta un iframe con un reproductor de Spotify donde se puede escuchar la canción directamente.
- **Letra de la Canción**: Muestra la letra de la canción (si está disponible).

### 3. Descarga de Canción

Si se encuentra una canción popular en la búsqueda del artista, el proyecto proporcionará un enlace de descarga directa. El usuario puede hacer clic en este enlace para descargar la canción.

## Funcionamiento del Código

El código realiza varias peticiones `fetch` a APIs de RapidAPI para obtener la información del artista y las canciones:

1. **Búsqueda de Artista**: Se hace una solicitud POST a la API de Spotify Scraper para obtener detalles del artista, como su nombre, géneros y más.
2. **Canciones Más Escuchadas**: Una vez encontrado el artista, se hace una segunda consulta a la API para obtener la canción más popular y detalles del álbum.
3. **Descarga de Canción**: Si se encuentra una canción popular, se hace una consulta a la API de Spotify Downloader para proporcionar un enlace de descarga directa.
4. **Búsqueda de Canción**: Si se ingresa una canción, se consulta la API para obtener la canción específica, el nombre del artista, y se crea un enlace para escuchar la canción en Spotify, además de mostrar la letra si está disponible.

## API y Enlaces de Terceros

Este proyecto utiliza varias APIs de RapidAPI para obtener datos de Spotify y obtener información sobre artistas y canciones:

- **Spotify Scraper API**: Para obtener información sobre artistas y sus canciones más populares.
- **Spotify Downloader API**: Para obtener enlaces de descarga de canciones.

Los detalles de autenticación (claves API) están codificados en el script, por lo que si necesitas hacer uso de esta API, necesitarás configurar tu propia clave en RapidAPI.


