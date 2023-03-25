




function Cars(props) {
    

    return (
        <div className="cars centered">
            <div className="container">
                <div className="imgs">
                    <img src="/src/car3.png" alt="car3" />
                    <img src="/src/car2.png" alt="car2" />
                    <img src="/src/car1.png" alt="car1" />
                </div>
                <div className="text">
                    <p>
                        Наш автопарк налічує <span>10</span> комфортабельних та швидких автобусів. Наші водії –  досвідчені та надійні професіонали, які забезпечать якість та безпеку Вашої поїздки.
                    </p>
                    <p>*також всі наші авто повні комфорту та всі оснащені Wi-Fi та іншими предметами для зручної подорожі</p>
                </div>
            </div>
        </div>
    )
}



export default Cars;