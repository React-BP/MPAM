import React from "react";

const About = (props) => {
    let styles = {
        body: {
            marginLeft: "12%"
        }
    }

    return (
        <div style={styles.body}>
            <h1 className="title">About Page</h1>
            <p className="body">
                <span className="title">Skills:</span> <br />
                <span></span>
            </p>
        </div>
    );
};

export default About;
