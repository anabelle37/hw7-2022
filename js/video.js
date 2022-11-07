var video = document.querySelector("#player1");
/* turns off autoplay and loop, opening message shown in console */
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false
});
/* play video when button is clicked, "Play Video" shown in console, volume starts @ 100% */
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});
/* pause video when button is clicked, "Pause Video" shown in console */
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
});
/* slows current video speed by 10% each time button is clicked */
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate -= video.playbackRate * .10
	console.log("The current play back speed of video: " + video.playbackRate)
});
/* speeds current video speed by 10% each time button is clicked*/
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate += video.playbackRate * .10
	console.log("The current play back speed of video: " + video.playbackRate)

});
/* advances video by 10 seconds on each click unless video has ended*/
document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 10 > video.duration ){
		video.currentTime = 0
	}
	else {
		video.currentTime += 10
	}
	console.log("The current timestamp of video is: " + video.currentTime)
});
/* mutes or unmutes the video and updates text in the button */
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted === false){
		document.getElementById("mute").innerHTML = "Unmute"
		video.muted = true
	}
	else{
		document.getElementById("mute").innerHTML = "Mute"
		video.muted = false
	}
});
/* volume slider changes with volume and updating corresponding text */
document.querySelector("#slider").addEventListener("click", function(){
	video.volume = document.querySelector("#slider").value/100
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
})
/* Utilizing Old School view */
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
})
/*Removing Old School view */
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
})