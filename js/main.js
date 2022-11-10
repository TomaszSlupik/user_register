const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const input = document.querySelectorAll('input')
const button = document.querySelector('.btn')
const boxStrong = document.querySelector('.boxStrong')
const strong = document.querySelector('.strong')
const number = 8
const first = /[A-Z]/
const second = /[0-9]/i;
const numberTwo = 12

const nothingInputOne = () => {
    if (inputOne.value == '') {
        button.disabled = true
    } 
    else {
        const nothingInputTwo = () => {
            if (inputTwo.value == '') {
                button.disabled = true
            } 
            else {
                button.disabled = false
            }
        }
        
        nothingInputTwo()
    }
}




const minEightPassword = () => {
    if (inputTwo.value.length > number
        && inputTwo.value.length < numberTwo
        && inputTwo.value.match(first)) {
        strong.style.backgroundColor = 'gold'
    }

    else if (inputTwo.value.length > numberTwo 
        && inputTwo.value.match(first)
        && inputTwo.value.match(second)) {
        strong.style.backgroundColor = 'green'
    }

}


inputTwo.addEventListener('keyup', minEightPassword)
inputOne.addEventListener('keyup', nothingInputOne)

