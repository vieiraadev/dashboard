const ctx1 = document.getElementById('portfolioChart').getContext('2d');
const portfolioChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Crypto Assets',
            data: [30000, 35000, 40000, 45000, 40000, 50000, 55000],
            borderColor: '#51ce1c',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,

                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value in USD'
                }
            }
        }
    }
});

const ctx2 = document.getElementById('marketNewsChart').getContext('2d');
const marketNewsChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['BTC', 'ETH', 'BNB', 'ADA', 'XRP'],
        datasets: [{
            label: 'Market Changes',
            data: [2.5, 3.1, -1.2, 5.0, -0.8],
            backgroundColor: [
                'rgba(0, 255, 0, 0.2)',  // Verde com 20% de opacidade
                'rgba(0, 255, 0, 0.2)',  // Verde com 20% de opacidade
                'rgba(0, 255, 0, 0.2)',  // Verde com 20% de opacidade
                'rgba(0, 255, 0, 0.2)',  // Verde com 20% de opacidade
                'rgba(0, 255, 0, 0.2)'
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)',  // Verde sólido
                'rgba(0, 255, 0, 1)',  // Verde sólido
                'rgba(0, 255, 0, 1)',  // Verde sólido
                'rgba(0, 255, 0, 1)',  // Verde sólido
                'rgba(0, 255, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Cryptocurrency'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Change (%)'
                }
            }
        }
    }
});