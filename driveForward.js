const Gpio = require('pigpio').Gpio;

const wheelLeft = new Gpio(1, {mode: Gpio.OUTPUT});
const sleepLeft = new Gpio(12, {mode: Gpio.OUTPUT});
const dirLeft   = new Gpio(13, {mode: Gpio.OUTPUT});

let dutyCycle = 0;

setInterval(() => {
    console.log(dutyCycle);
    wheelLeft.pwmWrite(dutyCycle);
    sleepLeft.digitalWrite(1);
    dirLeft.digitalWrite(0);
  dutyCycle += 5;
  if (dutyCycle > 255) {
    dutyCycle = 0;
  }
}, 20);
