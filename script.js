let view = document.querySelector('.view')

let add = document.querySelector('.add')
let remove = document.querySelector('.remove')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')
let percent = document.querySelector('.percent')
let equal = document.querySelector('.equal')

document.addEventListener('click',writeNum)
document.addEventListener('click',function(event) {
    if(!event.target.closest('#AC')) return
    view.textContent = '0'
    numArr.length = 0
    view.style.fontSize = 60 + 'px'
})

let num1;
let num2;
let num3;
let num4;
let numArr = [];
let doThis;
let simple = false;

add.addEventListener('click',()=>{
    if(numArr.length != 0) {
        let num = +view.textContent.replace(/\s/g, '')
		numArr.push(num)
        switch(doThis) {
            case '+' :
                numArr[0] = numArr.reduce((acc, val) => acc + val)
                numArr.length = 1;
                break;
            case '-':
                numArr[0] = numArr.reduce((acc, val) => acc - val)
                numArr.length = 1;
                break;  
            case 'x':
                numArr[0] = numArr.reduce((acc, val) => acc * val)
                numArr.length = 1;
                break; 
            case '/':
                numArr[0] = numArr.reduce((acc, val) => acc / val)
                numArr.length = 1;
                break;  
        } 
        doThis = '+'
        view.textContent = '0'
        simple = true
        return
    } 

    doThis = '+'
    num1 = +view.textContent.replace(/\s/g, '')
    numArr.push(num1)
    simple = true
    view.textContent = '0'
})

remove.addEventListener('click', () => {
        if(numArr.length != 0) {
        let num = +view.textContent.replace(/\s/g, '')
		numArr.push(num)
        switch(doThis) {
            case '+' :
                numArr[0] = numArr.reduce((acc, val) => acc + val)
                numArr.length = 1;
                break;
            case '-':
                numArr[0] = numArr.reduce((acc, val) => acc - val)
                numArr.length = 1;
                break;  
            case 'x':
                numArr[0] = numArr.reduce((acc, val) => acc * val)
                numArr.length = 1;
                break; 
            case '/':
                numArr[0] = numArr.reduce((acc, val) => acc / val)
                numArr.length = 1;
                break;  
        } 
        doThis = '-'
        view.textContent = '0'
        simple = true
        return
    }
	doThis = '-'
    num2 = +view.textContent.replace(/\s/g, '')
	numArr.push(num2)
    simple = true
    view.textContent = '0'
})

multiply.addEventListener('click', () => {
        if(numArr.length != 0 ) {
        let num = +view.textContent.replace(/\s/g, '')
		numArr.push(num)
        switch(doThis) {
            case '+' :
                numArr[0] = numArr.reduce((acc, val) => acc + val)
                numArr.length = 1;
                break;
            case '-':
                numArr[0] = numArr.reduce((acc, val) => acc - val)
                numArr.length = 1;
                break;  
            case 'x':
                numArr[0] = numArr.reduce((acc, val) => acc * val)
                numArr.length = 1;
                break; 
            case '/':
                numArr[0] = numArr.reduce((acc, val) => acc / val)
                numArr.length = 1;
                break;  
        } 
        doThis = 'x'
        view.textContent = '0'
        simple = false
        return
    }
	doThis = 'x'
    num3 = +view.textContent.replace(/\s/g, '')
	numArr.push(num3)
    simple = false
    view.textContent = '0'
})

divide.addEventListener('click', () => {
        if(numArr.length != 0) {
        let num = +view.textContent.replace(/\s/g, '')
		numArr.push(num)
        switch(doThis) {
            case '+' :
                numArr[0] = numArr.reduce((acc, val) => acc + val)
                numArr.length = 1;
                break;
            case '-':
                numArr[0] = numArr.reduce((acc, val) => acc - val)
                numArr.length = 1;
                break;  
            case 'x':
                numArr[0] = numArr.reduce((acc, val) => acc * val)
                numArr.length = 1;
                break; 
            case '/':
                numArr[0] = numArr.reduce((acc, val) => acc / val)
                numArr.length = 1;
                break;  
        } 
        doThis = '/'
        view.textContent = '0'
        simple = false
        return
    }
	doThis = '/'
    num4 = +view.textContent.replace(/\s/g, '')
	numArr.push(num4)
    simple = false
    view.textContent = '0'
})

equal.addEventListener('click',() => {
    let num = +view.textContent.replace(/\s/g, '');
    numArr.push(num)
    if(simple == true) {
        switch(doThis){
            case '+':
                let result = numArr.reduce((acc,val)=> acc + val)
                numArr.length = 0;
                view.textContent = result + ''
                if (!view.textContent.includes(',') &&	view.textContent.length > 3 ) view.textContent = checkView(view.textContent)
                if (view.textContent.length > 9) checkFontSize()
                break;
            case '-':
                let result1 = numArr.reduce((acc, val) => acc - val)
                numArr.length = 0;
                view.textContent = result1 + ''
                if (!view.textContent.includes(',') &&	view.textContent.length > 3 ) view.textContent = checkView(view.textContent)
                if (view.textContent.length > 9) checkFontSize()
                break;
        }
    } else {
        switch(doThis){
            case 'x':
                let result = numArr.reduce((acc,val)=> acc * val)
                numArr.length = 0;
                view.textContent = result + ''
                if (!view.textContent.includes(',') &&	view.textContent.length > 3 ) view.textContent = checkView(view.textContent)
                if (view.textContent.length > 9) checkFontSize()
                break;
            case '/':
                let result1 = numArr.reduce((acc, val) => acc / val)
                numArr.length = 0;
                view.textContent = result1 + ''
                if (!view.textContent.includes(',') &&	view.textContent.length > 3 ) view.textContent = checkView(view.textContent)
                if (view.textContent.length > 9) checkFontSize()
                break;
        }
    }
    
})

function writeNum(event) {
    if(event.target == null) return
    if (!event.target.closest('div').classList.contains('num')) return
    if (view.textContent.length >= 11) return
    if (view.textContent == 0) view.textContent = ''

    let target = event.target 
    if (target.closest('.zero')) target = target.closest(".zero").querySelector('.zeroSpan')
    if (target.classList.contains('num')) target = target.querySelector('span')
    
    view.textContent += target.textContent
    if (!view.textContent.includes(',') &&	view.textContent.length > 3 ) view.textContent = checkView(view.textContent)
    if (view.textContent.length > 9) checkFontSize()
}

function checkView(view) {
    let stringWithoutSpaces = view.replace(/\s/g, '')
	let stringWithSpaces = stringWithoutSpaces.replace(/(?=(?:\d{3})+(?!\d))/g, ' ')

    return stringWithSpaces
}

function checkFontSize() {
    if (view.textContent.length > 10) {
        view.style.fontSize = 50 + 'px'
        return
    }

    view.style.fontSize = 55 + 'px'
}

/* Clock */

let divClock = document.querySelector('.clock')
let spanClock = divClock.querySelector('span')

setInterval(function() {
    let date = new Date() ;
    let hours = date.getHours();
    let mins = date.getMinutes();
    
    if(hours < 10) hours = '0' + hours
    if(mins < 10) mins = '0'+ mins

    spanClock.textContent = hours + ':' + mins

},1000)
