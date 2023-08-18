import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import Robot from './components/robot';
//ts don't konw the css file, need add declaration in the *.d.ts. 
//This file will neither be compiled or packgaged by webpack
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props { 
  // Pass data from parent component, need this property
  // But if pass to this component's child node, this component is useless
  // This case is called props drilling(深度注入) 
  username: string
}

interface State {
  robotGallery: any[],
  count: number
}

const App: React.FC<Props> = (props) => {

  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    document.title = `click ${count} times`
  }, [count]); // listen count

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
      setLoading(false);
    }

    fetchData();
  }, []); // [] equals to componentDidMount

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>This is a react project created by Antony</h1>
      </div>
      <h2>{props.username}</h2>
      <button onClick={() => {
        setCount(count + 1);
        setCount(count + 1);// only 1 is effected, it is asynchronous
      }}>click</button>
      <span>count: {count}</span>
      <ShoppingCart />
      {(error && error !== "") && <div>Error occur: {error}</div>}
      {loading ? "Loading, wait a moment please" :
        <div className={styles.robotList}>
          {robotGallery.map(r => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>}
    </div>
  );
}

export default App;
