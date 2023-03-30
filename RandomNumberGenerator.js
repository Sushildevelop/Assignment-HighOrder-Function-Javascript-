// setInterval(() => {
//     console.log(Math.random());
// }, 3000)

let delayInSeconds = 3;
let remainingTime = delayInSeconds;

let countdownInterval = setInterval(function() {
    console.log(`Generating random number in ${remainingTime} seconds...`);
    remainingTime--;

    if (remainingTime === 0) {
        clearInterval(countdownInterval);

        let randomNumber = Math.floor(Math.random() * 100);
        console.log(`Random number generated: ${randomNumber}`);
    }
}, 1000);