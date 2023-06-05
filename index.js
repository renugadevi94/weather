var API = "https://restcountries.com/v3.1/all";

var fet = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    
    for(let i=0;i<data.length;i++){

      var latitude=data[i].latlng[0];
 var  longitude=data[i].latlng[1];
 var name=data[i].name.common

  document.body.innerHTML += 

 ` <div class="container">
    <div class="card"  >
    <h1 id="title" class="text-center">${data[i].name.common}</h1>
    <img src="${data[i].flags.png}" class="flag" alt="Flag image">
 
  <div class="card-body car" >
  <p><span>Population :</span>${data[i].population}</p>
  <p><span>Captial :</span> ${data[i].capital}</p>
  <p><span>Region :</span> ${data[i].region}</p>
  <p><span>Country Code :</span>${data[i].cioc}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
  <div id=${name}>   </div>
   
 </div>
</div>
</div>
`}
  });

function block(lat,lng,name ){

  var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   
  console.log(name)
 fetch(WAPI)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
               For ${name.id}
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault());















 