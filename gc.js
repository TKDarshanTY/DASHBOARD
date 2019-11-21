google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Technologies', 'Total number of batches'],
        ['Java Full Stack', 11],
        ['Mean Stack', 8],
        ['Data Science', 6],
        ['Python Full Stack', 4],
        ['Dotnet Full Stack', 7]
    ]);





    var options = {
        colors: ['green', 'blue', 'pink', 'brown', '#ea8c1c', '#006daf'],
        is3D: 'true',
        isHTML: 'false',
        height: 500,
        width: 500,
        backgroundColor: "transparent",
        chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
        legend: { position: 'left', alignment: "end" },
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    function selectHandler() {
        var selectedItem = chart.getSelection()[0];
        if (selectedItem) {

            //alert('The user selected ' +selectedItem);

            console.log(selectedItem.row)
            if (selectedItem.row === 0) {
                window.location.href = './table.html';
            } else if (selectedItem.row === 1) {
                window.location.href = './table1.html';
            }
            else if (selectedItem.row === 2) {
                window.location.href = './barchart.html';
            }
            else if (selectedItem.row === 3) {
                window.location.href = './table.html';
            }
            else if (selectedItem.row === 4) {
                window.location.href = './table.html';
            }
            // else if(selectedItem.row === 3){
            // window.location.href = './vicky.html';
            // }
            // else if(selectedItem.row === 4){
            // window.location.href = './index.html';
            // }
        }
    }

    google.visualization.events.addListener(chart, 'select', selectHandler);

    chart.draw(data, options);
}