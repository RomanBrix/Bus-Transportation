


function About(props) {
    

    return(
        <div className="about centered" id="about">
            <div className="container">
                <div className="left">
                    <div className="img" style={{backgroundImage: `url(/src/about.jfif)`}}/>
                    <div className="block"><span>300+</span>ПЕРЕВЕЗЕНЬ</div>
                    <div className="block"><span>5000+</span>клієнтів</div>
                    <div className="block"><span>150+</span>МАРШРУТІВ</div>
                </div>
                <div className="right">
                    <h2>Загальна інформація</h2>
                    <p>
                        Компанія "Поїхали з Юріком" існує з 2015 року.
                        За ці роки роботи ми здійснили безліч поїздок за маршрутом Україна-Чехія та зарекомендували себе як одна з найкращих транспортних компаній. Ми дбаємо про ваш комфорт -
                        створюючи максимально безпечні умови подорожей.
                        За кермом завжди досвідчені водії з великим стажем роботи, які підкажуть та допоможуть у випадку необхідності. Доставимо вас до потрібного адресу по бажанню. Перевозимо за будь-яким документом.
                    </p>
                    <p>З нами швидко, якісно, комфортно.</p>
                </div>
            </div>
        </div>
    )
}




export default About