// src/components/intro.tsx
import React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <section>
            <p>
                Hi! We are {name1} and {name2}. This website that we built is for you to get to know us!
            </p>
        </section>
    );
};

export default Intro;
