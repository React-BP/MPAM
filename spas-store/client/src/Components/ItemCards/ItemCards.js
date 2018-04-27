import React from 'react';
import classes from './ItemCards.css';
import Button from '../UI/Button/button';

const ItemCards = (props) => {
    const style={
        image:{
            height: 185,
            width:185,
            margin: 5
        }
    }

    console.log('props... ', props);

    return (
        <div className={classes.card}>
            <div className={classes.imgCont}>
                <img alt={props.itemName} src={props.itemName} style={style.image}/>
            </div>
            <div className={classes.itemInfo}>
                <h3>{props.itemName}</h3>
                <h5>{props.ItemTitle}</h5>
                <p>Price: {props.price}</p>
                <Button btnType='View' clicked={props.onClick}>View</Button>
            </div>
            
            
        </div>
    );
};

export default ItemCards;