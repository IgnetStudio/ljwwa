// DEBUG MODE: add outline to display each vector path

// [].forEach.call(document.querySelectorAll("*"), function (a) {
//     a.style.outline = "3px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
// })

var $svg = $('svg').drawsvg({
    callback: function () {
        animate();
    }
});

function animate() {
    $svg.drawsvg('animate');
}

animate();