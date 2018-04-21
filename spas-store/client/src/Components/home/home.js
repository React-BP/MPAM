import React from "react";
import 'aos/dist/aos.css';

const Home = (props) => {
    let styles = {
        grid: {
            display: "grid",
            gridTemplateAreas: "'a a a a' 'b b b b' 'c c c c'",
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
            <div style={styles.itemA}>Providing you a life-line</div>
            {/* <object style={styles.itemB}>
                <embed src={MyLogo} style={{ height: "70%", width: "100%" }} />
            </object> */}
            <div style={styles.itemC}>in Web Innovation</div>
        </div>

    );
};

export default Home;