import React from "react";
import Radium from 'radium';

//Import pictures from Images folder
import pic from '../../Images/smthstpd.png'

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
            padding: '15px',
            width: '600px',
            height: '100%',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
        },
        phImg: {
            width: '350px',
            height: '300px',
            // margin: '0 auto',
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
            <div style={styles.photo}><div style={styles.phImg}><img src={pic} style={{width: '100%', height: '100%'}}/></div></div>
            <div style={styles.about}>
                Reggae Band <br />
                San Diego, CA <br />
                <a key='1' style={styles.links} href="http://slightlystoopid.com/">Website</a> <br />
                <div>See our merch below!</div>
            </div>
        </div>
    );
};

Front = Radium(Front);

export default Front;