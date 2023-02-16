import React from 'react';
import styles from '../styles/Total.module.css';
import { useContext } from 'react';
import { context } from '../context';
import { itemContext } from '../itemContext';

function Total() {
  const value = useContext(context);
  console.log(value);
  return (
    <div className={styles.container}>
      <h1>Total : {value.total}</h1>
      <itemContext.Consumer>{(val) => <h1> Item : {val.item} </h1>}</itemContext.Consumer>
    </div>
  );
}

export default Total;
