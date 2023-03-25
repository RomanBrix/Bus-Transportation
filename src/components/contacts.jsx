
import { ReactComponent as Call} from '../svg/call.svg';
import { ReactComponent as Telega} from '../svg/telega.svg';
import { ReactComponent as Viber} from '../svg/viber.svg';
import { ReactComponent as WhatsApp} from '../svg/whatsapp.svg';



function Contacts(props) {
    

    return (
        <div className="contacts centered">
            <div className="container">
                <h2>Ми завжди на зв’язку і очікуємо на Ваші звернення</h2>
                <ul className="left">
                    <li><Call className='call'/> <span><a href="tel:380961563756">+380 96 156 37 56</a></span></li>
                    <li><Call className='call'/> <span><a href="tel:380966351590">+380 96 635 15 90</a></span></li>
                    <li><Call className='call'/> <span><a href="tel:420773610641">+420 77 361 06 41</a></span></li>
                    <li><Call className='call'/> <span><a href="tel:420777294841">+420 77 729 48 41</a></span></li>
                    
                </ul>
                <ul className="right">
                    <li><Viber/> <a href="viber://contact?number=%2B380961563756" target='_blank'><span>+380 96 156 37 56</span></a></li>
                    <li><Viber/> <a href="viber://contact?number=%2B380966351590" target='_blank'><span>+380 96 635 15 90</span></a></li>
                    <li><Viber/> <a href="viber://contact?number=%2B420773610641" target='_blank'><span>+420 77 361 06 41</span></a></li>
                    <li><Viber/> <a href="viber://contact?number=%2B420777294841" target='_blank'><span>+420 77 729 48 41</span></a></li>
                    <li> <Telega/> <a href="tg://resolve?domain=yuriitalavera" target='_blank'><span>+420 77 361 06 41</span></a></li>
                    <li><WhatsApp/>  <a href="whatsapp://send?phone=420773610641" target='_blank'><span>+420 77 361 06 41</span></a></li>
                    <li><WhatsApp/>  <a href="whatsapp://send?phone=420777294841" target='_blank'><span>+420 77 729 48 41</span></a></li>
                </ul>
            </div>
        </div>
    )
}


export default Contacts
