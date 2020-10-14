import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
      </header>
    </div>
  );
}

class Welcome extends React.Component {

  componentDidMount(){
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue'],
            datasets: [{
                label: '# of Votes',
                data: [5, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  render() {
    return <canvas id="myChart" width="50" height="50"></canvas>;
  }
}


export default App;
