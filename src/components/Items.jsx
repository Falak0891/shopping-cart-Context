import React from 'react';
import styles from '../styles/Item.module.css';
import ItemCard from './ItemCard';
import itemData from '../data/itemData';

function Items() {
  return (
    <div className={styles.wrapper}>
        <ItemCard  name = "Apple" price = {1.99}/> 
    </div>
  );
}

export default Items;
