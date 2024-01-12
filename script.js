const x = document.getElementById("btn-submit")

x.addEventListener("click", () => {
    let inputNama = document.getElementById('exampleFormControlInput1').value
    let inputRole = document.getElementById('exampleFormControlInput2').value
    let inputAvailability = document.getElementById('exampleFormControlInput3').value
    let inputUsia = document.getElementById('exampleFormControlInput4').value
    let inputLokasi = document.getElementById('exampleFormControlInput5').value
    let inputYear = document.getElementById('exampleFormControlInput6').value
    let inputEmail = document.getElementById('exampleFormControlInput7').value

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault()

        document.getElementById('name-info').innerHTML = inputNama
        document.getElementById('title-info').innerHTML = inputRole
        document.getElementById('availability-info').innerHTML = inputAvailability
        document.getElementById('age-info').innerHTML = inputUsia
        document.getElementById('location-info').innerHTML = inputLokasi
        document.getElementById('years-exp-info').innerHTML = inputYear
        document.getElementById('email-info').innerHTML = inputEmail

        document.querySelector('form').style.display = 'none'
    })
})