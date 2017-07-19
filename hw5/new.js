function doFirst(){
	barsize= 500;

	myVideo = document.getElementById('myVideo');
	playButton = document.getElementById('playButton');
	defultBar = document.getElementById('defultBar');
	progressBar = document.getElementById('progressBar');
	muteButton = document.getElementById('muteButton');
	stopButton = document.getElementById('stopButton');
	vol_UpButton = document.getElementById('vol_Up');
	vol_DownButton = document.getElementById('vol_Down');
	


	playButton.addEventListener('click',playOrPause,false);
	myVideo.addEventListener('click',playOrPause,false);
	defultBar.addEventListener('click',clickBar,false);
	muteButton.addEventListener('click',muteOrUnmute,false);
	stopButton.addEventListener('click',stopAndRestart,false);
	vol_UpButton.addEventListener('click',vol_Up,false);
	vol_DownButton.addEventListener('click',vol_Down,false);
}

function vol_Up(){

		myVideo.volume += 0.1 ;
		document.getElementById('volDisplay').innerText = '音量: '+Math.round(myVideo.volume*100,0)+'%';
}
function vol_Down(){

		myVideo.volume -= 0.1 ;
		document.getElementById('volDisplay').innerText = '音量: '+Math.round(myVideo.volume*100,0)+'%';
}

function stopAndRestart(){
	
		var newTime = 0;
		myVideo.currentTime = newTime;
		myVideo.pause();
		playButton.innerText = 'Play';
}

function muteOrUnmute(){

	if(!myVideo.muted){
		myVideo.muted = true;
	}else{
		myVideo.muted = false;
	}
	document.getElementById('volDisplay').innerText = '音量: '+Math.round(myVideo.volume*100,0)+'%';
}

function playOrPause(){
	if(!myVideo.paused && !myVideo.ended){
		myVideo.pause();
		playButton.innerText = 'Play';
	}else{
		myVideo.play();
		playButton.innerText = 'Pause';
		setInterval(update,300);
	}
}

function update(){
	if(!myVideo.ended){
		var size = barsize / myVideo.duration * myVideo.currentTime ;
		progressBar.style.width = size +'px';
	}else{
		progressBar.style.width = '0px';
		playButton.innerText = 'Play';
	}
}


function clickBar(e){
	var mouseX = e.clientX - defultBar.offsetLeft;
	var newTime = mouseX / (barsize / myVideo.duration);

	myVideo.currentTime = newTime;
	progressBar.style.width = mouseX+'px';
}

window.addEventListener('load',doFirst,false);