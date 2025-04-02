import React from 'react';

const Form2: React.FC = () => {
    return (
        <section>
            <h2 className="BryanHeader">Soccer Jersey Order</h2>
            <form className="Bryan">
                <label htmlFor="fullname">Enter your full name:</label>
                <input type="text" id="fullname" />
                <br />
                <label htmlFor="jerseyname">Enter the jersey name:</label>
                <input type="text" id="jerseyname" />
                <br /> <br />
                <label>Pick edition:</label>
                <br />
                <input type="radio" id="nation" name="jerseyedition"/>
                <label htmlFor="nation">Nation</label>
                <br />
                <input type="radio" id="club" name="jerseyedition"/>
                <label htmlFor="club">Club</label>
                <br />
                <input type="radio" id="random" name="jerseyedition"/>
                <label htmlFor="random">Random</label>
                <br /><br />
                <label htmlFor="variation">Choose a variation:</label>
                <select name="variation" id="variation">
                    <option value="home">Home</option>
                    <option value="away">Away</option>
                    <option value="third">Third</option>
                    <option value="promotional">Promotional</option>
                </select>
                <br /> <br />
                <label>Added Items:</label>
                <br />
                <input type="checkbox" id="badges"/>
                <label htmlFor="badges">Badges</label>
                <br />
                <input type="checkbox" id="stars"/>
                <label htmlFor="stars">Stars</label>
                <br />
                <input type="checkbox" id="competitionpatches"/>
                <label htmlFor="competitionpatches">Competition Patches</label>
                <br /><br />
                <label htmlFor="comments">Extra Comments:</label>
                <br />
                <textarea rows={2} cols={40} id="comments"></textarea>
                <br />

                <input type="submit" value="Submit" id="submitButton"/>
            </form>
        </section>
    );
};

export default Form2;