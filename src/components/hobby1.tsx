import React from 'react';
import siberiaImg from '../images/siberia-scenic.jpg';

const Hobby1: React.FC = () => {
    return (
        <section>
            <h2 className="DemasHeader">Skiing</h2>
            <p className="Demas">The hobby of mine that I've decided to highlight in this website is skiing! I've always had a passion for outdoor activities, especially those in the mountains! At a young age, my parents introduced me to skiing in Lake Tahoe, and since then, I've fallen in love. From an early age, I was given the freedom to explore a vast mountain and pick my own way down, combining elements of freedom with beautiful views!</p>
            <br/>
            <img src={siberiaImg} alt="Evan Demas" width={600} />
        </section>
    );
};

export default Hobby1;