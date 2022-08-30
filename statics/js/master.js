function validateEmail(){
    let flag = 0
    const data = []
    let _input = document.querySelectorAll('form>input')
    let _span = document.querySelectorAll('form>span')
    for(i = 0 ; i < _input.length ; i ++){
        _span[i].innerHTML = ''
        data.push(_input[i].value)
    }

    // name input errors
    if((data[0].search(/<script/i)) >= 0){
        _span[0].innerHTML = 'Error!'
        flag++
    }
    else if(data[0] == null || data[0].length == 0){
        _span[0].innerHTML = 'Name cannot be empty'
        flag++
    }
    else if((data[0].search(/\s/)) == 0){
        _span[0].innerHTML = 'The first character cannot be a space'
        flag++
    }
    else if(data[0].length < 4){
        _span[0].innerHTML = 'The name must contain at least 4 characters'
        flag++
    }
    if(data[0].search(/[~`!@#$%^&*()-_=+{}|]/) >= 0 || data[0].search(/[0-9]/) >= 0){
        _span[0].innerHTML = 'You can only use letters'
        flag++
    }

    // age input errors
    if((data[1].search(/<script/i)) >= 0){
        _span[1].innerHTML = 'Error!'
        flag++
    }
    else if(data[1] == null || data[1].length == 0){
        _span[1].innerHTML = 'Age cannot be empty'
        flag++
    }
    else if((data[1].search(/\s/)) == 0){
        _span[1].innerHTML = 'The first character cannot be a space'
        flag++
    }
    else if(data[1] < 10 || data[1] > 100){
        _span[1].innerHTML = 'Your age must be between 10 and 100'
        flag++
    }
    else if(data[1].search(/[^0-9]/) >= 0){
        _span[1].innerHTML = 'You can only use numbers'
        flag++
    }

    // email input errors
    let temp = data[2].match(/@/g)
    if((data[2].search(/<script/i)) >= 0){
        _span[2].innerHTML = 'Error!'
        flag++
    }
    else if(data[2] == null || data[2].length == 0){
        _span[2].innerHTML = 'Email cannot be empty'
        flag++
    }
    else if((data[2].search(/\s/)) == 0){
        _span[2].innerHTML = 'The first character cannot be a space'
        flag++
    }
    else if(temp != null){
        if(temp.length != 1){
            if(temp.length != 0) {
                _span[2].innerHTML = "Your email does not have '@'"
                flag++
            }
            else {
                _span[2].innerHTML = "Your email has more than one '@'"
                flag++
            }
        }
    }
    else if(temp == null || data[2].search(/@/) < 3 || data[2].search(/@/) + 3 >= data[2].indexOf('.' , data[2].search(/@/))){
        _span[2].innerHTML = 'Wrong email'
        flag++
    }

    // password input errors
    if((data[3].search(/<script/i)) >= 0){
        _span[3].innerHTML = 'Error!'
        flag++
    }
    else if(data[3] == null || data[3].length == 0){
        _span[3].innerHTML = 'Password cannot be empty'
        flag++
    }
    else if(data[3].length < 8){
        _span[3].innerHTML = 'Password must contain at least 8 characters'
        flag++
    }
    else if(data[3].search(/[a-z]/i) == -1){
        _span[3].innerHTML = 'The password must have at least one letter'
        flag++
    }
    else if(data[3].search(/[!@#$%^&*()-_=+|]/) == -1){
        _span[3].innerHTML = 'The password must contain at least one character from {! @ # $ % ^ & * ( ) - _ + = [ ]}'
        flag++
    }
    else if(data[3] == data[0]){
        _span[3].innerHTML = 'The password must not be the same as your name'
        flag++
    }

    // repeat password input errors
    else if(data[4] != data[3]){
        _span[4].innerHTML = 'It is not the same as a password'
        flag++
    }
    if(flag == 0){
        return true
    }
    return false
}
function validatePhone(){
    let flag = 0
    const data = []
    let _input = document.querySelectorAll('form>input')
    let _span = document.querySelectorAll('form>span')
    for(i = 0 ; i < _input.length ; i ++){
        _span[i].innerHTML = ''
        data.push(_input[i].value)
    }

    // name input errors
    if((data[0].search(/<script/i)) >= 0){
        _span[0].innerHTML = 'Error!'
        flag++
    }
    else if(data[0] == null || data[0].length == 0){
        _span[0].innerHTML = 'Name cannot be empty'
        flag++
    }
    else if((data[0].search(/\s/)) == 0){
        _span[0].innerHTML = 'The first character cannot be a space'
        flag++
    }
    else if(data[0].length < 4){
        _span[0].innerHTML = 'The name must contain at least 4 characters'
        flag++
    }
    if(data[0].search(/[~`!@#$%^&*()-_=+{}|]/) >= 0 || data[0].search(/[0-9]/) >= 0){
        _span[0].innerHTML = 'You can only use letters'
        flag++
    }

    // age input errors
    if((data[1].search(/<script/i)) >= 0){
        _span[1].innerHTML = 'Error!'
        flag++
    }
    else if(data[1] == null || data[1].length == 0){
        _span[1].innerHTML = 'Age cannot be empty'
        flag++
    }
    else if((data[1].search(/\s/)) == 0){
        _span[1].innerHTML = 'The first character cannot be a space'
        flag++
    }
    else if(data[1] < 10 || data[1] > 100){
        _span[1].innerHTML = 'Your age must be between 10 and 100'
        flag++
    }
    else if(data[1].search(/[^0-9]/) >= 0){
        _span[1].innerHTML = 'You can only use numbers'
        flag++
    }

    // phone input errors
    if((data[2].search(/<script/i)) >= 0){
        _span[2].innerHTML = 'Error!'
        flag++
    }
    else if(data[2] == null || data[2].length == 0){
        _span[2].innerHTML = 'phone number cannot be empty'
        flag++
    }
    else if(data[2].length != 11){
        _span[2].innerHTML = 'The phone number must contain 11 characters'
        flag++
    }
    else if((data[2].search(/\s/)) == 0){
        _span[2].innerHTML = 'The first character cannot be a space'
        flag++
    }
    else if(data[2].search(/[^0-9]/) >= 0){
        _span[2].innerHTML = 'You can only use numbers'
        flag++
    }
    else if(data[2].charAt(0) !='0'){
        _span[2].innerHTML = "first character must be '0'"
        flag++
    }
    else if(data[2].charAt(1) !='9'){
        _span[2].innerHTML = "second character must be '9'"
        flag++
    }

    // password input errors
    if((data[3].search(/<script/i)) >= 0){
        _span[3].innerHTML = 'Error!'
        flag++
    }
    else if(data[3] == null || data[3].length == 0){
        _span[3].innerHTML = 'Password cannot be empty'
        flag++
    }
    else if(data[3].length < 8){
        _span[3].innerHTML = 'Password must contain at least 8 characters'
        flag++
    }
    else if(data[3].search(/[a-z]/i) == -1){
        _span[3].innerHTML = 'The password must have at least one letter'
        flag++
    }
    else if(data[3].search(/[!@#$%^&*()-_=+|]/) == -1){
        _span[3].innerHTML = 'The password must contain at least one character from {! @ # $ % ^ & * ( ) - _ + = [ ]}'
        flag++
    }
    else if(data[3] == data[0]){
        _span[3].innerHTML = 'The password must not be the same as your name'
        flag++
    }

    // repeat password input errors
    else if(data[4] != data[3]){
        _span[4].innerHTML = 'It is not the same as a password'
        flag++
    }
    if(flag == 0){
        return true
    }
    return false
}