const  form = document.querySelector('form')
const  fact = document.querySelector('#fact')


async function getFactYear (year='random') {
    year = year ? year: 'random'
    let  response =  await fetch(`http://numbersapi.com/${year}/year/`)
    let data = await response.text()
     fact.textContent =  data
     fact .className += 'alert alert-success' 
}


form.addEventListener('submit', e=> {
    e.preventDefault()
        getFactYear(e.target.year.value)
})