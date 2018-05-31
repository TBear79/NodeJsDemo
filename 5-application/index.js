const cows = require('cows')()

function WriteCow() {
    const cow = cows[Math.floor(Math.random()*cows.length)];
    console.log(cow);
    console.log('');
    console.log('');
    console.log('');
    console.log('');
}

setInterval(WriteCow, 10000)