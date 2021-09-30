const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const song = document.querySelector(".song");
const video = document.querySelector(".vid-container video");
const sounds=document.querySelectorAll(".sound-picker button");
const timeDisplay = document.querySelector(".time-display");
const timeSelect = document.querySelectorAll(".time-select button");
const outline = document.querySelector(".moving-outline circle");
const outlineLength = outline.getTotalLength();
let faketime = 600;



timeSelect.forEach((item)=>{
  item.addEventListener('click',function(){
  faketime = this.getAttribute("data-time");
  timeDisplay.innerHTML = `${Math.floor(faketime/60)}:${Math.floor(faketime % 60)}`;

  });
});
song.ontimeupdate  = function()
{
let currenttime = song.currentTime;
let realtime = faketime - currenttime;
var min = Math.floor(realtime/60);
var sec = Math.floor(realtime % 60);
sec= sec<10 ? '0'+sec :sec;
timeDisplay.innerHTML = `${min}:${sec}`;
if(currenttime===faketime){
  song.pause();
  video.pause();
}
};

sounds.forEach((item)=>{
  item.addEventListener('click',(sound)=>{
  song.src=item.getAttribute("data-sound");
  video.src = item.getAttribute("data-video");
  Playing(song);
});
});
play.addEventListener("click", function() {
  Playing(song);
});
const Playing = item=>{
  if(item.paused){
    song.play();
    video.play();
    play.src="./svg/pause.svg";
   }
   else {
     song.pause();
     video.pause();
     play.src = "./svg/play.svg";
   }
 };
