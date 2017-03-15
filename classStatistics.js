Highcharts.chart('columnChart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Assignment Progress (Whole Class)'
    },
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
	yAxis: {
        title: {
            text: 'Number of Students'
        },
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'In Progress',
        data: [1, 3, 4, 7, 2, 0, 2, 2, 2, 1]
    }, {
        name: 'Failed',
        data: [0, -1, 0, -2, -1, -4, 0, -1, -5, -1]
    }, {
        name: 'Completed',
        data: [14, 10, 10, 4, 8, 9, 12, 11, 5, 12]
    }]
});




















Highcharts.chart('gradeColumnBarChart', {
    chart: {
        type: 'column'
    },
	title: {
        text: 'Class Grades (Per Student)'
    },
    xAxis: {
        categories: [
			'F',
            'D-',
            'D',
            'D+',
            'C-',
            'C',
            'C+',
            'B-',
            'B',
            'B+',
            'A-',
            'A',
            'A+'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Students'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Averaged Grade',
        data: [1, 0, 0, 1, 2, 4, 3, 5, 7, 3, 11, 5, 1]

    }]
});