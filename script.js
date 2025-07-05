// Funzione per cercare musica da Jamendo API (royalty free)
function searchMusic() {
  const searchQuery = document.getElementById("searchBar").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = '';  // Reset dei risultati

  // Fai una richiesta API a Jamendo (oppure un altro servizio gratuito)
  fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=9912f268&creativevortex@=${searchQuery}&limit=5`)
    .then(response => response.json())
    .then(data => {
      const tracks = data.results;
      tracks.forEach(track => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song");
        songDiv.innerHTML = `${track.name} - ${track.artist_name}`;
        songDiv.onclick = function () {
          playMusic(track);
        };
        resultsDiv.appendChild(songDiv);
      });
    })
    .catch(error => console.error('Errore nella ricerca:', error));
}

// Funzione per riprodurre la musica
function playMusic(track) {
  const audioPlayer = document.getElementById("audioPlayer");
  const audioSource = document.getElementById("audioSource");
  audioSource.src = track.listen_url;  // Prendi l'URL della canzone
  audioPlayer.load();  // Carica il nuovo brano
  audioPlayer.style.display = "block";  // Mostra il player
  audioPlayer.play();  // Riproduci la canzone
}
