Highcharts.chart('container', {
    chart: {
        type: 'variablepie'
    },
    accessibility: {
        description: 'A variable radius pie chart compares the population density and total land mass for seven European nations: Spain, France, Poland, the Czech Republic, Italy, Switzerland and Germany. The chart visualizes the data by using the width of each section to represent total area and the depth of the section to represent population density. Each section is color-coded according to the country and the chart is interactive: by hovering over each section the data points are exposed in a call-out box. The chart is organized by population density in a counterclockwise direction. Germany has the highest population density at 235.6 people per square kilometer, followed by Switzerland, Italy, the Czech Republic, Poland, France and Spain. France has the largest land mass at 551,500 square kilometers. Spain is the second largest country at 505,370 square kilometers but has the lowest population density at 92.9 people per square kilometer. Switzerland is the smallest nation by land mass at 41,277 square kilometers but it has the second highest population density at 214.5 people per square kilometer.'
    },
    title: {
        text: 'JAVA FULL STACK '
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'NUMBER OF STUDENTS: <b>{point.z}</b><br/>' 
            //  +'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'JAVA FULLSTACK',
        data: [{
            name: '<a href="table.html">DEPLOYED</a>',
            y: 800,
          z: 10
        }, {
            name: '<a href="table.html">TRAINING</a>',
            y: 1500,
          z: 18
        }, {
            name: '<a href="table.html">TERMINATED</a>',
            y:600,
           z: 7
        }, {
            name: '<a href="table.html">BENCH</a>',
            y: 1000,
        z: 15
        } ]
    }]
});
