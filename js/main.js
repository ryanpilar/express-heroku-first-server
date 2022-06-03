
document.querySelector('#submit-btn').addEventListener('click', function() {
    const inputVal = document.querySelector('#name-name').value
    console.log('click click', inputVal)
    fetch(`http://localhost:8000/api/${inputVal}`).then( res => {
        return res.json()
    }).then( data => {
        console.log(data)
        document.querySelector('#first').innerText = data.name
        document.querySelector('#second').innerText = data.yearBorn
        document.querySelector('#third').innerText = data.location

})
})
