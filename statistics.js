Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Student Progress'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Number of Problems'
        },
        labels: {
            formatter: function () {
                return this.value ;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' problems'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Attempted',
        data: [0, 0, 0, 0, 0, 0, 0]
    }, {
        name: 'Failed',
        data: [3, 2, 1, 1, 2, 3, 0]
    }, {
        name: 'Completed',
        data: [1, 2, 2, 4, 7, 8, 10]
    }, {
        name: 'In Progress',
        data: [1, 2, 3, 3, 1, 0, 1]
    }]
});
