import FreshDonut from '../components/donut/FreshDonut'


export default function Intro() {


    return (
        <div className="intro_container">
            <div className="typing">
                    <p align="center">
                        <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=600&height=100&lines=Fullstack+Software+Engineer...;U.S.+Navy+submarine+veteran...;Web3+Enthusiast...;Dark+Web+Enthusiast...;Security+Enthusiast...;Hardware+Enthusiast...;Computer+super+nerd..."/></a>
                    </p>
                </div>
            <div className='top-container'>
                
                <div>
                    
                </div>
                <div className="left_container">
                    
                    <div className="ascii_art_container">
                        <FreshDonut/>
                    </div>
                    <div className="spinning_caption">
                        
                    </div>
                </div>
                <div className="right_container">
                    <div className="summary">
                        <p className='padding'>I am a military veteran with an entrepreneurial spirit that has an insatiable desire to learn and grow in the field of software engineering.</p>
                        <p className='padding'> I aspire to help companies build best in class software solutions that focus on meeting their ever evolving customer demands with mentorship from senior software engineers.</p>
                    </div>
                </div>
            </div>

            <div className='bottom_container'>
                <div className='xs-padding'>“Nothing in the world can take the place of persistence. </div>
                <div className='xs-padding'>Talent will not; nothing is more common than unsuccessful men with talent. </div>
                <div className='xs-padding'>Genius will not; unrewarded genius is almost a proverb.</div>
                <div className='xs-padding'>Education will not; the world is full of educated derelicts.</div>
                <div className='xs-padding'>Persistence and determination alone are omnipotent." - Calvin Coolidge</div>
            </div>
            <div className='space'></div>
        </div>
    )


}