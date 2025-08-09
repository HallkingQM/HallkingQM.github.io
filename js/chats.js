const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'Boostrap', 'MySQL'],
        datasets: [{
            data: [80, 75, 65, 45, 75, 85, 75],
            backgroundColor: 'rgb(31, 42, 72)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    font: {
                        size: 15
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 15
                    }
                }
            }
        }
    }
});

const ctx = document.getElementById('toolsChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Git and GitHub', 'Docker', 'Figma', 'Terminal', 'VS Code'],
        datasets: [{
            data: [90, 70, 75, 80, 85],
            backgroundColor: 'rgb(31, 42, 72)'
        }]
    },
    options: {
        indexAxis: 'y', // Barras horizontales
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                max: 100,
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14 // Tamaño etiquetas eje X
                    }
                },
                title: {
                    display: false,
                    font: {
                        size: 15,
                        weight: 'bold'
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 15 // Tamaño etiquetas eje Y (herramientas)
                    }
                }
            }
        }
    }
});

const radarCtx = document.getElementById('radarChart').getContext('2d');
new Chart(radarCtx, {
    type: 'radar',
    data: {
        labels: ['Comunicación', 'Liderazgo', 'Trabajo en equipo', 'Resolución', 'Creatividad', 'Gestión de tiempo', 'Autodidacta', 'Lógica', 'Diseño / UI'],
        datasets: [{
            data: [85, 75, 80, 78, 70, 80, 90, 85, 65],
            //backgroundColor: 'rgb(31, 42, 72)',
            borderColor: 'rgba(31, 42, 72, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(31, 42, 72, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 100,
                pointLabels: {
                    font: {
                        size: 15
                    }
                },
                ticks: {
                    font: {
                        size: 15
                    }
                }
            }
        }
    }
});
