let turn = 0
let x3 = document.getElementsByClassName('window3')[0].clientWidth
let _fig3 = document.querySelectorAll('#bus3>figure')
document.getElementById('bus3').style.width = x3 * (_fig3.length) + 'px'

for (let i = 0; i < _fig3.length; i++) {
    _fig3[i].style.width = x3 + 'px'
}

let y3 = document.querySelectorAll('.thumbnail>.thumb')
y3[0].style.backgroundColor = 'rgb(129, 189, 117)'

function _right3() {
    y3[turn].style.backgroundColor = 'grey'
    turn++
    document.getElementById('bus3').style.transform = 'translateX(-' + (turn * x3) + 'px)'
    if (turn == (_fig3.length - 1)) {
        document.getElementById('right3').style.display = 'none'
    } else {
        document.getElementById('right3').style.display = 'block'
    }
    if (turn == 0) {
        document.getElementById('left3').style.display = 'none'
    } else if (turn > 0) {
        document.getElementById('left3').style.display = 'block'
    }
    y3[turn].style.backgroundColor = 'rgb(129, 189, 117)'
}

function _left3() {
    y3[turn].style.backgroundColor = 'grey'
    turn--
    document.getElementById('bus3').style.transform = 'translateX(-' + (turn * x3) + 'px)'
    // check3()
    if (turn == 0) {
        document.getElementById('left3').style.display = 'none'
    } else if (turn > 0) {
        document.getElementById('left3').style.display = 'block'
    }
    if (turn == (_fig3.length - 1)) {
        document.getElementById('right3').style.display = 'none'
    } else {
        document.getElementById('right3').style.display = 'block'
    }
    y3[turn].style.backgroundColor = 'rgb(129, 189, 117)'
}

let num = 1
document.getElementsByClassName('addToCart')[0].addEventListener('click' , ()=>{
    document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'none'
    document.getElementsByClassName('count')[0].style.display = 'block'
})

document.getElementsByClassName('counter')[0].children[0].addEventListener('click' , ()=>{
    if(num == 1){
        // num--
        document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'flex'
        document.getElementsByClassName('count')[0].style.display = 'none'
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'
    }
    else if(num == 2){
        num--
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    }
    else{
        num--
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    }
})

document.getElementsByClassName('counter')[0].children[2].addEventListener('click' , ()=>{
    num++
    document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    document.getElementsByClassName('counter')[0].children[0].innerHTML = '-'
})

let _show = document.querySelectorAll('.details>.show')
let _txt = document.querySelectorAll('.txt')
// alert(_txt.length)
    _show.forEach((item , index)=>{
    item.addEventListener('click' , ()=>{
        for(let i = 0 ; i < _show.length ; i ++){
            _txt[i].style.display = 'none'
        }
        _txt[index].style.display = 'block'
    })
})



// /////////////////////////////////////////////////////////////////////



let x2 = document.getElementsByClassName('window2')[0].clientWidth
let _fig2 = document.querySelectorAll('#bus2>figure')
let _bus2 = document.getElementById('bus2')
let temp = 0
_bus2.style.width = (_fig2.length * 220 ) + 'px'

function _right2() {
    temp += 200
    _bus2.style.left = -temp + 'px'
    check2()
}

function _left2() {
    temp -= 200
    _bus2.style.left = -temp + 'px'
    check2()
}

function check2() {
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