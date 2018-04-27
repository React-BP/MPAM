import React from "react";
import 'aos/dist/aos.css';

import Items from '../items/items';

const Home = (props) => {
    let styles = {
        grid: {
            display: "grid",
            gridTemplateAreas: "'. a a a' '. a a a' '. a a a'",
            height: "100%",
            justifyContent: "center",
            alignSelf: "center"
        },
        itemA: {
            gridArea: "a",
            alignSelf: "end",
            justifySelf: "start",
            fontSize: "24px"
        },
        itemB: {
            gridArea: "b",
            margin: "0",
            alignSelf: "center",
            justifySelf: "end",
            height: "50%",
            width: "100%"
        },
        itemC: {
            gridArea: "c",
            alignSelf: "start",
            justifySelf: "end",
            fontSize: "24px"
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