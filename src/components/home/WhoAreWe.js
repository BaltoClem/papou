import React from 'react';
import '../../styles/home/WhoAreWe.css'

const WhoAreWe = () => {

    const whoAreWeStyle = {
        color: '#00989E'
    }
    return (
        <div style={whoAreWeStyle}>
            <section className='who_are_we' >
                <h1>Qui sommes-nous ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis dictum nibh at lobortis.
                    Praesent erat elit, accumsan ac euismod in, maximus imperdiet sem. Vivamus finibus rhoncus tortor et
                    ultricies. Aenean luctus nec ligula sit amet bibendum. Nulla odio nisi, fringilla vitae pharetra eu,
                    laoreet placerat nisi. Integer ac sapien.</p>
            </section>
        </div>
    );
};

export default WhoAreWe;
