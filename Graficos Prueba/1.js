// Datos del CSV
const data = {
    labels: [
        "1998", "1999", "2000", "2001", "2002", "2003", "2004", 
        "2005", "2006", "2007", "2008", "2009", "2010", "2011", 
        "2012", "2013", "2014", "2015", "2016", "2017", 
        "2018", "2019", "2020", "2021", "2022"
    ],
    datasets: [
        {
            label: 'Total',
            data: [
                4288.2, 4359.4, 4379.3, 4505.1, 4558.2, 4607.0, 
                4641.7, 4722.5, 4754.611, 4867.749, 4948.2, 
                5072.4, 4984.5, 5010.1, 4902.2, 4918.8, 
                4969.8, 4713.7, 4591.1, 4474.8, 4482.7, 
                4585.2, 4643.7578, 4619.1, 4505.9
            ],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
        },
        {
            label: 'Primario o menos',
            data: [
                737.0, 736.4, 711.4, 681.6, 639.9, 
                586.6, 558.7, 504.1, 469.591, 
                390.949, 392.8, 362.2, 
                331.7, 310.3, 
                302.5, 256.7, 
                254.6, 240.3,
                217.0, 212.5,
                198.1, 191.0,
                193.0, 174.0
            ],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
        },
        {
            label: 'Secundario',
            data: [
                1284.2, 1319.9, 1319.9, 1337.6, 1359.3,
                1375.5, 1373.9, 1405.2, 1310.442,
                1321.5, 1323.4, 1264.5,
                1192.0, 1150.6, 1080.9,
                1056.5, 1070.3, 1097.1,
                1087.2, 973.5, 968.7,
                969.8, 980.2, 963
            ],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
        },
        {
            label: 'Medio superior',
            data: [
                1676.7, 1745.9, 1755.9,
                1856.4, 1923.6, 1989.0,
                2046.2, 2155.3, 2313.422,
                2429.8, 2507.3, 2673.6,
                2663.6, 2592.6, 2559.0,
                2551.6, 2549.9, 2295.5,
                2253.8, 2288.8, 2322.7,
                2403.5, 2434.3, 2446.9, 2368.8
            ],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: false,
        },
        {
            label: 'Superior',
            data: [
                590.3, 557.2, 592.1, 629.5,
                635.4, 655.9, 662.9, 657.9,
                661.156, 725.4, 724.7, 772.1,
                797.2, 956.5, 959.8, 1054.0, 1095.0,
                1080.8, 1033.1, 1000.0, 993.1, 1020.9,
                1036.2, 1034.7, 1085.0
            ],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: false,
        }
    ]
};

// Configuración del gráfico
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: { // Configuración del eje Y
                beginAtZero: true,
                min: 0, // Límite inferior del eje Y
                max: 10000, // Límite superior del eje Y
                ticks: {
                    stepSize: 1000, // Incrementos entre cada marca en el eje Y
                    callback: function(value) {
                        return value.toLocaleString(); // Formatear números con comas
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Líneas'
            }
        }
    }
};

// Renderizar el gráfico en un canvas con id 'lineChart'
const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, config);
