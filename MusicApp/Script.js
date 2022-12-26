
let musicData=[
    {
    Sname:"Bad Boy",
    artist:'Arijith singh',
    img:"images/img-1.jpg",
    song:"music/music1.mp3",
    },

    {
        Sname:"Aaashhiqui",
        artist:'zaid siddiqui',
        img:"images/img-2.jpg",
        song:"music/music2.mp3",
        },

        {
            Sname:"ishq love",
            artist:'atif aslam',
            img:"images/img-3.jpg",
            song:"music/music3.mp3",
        },
]


let music=document.querySelector('.audio');
let play=document.querySelector('.play');
let nextBtn=document.querySelector('.next');
let prevBtn=document.querySelector('.prev');
let songName=document.querySelector('.songName');
let songArtist=document.querySelector('.songArtist');
let image=document.querySelector('.img');
let btn=document.querySelectorAll('.btn');

// load songs
let index=0;
let isPlaying=false;
const load = () => {
    songName.innerHTML=musicData[index].Sname;
    songArtist.innerHTML=musicData[index].artist;
    image.src=musicData[index].img;
    music.src=musicData[index].song;
}

btn.forEach( (btn) => {
    btn.addEventListener("click" , (e) => {
      let classes = e.currentTarget.classList
      if(classes.contains("next")){
        index=(index+1)%musicData.length;
        play.classList.replace("fa-pause","fa-play");
        // music.pause();
        load();
      }
      else if(classes.contains("prev")){
        index=(index-1 + musicData.length)%musicData.length;
        play.classList.replace("fa-pause","fa-play");
        // music.pause();
        load();
      }
      else{
        if(isPlaying){
            paused();
        }
        else{
            playing();
        }
      }
    })
})


// for play function
const playing = () => {
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
}

// for paused function
const paused = () => {
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
}

