import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import Robot from './components/robot';
//ts don't konw the css file, need add declaration in the *.d.ts. 
//This file will neither be compiled or packgaged by webpack
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props { }

interface State {
  robotGallery: any[],
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>This is a react project created by Antony</h1>
        </div>
        <button onClick={() => {
          // this.setState({ count: this.state.count + 1 });
          // this.setState({ count: this.state.count + 1 });
          this.setState((preState) => { return { count: preState.count + 1 }});
          this.setState((preState) => { return { count: preState.count + 1 }});
        }}>click</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
