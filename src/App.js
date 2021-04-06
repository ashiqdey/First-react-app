import React, {Component} from 'react'
import './App.css';

import Blogcard from './Blogcard';
import Product from './Product';
import Formcomponent from './Formcomponent/Formcomponent';

import {isArrEmpty,log} from './Utils';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      show:1,
      blogArr : [
        {t:"blog title 1"},
        {t:"blog title 2"},
        {t:"blog title 3"},
        {t:"blog title 4"}
      ],

      curImage:0,
      feature:'time',


    }



 
    //implemention of named modules
    log(isArrEmpty(this.state.blogArr))

    this.blogElement = this.state.blogArr.map((item,i) => {
      return (<Blogcard key={i} item={item}/>)
    })
  }
  

  hideButton = () => {
    //can be done using this also
    //this.setState({show:!this.state.show})

    this.setState((prevState,prevProps) => {
      return {show:!prevState.show}
    });
    console.log("hiding button "+this.state.show);
  }


  selectImage = (pos) => {
    this.setState({curImage:pos})
  }

  featureChange = (f) => {
    this.setState({feature:f})
  }

  render(){
    return (
      <div>
        <button onClick={this.hideButton}>hide blogs</button>
        {this.state.show? this.blogElement:null}
        <Product curImage={this.state.curImage} feature={this.state.feature} selectImage={this.selectImage} featureChange={this.featureChange} />

        <Formcomponent />
      
      </div>
    );
  }
  

}

export default App;
