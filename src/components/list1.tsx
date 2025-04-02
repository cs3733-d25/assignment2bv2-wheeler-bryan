// src/components/list1.tsx
import React from 'react';

const List1: React.FC = () => {
    return (
        <div className={"center-container"}>
            <h3 className="DemasHeader">Ski Equipment</h3>
            <ul className="Demas">
                <li><a href="https://www.nordica.com/usa/en/men/skis">Skis</a></li>
                <li><a href="https://www.nordica.com/usa/en/men/boots">Boots</a></li>
                <li><a href="https://www.rei.com/c/downhill-ski-poles">Poles</a></li>
                <li><a href="https://www.rei.com/c/ski-helmets">Helmets</a></li>
                <li><a href="https://www.rei.com/c/ski-goggles">Goggles</a></li>
            </ul>
            <br/>
        </div>

    );
};

export default List1;
