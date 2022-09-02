let turn = 0
let x = document.getElementsByClassName('window')[0].clientWidth
let _fig = document.querySelectorAll('#bus>figure')
document.getElementById('bus').style.width = x * (_fig.length) + 'px'
for (let i = 0; i < _fig.length; i++) {
    _fig[i].style.width = x + 'px'
}

let y = document.querySelectorAll('.thumbnail>.thumb')
y.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < y.length; i++) {
            y[i].style.transform = 'scaleX(1)'
            // y[i].style.backgroundColor = 'grey'
        }
        index--
        turn = index
        _right()
        item.style.transform = 'scaleX(2)'
        // item.style.backgroundColor = 'black'
    })
})

function _right() {
    turn++
    move()
}

function _left() {
    turn--
    move()
}

function move() {
    for (let i = 0; i < y.length; i++) {
        y[i].style.transform = 'scaleX(1)'
        // y[i].style.backgroundColor = 'grey'
    }
    document.getElementById('bus').style.transform = 'translateX(-' + (turn * x) + 'px)'
    y[turn].style.transform = 'scaleX(2)'
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


// ///////////////////////////////////////////////////////////////


let x2 = document.getElementsByClassName('window2')[0].clientWidth
let _fig2 = document.querySelectorAll('#bus2>figure')
let _bus2 = document.getElementById('bus2')
let temp = 0
_bus2.style.width = (_fig2.length * 220 + 320) + 'px'
function _right2(){
    temp += 200
    _bus2.style.left = -temp +'px'
    check2()
}
function _left2(){
    temp -= 200
    _bus2.style.left = -temp +'px'
    check2()
}
function check2(){
    if (temp >= 200){
        document.getElementById('left2').style.display = 'block'
    }
    else {
        document.getElementById('left2').style.display = 'none'
    }
    if (temp >= (_bus2.clientWidth - 50 - x2)){
        // alert(1)
        document.getElementById('right2').style.display = 'none'
    }
    else {
        document.getElementById('right2').style.display = 'block'
    }
}