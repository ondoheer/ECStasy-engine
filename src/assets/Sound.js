export default class Sound {
    constructor(src, volume = 1, loop = false) {
      this.sound = new Audio(src);
      this.sound.volume = volume;
      this.sound.loop = loop;
    }
  
    play() {
      this.sound.currentTime = 0;
      this.sound.play();
    }
  
    pause() {
      this.sound.pause();
    }
  
    setVolume(volume) {
      this.sound.volume = volume;
    }
  
    setLoop(loop) {
      this.sound.loop = loop;
    }
  }
  