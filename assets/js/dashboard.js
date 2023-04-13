(() => {
	'use strict'

	feather.replace({
		'aria-hidden': 'true'
	})

	// Graphs
	const ctx = document.getElementById('myChart')
	// eslint-disable-next-line no-unused-vars
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [
				'1974',
				'1982',
				'1990',
				'1998',
				'2006',
				'2014',
				'2022',
			],
			datasets: [{
                label: 'Something1',
				data: [
					0.033736759337049700,
                    0.045487048488546600,
                    0.06218381618234720,
                    0.08255117713673440,
                    0.0999727362461968,
                    0.11985660171462900,
                    0.17562244676900200
				],
				lineTension: 0,
				backgroundColor: 'transparent',
				borderColor: 'black',
				borderWidth: 4,
				pointBackgroundColor: 'black'
			},{
                label: 'Something2',
				data: [
					0.030011208985574800,
                    0.04412447327989990,
                    0.06436851290268570,
                    0.08658006540365700,
                    0.09747572122035180,
                    0.11174356646977500,
                    0.1610320114485120
				],
				lineTension: 0,
				backgroundColor: 'transparent',
				borderColor: '#007bff',
				borderWidth: 4,
				pointBackgroundColor: '#007bff'
			},{
                label: 'Something3',
				data: [
					0.03784644576797910,
                    0.04696575887589680,
                    0.059848468714600500,
                    0.0783118080429694,
                    0.10253765678141100,
                    0.12794349792796100,
                    0.18988255836724000
				],
				lineTension: 0,
				backgroundColor: 'transparent',
				borderColor: 'red',
				borderWidth: 4,
				pointBackgroundColor: 'red',
			},
		]
		},
		options: {
			plugins: {
				legend: {
					display: true
				},
				tooltip: {
					boxPadding: 3
				}
			}
		}
	})
})()