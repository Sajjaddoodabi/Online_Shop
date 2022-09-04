let b = 0
let x3 = document.getElementsByClassName('window3')[0].clientWidth
let _fig3 = document.querySelectorAll('#bus3>figure')
document.getElementById('bus3').style.width = x3 * (_fig3.length) + 'px'

for (let i = 0; i < _fig3.length; i++) {
    _fig3[i].style.width = x3 + 'px'
}

let y3 = document.querySelectorAll('.thumbnail>.thumb')
y3[0].style.backgroundColor = 'rgb(129, 189, 117)'

function _right3() {
    y3[b].style.backgroundColor = 'grey'
    b++
    document.getElementById('bus3').style.transform = 'translateX(-' + (b * x3) + 'px)'
    if (b == (_fig3.length - 1)) {
        document.getElementById('right3').style.display = 'none'
    } else {
        document.getElementById('right3').style.display = 'block'
    }
    if (b == 0) {
        document.getElementById('left3').style.display = 'none'
    } else if (b > 0) {
        document.getElementById('left3').style.display = 'block'
    }
    y3[b].style.backgroundColor = 'rgb(129, 189, 117)'
}

function _left3() {
    y3[b].style.backgroundColor = 'grey'
    b--
    document.getElementById('bus3').style.transform = 'translateX(-' + (b * x3) + 'px)'
    // check3()
    if (b == 0) {
        document.getElementById('left3').style.display = 'none'
    } else if (b > 0) {
        document.getElementById('left3').style.display = 'block'
    }
    if (b == (_fig3.length - 1)) {
        document.getElementById('right3').style.display = 'none'
    } else {
        document.getElementById('right3').style.display = 'block'
    }
    y3[b].style.backgroundColor = 'rgb(129, 189, 117)'
}

let num = 1
document.getElementsByClassName('addToCart')[0].addEventListener('click', () => {
    document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'none'
    document.getElementsByClassName('count')[0].style.display = 'block'
})

document.getElementsByClassName('counter')[0].children[0].addEventListener('click', () => {
    if (num == 1) {
        // num--
        document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'flex'
        document.getElementsByClassName('count')[0].style.display = 'none'
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'
    } else if (num == 2) {
        num--
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    } else {
        num--
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    }
})

document.getElementsByClassName('counter')[0].children[2].addEventListener('click', () => {
    num++
    document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    document.getElementsByClassName('counter')[0].children[0].innerHTML = '-'
})

let _show = document.querySelectorAll('.details>.show')
let _txt = document.querySelectorAll('.txt')
// alert(_txt.length)
_show.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < _show.length; i++) {
            _txt[i].style.display = 'none'
        }
        _txt[index].style.display = 'block'
    })
})


let x2 = document.getElementsByClassName('window2')[0].clientWidth
let _fig2 = document.querySelectorAll('#bus2>figure')
let _bus2 = document.getElementById('bus2')
let temp = 0
_bus2.style.width = (_fig2.length * 220) + 'px'

function _moveR() {
    temp += 200
    _bus2.style.left = -temp + 'px'
    checkMove()
}

function _moveL() {
    temp -= 200
    _bus2.style.left = -temp + 'px'
    checkMove()
}

function checkMove() {
    if (temp >= 200) {
        document.getElementById('left2').style.display = 'block'
    } else {
        document.getElementById('left2').style.display = 'none'
    }
    if (temp >= (_bus2.clientWidth - 40 - x2)) {
        // alert(1)
        document.getElementById('right2').style.display = 'none'
    } else {
        document.getElementById('right2').style.display = 'block'
    }
}

let _h = new Date().getHours()
let _m = new Date().getMinutes()
let _y = new Date().getFullYear()
let _month = new Date().getMonth()
let _d = new Date().getDate()
document.getElementsByClassName('time')[0].innerHTML = "<i class=\"bi bi-watch\"></i> " + _h + ":" + _m
document.getElementsByClassName('day')[0].innerHTML = "<i class=\"bi bi-calendar2\"></i> " + _y + "/" + _d + "/" + _month

// /////////////////////////////////////////////////////////////////////



let _row1 = document.querySelectorAll('.row1')
let _row2 = document.querySelectorAll('.row2')
//     row1.forEach((item , index)=>{
//     item.addEventListener('click' , ()=>{
//         _row2[index].style.display = 'block'
//     })
// })
_row1.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (_row1[index].parentElement.getAttribute('data-status') == 'off'){
            // alert(1)
            for (let i = 0; i < _row2.length; i++) {
                _row2[i].style.display = 'none'
                _row1[i].parentElement.setAttribute('data-status' , 'off')
                _row1[i].children[1].style.transform = 'rotate(0deg)'
        }
        _row2[index].style.display = 'block'
        _row1[index].parentElement.setAttribute('data-status' , 'on')
            _row1[index].children[1].style.transform = 'rotate(90deg)'
        }
        else {
            for (let i = 0; i < _row2.length; i++) {
                _row2[i].style.display = 'none'
                _row1[i].parentElement.setAttribute('data-status' , 'off')
                _row1[i].children[1].style.transform = 'rotate(0deg)'
        }
            _row1[index].parentElement.setAttribute('data-status' , 'off')
            _row1[index].children[1].style.transform = 'rotate(0deg)'
            // alert(2)
        }
    })
})