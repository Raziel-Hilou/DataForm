import { useState } from "react";
import "./Form.css";

import axios from "axios";

function Form()
{
    const [form, setForm] = useState({
        nickname: "",
        age: 0,
        hobby: "",
        favoriteMovie: ""
    });

    function submitHandler( event )
    {
        event.preventDefault();

        const tempForm = {
            nickname: event.target.nickname.value,
            age: event.target.age.value,
            hobby: event.target.hobby.value,
            favoriteMovie: event.target.favoriteMovie.value
        };
        setForm(tempForm);

        axios.post('https://httpbin.org/post', tempForm)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        console.log(tempForm);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Nickname</label>
                <input type={"text"} name={"nickname"}/>
                <br/>

                <label>Age</label>
                <input type={"number"} name={"age"}/>
                <br/>

                <label>Hobby</label>
                <input type={"text"} name={"hobby"}/>
                <br/>

                <label>Favorite movie</label>
                <input type={"text"} name={"favoriteMovie"}/>
                <br/>

                <button type={"submit"}>Send</button>
            </form>
        </>
    );

}

export default Form;