import { ReactComponent as Logo} from '../svg/logo.svg';
import { ReactComponent as Telega} from '../svg/telega.svg';
import { ReactComponent as Viber} from '../svg/viber.svg';
import { ReactComponent as WhatsApp} from '../svg/whatsapp.svg';


function Header(props) {
    return (
        <div className="header centered">
            <div className="container">
                <div className="logo">
                    <Logo/>
                </div>
                <div className="right">
                    <ul className="menu">
                        <li onClick={()=>{
                            
                            document.getElementById("rev").scrollIntoView();
                        }}>Відгуки</li>
                        <li onClick={()=>{
                            
                            document.getElementById("about").scrollIntoView();
                        }}>Про нас</li>
                        <li><a href="tel:+380961563756">+380 96 156 37 56</a></li>
                    </ul>
                    <ul className="socials">
                        <li><a href="whatsapp://send?phone=420773610641" target='_blank'><WhatsApp/></a></li>
                        <li><a href="tg://resolve?domain=yuriitalavera" target='_blank'><Telega/></a></li>
                        <li><a href="viber://contact?number=%2B380961563756"><Viber/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Header;