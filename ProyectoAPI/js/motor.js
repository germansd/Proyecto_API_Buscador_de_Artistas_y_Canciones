let ID = [];
let enlaceCancion = [];
let idCancion = [];

async function buscarArtista(url, options) {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        let obj = JSON.parse(result);

        console.log(obj);

        const nomArtista = document.getElementById("nomArtista");
        const genero = document.getElementById("genero");
        const enlaceArtista = document.getElementById("enlaceArtista");
        nomArtista.textContent = "Nombre: " + obj.results[0].name;
        genero.textContent = "Género: " + obj.results[0].genres;

        const link = document.createElement("a");
        link.textContent = "Ir a Spotify del Artista";
        link.href = obj.results[0].external_urls.spotify;
        link.target = "_blank";
        enlaceArtista.innerHTML = "";
        enlaceArtista.appendChild(link);


        ID.push(obj.results[0].id);

    } catch (error) {
        console.error(error);
    }
}

async function masEscuchadas(url1, options1) {
    try {
        const response = await fetch(url1, options1);
        const result = await response.text();
        let obj = JSON.parse(result);

        console.log(obj);

        const albumFamoso = document.getElementById("albumFamoso");
        const fechaSalida = document.getElementById("fechaSalida");
        const imagenDiv = document.getElementById("Imagen");
        const cancionFamosa = document.getElementById("Cancionfamosa");


        albumFamoso.textContent = "Álbum más famoso: " + obj.top_tracks[0].album.name;
        fechaSalida.textContent = "Fecha de salida: " + obj.top_tracks[0].album.release_date;
        cancionFamosa.textContent = "Canción más famosa del disco: " + obj.top_tracks[0].name;

 
        const link = document.createElement("a");
        link.href = obj.top_tracks[0].external_urls.spotify;
        link.target = "_blank"; 

        const img = document.createElement("img");
        img.src = obj.top_tracks[0].album.images[0].url;
        img.alt = "Portada del álbum";
        link.appendChild(img);

        imagenDiv.innerHTML = "";
        imagenDiv.appendChild(link);

 
        enlaceCancion.push(obj.top_tracks[0].external_urls.spotify);

    } catch (error) {
        console.error(error);
    }
}


//descargar
async function descargar(url, options, enlaceDescarga, resultDescarga) {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        let obj = JSON.parse(result);
        console.log(obj);
        console.log("Descarga directa: " + obj.data.downloadLink);
        enlaceDescarga.textContent = "Descargar cancion mas escuchada";
        enlaceDescarga.href = obj.data.downloadLink;
        resultDescarga.appendChild(enlaceDescarga);

    } catch (error) {
        console.error(error);
    }
}
//buscar canciones
async function buscarCanciones(url3, options3) {
    try {
        const response = await fetch(url3, options3);
        const result = await response.text();
        let obj = JSON.parse(result);

        console.log(obj);

        // Seleccionar los divs del DOM
        const artistaCancion = document.getElementById("artistaCancion");
        const enlaceCancionDiv = document.getElementById("enlaceCancion");
        const frame = document.getElementById("frame");
        artistaCancion.textContent = "Artista: " + obj.results[0].artists[0].name;

        const link = document.createElement("a");
        link.textContent = "Escuchar canción en spotify";
        link.href = obj.results[0].external_urls.spotify;
        link.target = "_blank";
        enlaceCancionDiv.innerHTML = "";
        enlaceCancionDiv.appendChild(link);
        
       

        idCancion.push(obj.results[0].id);
        frame.innerHTML = 
        `<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${idCancion[0]}?utm_source=generator" 
        width="100%" height="352" frameborder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>`;

    } catch (error) {
        console.error(error);
    }
}

//buscar letra
async function buscarLetra(url4, options4) {
    try {
        const response = await fetch(url4, options4);
        const result = await response.text();

        console.log(result);

        // Procesar la letra para eliminar los números de tiempo y los corchetes
        const letraSinTiempos = result.replace(/\[\d{2}:\d{2}(?:\.\d{2})?\]/g, "").trim();

        const letraDiv = document.getElementById("letra");
        letraDiv.innerHTML = letraSinTiempos;
    } catch (error) {
        console.error(error);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const artista = document.getElementById("Artista");
    const boton = document.getElementById("botonArtista");
    const enlaceDescarga = document.createElement("a");
    const resultDescarga = document.getElementById("descarga");
    const boton1 = document.getElementById("botonCanciones");
    const canciones = document.getElementById("canciones");


    boton.addEventListener("click", async function () {
        let artistaValor = artista.value;
        boton.disabled = true;
        reiniciarResultados();

        const url = 'https://spotify-scraper2.p.rapidapi.com/artist';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'b5a9edd0b8msh435ffe328e2f725p1bdf97jsn0f7c55a85991',
                'x-rapidapi-host': 'spotify-scraper2.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                query: artistaValor,
                limit: '1'
            })
        };

        await buscarArtista(url, options);

        if (ID.length > 0) {
            const url1 = 'https://spotify-scraper2.p.rapidapi.com/artist_top_tracks?artist_id=' + ID[0] + '&country=ES';
            const options1 = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'b5a9edd0b8msh435ffe328e2f725p1bdf97jsn0f7c55a85991',
                    'x-rapidapi-host': 'spotify-scraper2.p.rapidapi.com'
                }
            };
            await masEscuchadas(url1, options1);
        }

        if (enlaceCancion.length > 0) {
            const url2 = 'https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=' + enlaceCancion[0];
            const options2 = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'b5a9edd0b8msh435ffe328e2f725p1bdf97jsn0f7c55a85991',
                    'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
                }
            };

            await descargar(url2, options2, enlaceDescarga, resultDescarga);
        } else {
            alert("No se encontraron canciones para descargar");
        }




        boton.disabled = false;
    });
    boton1.addEventListener("click", async function () {
        let cancionValor = canciones.value;
        boton1.disabled = true;
        reiniciarResultados();
        const url3 = 'https://spotify-scraper2.p.rapidapi.com/search';
        const options3 = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'b5a9edd0b8msh435ffe328e2f725p1bdf97jsn0f7c55a85991',
                'x-rapidapi-host': 'spotify-scraper2.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                query: cancionValor,
                type: 'track',
                limit: '10'
            })
        };
        await buscarCanciones(url3, options3);


        const url4 = 'https://spotify-scraper.p.rapidapi.com/v1/track/lyrics?trackId=' + idCancion[0];
        const options4 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b5a9edd0b8msh435ffe328e2f725p1bdf97jsn0f7c55a85991',
                'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
            }
        };
        buscarLetra(url4, options4);
        boton1.disabled = false;
    });

});



function reiniciarResultados() {
    const elementos = [
        "nomArtista",
        "genero",
        "enlaceArtista",
        "albumFamoso",
        "fechaSalida",
        "Imagen",
        "Cancionfamosa",
        "artistaCancion",
        "enlaceCancion",
        "letra",
        "descarga"
    ];

    elementos.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerHTML = ""; 
        }
    });

    // Reiniciar arrays globales (opcional)
    ID = [];
    enlaceCancion = [];
    idCancion = [];
}


