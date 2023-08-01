const url = `https://api.themoviedb.org/3/trending/all/day?language=pt-BR`;
const options = {
method: "GET",
headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM3OTdkODE4ZTA5NTI0NTA4NjliYTE0ZjAzNWQyMiIsInN1YiI6IjY0OTRjMWVhMzkxYjljMDBjOTk2ZTQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pV9CLPWyvkbpNqQjTIgXZ09d8iWynvJUegzfbE2iR3Q"
}
};

fetch(url, options)
    .then(res => res.json())
    .then(function(data){
        console.log(data);
        let div = document.getElementById('movie');
        div.innerHTML = '';

        for(let i = 0; i <= data.results.length;i++){
            if (data?.results[i]?.media_type === 'movie'){
                div.innerHTML += `<div><img id = 'capa' src = "http://image.tmdb.org/t/p/original${data.results[i].poster_path}" height = "320" width = "250"/>
                            <div class = "topicos"><p>${data.results[i].original_title} (${data.results[i].title})</p>
                            <p>${data.results[i].release_date.slice(0, 4)} - Filme</p>
                            <p>${data.results[i].overview}</p>
                            <p>Popularidade: ${data.results[i].popularity} | Nota: ${data.results[i].vote_average} | Votos: ${data.results[i].vote_count}</p></div></div>`
            }
            else if (data?.results[i]?.media_type === 'tv'){
                div.innerHTML += `<div><img id = 'capa' src = "http://image.tmdb.org/t/p/original${data.results[i].poster_path}" height = "320" width = "250"/>
                            <div class = "topicos"><p>${data.results[i].original_name}</p>
                            <p>${data.results[i].first_air_date.slice(0, 4)} - Série</p>
                            <p>${data.results[i].overview}</p>
                            <p>Popularidade: ${data.results[i].popularity} | Nota: ${data.results[i].vote_average} | Votos: ${data.results[i].vote_count}</p></div></div>`
            }
        };

})
    .catch(err => console.error(err));