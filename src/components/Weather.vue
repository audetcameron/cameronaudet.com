<template>
  <div class="mt-4">
    <h1>Boston Weather</h1>
    <p v-if="isLoading">Loading products...</p>
    <!-- <ul v-else-if="products">
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul> -->
    <div v-else-if="WeatherData">
      <span>{{ Math.trunc(WeatherData.current.temperature_2m)}}° F</span>
      <p>{{WeatherData.current.weather_status}}</p>
    </div>
    <div class="mt-4 text-xs">Weather API: <br>
    https://open-meteo.com</div>

  </div>
</template>

<script setup lang="ts">
// import { ref, onMounted } from 'vue';
import { ref } from 'vue';
import { setCookie, getCookie, deleteCookie } from '$utils/cookies';

import { fetchWeatherApi } from 'openmeteo';

  let
      //debugging
      makeApiCall = true,
      apiCookies = true,
      deleteCookies = false
      ; //end vars

    const isLoading = ref(true);
    // const error = ref(null);

    if(deleteCookies){
      console.log('deleting cookies')
      deleteCookie('weather-data')
    }


  var WeatherData;
  if(apiCookies){ //if cookies are on
    console.log('api cookies are on')
    WeatherData = getCookie('weather-data');
    console.log(JSON.parse(WeatherData))
  }else{
    console.log('api cookies are off')
    WeatherData = false;
  }

    if(WeatherData){
      console.log('has cookie');
      WeatherData = JSON.parse(WeatherData);
      isLoading.value = false;
      // render the weather data
    }else{
      console.log('does not have cookie, making api calls')
      //fetch the data for weekly rates
      if(makeApiCall){ //if make api call is on

        //https://open-meteo.com/en/docs?hourly=&timezone=America%2FNew_York&latitude=42.3584&longitude=-71.0598&forecast_days=1&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,precipitation,rain,showers,snowfall&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch
        const params = {
          "latitude": 42.3584,
          "longitude": -71.0598,
          "current": ["temperature_2m", "weather_code", "wind_speed_10m", "wind_direction_10m", "precipitation", "rain", "showers", "snowfall"],
          "timezone": "America/New_York",
          "forecast_days": 1,
          "wind_speed_unit": "mph",
          "temperature_unit": "fahrenheit",
          "precipitation_unit": "inch",
        };
        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);

        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];

        // Attributes for timezone and location
        const latitude = response.latitude();
        const longitude = response.longitude();
        const elevation = response.elevation();
        const timezone = response.timezone();
        const timezoneAbbreviation = response.timezoneAbbreviation();
        const utcOffsetSeconds = response.utcOffsetSeconds();

        // console.log(
        //   `\nCoordinates: ${latitude}°N ${longitude}°E`,
        //   `\nElevation: ${elevation}m asl`,
        //   `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
        //   `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
        // );

        const current = response.current()!;


        //find the weather status string
        var weatherStaus;
        switch (current.variables(1)!.value()) {
          case 0:
           weatherStaus = 'Clear Sky'
            break;
          case 1:
          case 2:
          case 3:
           weatherStaus = 'Mainly clear, partly cloudy, and overcasty'
            break;
          case 45:
          case 48:
           weatherStaus = 'Fog and depositing rime fog'
            break;
          case 51:
          case 53:
          case 55:
           weatherStaus = 'Drizzle: Light, moderate, and dense intensity'
            break;
          case 56:
          case 57:
           weatherStaus = 'Freezing Drizzle: Light and dense intensity'
            break;
          case 61:
          case 63:
          case 65:
           weatherStaus = 'Rain: Slight, moderate and heavy intensity'
            break;
          case 66:
          case 67:
           weatherStaus = 'Freezing Rain: Light and heavy intensity'
            break;
           case 71:
          case 73:
          case 75:
           weatherStaus = 'Snow fall: Slight, moderate, and heavy intensity'
            break;
           case 77:
           weatherStaus = 'Snow grains'
            break;
           case 80:
           case 81:
           case 82:
           weatherStaus = 'Rain showers: Slight, moderate, and violent'
            break;
            case 85:
           case 86:
           weatherStaus = 'Snow showers slight and heavy'
            break;
            case 95:
           weatherStaus = 'Thunderstorm: Slight or moderate'
            break;
            case 96:
            case 99:
           weatherStaus = 'Thunderstorm with slight and heavy hail'
            break;

          default:
             weatherStaus = 'Looks Clear -- Riddick'
            // Code to execute if no case matches the expression
        }

        // Note: The order of weather variables in the URL query and the indices below need to match!
        const theData = {
          current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature_2m: current.variables(0)!.value(),
            weather_code: current.variables(1)!.value(),
            wind_speed_10m: current.variables(2)!.value(),
            wind_direction_10m: current.variables(3)!.value(),
            precipitation: current.variables(4)!.value(),
            rain: current.variables(5)!.value(),
            showers: current.variables(6)!.value(),
            snowfall: current.variables(7)!.value(),
            weather_status: weatherStaus
          },
        };

        // 'weatherData' now contains a simple structure with arrays with datetime and weather data
        console.log(
          `\nCurrent time: ${theData.current.time}`,
          `\nCurrent temperature_2m: ${theData.current.temperature_2m}`,
          `\nCurrent weather_code: ${theData.current.weather_code}`,
          `\nCurrent wind_speed_10m: ${theData.current.wind_speed_10m}`,
          `\nCurrent wind_direction_10m: ${theData.current.wind_direction_10m}`,
          `\nCurrent precipitation: ${theData.current.precipitation}`,
          `\nCurrent rain: ${theData.current.rain}`,
          `\nCurrent showers: ${theData.current.showers}`,
          `\nCurrent snowfall: ${theData.current.snowfall}`,
          `\nCurrent weather status: ${weatherStaus}`,
        );

        setCookie('weather-data', JSON.stringify( theData), 60, true);
        //render the weatehr data
        isLoading.value = false;
        WeatherData = theData;

      }else{console.log('apicalls are off')}//end if make api call

    }//end else



// const products = ref(null);
// const isLoading = ref(true);
// const error = ref(null);

// const fetchProducts = async () => {
//   try {
//     const response = await fetch('https://testapi.jasonwatmore.com/products'); // Example API endpoint
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     products.value = data;
//   } catch (err) {
//     error.value = err.message;
//   } finally {
//     isLoading.value = false;
//   }
// };

// onMounted(fetchProducts); // Call fetchProducts when the component is mounted

</script>