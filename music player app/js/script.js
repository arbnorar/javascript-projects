const playlist = [
  "Apocalipse but youre slow dancing with your lover in the middle of the apocalypse.mp3",
  "Gymnopédie No. 1 but your depressed neighbor dont stop playing that song all night long.mp3",
  "Its been a long, long time but theyre finally having that dance.mp3",
  "Je te laisserai des mots but youre on a rainy day in France.mp3",
  "Lay me down by Sam Smith but youre crying at dawn because you cant stop thinking about that person.mp3",
  "listen before i go by Billie Eilish but it is extremely sad.mp3",
  "Love of My Life by Queen but you listen to it live from an old radio.mp3",
  "Once upon a dream but youre at princess Auroras wedding.mp3",
  "Sign of the times by Harry Styles but youre thinking about someone inside a pool.mp3",
  "So this is love but youre in cinderellas movie.mp3"
];

const player = document.getElementById("player");

function createPlaylist() {
  const list = document.createElement("ol");
  for (let i = 0; i < playlist.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(playlist[i]));
    list.appendChild(item);
  }

  return list;
}

const songList = document.getElementById("songList");
songList.appendChild(createPlaylist());



songList.onclick = function (e) {
  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText;

  document.getElementById("currentSong").innerText = `Now playing: ${e.target.innerText}`;

  player.load();
  player.play();
};

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}



const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value
  player.volume = volume;
};

function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress")
    progressBar.value = (player.currentTime / player.duration) * 100
  }
}