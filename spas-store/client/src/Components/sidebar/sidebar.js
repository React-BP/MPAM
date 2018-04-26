import React from "react";
import Radium from 'radium';
import 'aos/dist/aos.css';

//Import pictures from Images folder
import pic from '../../Images/smthstpd.png';
import hemp from '../../Images/hemp.png';

let styles = {
    grid: {
        display: "grid",
        gridTemplateAreas: "'lG' '.' 'nF' 'nH' 'nA' 'nC' '.' '.'",
        // backgroundColor: "#c39953",
        position: "fixed",
        gridArea: "nav",
        margin: "0 auto",
        width: "10%",
        height: "100%",
        top: 0,
        left: 0
    },
    navFront: {
        gridArea: "nF",
        alignSelf: "center",
        justifySelf: "center",
        fontWeight: "bold",
        ':hover': {
            textDecoration: 'none',
            color: '#a6e4e9',
            borderColor: '#a6e4e9'
        },

        ':link': {
            color: 'white'
        }
    },
    navHome: {
        gridArea: "nH",
        alignSelf: "center",
        justifySelf: "center",
        fontWeight: "bold",
        ':hover': {
            textDecoration: 'none',
            color: '#fec56a',
            borderColor: '#fec56a'
        },

        ':link': {
            color: 'white'
        }
    },
    navAbout: {
        gridArea: "nA",
        alignSelf: "center",
        justifySelf: "center",
        fontWeight: "bold",
        ':hover': {
            textDecoration: 'none',
            color: '#a6e4e9',
            borderColor: '#a6e4e9'
        },

        ':link': {
            color: 'white'
        }
    },
    navContact: {
        gridArea: "nC",
        alignSelf: "center",
        justifySelf: "center",
        fontWeight: "bold",
        ':hover': {
            textDecoration: 'none',
            color: '#fec56a',
            borderColor: '#fec56a'
        },

        ':link': {
            color: 'white'
        }
    },
    logo: {
        gridArea: "lG",
        alignSelf: "center",
        justifySelf: "center",
        backgroundImage: `url(${hemp})`,
        backgroundSize: 'cover',
        opacity: '0.5',
        width: '150px',
        height: '150px',
        marginLeft: '10px',
        borderRadius: '50%',
    },
    button: {
        border: '2px solid white',
        borderRadius: '4px',
        width: '120px',
        padding: '5px',
        marginLeft: '5px',
        color: 'white'
    }
}


let Sidebar = (props) => (
    <div style={styles.grid} data-aos="fade-down" data-aos-duration="2000">
        {/* <div style={styles.logo}></div> */}
        <div style={styles.logo}><img src={pic} style={{width: '100%', height: '100%'}}/></div>
        <div key="front-link" style={{ ...styles.navFront, ...styles.button }} onClick={() => props.goToPage(0)}>Links</div>
        <div key="home-link" style={{ ...styles.navHome, ...styles.button }} onClick={() => props.goToPage(1)}>Clothing</div>
        <div key="about-link" style={{ ...styles.navAbout, ...styles.button }} onClick={() => props.goToPage(2)}>Accessories</div>
        <div key="contact-link" style={{ ...styles.navContact, ...styles.button }} onClick={() => props.goToPage(3)}>Contact & Support</div>
    </div>
);

Sidebar = Radium(Sidebar);

export default Sidebar;