import logo from '../../images/cp.jpeg'

export default function CurrentlyWorkingAt() {
    return (
        <div className='currently_working_at'>
            <span className="xs-padding">Currently working at:</span>
            <span className="xs-padding"><a href="https://www.codeplatoon.org/">Code Platoon</a></span>
            <div>
            <a href="https://www.codeplatoon.org/"><img id="logo" src={logo} alt="current logo"/></a>
            </div>
        </div>
    )
}