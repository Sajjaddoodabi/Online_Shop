// console.log('knkoko')
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

let _line1 = document.getElementsByClassName('line1')[0]
    _line1.addEventListener('click' , (event)=>{
        let _filter = event.screenX
            //- _line1.clientX
        let _screenF = document.getElementsByClassName('screenF')[0].clientWidth
        let _screenP = document.getElementsByClassName('productList')[0].clientWidth
        let _screenC = document.getElementsByClassName('productCategory')[0].clientWidth
        let _screenE = ((document.getElementsByClassName('screenF')[0].clientWidth - _screenP - _screenC) / 2)
        let result = _filter - (_screenE + _screenP)
        // document.getElementsByClassName('line')[0].style.width = (_screenF) + 'px'
        if(_screenF >= 1400){
            document.getElementsByClassName('line')[0].style.width = (result - 100) + 'px'
            document.getElementsByClassName('txtFilter')[0].innerHTML = "kol : " + _screenF + " details : " + _screenP + " padding :" + _screenE + " result : " + result
        }
        else if(_screenF >= 1368){
            document.getElementsByClassName('line')[0].style.width = (result - 200) + 'px'
            document.getElementsByClassName('txtFilter')[0].innerHTML = "kol : " + _screenF + " details : " + _screenP + " padding :" + _screenE + " result : " + result
        }
        else if(_screenF >= 1200){
            document.getElementsByClassName('line')[0].style.width = (result) + 'px'
            document.getElementsByClassName('txtFilter')[0].innerHTML = "kol : " + _screenF + " details : " + _screenP + " padding :" + _screenE + " result : " + result
        }

})