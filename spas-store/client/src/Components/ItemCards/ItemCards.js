import React from 'react';
import classes from './ItemCards.css';
import Button from '../UI/Button/button';

const ItemCards = (props) => {
    const style={
        image:{
            height: '100px',
            width: '100px',
            margin: '5px'
        },
        card: {
            width: '300px',
            marginLeft: '20px',
            marginRight: '20px'
        }
    }

    return (
        <div className={classes.card} id={props.itemName} style={style.card}>
            <div className={classes.imgCont}>
                <img src={require('../../Images/sst.jpg')} style={style.image}/>
            </div>
            <div className={classes.itemInfo}>
                <div>{props.itemName}</div>
                <div>{props.ItemTitle}</div>
                <div>Price: {props.price}</div>
                <Button btnType='View' onClick={() => props.modalHandler(props.key)}>View</Button>
            </div>
            
            
        </div>
    );
};

export default ItemCards;