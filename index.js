const button = document.querySelector('.generate-quote')
const author = document.querySelector('.author')
const quote = document.querySelector('.text')

const calculate = () => {
    return Math.floor(Math.random() * arr.length)
}

button.addEventListener('click', () => {
    let num = calculate()
    quote.textContent = arr[num].quote
    author.textContent = arr[num].author
    console.log(num)
})