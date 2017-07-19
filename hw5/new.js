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

	myVideo.volume =0.2;
	document.getElementById('volDisplay').innerText = '音量: '+Math.round(myVideo.volume*100,0)+'%';

	timeMin = Math.floor(myVideo.currentTime/60);
	timeSec = Math.floor(myVideo.currentTime-(timeMin*60));
	timeMinAll = Math.floor(myVideo.duration/60);
	timeSecAll = Math.floor(myVideo.duration-(timeMinAll*60));
	document.getElementById('timeDisplay').innerText = timeMin+' : '+timeSec+' / '+timeMinAll+' : '+timeSecAll;
}


function vol_Up(e){
		if(myVideo.muted){
			e.preventDefault();	
		}else{myVideo.volume += 0.1 ;
		document.getElementById('volDisplay').innerText = '音量: '+Math.round(myVideo.volume*100,0)+'%';
	}	
}
function vol_Down(e){
		if(myVideo.muted){
		e.preventDefault();	
		}else{myVideo.volume -= 0.1 ;
		document.getElementById('volDisplay').innerText = '音量: '+Math.round(myVideo.volume*100,0)+'%';
	}
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

	document.getElementById('volDisplay').innerText = '音量: '+'  0%';
	}else{
		myVideo.muted = false;
	document.getElementById('volDisplay').innerText = '音量: '+Math.round(myVideo.volume*100,0)+'%';
	}

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
	var timeMin = Math.floor(myVideo.currentTime/60);
	var timeSec = Math.floor(myVideo.currentTime-(timeMin*60));
	var timeMinAll = Math.floor(myVideo.duration/60);
	var timeSecAll = Math.floor(myVideo.duration-(timeMinAll*60));

	if(!myVideo.ended){
		var size = barsize / myVideo.duration * myVideo.currentTime ;
		progressBar.style.width = size +'px';
		document.getElementById('timeDisplay').innerText = timeMin+' : '+timeSec+' / '+timeMinAll+' : '+timeSecAll;
	}else{
		progressBar.style.width = '0px';
		playButton.innerText = 'Play';
		document.getElementById('timeDisplay').innerText = timeMin+' : '+timeSec+' / '+timeMinAll+' : '+timeSecAll;
	}
}


function clickBar(e){
	var mouseX = e.clientX - (/*defultBar.offsetLeft*/331);
	var newTime = mouseX / (barsize / myVideo.duration);

	myVideo.currentTime = newTime;
	progressBar.style.width = mouseX+'px';
}

window.addEventListener('load',doFirst,false);