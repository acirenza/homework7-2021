var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Video Slower");
	video.playbackRate = 0.95*video.playbackRate;
	console.log("Video Speed: " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Video Faster");
	video.playbackRate = video.playbackRate * 1.05;
	console.log("Video Speed: " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	// video.currentTime += 15;
	if (video.currentTime + 15 < video.duration) {
		video.currentTime += 15;
		console.log("Video location: " + video.currentTime)
	} 
	else {
		video.currentTime = 0;
		console.log("Video location: " + video.currentTime)
		// video.play();
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("Volume is: " + video.volume)

});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("#vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("#orig");
	video.classList.remove("oldSchool");
});




