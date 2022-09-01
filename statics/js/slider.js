let turn = 0
let x = document.getElementsByClassName('window')[0].clientWidth
let _fig = document.querySelectorAll('#bus>figure')
document.getElementById('bus').style.width = x * (_fig.length) + 'px'
for (i = 0; i < _fig.length; i++) {
    _fig[i].style.width = x + 'px'
}

function _right() {
    turn++
    move()
}

function _left() {
    turn--
    move()
}

function move() {
    document.getElementById('bus').style.transform = 'translateX(-' + (turn * x) + 'px)'
    check()
}

function check() {
    if (turn == 0) {
        document.getElementById('left').style.display = 'none'
    } else {
        document.getElementById('left').style.display = 'block'
    }
    if (turn >= 0 && turn < (_fig.length - 1)) {
        document.getElementById('right').style.display = 'block'
    } else {
        document.getElementById('right').style.display = 'none'
    }
}

// document.getElementsByClassName('thumbnail')[0].innerHTML = document.getElementById('bus').innerHTML
let y = document.querySelectorAll('.thumbnail>.thumb')
y.forEach((item, index) => {
    item.addEventListener('click', () => {
        for(let i = 0 ; i < y.length ; i ++){
            y[i].style.transform = 'scaleX(1)'
        }
        index--
        turn = index
        _right()
        item.style.transform = 'scaleX(2)'
    })
})