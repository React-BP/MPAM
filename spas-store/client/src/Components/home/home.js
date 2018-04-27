import React from "react";
import 'aos/dist/aos.css';

import Items from '../items/items';

const Home = (props) => {
    let styles = {
        grid: {
            display: "grid",
            gridTemplateAreas: "'. a a a'",
            marginLeft: '20%',
            height: "100%",
            width: '100%'
        },
        itemA: {
            // gridArea: "a",
            // alignSelf: "start",
            // justifySelf: "start",
            width: '80vw',
            fontSize: "18px",
            marginTop: '100px',
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