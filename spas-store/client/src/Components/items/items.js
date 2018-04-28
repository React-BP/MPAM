import React, { Component } from "react";
import wetImg from '../../../src/Images/hemp.png';
// import API from "../../../utils/API";
// import Sort from "../../../utils/Sort";
import ItemCards from '../ItemCards/ItemCards';
import Modal from "../UI/Modal/modal";
import SingleItem from '../UI/SingleItem/SingleItem';
import classes from './items.css';
import axios from 'axios';

class Items extends Component {
    state = {
        items: [],
        singleItem: '',
        loading: true,
        featured: {},
        itemModal: false
    };

    componentDidMount() {
        this.loadItems();
    }

    modalHandler = (id) => {
        console.log('hitting this')
        this.setState({ itemModal: true });
        this.loadItem(id);
        console.log(this.state.featured);
    }

    modalCancelHandler = () => {
        this.setState({ itemModal: false });
    }

    loadItems() {
        axios.get(`/api/items`)
            .then(res => {
                console.log('res ', res);
                const fetched = [];
                for (let key in res.data) {
                    fetched.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({
                    loading: false,
                    items: fetched
                });
            }).catch(err => {
                this.setState({ loading: false });
            }); 
        // API.searchItems('wetsuits')
        //     .then(res => {


        //     }).catch(err => {
        //         this.setState({ loading: false });
        //     });
    }

    loadItem(id) {
        axios.get(`/api/${id}`)
            .then(res => {
                console.log('res ', res);
                const fetched = '';
                // for (let key in res.data) {
                //     fetched.push({
                //         ...res.data[key],
                //         id: key
                //     });
                // }
                this.setState({
                    loading: false,
                    singleItem: fetched
                });
            }).catch(err => {
                this.setState({ loading: false });
            });
        // API.searchItem(id)
        //     .then(res => {
        //         this.setState({
        //             featured: res.data
        //         });
        //     }).catch(err => {
        //         this.setState({ loading: false });
        //     })
    }

    render() {
        return (
            <div className={classes.mainBox}>
                {/* <Header
                    image={wetImg}
                    title='Wetsuits' />
                <Filter /> */}
                <div className={classes.ItemBox} id='flex' style={{display: 'flex', flexDirection: 'row', width: '90%', flexWrap: 'wrap'}}>
                    {this.state.items.map(item => (
                        <ItemCards
                            key={item.id}
                            price={item.price}
                            ItemTitle={item.type}
                            itemName={item.title}
                            itemPic={item.image}
                            modalHandler={this.modalHandler}
                        />
                    ))}
                </div>
                <Modal show={this.state.itemModal}
                    modalClosed={this.modalCancelHandler}>
                    <SingleItem singleItemPic={this.state.singleItem.image}
                        singlePicInfo={this.state.singleItem.name}
                        sizes={this.state.singleItem.sizes} />
                </Modal>

            </div>
        );
    }
}

export default Items;