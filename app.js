const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

function play(str) {

  if (str === "q" || str === "Q" ) {
    let display = document.getElementById('display')
    display.innerText = "Heater-1";
  } else if (str === "w" || str === "W" ) {
    display.innerText = "Heater-2";
  } else if (str === "e" || str === "E" ) {
    display.innerText = "Heater-3";
  } else if (str === "a" || str === "A" ) {
    display.innerText = "Heater-4";
  } else if (str === "s" || str=== "S" ) {
    display.innerText = "clap";
  } else if (str === "d" || str === "D" ) {
    display.innerText = "Open-HH";
  } else if (str === "z" || str === "Z" ) {
    display.innerText = "Kick-n'-Hat";
  } else if (str === "x" || str === "X" ) {
    display.innerText = "Kick";
  } else if (str === "c" || str === "C" ) {
    display.innerText = "Closed-HH";
  }
  let audio = document.getElementById(str);
  audio.play();
}

window.document.onkeyup = function(event) {
  if (event.key === "q" || event.key === "Q" ) {
    play("Q");
  } else if (event.key === "w" || event.key === "W" ) {
    play("W");
  } else if (event.key === "e" || event.key === "E" ) {
    play("E");
  } else if (event.key === "a" || event.key === "A" ) {
    play("A");
  } else if (event.key === "s" || event.key === "S" ) {
    play("S");
  } else if (event.key === "d" || event.key === "D" ) {
    play("D");
  } else if (event.key === "z" || event.key === "Z" ) {
    play("Z");
  } else if (event.key === "x" || event.key === "X" ) {
    play("X");
  } else if (event.key === "c" || event.key === "C" ) {
    play("C");
  }
}
