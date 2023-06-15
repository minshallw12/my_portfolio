import headshot from '../../images/headshot.jpeg'

export default function Headshot() {
    return (
        <div className="headshot">
            <img src={headshot} alt="headshot" id="headshot"/>
        </div>
    )
}