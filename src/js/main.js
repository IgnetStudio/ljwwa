// DEBUG MODE: add outline to display each vector path

// [].forEach.call(document.querySelectorAll("*"), function (a) {
//     a.style.outline = "3px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
// })

// ANIMATE SVG

var $svg = $('svg').drawsvg({
    callback: function () {
        animate();
    }
});

function animate() {
    $svg.drawsvg('animate');
}

animate();

// SET COUNTER

let indexTime = 7;
let displayDigit = "";
const counterWrapper = document.querySelector(".vector-counter-wrapper");

function incrementCount() {
    setInterval(function () {
        // clear count
        while (counterWrapper.hasChildNodes()) {
            counterWrapper.removeChild(counterWrapper.lastChild);
        }
        indexTime++;
        if (indexTime > 7) {
            console.log(indexTime);
            indexTime = 0; // reset count
        } else {
            console.log('reset');
        }

        displayDigit = indexTime.toString();
        for (let i = 0; i < displayDigit.length; i++) {
            const dynamicSpan = document.createElement('span');
            dynamicSpan.className = 'vector-counter-text';
            dynamicSpan.innerText = displayDigit[i];
            counterWrapper.appendChild(dynamicSpan);
            console.log(dynamicSpan);
        }
    }, 1000);
}

incrementCount();