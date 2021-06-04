let i = 0;

function movement() {
    if (i == 0) {
        i = 1
    }
    let barClass = document.querySelector('.myBar');
    let width = 1;
    let id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            barClass.style.width = width + "%";
        }
    }
}