import React from 'react';
import neymarImg from '../images/neymar.jpeg';

const Hobby2: React.FC = () => {
    return (
        <section>
            <h2 className="BryanHeader">Soccer</h2>
            <p className="Bryan">One of my biggest hobbies my whole life has been soccer. I started playing when I was only 3 years old and even now at
                the age of 20 I still find myself playing pick-up with friends and playing in the rec soccer league on campus. Throughout my
                childhood, I played for town leagues and school teams where I feel I have made my closest friends. I played winger my whole
                life as I was pretty quick and a better passer than a shooter.</p>
            <img src={neymarImg} alt="Bryan Wheeler" width={600} />
        </section>
    );
};

export default Hobby2;