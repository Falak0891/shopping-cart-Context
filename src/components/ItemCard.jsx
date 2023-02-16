import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useContext } from 'react';
import { context } from '../context';
import { itemContext } from '../itemContext';

function ItemCard({ id, price, name }) {

  const {total, setTotal} = useContext(context);
  const {item,setItem} = useContext(itemContext);

  const handleAdd = () => {
   
    let newTotal = total + price;
    setTotal(parseFloat( newTotal.toFixed(2)));
    setItem((prevState) => {
      return prevState+1
    })
  };

  const handleRemove = () => {
    if(total<=0){
      return
    }
    let newTotal = total - price;
    setTotal(parseFloat( newTotal.toFixed(2)));
    
    setItem((prevState) => {
      return prevState-1
    })
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>${price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={handleAdd}>
          Add
        </button>
        <button className={styles.itemButton} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
