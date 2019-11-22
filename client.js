am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv1", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.1;

    series.data = [ {
        "tag": "JAVAFULLSTACK",
        "count": "10"
    }, {
        "tag": "MEANSTACK",
        "count": "9"
    }, {
        "tag": "python",
        "count": "7"
    }, {
        "tag": "DATASCIENCE",
        "count": "8"
    }, {
        "tag": "ios",
        "count": "6"
    },  {
        "tag": "DOTNET",
        "count": "7"
    } ];
   
    series.dataFields.word = "tag";
    series.dataFields.value = "count";

    series.heatRules.push({
        "target": series.labels.template,
        "property": "fill",
        "min": am4core.color("#0000CC"),
        "max": am4core.color("#CC00CC"),
        "dataField": "value"
    });

     series.labels.template.url = "table.html";
    // series.labels.template.urlTarget = "_blank";
     series.labels.template.tooltipText = "click here";

    //var hoverState = series.labels.template.states.create("hover");
    // hoverState.properties.fill = am4core.color("lightblue");

    var subtitle = chart.titles.create();
    // subtitle.text = "Client Data";
    // subtitle.fontWeight = "1000";
    // var title = chart.titles.create();
    // title.text = " ";
    // title.text.color = "blue"
    // title.fontSize = 1000;
    // title.fontWeight = "800";

}); 