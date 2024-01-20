import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Person extends React.Component{
  render(){
      return <h2>My name is {this.props.name}:{this.props.age}</h2>
  }
}


ReactDOM.render(
  <Person name="sai" age="16"></Person>,
  document.getElementById('root')
);


