var timeData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24format=JSON";
var time = $.getJSON(timeData);
// var time = $.getJSON("./time.json");
var times = [];
var nth = [0, 20, 39, 57, 74, 90, 105, 119, 132, 144, 155, 165, 174, 182, 189, 195, 200, 204, 207, 209];


time.done(function(result){
    $.each(result, function(i, index){
        if (i == 0){
            $.each(nth,function(j, abc){
                times[j] = index.TravelTimes[abc].RunTime;
            });
        }
    });
});

var priceData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24format=JSON";
var price = $.getJSON(priceData);
var prices = [];
var x = 0;
price.done(function(result){
    $.each(result, function(i, index){
        if (i % 21 == 0){     
            prices[x] = index.Fares[0].Price;
            x++;
        }
    });
});

var stationData = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/TYMC?%24top=30&%24format=JSON";
var station = $.getJSON(stationData);

station.done(function(result){
    $.each(result, function(i, index){
        if (i == 20){
            $("#station").append("A" + (i+1) + index.StationName.Zh_tw + "<br/>");
            return false;
        }
        else
            $("#station").append("A" + (i+1) + index.StationName.Zh_tw + "<br/><br/>$" 
                        +prices[i]+ "&emsp;⇣&emsp;" 
                        +times[i]/60 + "分"+ times[i]%60 +"秒<br/><br/>");
    });
});