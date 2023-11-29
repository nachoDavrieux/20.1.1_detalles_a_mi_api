const apiKey = "3224919859f19bb7a8fffa3c3732438a";
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI0OTE5ODU5ZjE5YmI3YThmZmZhM2MzNzMyNDM4YSIsInN1YiI6IjY0ZmUzMzUxYzNiZmZlMDExZTU5Y2RkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.til9uqP2R33R-rGwJAmG_JvnZYjfk40I9cKjFP0CwOU";

const numPeliculas = 20;

const tarjetasContenedor = document.getElementById('tarjetas-contenedor');


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        
        data.results.slice(0, numPeliculas).forEach(pelicula => {
            // Obtiengo la base URL y el tamaño del archivo desde la configuración
            const base_url = 'https://image.tmdb.org/t/p/';
            const file_size = 'w500';
            const file_path = pelicula.poster_path;
            const imagenURL = `${base_url}${file_size}${file_path}`;

            // Creo una tarjeta Bootstrap
            const tarjeta = document.createElement('div');
            tarjeta.className = 'card';

            // Añado la imagen a la tarjeta
            const imagen = document.createElement('img');
            imagen.src = imagenURL;
            imagen.className = 'card-img-top';
            imagen.alt = pelicula.title;

            // Creo el cuerpo de la tarjeta
            const cuerpoTarjeta = document.createElement('div');
            cuerpoTarjeta.className = 'card-body';

            // Añado el título y el texto a la tarjeta
            const titulo = document.createElement('h5');
            titulo.className = 'card-title';
            titulo.textContent = pelicula.title;

            const texto = document.createElement('p');
            texto.className = 'card-text';
            texto.textContent = pelicula.overview;

            // Construyo la estructura de la tarjeta
            cuerpoTarjeta.appendChild(titulo);
            cuerpoTarjeta.appendChild(texto);

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(cuerpoTarjeta);

            
            tarjetasContenedor.appendChild(tarjeta);
        });
    })
    .catch(error => console.error('Error:', error));