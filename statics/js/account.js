// let _accountSection = document.querySelectorAll('.accountSection>div')
// let _userMenu = document.querySelectorAll('.userMenu>ul>li')
//
// document.getElementsByClassName('summeryOfActivities')[0].addEventListener('click', () => {
//     cleaner()
//     document.getElementsByClassName('summeryOfActivitiesSection')[0].style.display = 'flex'
//     document.getElementsByClassName('summeryOfActivitiesSection')[0].style.justifyContent = 'start'
//     document.getElementsByClassName('summeryOfActivitiesSection')[0].style.alignItems = 'start'
//     document.getElementsByClassName('summeryOfActivitiesSection')[0].style.flexWrap = 'wrap'
//     document.getElementsByClassName('summeryOfActivities')[0].style.color = 'rgb(129, 189, 117)'
// })
//
// document.getElementsByClassName('orders')[0].addEventListener('click', () => {
//     cleaner()
//     document.getElementsByClassName('ordersSection')[0].style.display = 'flex'
//     document.getElementsByClassName('ordersSection')[0].style.justifyContent = 'start'
//     document.getElementsByClassName('ordersSection')[0].style.alignItems = 'start'
//     document.getElementsByClassName('ordersSection')[0].style.flexWrap = 'wrap'
//     document.getElementsByClassName('orders')[0].style.color = 'rgb(129, 189, 117)'
// })
//
// document.getElementsByClassName('opinions')[0].addEventListener('click', () => {
//     cleaner()
//     document.getElementsByClassName('opinionsSection')[0].style.display = 'flex'
//     document.getElementsByClassName('opinionsSection')[0].style.justifyContent = 'start'
//     document.getElementsByClassName('opinionsSection')[0].style.alignItems = 'start'
//     document.getElementsByClassName('opinionsSection')[0].style.flexWrap = 'wrap'
//     document.getElementsByClassName('opinions')[0].style.color = 'rgb(129, 189, 117)'
// })
//
// document.getElementsByClassName('addresses')[0].addEventListener('click', () => {
//     cleaner()
//     document.getElementsByClassName('addressesSection')[0].style.display = 'flex'
//     document.getElementsByClassName('addressesSection')[0].style.justifyContent = 'start'
//     document.getElementsByClassName('addressesSection')[0].style.alignItems = 'start'
//     document.getElementsByClassName('addressesSection')[0].style.flexWrap = 'wrap'
//     document.getElementsByClassName('addresses')[0].style.color = 'rgb(129, 189, 117)'
// })
//
// document.getElementsByClassName('messages')[0].addEventListener('click', () => {
//     cleaner()
//     document.getElementsByClassName('messagesSection')[0].style.display = 'flex'
//     document.getElementsByClassName('messagesSection')[0].style.justifyContent = 'start'
//     document.getElementsByClassName('messagesSection')[0].style.alignItems = 'start'
//     document.getElementsByClassName('messagesSection')[0].style.flexWrap = 'wrap'
//     document.getElementsByClassName('messages')[0].style.color = 'rgb(129, 189, 117)'
// })
//
// document.getElementsByClassName('recentVisits')[0].addEventListener('click', () => {
//     cleaner()
//     document.getElementsByClassName('recentVisitsSection')[0].style.display = 'flex'
//     document.getElementsByClassName('recentVisitsSection')[0].style.justifyContent = 'space-evenly'
//     document.getElementsByClassName('recentVisitsSection')[0].style.alignItems = 'start'
//     document.getElementsByClassName('recentVisitsSection')[0].style.flexWrap = 'wrap'
//     document.getElementsByClassName('recentVisits')[0].style.color = 'rgb(129, 189, 117)'
// })
//
// document.getElementsByClassName('userAccountInformation')[0].addEventListener('click', () => {
//     cleaner()
//     document.getElementsByClassName('userAccountInformationSection')[0].style.display = 'flex'
//     document.getElementsByClassName('userAccountInformationSection')[0].style.justifyContent = 'start'
//     document.getElementsByClassName('userAccountInformationSection')[0].style.alignItems = 'start'
//     document.getElementsByClassName('userAccountInformationSection')[0].style.flexWrap = 'wrap'
//     document.getElementsByClassName('userAccountInformation')[0].style.color = 'rgb(129, 189, 117)'
// })
//
// function cleaner() {
//     for (let i = 0; i < _userMenu.length; i++) {
//         _accountSection[i].style.display = 'none'
//         _userMenu[i].style.color = 'black'
//     }
// }

let _threeDotsVertical = document.querySelectorAll('.threeDotsMenu')
let _addressOptions = document.querySelectorAll('.addressOptions')
_threeDotsVertical.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < _addressOptions.length; i++) {
            _addressOptions[i].style.display = 'none'
        }
        if (_addressOptions[index].getAttribute('data-status') == "off") {
            _addressOptions[index].style.display = 'block'
            _addressOptions[index].setAttribute('data-status', 'on')
        } else {
            _addressOptions[index].style.display = 'none'
            _addressOptions[index].setAttribute('data-status', 'off')
        }
    })
})

// /////////////////////////////////////////////////////////

let _busSlider = document.querySelectorAll('.busSlider')
let _sliderContainer = document.querySelectorAll('.sliderContainer')
for (let i = 0; i < _busSlider.length; i++) {
    _sliderContainer[i].setAttribute('horizontalMove', '0')
    _busSlider[i].style.width = _busSlider[i].children.length * 320 + 'px'
}

let _rightMove = document.querySelectorAll('.rightMove')
_rightMove.forEach((item, index) => {
    if (_busSlider[index].clientWidth >= document.getElementsByClassName('sliderContainer')[index].clientWidth) {
        item.addEventListener('click', (event) => {
            document.getElementsByClassName('leftMove')[index].style.display = 'flex'
            if (parseInt(item.parentElement.getAttribute('horizontalMove')) <= (_busSlider[index].clientWidth - document.getElementsByClassName('sliderContainer')[index].clientWidth)) {
                item.parentElement.setAttribute('horizontalMove', (parseInt(item.parentElement.getAttribute('horizontalMove')) + 300).toString())
                _busSlider[index].style.left = -parseInt(item.parentElement.getAttribute('horizontalMove')) + 'px'
            }
            if (parseInt(item.parentElement.getAttribute('horizontalMove')) >= (_busSlider[index].clientWidth - document.getElementsByClassName('sliderContainer')[index].clientWidth)) {
                document.getElementsByClassName('rightMove')[index].style.display = 'none'
            }
        })
    } else {
        item.style.display = 'none'
    }
})

let _leftMove = document.querySelectorAll('.leftMove')
_leftMove.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        _rightMove[index].style.display = 'flex'
        item.parentElement.setAttribute('horizontalMove', (parseInt(item.parentElement.getAttribute('horizontalMove')) - 300).toString())
        _busSlider[index].style.left = -parseInt(item.parentElement.getAttribute('horizontalMove')) + 'px'
        if (parseInt(item.parentElement.getAttribute('horizontalMove')) <= 0) {
            document.getElementsByClassName('leftMove')[index].style.display = 'none'
        }
    })
})

function _showAddress(){
    let _address = document.querySelectorAll('.address')
    for (let i = 0 ; i < _address.length ; i ++){
        _address[i].style.display = 'block'
    }
    document.getElementsByClassName('newAddress')[0].style.display = 'none'
    // document.getElementsByClassName('showAddress')[0].style.color= 'rgb(129, 189, 117)'
    // document.getElementsByClassName('addAddress')[0].style.color= 'black'
}

function _addAddress(){
    let _address = document.querySelectorAll('.address')
    for (let i = 0 ; i < _address.length ; i ++){
        _address[i].style.display = 'none'
    }
    document.getElementsByClassName('newAddress')[0].style.display = 'flex'
    // document.getElementsByClassName('addAddress')[0].style.color= 'rgb(129, 189, 117)'
    // document.getElementsByClassName('showAddress')[0].style.color= 'black'
}

let _deliveredProductsSlider = document.querySelectorAll('.deliveredProductsSlider')
let _recentProductsSlider = document.querySelectorAll('.recentProductsSlider')

function _recentOrder(){
    document.getElementsByClassName('deliveredOrders')[0].style.color = 'black'
    document.getElementsByClassName('recentOrder')[0].style.color = 'rgb(129, 189, 117)'
    for(let i = 0 ; i < _deliveredProductsSlider.length ; i++){
        _deliveredProductsSlider[i].style.display = 'none'
        _recentProductsSlider[i].style.display = 'flex'
    }
}

function _deliveredOrders(){
    document.getElementsByClassName('deliveredOrders')[0].style.color = 'rgb(129, 189, 117)'
    document.getElementsByClassName('recentOrder')[0].style.color = 'black'
    for(let i = 0 ; i < _deliveredProductsSlider.length ; i++){
        _deliveredProductsSlider[i].style.display = 'flex'
        _recentProductsSlider[i].style.display = 'none'
    }
}

let _opinionOptions = document.querySelectorAll('.opinionOptions')
let _threeDotsMenuOpinion = document.querySelectorAll('.threeDotsMenuOpinion')

_threeDotsMenuOpinion.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < _opinionOptions.length; i++) {
            _opinionOptions[i].style.display = 'none'
        }
        if (_opinionOptions[index].getAttribute('data-status') == "off") {
            _opinionOptions[index].style.display = 'block'
            _opinionOptions[index].setAttribute('data-status', 'on')
        } else {
            _opinionOptions[index].style.display = 'none'
            _opinionOptions[index].setAttribute('data-status', 'off')
        }
    })
})