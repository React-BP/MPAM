import React from "react";
import 'aos/dist/aos.css';

import Items from '../items/items';

const Home = (props) => {
    let styles = {
        grid: {
            display: "grid",
            gridTemplateAreas: "'. a a a'",
            height: "100%",
            width: '100%'
        },
        itemA: {
            // gridArea: "a",
            // alignSelf: "start",
            // justifySelf: "start",
            marginLeft: '20%',
            width: '80vw',
            fontSize: "18px",
            marginTop: '25px',
            marginBottom: '100px'
        }
    };

    return (

        <div style={styles.grid}>
            <div style={styles.itemA}>
                <Items></Items>
            </div>
        </div>

    );
};

export default Home;