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

##Funcionamiento
Búsqueda de Artistas
En el campo de texto "Artista", escribe el nombre del artista que deseas buscar.
Haz clic en el botón "Buscar Artista".
Se mostrará el nombre del artista, su género, un enlace a su perfil en Spotify y detalles sobre su álbum más famoso y su canción más popular.
Búsqueda de Canciones
Escribe el nombre de una canción en el campo "Canción".
Haz clic en el botón "Buscar Canción".
Se mostrará el nombre del artista de la canción, un enlace para escucharla en Spotify, un iframe con el reproductor de Spotify y la letra de la canción (si está disponible).
Descarga de Canción
Si encuentras una canción popular de un artista, se te proporcionará un enlace para descargarla directamente desde la API.
API y Enlaces de Terceros
Este proyecto utiliza varias APIs de RapidAPI para obtener datos de Spotify y obtener información sobre artistas y canciones:

Spotify Scraper API: Para obtener información sobre artistas y sus canciones más populares.
Spotify Downloader API: Para obtener enlaces de descarga de canciones.
Los detalles de autenticación (claves API) están codificados en el script, por lo que si necesitas hacer uso de esta API, necesitarás configurar tu propia clave en RapidAPI.

