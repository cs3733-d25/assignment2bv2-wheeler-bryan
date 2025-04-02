import React from 'react';

const Form1: React.FC = () => {
    return (
        <section>
            <h2 className="DemasHeader">Ski Interest Form</h2>
            <form className="Demas">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name"/><br/><br/>

                <label htmlFor="email">Your Email:</label>
                <input type="text" id="email" name="email"/><br/><br/>

                <p>What gear do you own? (Check all that apply)</p>
                <label><input type="checkbox" name="gear" value="skis"/> Skis</label>
                <label><input type="checkbox" name="gear" value="boots"/> Boots</label>
                <label><input type="checkbox" name="gear" value="helmet"/> Helmet</label><br/><br/>

                <p>What is your skiing level?</p>
                <label><input type="radio" name="level" value="beginner"/> Beginner</label>
                <label><input type="radio" name="level" value="intermediate"/> Intermediate</label>
                <label><input type="radio" name="level" value="advanced"/> Advanced</label><br/><br/>

                <label htmlFor="comments">Additional Comments:</label><br/>
                <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br/><br/>

                <label htmlFor="resort">Favorite Ski Resort:</label>
                <select id="resort" name="resort">
                    <option value="whistler">Whistler</option>
                    <option value="chamonix">Chamonix</option>
                    <option value="parkcity">Park City</option>
                    <option value="hakuba">Hakuba Valley</option>
                </select><br/><br/>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Form1;