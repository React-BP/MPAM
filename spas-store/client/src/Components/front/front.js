import React from "react";
import Radium from 'radium';

let Front = (props) => {
    let styles = {
        grid: {
            display: "grid",
            gridTemplateAreas: `'. . .'
                                '. photo .'
                                '. about .'
                                '. link .'
                                '. . .'`,
            height: "100%",
            width: '100%',
        },
        photo: {
            gridArea: "photo",
            backgroundColor: 'rgba(0,0,0,0.30)',
            justifySelf: 'center',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '600px',
            height: '100%',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
        },
        phImg: {
            backgroundImage: `url(${null})`,
            backgroundSize: 'cover',
            transform: 'rotate(90deg)',
            border: '2px solid white',
            width: '150px',
            height: '150px',
            margin: 'auto',
            borderRadius: '50%',
            justifySelf: 'center',
            alignSelf: 'center',
        },
        about: {
            gridArea: "about",
            width: '600px',
            height: '140px',
            padding: '15px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            justifySelf: 'center',
            backgroundColor: 'rgba(0,0,0,0.30)',
            borderTop: '2px solid white',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',

        },
        links: {
            gridArea: "link",
            width: '600px',
            height: '140px',
            padding: '15px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            justifySelf: 'center',
            ':link': {
                color: 'white',
                textDecoration: 'none'
            },
            ':hover': {
                color: 'grey',
                textDecoration: 'none'
            }
        }
    }

    return (
        <div style={styles.grid}>
            <div style={styles.photo}><div style={styles.phImg}></div></div>
            <div style={styles.about}>
                Matt Groe <br />
                Web Developer <br />
                San Diego, CA <br />
                <a key='1' style={styles.links} href="https://www.linkedin.com/in/matthew-groe-b0a742162/">LinkedIn</a> <br />
                <a key='2' style={styles.links} href="https://github.com/mattgroe">GitHub</a>
            </div>
        </div>
    );
};

Front = Radium(Front);

export default Front;