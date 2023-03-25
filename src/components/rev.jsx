import { ReactComponent as Viber } from '../svg/viber.svg'


function Rev(props) {
    
    return (
        <div className="Rev centered"  style={{backgroundImage: `url(/src/intro.jfif)`}} id="rev">
            <div className="container">
                <p>
                    Актуальні відгуки ви можете переглянути в закритій групі в Viber
                </p>
                <Viber/>
            </div>
        </div>
    )
}


export default Rev;