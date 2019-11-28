const Gpio = require('pigpio').Gpio;

const wheelLeft  = new Gpio(18, {mode: Gpio.OUTPUT});
const sleepLeft  = new Gpio(10, {mode: Gpio.OUTPUT});
const dirLeft    = new Gpio(9 , {mode: Gpio.OUTPUT});
const wheelRight = new Gpio(11, {mode: Gpio.OUTPUT});
const sleepRight = new Gpio(22, {mode: Gpio.OUTPUT});
const dirRight   = new Gpio(27, {mode: Gpio.OUTPUT});
const encRight   = new Gpio(2, {mode: Gpio.INPUT,
				 pullUpDown: Gpio.PUD_DOWN,
				 edge: Gpio.EITHER_EDGE});

let dutyCycle = 100;
let countRight = 0;

encRight.on('interupt', (level) => {
    countRight = countRight + 1;
});



setInterval(() => {
    console.log(countRight);
    wheelLeft.pwmWrite(dutyCycle);
    sleepLeft.digitalWrite(0);
    dirLeft.digitalWrite(0);
    wheelRight.pwmWrite(dutyCycle);
    sleepRight.digitalWrite(1);
    dirRight.digitalWrite(0);
    countRight += 1;
    if(countRight == 30){
	console.log(countRight);
	sleepLeft.digitalWrite(0);
	sleepRight.digitalWrite(0);
	return process.exit(22);
    }
}, 20);
