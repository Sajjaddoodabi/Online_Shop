    let x
    let y
    function move() {

    window.addEventListener('mousemove' ,(event)=>{
        x = event.clientX
    })
        window.addEventListener('mousemove' ,(event)=>{
        y = event.clientY

    })
        document.getElementsByClassName('circleB')[0].style.top = y + 'px'
        document.getElementsByClassName('circleB')[0].style.left = x + 'px'
        document.getElementsByClassName('circleS')[0].style.top = y + 'px'
        document.getElementsByClassName('circleS')[0].style.left = x + 'px'
    }
    window.addEventListener('mousedown' , ()=>{
        document.getElementsByClassName('circleS')[0].style.transform = 'translate(-50% , -50%)scale(10)'
        document.getElementsByClassName('circleS')[0].style.backgroundColor = 'white'
    })
    window.addEventListener('mouseup' , ()=>{
        document.getElementsByClassName('circleS')[0].style.transform = 'translate(-50% , -50%)scale(1)'
        document.getElementsByClassName('circleS')[0].style.backgroundColor = 'black'
    })