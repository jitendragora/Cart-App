import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = { 
    counters: [
        { id: 1, value: 2},
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }     
    ]
  };

  handleIncrement = counter => {
    const updatedCounters = [...this.state.counters];
    const index = updatedCounters.indexOf(counter);
    updatedCounters[index] = {...counter};
    updatedCounters[index].value++;
    this.setState( { counters: updatedCounters });
  };

  handleDecrement= counter => {
    const updatedCounters = [...this.state.counters];
    const index = updatedCounters.indexOf(counter);
    updatedCounters[index] = {...counter};
    if(updatedCounters[index].value !== 0)
      updatedCounters[index].value--;
    this.setState( { counters: updatedCounters });
  };

  handleDelete = (counterId) => {
    const filteredCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters:  filteredCounters});
  };

  handleReset = () => {
    const updatedCounters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters: updatedCounters });
  };

  render ( ) {
    return(
      <React.Fragment>
        <Navbar totalCounters ={this.state.counters.filter(c => c.value> 0).length} />
        <main className="container">
          <Counters 
            counters= {this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
        <footer className="footer">~~~CopyRight@2020~~~</footer>
      </React.Fragment>
    ); 
  }    
}

export default App;
