let container = document.getElementById("songscontainer");
let songIndex = 0;
let audioElement = new Audio(
  "https://pagalworld.com.se/files/download/type/320/id/64630"
);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let cardImg= document.getElementById('cardImg')

let songs = [
  {
    id: "0",
    img: "https://p16.resso.me/img/tos-alisg-v-2102/fe38bd29a9ed4b7ea91b0680da3c97c4~c5_500x500.jpg",
    name: "Maan meri jaan",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/type/320/id/64630",
    back:"https://i.ytimg.com/vi/fLICHZxhc0E/maxresdefault.jpg",
  },
  {
    id: "1",
    img: "https://a10.gaanacdn.com/images/albums/75/6642175/crop_480x480_6642175.jpg",
    name: "Todh",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/65269",
    back:"https://i.ytimg.com/vi/aMep8aQbj8M/maxresdefault.jpg",
  },
  {
    id: "2",
    img: "https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
    name: "Kesariya",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/6591", 
    back:"https://lehren.com/wp-content/uploads/2022/09/Kesariya-Was-Reshot-After-Karan-Johar-Disapproval-Ayan-Mukerji-Shared-Original-Kesariya-Dance-Mix-Teaser.jpg",
  },
  {
    id: "3",
    img: "https://cdn.promodj.com/afs/c2842492cc1eafcc459ac6554ca5fd5112%3Aresize%3A640x480%3Afill%3Affffff%3A462de2",
    name: "Don't You Hold Me Down",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/3514",
    back:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hj2QmfXCY02x-KG_Mlux488VjNKVMqCBGA&usqp=CAU",
  },
  {
    id: "4",
    img: "https://i0.wp.com/www.djsbuzz.in/wp-content/uploads/2021/12/Saami-Saami-DJ-Vaggy-Mix.jpg?ssl=1",
    name: "Saami Saami",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/4635",
    back:"https://i.ytimg.com/vi/JJFVjxFmYlY/maxresdefault.jpg",
  },
  {
    id: "5",
    img: "https://www.musicallyamit.in/wp-content/uploads/2021/10/artworks-emD83LTbzNrgWCIh-cOXJVw-t500x500.jpg",
    name: "Raatan Lambiyan",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/3198",
    back:"https://www.cinebuster.in/wp-content/uploads/2021/07/maxresdefault-28.jpg",
  },
  {
    id: "6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFq1LkLX71m99nCZ245fTQyLuezzdRJAfiw&usqp=CAU",
    name: "Jhoome Jo Pathaan",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/65406",
    back:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVg6cftlw_6H5YS72X8SW5Di9DVOVj5dv5ROzFXC7SJNQRUMRPnJzx1ljnLEzmX-vk_hIwEOxjHXe1DCwfHceVC6JTgEkidTJqltSwF0iXs36EPhf7hTi6LCDB7GtrbtOLbukXMouFLM98X7KTfb3dvDS0iAt_1gWIo9tnrotrHPYsgbtpQBdvqjYI/s1280/fotor_2023-1-3_19_6_4.jpg",
  },
  {
    id: "7",
    img: "https://cdn.djjaani.com/180x180/7770.jpg",
    name: "Dil Galti Kar Baitha Hai",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/3809",
    back:"https://i.ytimg.com/vi/jqNVHS3JdTs/maxresdefault.jpg",
  },
  {
    id: "8",
    img: "https://i.scdn.co/image/ab67616d0000b273b53d8029dc2d52bd0384d922",
    name: "Srivalli",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/5103",
    back:"https://i.ytimg.com/vi/_1BbDhiiV6A/maxresdefault.jpg",
  },
  {
    id: "9",
    img: "https://c.saavncdn.com/504/Oo-Bolega-Ya-Oo-Oo-Bolega-From-Pushpa-The-Rise-Part-01--Hindi-2021-20211211031002-500x500.jpg",
    name: "Oo Bolega Ya Oo Oo Bolega",
    artist: "N/A",
    music: "https://pagalworld.com.se/files/download/id/4618",
    back:"https://i.ytimg.com/vi/iCRh1IGw5wI/maxresdefault.jpg"
  },
];

// songs.map((e)=>{
//     let html =container.innerHTML;
//     container.innerHTML=html + `<div class="songList">
//      <div class="songItemContainer">
//         <div class="songItem">
//             <img src='${e.img}'alt="1">
//             <span class="name">${e.name}</span>
//             <span class="songlistplay"><span class="timestamp"> <i id="0" class="far songItemPlay fa-play-circle"></i> </span></span>
//         </div>

//     </div>
// </div>
// <div class="songBanner"></div>`
// })
songs.forEach((e) => {
  let html = container.innerHTML;
  container.innerHTML =
    html +
    `
         <div class="songItemContainer">
            <div id=${e.id} class="songItem bubbly-button">
                <img src='${e.img}'alt="1">
                <span class="name">${e.name}</span>
               
            </div>
           
        </div>
   
   `;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// const makeAllPlays = () => {
//   Array.from(document.getElementsByClassName("songItem")).forEach(
//     (element) => {
//       element.classList.remove("fa-pause-circle");
//       element.classList.add("fa-play-circle");
//     }
//   );
// };

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // makeAllPlays();

      songIndex = parseInt(e.target.id);
      console.log("hello" + songIndex);
      console.log(songIndex);
  
      // e.target.classList.remove("fa-play-circle");
      // e.target.classList.add("fa-pause-circle");
      audioElement.src = songs[songIndex].music;
      masterSongName.innerText = songs[songIndex].name;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");

      cardImg.innerHTML=`<img src='${songs[songIndex].img}' alt="1">`
      document.body.style.background = `#f3f3f3  url('${songs[songIndex].back}')no-repeat fixed center `;
    document.getElementById('main').style.backgroundSize='cover';
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  console.log(songIndex);
  audioElement.src = songs[songIndex].music;
  masterSongName.innerText = songs[songIndex].name;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  document.body.style.background = `#f3f3f3 url('${songs[songIndex].img}')no-repeat fixed center`;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  console.log(songIndex);
  audioElement.src = songs[songIndex].music;
  masterSongName.innerText = songs[songIndex].name;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  document.body.style.background = `#f3f3f3 url('${songs[songIndex].img}') no-repeat fixed center`;
});
