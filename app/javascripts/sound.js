$(document).ready(function() {
	var sound = new Sound();

    $(document).on('click', '.start', function(){
    	sound.startAudio();
    });
    $(document).on('click', '.load', function(){
    	sound.loadAudio();
    });
    $(document).on('click', '.pause', function(){
    	sound.pauseAudio();
    });
    $(document).on('click', '.back', function(){
    	sound.backAudio();
    });
    $(document).on('click', '.forward', function(){
    	sound.forwardAudio();
    });
    $(document).on('click', '.stop', function(){
    	sound.stopAudio();
    });
    $(document).on('click', '.volume-up', function(){
    	sound.volumeUp();
    });
    $(document).on('click', '.volume-down', function(){
    	sound.volumeDown();
    });
    $(document).on('click', '.mute', function(){
    	sound.toggleMuteAudio();
    });
});

function LoseSound() {
	this.audio = $('.audioEnd');
}
LoseSound.prototype.startAudio = function(){
    this.audio.trigger('play');
}
LoseSound.prototype.pauseAudio = function() {
	this.audio.trigger('pause');
}
LoseSound.prototype.stopAudio = function() {
	this.pauseAudio();
    this.audio.prop("currentTime",0);
}

function Sound() {
	this.audio = $(".audioStart");
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

Sound.prototype.loadAudio = function(){
    this.audio.bind("load",function(){
        $(".alert-success").html("Audio Loaded succesfully");
    });
    this.audio.trigger('load');
}

Sound.prototype.forwardAudio = function(){
    this.pauseAudio();
    this.audio.prop("currentTime",this.audio.prop("currentTime")+5);
    this.startAudio();
}

Sound.prototype.backAudio = function(){
    this.pauseAudio();
    this.audio.prop("currentTime",this.audio.prop("currentTime")-5);
    this.startAudio();
}

Sound.prototype.volumeUp = function(){
    var volume = this.audio.prop("volume")+0.2;
    if(volume >1){
        volume = 1;
    }
    this.audio.prop("volume",volume);
}

Sound.prototype.volumeDown = function(){
    var volume = this.audio.prop("volume")-0.2;
    if(volume <0){
        volume = 0;
    }
    this.audio.prop("volume",volume);
}

Sound.prototype.toggleMuteAudio = function(){
    this.audio.prop("muted",!this.audio.prop("muted"));
}