// Datos de graduados por nivel educativo (ejemplo simplificado)
const data = {
    labels: ["1985/86", "1990/91", "1995/96", "2000/01", "2005/06", "2010/11", "2015/16", "2021/22"], // Años
    primaria: [195506, 133365, 146940, 170639, 138682, 132556, 117874, 114812], // Graduados en primaria
    media: [301749, 306669, 176490, 239949, 294837, 257965, 229190, 224190], // Graduados en media
    superior: [23579, 39374, 27502, 17136, 32354, 89560, 23971, 41655], // Graduados en superior
};

// Configuración del gráfico de líneas (evolución de graduados)
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: data.labels,
        datasets: [
            {
                label: 'Primaria',
                data: data.primaria,
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
            {
                label: 'Media',
                data: data.media,
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
            {
                label: 'Superior',
                data: data.superior,
                borderColor: '#4BC0C0',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Evolución de Graduados por Nivel Educativo',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Graduados',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Años',
                },
            },
        },
    },
});

// Configuración del gráfico de barras (graduados en el último año)
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Primaria', 'Media', 'Superior'],
        datasets: [
            {
                label: 'Graduados (2021/22)',
                data: [data.primaria[7], data.media[7], data.superior[7]],
                backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0'],
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Graduados por Nivel Educativo (2021/22)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Graduados',
                },
            },
        },
    },
});

// Configuración del gráfico de donut (distribución de graduados)
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Primaria', 'Media', 'Superior'],
        datasets: [
            {
                label: 'Graduados',
                data: [data.primaria[7], data.media[7], data.superior[7]],
                backgroundColor: ['#36A2EB', '#FF6384', '#4BC0C0'],
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Distribución de Graduados por Nivel Educativo',
            },
        },
    },
});