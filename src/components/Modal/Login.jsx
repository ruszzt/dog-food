import React, {useState, useContext} from "react";
import Ctx from "../../Ctx";

export default ({change, close}) => {
    const [inp1, setInp1] = useState(""); /*имейл*/ 
    const [inp2, setInp2] = useState(""); /*пароль*/
    const {api, setToken} = useContext(Ctx);

    const sendForm = (e) => {
        e.preventDefault();
        const body = {
            email: inp1,
            password: inp2
        }
        api.signIn(body)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("ruszzt", JSON.stringify(data.data));
                localStorage.setItem("token8", data.token);
                setToken(data.token);
                setInp1("");
                setInp2("");
                close(false);
                if (data.err) {
                    alert(data.message);
                }
            })
    }

    return (
        <form onSubmit={sendForm}>
            <input 
                type="email" 
                placeholder="Электронная почта" 
                value={inp1} 
                required
                onChange={(e) => {setInp1(e.target.value)}}
            />
            <input 
                type="password" 
                placeholder="Пароль" 
                value={inp2} 
                onChange={(e) => {setInp2(e.target.value)}}
            />
            <button className="btn" type="submit">Войти</button>
            <button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>Зарегистрироваться</button>
        </form>
    )
}