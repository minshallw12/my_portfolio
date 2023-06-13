import FreshDonut from '../components/donut/FreshDonut'

export default function Intro() {


    return (
        <div className="intro_container">
            <div className="left_container">
                <span id='welcomemessage'>Strobing Welcome Message Here!</span>
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
                <div className="photo">interesting photo</div>
                <div className="container_textbox">Notable Achievements
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>
            </div>

        </div>
    )


}