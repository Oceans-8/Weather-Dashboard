
var CityTitleElement = document.querySelector('.CityTitleElement')

var SearchButton = document.getElementsByClassName('Search-Button')
var TempEl = document.querySelector('.TempElement')
var WindEl = document.querySelector('.WindElement')
var HumidityEl = document.querySelector('.HumidityElement')

var DayOneDateEl = document.querySelector('.DayOneDate')
var DayOneTempEl = document.querySelector('.DayOneTemp')
var DayOneWindEl = document.querySelector('.DayOneWind')
var DayOneHumidityEl = document.querySelector('.DayOneHumidity')

var DayTwoDateEl = document.querySelector('.DayTwoDate')
var DayTwoTempEl = document.querySelector('.DayTwoTemp')
var DayTwoWindEl = document.querySelector('.DayTwoWind')
var DayTwoHumidityEl = document.querySelector('.DayTwoHumidity')

var DayThreeDateEl = document.querySelector('.DayThreeDate')
var DayThreeTempEl = document.querySelector('.DayThreeTemp')
var DayThreeWindEl = document.querySelector('.DayThreeWind')
var DayThreeHumidityEl = document.querySelector('.DayThreeHumidity')

var DayFourDateEl = document.querySelector('.DayFourDate')
var DayFourTempEl = document.querySelector('.DayFourTemp')
var DayFourWindEl = document.querySelector('.DayFourWind')
var DayFourHumidityEl = document.querySelector('.DayFourHumidity')

var DayFiveDateEl = document.querySelector('.DayFiveDate')
var DayFiveTempEl = document.querySelector('.DayFiveTemp')
var DayFiveWindEl = document.querySelector('.DayFiveWind')
var DayFiveHumidityEl = document.querySelector('.DayFiveHumidity')


function searchFunction() {
    var searchTerm = document.getElementById('Search-Input').value

//Initial Weather
    LocationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    fetch (LocationUrl)
        .then(function (response){
        return response.json();
    })

        .then(function (dataInitial) {
        var CoordUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitial[0].lat + '&lon=' +  dataInitial[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'

        fetch (CoordUrl)
            .then(function (response){
            return response.json();
    })

            .then(function (dataCurrent) {
            var date = new Date(dataCurrent.list[0].dt * 1000); 
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var formattedDate = '(' + year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day + ')';
            
            CityTitleElement.textContent = dataCurrent.city.name + ', ' + dataCurrent.city.country + ': ' + formattedDate
            TempEl.textContent = 'Temp: ' + dataCurrent.list[0].main.temp + '°K';
            WindEl.textContent = 'Wind: ' + dataCurrent.list[0].wind.speed + 'MPH';
            HumidityEl.textContent = 'Humidity: ' + dataCurrent.list[0].main.humidity + '%';
        
            var imgElement = document.getElementById('headerIcon');
            imgElement.src = 'https://openweathermap.org/img/wn/' + dataCurrent.list[0].weather[0].icon + '@2x.png';
    })
    })

//Day 1
    LocationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    fetch (LocationUrl)
        .then(function (response){
        return response.json();
    })

    .then(function (dataInitial) {
    var CoordUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitial[0].lat + '&lon=' +  dataInitial[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    
    fetch (CoordUrl)
    .then(function (response){
    return response.json();
    })
    
    .then(function (data) {
    var date = new Date(data.list[1].dt * 1000); 
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
    DayOneDateEl.textContent = formattedDate;
    DayOneTempEl.textContent = 'Temp: ' + data.list[1].main.temp + '°K' ;
    DayOneWindEl.textContent = 'Wind: ' + data.list[1].wind.speed + 'MPH';
    DayOneHumidityEl.textContent = 'Humidity: ' + data.list[1].main.humidity + '%';
    var imgElementOne = document.getElementById('DayOneIcon');
    imgElementOne.src = 'https://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png';
    })
    })

//Day 2
    LocationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    fetch (LocationUrl)
        .then(function (response){
        return response.json();
    })

    .then(function (dataInitial) {
    var CoordUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitial[0].lat + '&lon=' +  dataInitial[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
   
    fetch (CoordUrl)
    .then(function (response){
    return response.json();
    })
    
    .then(function (data) {
    var date = new Date(data.list[9].dt * 1000); 
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
    DayTwoDateEl.textContent = formattedDate
    DayTwoTempEl.textContent = 'Temp: ' + data.list[9].main.temp + '°K' 
    DayTwoWindEl.textContent = 'Wind: ' + data.list[9].wind.speed + 'MPH'
    DayTwoHumidityEl.textContent = 'Humidity: ' + data.list[9].main.humidity + '%'
    var imgElementTwo = document.getElementById('DayTwoIcon');
    imgElementTwo.src = 'https://openweathermap.org/img/wn/' + data.list[9].weather[0].icon + '@2x.png';
    })
    })

//Day 3
    LocationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    fetch (LocationUrl)
    .then(function (response){
    return response.json();
    })

    .then(function (dataInitial) {
    var CoordUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitial[0].lat + '&lon=' +  dataInitial[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    
    fetch (CoordUrl)
    .then(function (response){
    return response.json();
    })

    .then(function (data) {
    var date = new Date(data.list[17].dt * 1000); 
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
    DayThreeDateEl.textContent = formattedDate
    DayThreeTempEl.textContent = 'Temp: ' + data.list[17].main.temp + '°K' 
    DayThreeWindEl.textContent = 'Wind: ' + data.list[17].wind.speed + 'MPH'
    DayThreeHumidityEl.textContent = 'Humidity: ' + data.list[17].main.humidity + '%'
    var imgElementThree = document.getElementById('DayThreeIcon');
    imgElementThree.src = 'https://openweathermap.org/img/wn/' + data.list[17].weather[0].icon + '@2x.png';
    })
    })

//Day 4
    LocationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    fetch (LocationUrl)
    .then(function (response){
    return response.json();
    })

    .then(function (dataInitial) {
    var CoordUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitial[0].lat + '&lon=' +  dataInitial[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
 
    fetch (CoordUrl)
    .then(function (response){
    return response.json();
    })
    
    .then(function (data) {
    var date = new Date(data.list[25].dt * 1000); 
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
    DayFourDateEl.textContent = formattedDate
    DayFourTempEl.textContent = 'Temp: ' + data.list[25].main.temp + '°K';
    DayFourWindEl.textContent = 'Wind: ' + data.list[25].wind.speed + 'MPH';
    DayFourHumidityEl.textContent = 'Humidity: ' + data.list[25].main.humidity + '%';
    var imgElementFour = document.getElementById('DayFourIcon');
    imgElementFour.src = 'https://openweathermap.org/img/wn/' + data.list[25].weather[0].icon + '@2x.png';
    })
    })

//Day 5
    LocationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    fetch (LocationUrl)
    .then(function (response){
    return response.json();
    })

    .then(function (dataInitial) {
    var CoordUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitial[0].lat + '&lon=' +  dataInitial[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
    fetch (CoordUrl)
    .then(function (response){
    return response.json();
    })

    .then(function (data) {
    var date = new Date(data.list[33].dt * 1000); 
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
    DayFiveDateEl.textContent = formattedDate
    DayFiveTempEl.textContent = 'Temp: ' + data.list[33].main.temp + '°K' 
    DayFiveWindEl.textContent = 'Wind: ' + data.list[33].wind.speed + 'MPH'
    DayFiveHumidityEl.textContent = 'Humidity: ' + data.list[33].main.humidity + '%'
    var imgElementFive = document.getElementById('DayFiveIcon');
    imgElementFive.src = 'https://openweathermap.org/img/wn/' + data.list[33].weather[0].icon + '@2x.png';
    })
    })
}


function OtherSearchFunction() {
    const searchTerm = document.getElementById('Search-Input').value;
    const searchResult = searchTerm;
    var existingResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    existingResults.push(searchResult);
    displayResults(existingResults);
    localStorage.setItem('searchResults', JSON.stringify(existingResults));
  }
  
  function displayResults(results) {
      var resultsContainer = document.getElementById('searchResults');
      resultsContainer.innerHTML = ''; // Clear previous results
  
      results.forEach(function(result) {
          var buttonElement = document.createElement('button');
          if (result.length>0){
            buttonElement.innerText = result;
            buttonElement.classList.add('button')
            buttonElement.addEventListener('click', function() {
                   //Initial
            LocationUrlNew = 'https://api.openweathermap.org/geo/1.0/direct?q=' + result + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            fetch (LocationUrlNew)
                .then(function (response){
                return response.json();
                
            })
        
            .then(function (dataInitialNew) {
            const CoordUrlNew = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitialNew[0].lat + '&lon=' +  dataInitialNew[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
        
            fetch (CoordUrlNew)
            .then(function (response){
            return response.json();
            })
        
            .then(function (dataCurrentNew) {
            var date = new Date(dataCurrentNew.list[0].dt * 1000); 
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var formattedDate = '(' + year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day + ')';
            
            CityTitleElement.textContent = result + ': ' + formattedDate
            TempEl.textContent = 'Temp: ' + dataCurrentNew.list[0].main.temp + '°K';
            WindEl.textContent = 'Wind: ' + dataCurrentNew.list[0].wind.speed + 'MPH';
            HumidityEl.textContent = 'Humidity: ' + dataCurrentNew.list[0].main.humidity + '%';
            
            var imgElement = document.getElementById('headerIcon');
            imgElement.src = 'https://openweathermap.org/img/wn/' + dataCurrent.list[0].weather[0].icon + '@2x.png';
        
            })
            })
        
        //Day 1
            LocationUrlNew = 'https://api.openweathermap.org/geo/1.0/direct?q=' + result + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            fetch (LocationUrlNew)
                .then(function (response){
                return response.json();
            })
        
            .then(function (dataInitialNew) {
            var CoordUrlNew = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitialNew[0].lat + '&lon=' +  dataInitialNew[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            
            fetch (CoordUrlNew)
            .then(function (response){
            return response.json();
            })
            
            .then(function (data) {
            var date = new Date(data.list[1].dt * 1000); 
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
            DayOneDateEl.textContent = formattedDate
            DayOneTempEl.textContent = 'Temp: ' + data.list[1].main.temp + '°K' 
            DayOneWindEl.textContent = 'Wind: ' + data.list[1].wind.speed + 'MPH'
            DayOneHumidityEl.textContent = 'Humidity: ' + data.list[1].main.humidity + '%';
            var imgElementOne = document.getElementById('DayOneIcon');
            imgElementOne.src = 'https://openweathermap.org/img/wn/' + data.list[1].weather[0].icon + '@2x.png';
            })
            })
        
        //Day 2
            LocationUrlNew = 'https://api.openweathermap.org/geo/1.0/direct?q=' + result + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            fetch (LocationUrlNew)
                .then(function (response){
                return response.json();
            })
        
            .then(function (dataInitialNew) {
            var CoordUrlNew = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitialNew[0].lat + '&lon=' +  dataInitialNew[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
           
            fetch (CoordUrlNew)
            .then(function (response){
            return response.json();
            })
            
            .then(function (data) {
            var date = new Date(data.list[9].dt * 1000); 
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
            DayTwoDateEl.textContent = formattedDate
            DayTwoTempEl.textContent = 'Temp: ' + data.list[9].main.temp + '°K' 
            DayTwoWindEl.textContent = 'Wind: ' + data.list[9].wind.speed + 'MPH'
            DayTwoHumidityEl.textContent = 'Humidity: ' + data.list[9].main.humidity + '%'
            var imgElementTwo = document.getElementById('DayTwoIcon');
            imgElementTwo.src = 'https://openweathermap.org/img/wn/' + data.list[9].weather[0].icon + '@2x.png';
            })
            })
        
        //Day 3
            LocationUrlNew = 'https://api.openweathermap.org/geo/1.0/direct?q=' + result + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            fetch (LocationUrlNew)
            .then(function (response){
            return response.json();
            })
        
            .then(function (dataInitialNew) {
            var CoordUrlNew = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitialNew[0].lat + '&lon=' +  dataInitialNew[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            
            fetch (CoordUrlNew)
            .then(function (response){
            return response.json();
            })
        
            .then(function (data) {
            var date = new Date(data.list[17].dt * 1000); 
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
            DayThreeDateEl.textContent = formattedDate
            DayThreeTempEl.textContent = 'Temp: ' + data.list[17].main.temp + '°K' 
            DayThreeWindEl.textContent = 'Wind: ' + data.list[17].wind.speed + 'MPH'
            DayThreeHumidityEl.textContent = 'Humidity: ' + data.list[17].main.humidity + '%'
            var imgElementThree = document.getElementById('DayThreeIcon');
            imgElementThree.src = 'https://openweathermap.org/img/wn/' + data.list[17].weather[0].icon + '@2x.png';
            })
            })
        
        //Day 4
            LocationUrlNew = 'https://api.openweathermap.org/geo/1.0/direct?q=' + result + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            fetch (LocationUrlNew)
            .then(function (response){
            return response.json();
            })
        
            .then(function (dataInitial) {
            var CoordUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitial[0].lat + '&lon=' +  dataInitial[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
         
            fetch (CoordUrl)
            .then(function (response){
            return response.json();
            })
            
            .then(function (data) {
            var date = new Date(data.list[25].dt * 1000); 
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
            DayFourDateEl.textContent = formattedDate
            DayFourTempEl.textContent = 'Temp: ' + data.list[25].main.temp + '°K' 
            DayFourWindEl.textContent = 'Wind: ' + data.list[25].wind.speed + 'MPH'
            DayFourHumidityEl.textContent = 'Humidity: ' + data.list[25].main.humidity + '%'
            var imgElementFour = document.getElementById('DayFourIcon');
            imgElementFour.src = 'https://openweathermap.org/img/wn/' + data.list[25].weather[0].icon + '@2x.png';
            })
            })
        
        //Day 5
            LocationUrlNew = 'https://api.openweathermap.org/geo/1.0/direct?q=' + result + '&appid=71b3b00df1177ccbf34effc7c583f32a'
            fetch (LocationUrlNew)
            .then(function (response){
            return response.json();
            })
        
            .then(function (dataInitialNew) {
            var CoordUrlNew = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + dataInitialNew[0].lat + '&lon=' +  dataInitialNew[0].lon + '&appid=71b3b00df1177ccbf34effc7c583f32a'
        
            
            fetch (CoordUrlNew)
            .then(function (response){
            return response.json();
            })
        
           
            .then(function (data) {
            var date = new Date(data.list[33].dt * 1000); 
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
            DayFiveDateEl.textContent = formattedDate
            DayFiveTempEl.textContent = 'Temp: ' + data.list[33].main.temp + '°K' 
            DayFiveWindEl.textContent = 'Wind: ' + data.list[33].wind.speed + 'MPH'
            DayFiveHumidityEl.textContent = 'Humidity: ' + data.list[33].main.humidity + '%'
            var imgElementFive = document.getElementById('DayFiveIcon');
            imgElementFive.src = 'https://openweathermap.org/img/wn/' + data.list[33].weather[0].icon + '@2x.png';
            })
            })
            });
            buttonElement.style.display = 'block';
            resultsContainer.appendChild(buttonElement);
          }
      });
  }
  
window.onload = function() {
    var storedResults = JSON.parse(localStorage.getItem('searchResults')) || [];
    displayResults(storedResults);
}



