import React from "react";
import Radium from 'radium';

const Contact = (props) => {
    let styles = {
        body: {
            backgroundColor: 'rgba(0,0,0,0.30)',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            marginTop: '30px',
            marginLeft: "20%",
            padding: '20px',
            marginRight: '20%'
        },
        phone: {
            fontWeight: 'bold',
            color: 'white'
        },
        title: {
            fontWeight: 'bold'
        },
        email : {
            color: 'yellow'
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            'link': {
                color: 'white',
                textDecoration: 'none'
            },
            ':hover': {
                color: 'yellow',
                textDecoration: 'none'
            }
        }
    }

    return (
        <div style={styles.body}>
            <h1 style={styles.title}>Contact Us</h1>
            <div>
                <div style={styles.title}>Management: <span>Matt Phillips</span></div>
                <div style={styles.email}>management@slightlystoopid.com</div>
                <div style={styles.phone}>P: <span>(310)559-8990</span></div>
            </div>
            <div>
                <div style={styles.title}>Booking:</div>
                <div style={styles.email}>stoopid@silverbackmusic.net</div>
                <div style={styles.phone}>P: <span>(310)559-8990</span></div>
            </div>
            <div>
                <div style={styles.title}>Publicity: <span>Ken Weinstein, Emily Ginsberg</span></div>
                <div style={styles.email}>weinstein@bighassle.com,</div>
                <div style={styles.email}>ginsberg@bighassle.com</div>
                <div style={styles.email}>publicity@slightlystoopid.com</div>
                <div style={styles.phone}>P: <span>(212)619-1360</span></div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', color: 'white'}}>
                <a style={styles.link} href="http://slightlystoopid.com/" target="_blank">Tour Dates</a>
                <a style={styles.link} href="https://www.facebook.com/slightlystoopid/" target="_blank">Facebook</a>
                <a style={styles.link} href="https://twitter.com/slightlystoopid?lang=en" target="_blank">Twitter</a>
                <a style={styles.link} href="https://www.instagram.com/slightlystoopid/" target="_blank">Instagram</a>
                <a style={styles.link} href="https://www.youtube.com/user/SlightlyStoopidTV" target="_blank">Youtube</a>
                <a style={styles.link} href="https://open.spotify.com/artist/6MxlVTY6PmY8Nyn16fvxtb" target="_blank">Spotify</a>
            </div>
        </div>
    );
};

// Contact = Radium(Contact);

export default Contact;
