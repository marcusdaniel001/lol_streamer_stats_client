import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js';
import axios from 'axios';

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

  constructor(){
    super();

    this.state = {
      players: '',
      dano: ''
    };
  }

  componentWillMount(){
    var myHeaders = new Headers();

    var myInit = { method: 'GET',
                  headers: myHeaders,
                  cache: 'default' };

    fetch('https://b4d47acadb78.ngrok.io',myInit)
    .then(function(response) {
      return response.json()
    }).then(data => {
      var names = data.map(dt => dt.Name);
      var damages = data.map(dtm => dtm.Damage)

      this.setState({
        players: names,
        dano: damages
      })
    })
  }

  componentDidUpdate(){
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.state.players,
            datasets: [{
                label: 'DAMAGE',
                data: this.state.dano,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 3
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
    console.log(this.state)
    return <canvas id="myChart" style={{width: '100px !important',height: '100px !important'}}></canvas>;
  }
}


export default App;
