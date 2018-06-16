import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


    state = {
        imageUrl : ''
    }

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/random?api_key=eRl4w3CwAnHEAhGooyCKWykXws4xARiY&q=spiderman&limit=25&offset=0&rating=G&lang=en')
    .then( res => res.json())
    .then(json => json.data.image_url )
    .then( (imageUrl) =>{
       
        this.setState({
            imageUrl: imageUrl
        })

    } )
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="rainbow">#config surface PC</h1>
          <p>having a good day</p>
          <p>Ok man!!</p>
        </header>
        <p>{this.state.imageUrl}</p>
        <img src={this.state.imageUrl}/>

      </div>
    );
  }
}

export default App;
