let _accountSection = document.querySelectorAll('.accountSection>div')

document.getElementsByClassName('summeryOfActivities')[0].addEventListener('click', () => {
    cleaner()
    document.getElementsByClassName('summeryOfActivitiesSection')[0].style.display = 'flex'
    document.getElementsByClassName('summeryOfActivitiesSection')[0].style.justifyContent = 'start'
    document.getElementsByClassName('summeryOfActivitiesSection')[0].style.alignItems = 'start'
    document.getElementsByClassName('summeryOfActivitiesSection')[0].style.flexWrap = 'wrap'
    // document.getElementsByClassName('summeryOfActivities')[0].style.borderLeft = '10px solid rgb(129, 189, 117)'
})

document.getElementsByClassName('orders')[0].addEventListener('click', () => {
    cleaner()
    document.getElementsByClassName('ordersSection')[0].style.display = 'flex'
    document.getElementsByClassName('ordersSection')[0].style.justifyContent = 'start'
    document.getElementsByClassName('ordersSection')[0].style.alignItems = 'start'
    document.getElementsByClassName('ordersSection')[0].style.flexWrap = 'wrap'
    // document.getElementsByClassName('orders')[0].style.borderLeft = '10px solid rgb(129, 189, 117)'
})

document.getElementsByClassName('opinions')[0].addEventListener('click', () => {
    cleaner()
    document.getElementsByClassName('opinionsSection')[0].style.display = 'flex'
    document.getElementsByClassName('opinionsSection')[0].style.justifyContent = 'start'
    document.getElementsByClassName('opinionsSection')[0].style.alignItems = 'start'
    document.getElementsByClassName('opinionsSection')[0].style.flexWrap = 'wrap'
    // document.getElementsByClassName('opinions')[0].style.borderLeft = '10px solid rgb(129, 189, 117)'
})

document.getElementsByClassName('addresses')[0].addEventListener('click', () => {
    cleaner()
    document.getElementsByClassName('addressesSection')[0].style.display = 'flex'
    document.getElementsByClassName('addressesSection')[0].style.justifyContent = 'start'
    document.getElementsByClassName('addressesSection')[0].style.alignItems = 'start'
    document.getElementsByClassName('addressesSection')[0].style.flexWrap = 'wrap'
    // document.getElementsByClassName('addresses')[0].style.borderLeft = '10px solid rgb(129, 189, 117)'
})

document.getElementsByClassName('messages')[0].addEventListener('click', () => {
    cleaner()
    document.getElementsByClassName('messagesSection')[0].style.display = 'flex'
    document.getElementsByClassName('messagesSection')[0].style.justifyContent = 'start'
    document.getElementsByClassName('messagesSection')[0].style.alignItems = 'start'
    document.getElementsByClassName('messagesSection')[0].style.flexWrap = 'wrap'
    // document.getElementsByClassName('messages')[0].style.borderLeft = '10px solid rgb(129, 189, 117)'
})

document.getElementsByClassName('recentVisits')[0].addEventListener('click', () => {
    cleaner()
    document.getElementsByClassName('recentVisitsSection')[0].style.display = 'flex'
    document.getElementsByClassName('recentVisitsSection')[0].style.justifyContent = 'start'
    document.getElementsByClassName('recentVisitsSection')[0].style.alignItems = 'start'
    document.getElementsByClassName('recentVisitsSection')[0].style.flexWrap = 'wrap'
    // document.getElementsByClassName('recentVisits')[0].style.borderLeft = '10px solid rgb(129, 189, 117)'
})

document.getElementsByClassName('userAccountInformation')[0].addEventListener('click', () => {
    cleaner()
    document.getElementsByClassName('userAccountInformationSection')[0].style.display = 'flex'
    document.getElementsByClassName('userAccountInformationSection')[0].style.justifyContent = 'start'
    document.getElementsByClassName('userAccountInformationSection')[0].style.alignItems = 'start'
    document.getElementsByClassName('userAccountInformationSection')[0].style.flexWrap = 'wrap'
    // document.getElementsByClassName('userAccountInformation')[0].style.borderLeft = '10px solid rgb(129, 189, 117)'
})

function cleaner() {
    for (let i = 0; i < _accountSection.length; i++) {
        _accountSection[i].style.display = 'none'
    }
}

// document.querySelectorAll('.order').forEach((item , index) =>{
//     item.addEventListener('click' , ()=>{
//         item.style.height = 'auto'
//     })
// })