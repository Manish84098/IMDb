const MoviesForm = document.querySelector('form')
const search = document.querySelector('input')
const dataput = document.querySelector('#inpudata')

//console.log(dataput)

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c9dbe271').then((response) => {
    response.json().then((data)=>{
        if (data.error) {
            
            console.log(data.error)
        } else {
            
            dataput.textContent=data.Movies[0].description
            console.log(data.Movies[0].description)
            
        }
    })
})
    

})

