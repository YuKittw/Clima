

const getwheaher = () =>{
fetch('http://api.weatherapi.com/v1/current.json?key=aa9cad4dddca40b8af5121111240106&q=Joao-Pessoa&lang=pt')
.then((Response)=>{  
    Response.json()
})

.then((Response)=>console.log(Response))
}

getwheaher()