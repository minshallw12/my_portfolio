import FreshDonut from '../components/donut/FreshDonut'

export default function Intro() {


    return (
        <div className="intro_container">
            <div className="left_container">
                <div className="pho">
                    <p align="center">
                        <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=600&height=100&lines=Fullstack+Software+Engineer...;U.S.+Navy+submarine+veteran...;Web3+Enthusiast...;Dark+Web+Enthusiast...;Security+Enthusiast...;Hardware+Enthusiast...;Computer+super+nerd..."/></a>
                    </p>
                </div>
                <div className="ascii_art_container">
                    <FreshDonut/>
                </div>
                <div className="spinning_caption">
                    <div>“Nothing in the world can take the place of persistence. </div>
                    <div>Talent will not; nothing is more common than unsuccessful men with talent. </div>
                    <div>Genius will not; unrewarded genius is almost a proverb.</div>
                    <div>Education will not; the world is full of educated derelicts.</div>
                    <div>Persistence and determination alone are omnipotent." - Calvin Coolidge</div>
                </div>
            </div>
            <div className="right_container">
                <div className="container_textbox summary">
                    <p>Navy Veteran with an entrepreneurial spirit that has an insatiable desire to learn and grow in the field of software engineering. Aspiring to help companies build best in class software solution that focus on meeting their ever evolving customer demands with mentorship from senior software engineers.</p>
                </div>
                <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width ="25"></img><b>My Skills</b>
                <div className='myskills'>
                    <div className='tech_stack padding'>
                        <span>Tech Stack:</span>
                        <ul>
                            <li>React.js</li>
                            <li>Bootstrap/ MUI</li>
                            <li>Django</li>
                            <li>APIs</li>
                            <li>PostgreSQL</li>
                            <li>AWS Cloud</li>
                        </ul>
                    </div>
                    <div className='DevOps padding'>
                        <span>Other:</span>
                        <ul>
                            <li>Git & Github</li>
                            <li>RDMs</li>
                            <li>Jira / Trello</li>
                            <li>Agile collaboration</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                    <div className='FinTech padding'>
                        <span>FinTech</span>
                        <ul>
                            <li>Blockchain Networks</li>
                            <li>Solidity</li>
                            <li>Truffle</li>
                            <li>Ganache</li>
                            <li>Ethereum Virtual Machine</li>
                        </ul>
                    </div>

                </div>

                <div className="container_textbox">My Certifications
                    <div>
                        <ul>
                            <li>Full Stack Software Engineering Certificate - Code Platoon</li>
                            <li>AWS Cloud Practitioner - Amazon</li>
                            <li>Certified SAFe 6 Practitioner - Scaled Agile</li>
                            <li>Certified Solidity Developer - The Blockchain Council</li>
                            <li>Online Degree in Cryptocurrency & Trading - The Blockchain Council</li>
                            <li>Advanced Leadership Certificate - National Society of Leadership & Success</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )


}