import React from "react";

const Contact = (props) => {
    let styles = {
        body: {
            marginLeft: "12%"
        }
    }

    return (
        <div style={styles.body}>
            <h1>Contact Us</h1>
            <div>
                <div>Management: <div>Matt Phillips</div></div>
                <div>management@slightlystoopid.com</div>
                <div>P: <div>(310)559-8990</div></div>
            </div>
            <div>
                <div>Booking:</div>
                <div>stoopid@silverbackmusic.net</div>
                <div>P: <div>(310)559-8990</div></div>
            </div>
            <div>
                <div>Publicity: <div>Ken Weinstein, Emily Ginsberg</div></div>
            </div>
            <div>
                <div href="http://slightlystoopid.com/">Tour Dates</div>
                <div href="https://www.facebook.com/slightlystoopid/">Facebook</div>
                <div href="https://twitter.com/slightlystoopid?lang=en">Twitter</div>
                <div href="https://www.instagram.com/slightlystoopid/">Instagram</div>
                <div href="https://www.youtube.com/user/SlightlyStoopidTV">Youtube</div>
                <div href="https://open.spotify.com/artist/6MxlVTY6PmY8Nyn16fvxtb">Spotify</div>
            </div>
        </div>
    );
};

export default Contact;
