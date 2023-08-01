const options = {
    method: "GET",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM3OTdkODE4ZTA5NTI0NTA4NjliYTE0ZjAzNWQyMiIsInN1YiI6IjY0OTRjMWVhMzkxYjljMDBjOTk2ZTQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pV9CLPWyvkbpNqQjTIgXZ09d8iWynvJUegzfbE2iR3Q"
    }
    };
  
  const botao = document.getElementById('pages')
  botao?.addEventListener("click", event =>{
    let page = event.target.id.slice(4, 5)
    console.log(page)
  
    let url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}`;
    
    fetch(url, options)
    .then(res => res.json())
    .then(function(data){
        console.log(data);
        let div = document.getElementById('movie');
        div.innerHTML = '';

        for(let i = 0; i <= data.results.length;i++){
            if(data?.results[i]){
                div.innerHTML += `<div><img id = 'capa' src = "http://image.tmdb.org/t/p/original${data.results[i].poster_path}" height = "320" width = "250"/>
                              <div class = "topicos"><p>${data.results[i].original_title} (${data.results[i].title})</p>
                              <p>${data.results[i].release_date.slice(0, 4)}</p>
                              <p>${data.results[i].overview}</p>
                              <p>Popularidade: ${data.results[i].popularity} | Nota: ${data.results[i].vote_average} | Votos: ${data.results[i].vote_count}</p></div></div>`
            }
        }                      
    })
    .catch(err => console.error(err));

    window.scrollTo(0, 0);
  })
  
  fetch("https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1", options)
    .then(res => res.json())
    .then(function(data){
        console.log(data);
        let div = document.getElementById('movie');
        div.innerHTML = '';

        for(let i = 0; i <= data.results.length;i++){
            if(data?.results[i]){
                div.innerHTML += `<div><img id = 'capa' src = "http://image.tmdb.org/t/p/original${data.results[i].poster_path}" height = "320" width = "250"/>
                              <div class = "topicos"><p>${data.results[i].original_title} (${data.results[i].title})</p>
                              <p>${data.results[i].release_date.slice(0, 4)}</p>
                              <p>${data.results[i].overview}</p>
                              <p>Popularidade: ${data.results[i].popularity} | Nota: ${data.results[i].vote_average} | Votos: ${data.results[i].vote_count}</p></div></div>`
            }
        }                      
    })
    .catch(err => console.error(err));