// Sample data for user statistics by age group
const states = ["MH", "UP", "GOA", "KA", "MP"];
const VotingPercentage= [60, 40, 30, 25, 10];

// Create a bar chart
const ctxBar = document.getElementById('bar-chart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: states,
        datasets: [{
            label: 'Voting Done In %',
            data: VotingPercentage,
            backgroundColor: ["#FF6384","#FF9F40","'#FFCD56","#4BC0C0","#36A2EB"],
            borderWidth: 1
        }]
    },
    options:{
        responsive: true,
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  
});

// Create a pie chart
const ctxPie = document.getElementById('pie-chart').getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: states,
        datasets: [{
            label: 'Voting Done In %',
            data: VotingPercentage,
            backgroundColor: ['#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB'],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    }
});

// Create a line chart
const ctxLine = document.getElementById('line-chart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: states,
        datasets: [{
            label: 'Voting Done In %',
            data: VotingPercentage,
            borderColor: '#36A2EB',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Add animations using Anime.js
const charts = [barChart, pieChart, lineChart];
charts.forEach((chart) => {
    chart.options.animation.onComplete = () => {
        anime({
            targets: chart.data.datasets[0].data,
            duration: 1000,
            easing: 'easeInOutQuart',
            round: 1,
            delay: anime.stagger(100),
            update: function (anim) {
                chart.update();
            }
        });
    };
});

