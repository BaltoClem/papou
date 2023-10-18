import React from 'react';
import video from '../data/video/mom_child.mp4'

const OurValues = () => {
    const ourValuesStyle = {
        color: '#00989E',
        display: 'flex',
        alignItems: 'center', // Aligner le contenu verticalement au centre
    };

    const videoStyle = {

        width: '20%', // La vidéo prendra 30% de la largeur de la div parent
        marginRight: '2%', // Marge à droite pour séparer la vidéo du contenu
        height: 'auto',
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
            <video autoPlay loop style={videoStyle}>
                <source src={video} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
        </div>
    );
};

export default OurValues;
