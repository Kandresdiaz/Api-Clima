const apiWeather ={key:'0d3ba7268862039c05f77a1d054c4a1d',url:`https://api.openweathermap.org/data/2.5/weather`}
console.log(apiWeather);
const contenedor = document.getElementById('contenedor');
const busqueda_pricipal = document.getElementById('busqueda_pricipal')
const buscar = document.getElementById('buscar')
const climaCity = document.getElementById('climaCity')
const climaDate = document.getElementById('climaDate')
const temperatureImg = document.getElementById('temperatureImg')
const temperatureText = document.getElementById('temperatureText')
const weather = document.getElementById('weather')
const range = document.getElementById('range')

async function busqueda(query){
    try{
        const reponse = await fetch(`${apiWeather.url}?q=${query}&appid=${apiWeather.key}&lang=es`);
        const data = await reponse.json();
        climaCity.innerHTML = `${(data.name).substring(0,3)},${data.sys.country}`;
        climaCity.classList.add('clima-city')
        climaDate.innerHTML = (new Date()).toLocaleDateString()
        const temperaturaGrados = transformar(data.main.temp)
        temperatureText.innerHTML = temperaturaGrados;
        weather.innerHTML = data.weather[0].description;
        const minTemp = transformar(data.main.temp_min)
        const maxTemp = transformar(data.main.temp_max)
        range.innerHTML = `${minTemp}/${maxTemp}`
        const ruta = imagen(temperaturaGrados)
        temperatureImg.setAttribute('src',ruta)
        console.log(data);
    }catch(error){
        console.log(error);
    }

}

function transformar (kelvin) {
    return Number(kelvin - 273.15).toFixed(2)
}


busqueda_pricipal.addEventListener('submit',submit,true)

function submit(x){
    x.preventDefault()
    buscar(searchInput.value);
}

let boton =document.getElementById('boton')
boton.addEventListener("click",()=>{
    const ciudad =document.getElementById('buscar').value.toLowerCase();
    console.log(busqueda(ciudad));
    return busqueda(ciudad);
})



    



