$(document).ready(function() {
	var sound = new Sound();
    sound.startAudio();
    // sound.stopAudio();
});

function Sound() {
	this.audio = $(".audioStart");
	this.pause = this.pauseAudio();
}

Sound.prototype.stopAudio = function() {
	this.pauseAudio();
    this.audio.prop("currentTime",0);
}
Sound.prototype.pauseAudio = function() {
	this.audio.trigger('pause');
}
Sound.prototype.startAudio = function(){
    this.audio.trigger('play');
}