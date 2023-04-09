import './App.css';
import React from 'react';
import Searchinput from './Components/SearchInput';
import axios from 'axios';
import ImageList from './Components/ImageList';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={image:[]}
    // bind the value
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
  }

  async onSearchSubmit(entry){
    const response = await axios.get(`https://pixabay.com/api/?key=32975411-4a99bc665174f2e3ce120574d&q=${entry}&image_type=photo`)
    console.log(response.data.hits)
    this.setState({image:response.data.hits})
  }

  render(){
    return(
      <div>
        <Searchinput onSearchSubmit={this.onSearchSubmit}/>
        <p style={{textAlign:'center'}}>we currently have {this.state.image.length}</p>
        <ImageList image={this.state.image}/>
      </div>
    )
  }
}

export default App;
