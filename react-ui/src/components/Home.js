import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import catBackground from '../imgs/adventureEgypt2.jpg';
import catBackground3 from '../imgs/adventureAmazon.jpg';
import catBackground4 from '../imgs/adventureUnderwater.jpg';

const body = document.querySelector('body');

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      storyVal : "0",
    };
  }
  storyChooser(e){
    let storyVal = e.target.id;
    this.setState({storyVal: storyVal});
    storyVal = this.state.storyVal;
    console.log(this.state.storyVal);
    this.props.updatesNewValue(storyVal);
  }
  changeBackground(e){
    let storyVal = e.target.id;
    this.setState({storyVal: storyVal});
    storyVal = this.state.storyVal;
    console.log(this.state.storyVal);
    this.props.updatesNewValue(storyVal);
    if(e.target.id == 0){
      body.style.setProperty('--background', 'url('+catBackground+') no-repeat center center fixed');
    }else if(e.target.id == 1){
      body.style.setProperty('--background', 'url('+catBackground3+') no-repeat center center fixed');
    }else if(e.target.id==2){
      body.style.setProperty('--background', 'url('+catBackground4+') no-repeat center center fixed');
    }

  }
  render(){
    return(
      <div>
        <h1 id="successSub" className="header">Choose Your Adventure!</h1>
        <br />
        <Link to="/home">
          <button className="amazonButton" onMouseEnter={(e) => this.storyChooser(e)} onClick={(e)=>this.changeBackground(e)} id="1">Adventure in the Amazon</button>
        </Link>
        <br />
        <Link to="/home">
          <button className="egyptButton" onMouseEnter={(e) => this.storyChooser(e)} onClick={(e)=>this.changeBackground(e)} id="0">Adventure in Egypt</button>
        </Link>
        <br />
        <Link to="/home">
          <button className="waterButton" onMouseEnter={(e) => this.storyChooser(e)} onClick={(e)=>this.changeBackground(e)} id="2">Adventure Underwater</button>
        </Link>
      </div>
    );
  }
}
