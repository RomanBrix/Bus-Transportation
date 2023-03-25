import TextField from '@mui/material/TextField';
import axios  from 'axios';
import { useState } from 'react';




function FastCall(props) {

    const [number, setNumber] = useState(null);
    console.log(number);
    return (
        <div className="fastCall centered" style={{backgroundImage: `url(/src/fastcall.jfif)`}} id={'fast-call'}>
            <div className="container">
                <h2>Бажаєте, щоб ми передзвонили?</h2>
                <h3>Введіть номер і ми незабаром зателефонуємо</h3>
                <div className="inputs">
                    <TextField id="number" label="Номер телефону (380992223344)" variant="outlined" sx={{ width: 300 }} onChange={({target})=>{
                            setNumber(target.value)
                        }}/>
                        <div className="btn" onClick={()=>{goCall()}}>Чекаю на дзвінок</div>
                </div>
            </div>
        </div>
    )


    function goCall() {
        
        
        console.log(number)
        if(number && number.length > 6 ){
            axios.get('https://8cce-193-201-199-4.ngrok.io/call', {
                params: {
                    number: number
                }})
            .then((res)=>{
                console.log(res);
                if(res.data.status){
                    alert('Чекайте на дзвiнок') 
                }else{
                    alert('произошла ошибка, свяжитесь с нами другим способом и дайте знать об ошибке')
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            alert('Введите телефон')
        }
    }
}


export default FastCall;