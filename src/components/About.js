import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-content">
                <h1>ABOUT PAGE</h1>
                <h2>You made it to the about page. That means the routes are working. Yay!</h2>
                <p>It also means you want to know more about this app. This app will be of use to you if:</p>
                <ul>
                    <li>A. You want to get all the legendary loot you can get your hands on in Borderlands 2!</li>
                    <li>B. You want to do a loot run. LOOT RUN!!!!!</li>
                    <li>C. You just like the word loot.</li>
                </ul>
                <h3>Welcome!</h3>
                <p>Regardless of your reason for being here, welcome! I created this app as my final project
                    for the Flatiron School's Online Web Developer Bootcamp. I love Borderlands 2 and after
                    playing the main campaign through the first time, there's nothing better than going
                    on a loot run. 
                </p>
                <h3>Loot Run!</h3>
                <p>What's a loot run you ask? It's when you play through the story of
                    the game and farm all the legendary loot along the way. A lot of story mission bosses have
                    rare chance to drop particular legendary items, and some areas have random enounters with special
                    enemies who do too. It's a loot collectors dream! The only problem is, it's hard to know who drops what, and when
                    in the story you should try to farm it. There are some resources out there, but none that 
                    really did what I wanted them to. Which is, to show me all the legendary loot there is to collect in
                    the game (in a clean, easy to see manner) and also to show me the farmable legendary loot in 
                    some kind of story mode so I could do a loot run. 
                </p>
                <h3>Coding to the Rescue!</h3>
                <p>Enter my Borderlands 2 Lootsplosion!!!! App. Here to suit all your loot collecting needs! 
                    You can see a list of all the legendary loot and their info on the Homepage of the app. 
                    If you'd like to try your hand at a loot run, head over to the Story Mode
                    page and follow the guide. It's laid out to show you what loot you can acquire and at what point 
                    in the story (follow those handy-dandy numbers to see the right order). 
                </p>
                <p>P.S. Don't like the celebratory Lootsplosion fireworks on the homepage? Just click anywhere
                    on the header to toggle them on or off. 
                </p>
                <h4>Sincerely, <br /> Jenni</h4>
                <h5>Siren, Mechromancer, and (occasionally) Assassin</h5>
            </div>
        </div>
    )
}

export default About;