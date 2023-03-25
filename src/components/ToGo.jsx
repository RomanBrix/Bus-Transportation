import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {ReactComponent as ArrowRight } from '../svg/arrowRight.svg';
import {ReactComponent as Bus } from '../svg/bus.svg';
import { useState } from 'react'; 
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import ruLocale from 'date-fns/locale/uk';
import { format } from 'date-fns'
import axios from 'axios';

function ToGo(props) {
    const options = directions;
    const [from,setFrom] = useState(null);
    const [to,setTo] = useState(null);
    const [date, setDate] = useState(null);
    const [name, setName] = useState(null);
    const [telephone, setTelephone] = useState(null);

    console.log(from)
    console.log(to)
    console.log(name)
    console.log(telephone)
    // console.log(format(date, 'dd.MM(MMMM).yyyy', {locale: ruLocale}));
    return (
        <div className="togo centered">
            <div className="container">
                <div className="mimi-container">
                    <div className="fromto">
                        <Autocomplete
                            id="from"
                            options={options}
                            groupBy={(option) => option.country}
                            getOptionLabel={(option) => option.title}
                            sx={{ width: 300 }}

                            freeSolo={true}
                            value={from}
                            onChange={(event, newValue, reason) => {
                                
                                if (
                                event.type === 'keydown' &&
                                event.key === 'Backspace' &&
                                reason === 'removeOption'
                                ) {
                                    
                                return;
                                }

                                setFrom(newValue);
                            }}
                            onInputChange={(event, newInputValue, reason) => {
                                if (
                                    event.type === 'keydown' &&
                                    event.key === 'Backspace' &&
                                    reason === 'removeOption'
                                    ) {
                                    return;
                                    }
                                setFrom((pr)=>{
                                    return {
                                        ...pr,
                                        title: newInputValue
                                    }
                                });
                            }}
                            renderInput={(params) => <TextField {...params} label="Звідки" />}
                        />

                        <ArrowRight/>


                        <Autocomplete
                            id="to"
                            options={[...options].reverse()}
                            groupBy={(option) => option.country}
                            getOptionLabel={(option) => option.title}
                            sx={{ width: 300 }}
                            freeSolo={true}

                            value={to}
                            onChange={(event, newValue, reason) => {
                                console.log(event)
                                if (
                                event.type === 'keydown' &&
                                event.key === 'Backspace' &&
                                reason === 'removeOption'
                                ) {
                                return;
                                }
                                console.log(newValue)
                                setTo(newValue);
                            }}
                            onInputChange={(event, newInputValue, reason) => {
                                if (
                                    event.type === 'keydown' &&
                                    event.key === 'Backspace' &&
                                    reason === 'removeOption'
                                    ) {
                                    return;
                                    }
                                console.log(newInputValue)
                                setTo((pr)=>{
                                    return {
                                        ...pr,
                                        title: newInputValue
                                    }
                                });
                            }}
                            renderInput={(params) => <TextField {...params} label="Куди" />}
                        />
                    </div>
                    <div className="datePicker">
                        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                            <MobileDatePicker
                                label="Оберіть дату"
                                value={date}
                                onChange={(newDate) => {
                                    setDate(newDate);
                                }}
                                sx={{width: '100%'}}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="ownData">
                        <TextField id="name" label="Ваше і’мя" variant="outlined" sx={{ width: 300 }} onChange={({target})=>{
                            setName(target.value)
                        }}/>
                        <Bus/>
                        <TextField id="tel" label="Номер телефону (380992223344)" variant="outlined" sx={{ width: 300 }} onChange={({target})=>{
                            setTelephone(target.value)
                        }}/>
                    </div>
                    <div className="btns">
                        <div className="btn" onClick={()=>{
                            go()
                        }}>Замовити</div>
                    </div>
                    <div className="text">
                        <p>*Ви можете вибрати місце призначення та/або написати необхідне місто/адресу</p>
                    </div>
                </div>
            
            </div>
        </div>
    )


    function go() {
        if(from === null  || from.length < 1){
            alert('Не заполненно поле "От куда"');
            return
        }

        if(to === null|| to.length < 1){
            alert('Не заполненно поле "Куда"');
            return
        }

        if(date === null || date.length < 1){
            alert('Не заполненно поле "дата"');
            return
        }

        if(name === null || name.length < 1){
            alert('Не заполненно поле "Имя"');
            return
        }
        if(telephone === null || telephone.length < 1){
            alert('Не заполненно поле "Телефон"');
            return
        }
        
        const payload = {
            from,
            to, 
            
            name, telephone,
            date: format(date, 'dd.MM(MMMM).yyyy', {locale: ruLocale})
        }
        // from
        // to 
        // date 
        // name 
        // telephone
        

        axios.get('https://8cce-193-201-199-4.ngrok.io/go', {
                params: payload})
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
    }
}


const directions = [
    {
        country: 'Україна',
        title: 'Київ'
    },
    {
        country: 'Україна',
        title: 'Луцьк'
    },
    {
        country: 'Україна',
        title: 'Житомир'
    },
    {
        country: 'Україна',
        title: 'Рівне'
    },
    {
        country: 'Україна',
        title: 'Львів'
    },
    {
        country: 'Україна',
        title: 'Вінниця'
    },
    {
        country: 'Україна',
        title: 'Тернопіль'
    },
    {
        country: 'Україна',
        title: 'Хмельницький'
    },
    {
        country: 'Чехія',
        title: 'Чехія'
    },
    {
        country: 'Чехія',
        title: 'Прага'
    },
    {
        country: 'Чехія',
        title: 'Брно'
    },
    {
        country: 'Чехія',
        title: 'Острава'
    },
    {
        country: 'Чехія',
        title: 'Пльзень'
    },
    {
        country: 'Чехія',
        title: 'Оломоуц'
    },
    {
        country: 'Чехія',
        title: 'Лiберец'
    },
    {
        country: 'Чехія',
        title: 'Чеські Будейовиці'
    },
    {
        country: 'Чехія',
        title: 'Градец-Кралове'
    },
    {
        country: 'Чехія',
        title: 'Усти-над-Лабем'
    },
    {
        country: 'Чехія',
        title: 'Пардубице'
    },
    {
        country: 'Чехія',
        title: 'Гавиржов'
    },
    {
        country: 'Чехія',
        title: 'Злин'
    },
    {
        country: 'Чехія',
        title: 'Кладно'
    },
    {
        country: 'Чехія',
        title: 'Мост'
    },
    
]
export default ToGo;