import React from 'react';
import '../../styles/home/OurValues.css'

const OurValues = () => {
    const ourValuesStyle = {
        color: '#00989E',
        display: 'flex',
        alignItems: 'center', // Aligner le contenu verticalement au centre
    };

    return (
        <div style={ourValuesStyle}>
            <section className='our_values'>
                <h1>Pourquoi Papou ? Nos valeurs</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis dictum nibh at lobortis.
                    Praesent erat elit, accumsan ac euismod in, maximus imperdiet sem. Vivamus finibus rhoncus tortor et
                    ultricies. Aenean luctus nec ligula sit amet bibendum. Nulla odio nisi, fringilla vitae pharetra eu,
                    laoreet placerat nisi. Integer ac sapien.
                </p>
            </section>
        </div>
    );
};

export default OurValues;
