
window.addEventListener('load', () => {

    navigator.geolocation.getCurrentPosition((position) => {

        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const getwheaher = async () => {
            const getData = await fetch('http://api.weatherapi.com/v1/current.json?key=aa9cad4dddca40b8af5121111240106&q=Joao-Pessoa&lang=pt')
            const res = await getData.json()

            Response.json()
    console.log(res.current.codition.text)
    console.log(res.location.name)
    console.log(res.current.temp_c)
    console.log(res.current.feelslike_c)
    console.log(res.current.wind_kph)

const codicao = document.createElement('p')
codicao.innerHTML = res_current.Response
codition.text
document.querySelectorery("dados")
appendchild(codicao)
        }
    })
    getwheaher()
})
   

