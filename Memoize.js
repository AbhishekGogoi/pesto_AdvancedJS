const temperatureData = {
    'New York': 20,

    'London': 18,

    'Paris': 22,

    'Tokyo': 25,

    'Sydney': 28
}

const getTemperatureForCity = (() => {
   const cache = {};
   return (city) => {
       if(city in cache){
           console.log("Retrieved from cache");
           return cache[city];
       }
       else {
           const temperature = temperatureData[city];
           cache[city] = temperature;
           return temperature;
       }
     }
})();

const temperature1 = getTemperatureForCity('New York');
console.log(temperature1);
