let mainSliderWidth = document.getElementsByClassName('window')[0].clientWidth
let _figure = document.querySelectorAll('#bus>figure')
document.getElementById('bus').style.width = mainSliderWidth * (_figure.length) + 'px'
let numberOfSlide = 0
for (let i = 0; i < _figure.length; i++) {
    _figure[i].style.width = mainSliderWidth + 'px'
}

let _mainSliderThumbnail = document.querySelectorAll('.thumbnail>.thumb')

document.getElementById('right').addEventListener('click', () => {
    numberOfSlide++
    document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
    checkNumberOfSlide()
})

document.getElementById('left').addEventListener('click', () => {
    numberOfSlide--
    document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
    checkNumberOfSlide()
})

function checkNumberOfSlide() {
    if (numberOfSlide == 0) {
        document.getElementById('left').style.display = 'none'
    } else {
        document.getElementById('left').style.display = 'block'
    }
    if (numberOfSlide == _figure.length - 1) {
        document.getElementById('right').style.display = 'none'
    } else {
        document.getElementById('right').style.display = 'block'
    }
    for (let i = 0; i < _figure.length; i++) {
        _mainSliderThumbnail[i].style.backgroundColor = 'grey'
    }
    _mainSliderThumbnail[numberOfSlide].style.backgroundColor = 'rgb(129, 189, 117)'
}

_mainSliderThumbnail.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index > numberOfSlide) {
            numberOfSlide = index
            document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
            checkNumberOfSlide()
        } else {
            numberOfSlide = index
            document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
            checkNumberOfSlide()
        }
    })

})


// ///////////////////////////////////////////////////////////////


x2 = document.getElementsByClassName('window2')[0].clientWidth
_fig2 = document.querySelectorAll('#bus2>figure')
_bus2 = document.getElementById('bus2')
let temp = 0
_bus2.style.width = (_fig2.length * 220 + 320) + 'px'

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
    if (temp >= (_bus2.clientWidth - 50 - x2)) {
        // alert(1)
        document.getElementById('right2').style.display = 'none'
    } else {
        document.getElementById('right2').style.display = 'block'
    }
}