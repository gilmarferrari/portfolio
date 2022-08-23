const year = new Date().getFullYear();

function copyLink() {
    navigator.clipboard.writeText('gilmarferrari.github.io/Dashboard/');
    window.alert('Link copiado com sucesso!');
}

$.when(
    $.getJSON('https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados/ultimos/30?formato=json'),
    $.getJSON('https://api.bcb.gov.br/dados/serie/bcdata.sgs.433/dados/ultimos/12?formato=json'),
    $.getJSON(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.1619/dados/?formato=json&dataInicial=01/01/1995&dataFinal=31/12${year}`),
    $.getJSON(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.24369/dados?formato=json`),
).done(function (USD, IPCA, minimumWage, unemployment) {
    loadCharts([USD[0], IPCA[0], minimumWage[0], unemployment[0]]);
});

function loadCharts(data) {
    var amount = data[0].map(i => i.valor);
    var USDperiod = data[0].map(i => i.data);
    var variation = [];
    for (let i = 0; i < data[0]?.length; i++) {
        variation.push({ x: i + 1, y: (data[0][i]?.valor ?? 1) / (data[0][i - 1]?.valor ?? data[0][i]?.valor) });
    }
    var IPCA = data[1].map(i => i.valor);
    var IPCAperiod = data[1].map(i => i.data);
    var minimumWagePeriod = data[2].map(i => new Date(i.data).getFullYear()).filter(onlyUnique);
    var minimumWage = data[2].filter(i => minimumWagePeriod.map(y => `01/07/${y}`).includes(i.data)).map(i => i.valor);
    var unemployment = data[3];
    console.log(data[2])

    new Chart("overview", {
        type: "line",
        data: {
            labels: USDperiod,
            datasets: [{
                borderColor: "#c6df9f",
                data: amount
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });

    new Chart("variation", {
        type: "scatter",
        data: {
            datasets: [{
                backgroundColor: "#c6df9f",
                data: variation
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    new Chart("ipca", {
        type: "bar",
        data: {
            labels: IPCAperiod,
            datasets: [{
                backgroundColor: "#c6df9f",
                data: IPCA
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });

    new Chart("minimumWage", {
        type: "line",
        data: {
            labels: minimumWagePeriod,
            datasets: [{
                borderColor: "#c6df9f",
                data: minimumWage
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return "R$ " + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                            return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
                        });
                    }
                }
            }
        }
    });

    new Chart("unemployment", {
        type: "bar",
        data: {
            labels: unemployment.map(i => i.data),
            datasets: [{
                backgroundColor: "#c6df9f",
                data: unemployment.map(i => i.valor)
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
