

var vm = new Vue({
    el: '#app',
    data: {
        dataObj: null,
        city: '',
        weatherList: []
    },
    created: function () {
        this.getWeather();
    },
    methods: {
        getWeather: function () {
            var request = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + 'Istanbul,tr' + '&appid=75e134306d5dc062ce7553905b8032aa';

            this.$http.get(request).then(function (response) {
                console.log(response)
                this.dataObj = response.data;
                this.city = this.dataObj.city.name;
                this.weatherList = this.dataObj.list;
            }, function (response) {
                console.log(response);
                });
        }
    }
    


})




