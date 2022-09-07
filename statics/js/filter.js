let _row1 = document.querySelectorAll('.row1')
for(let i = 0 ; i < _row1.length ; i ++){
    _row1[i].parentElement.setAttribute('data-status' , 'off')
}
let _row2 = document.querySelectorAll('.row2')
_row1.forEach((item, index) => {
    item.addEventListener('click', () => {
        // item.style.backgroundColor = 'red'
        if (_row1[index].parentElement.getAttribute('data-status') == 'off') {
            for (let i = 0; i < _row2.length; i++) {
                _row2[i].style.display = 'none'
                _row1[i].parentElement.setAttribute('data-status', 'off')
                _row1[i].children[1].style.transform = 'rotate(0deg)'
            }
            _row2[index].style.display = 'block'
            _row1[index].parentElement.setAttribute('data-status', 'on')
            _row1[index].children[1].style.transform = 'rotate(90deg)'
        } else {
            for (let i = 0; i < _row2.length; i++) {
                _row2[i].style.display = 'none'
                _row1[i].parentElement.setAttribute('data-status', 'off')
                _row1[i].children[1].style.transform = 'rotate(0deg)'
            }
            _row1[index].parentElement.setAttribute('data-status', 'off')
            _row1[index].children[1].style.transform = 'rotate(0deg)'
        }
    })
})


// ///////////////////////////////////////////////////////////


document.getElementsByClassName('priceFilter')[0].addEventListener('click' , ()=>{
    if(document.getElementsByClassName('rangeOfPrice')[0].getAttribute('data-status') == 'off'){
        document.getElementsByClassName('rangeOfPrice')[0].style.display = 'block'
        document.getElementsByClassName('rangeOfPrice')[0].setAttribute('data-status' , 'on')
        document.getElementsByClassName('priceFilter')[0].children[1].style.transform = 'rotate(90deg)'
    }
    else {
        document.getElementsByClassName('rangeOfPrice')[0].style.display = 'none'
        document.getElementsByClassName('rangeOfPrice')[0].setAttribute('data-status' , 'off')
        document.getElementsByClassName('priceFilter')[0].children[1].style.transform = 'rotate(0deg)'
    }
})