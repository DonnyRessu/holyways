import { useContext, useState } from "react"
import { AlertError, AlertSuccess } from "./alert"
import { UserContext } from "../../context/userContext"
import { ModalContext } from "../../context/modalContext"
import { useNavigate } from "react-router-dom"
import { useMutation} from 'react-query'
import { API, setAuthToken } from "../../config/api"

const Login = () => {
    const [userState, userDispatch] = useContext(UserContext)
    const [_, modalDispatch] = useContext(ModalContext)
    let navigate = useNavigate();
    const [message, setMessage] = useState(null)
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const { email, password } = form;

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    };
    console.log(form)
    const handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            const response = await API.post('/login', form);
            if(response){
                userDispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data
                })
                
                modalDispatch({
                    type: 'CLOSE_AUTH_MODAL',
                })
                console.log(response.data.data)
                setAuthToken(response.data.data.token)
                setMessage(<AlertSuccess message= "Login Success"/>)

            }
            // send data to user context
        } catch (err) {
            setMessage(<AlertError message="Login Failed"/>)
        }
    })
    return(
        <>
        <div className="w-1/3 h-64 bg-white mx-auto mt-20 px-5 rounded-md">
            <h2 className="text-3xl text-black font-bold pt-3">Login</h2>
            {message && message}
            <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
                <div className="mb-3 mt-3">
                    <input onChange={handleOnChange} value={email} type="email" name="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-slate-300"/>
                </div>
                <div>
                    <input onChange={handleOnChange} value={password} type="password" name="password" placeholder="Password" className="w-full px-3 py-2 rounded-md bg-slate-300" />
                </div>
                <button type="submit" className="w-full bg-red-700 mt-3 px-3 py-2 rounded-md text-white">Login</button>
                <p className="text-center text-black mt-2">don't have an account? click <span className="font-bold cursor-pointer" onClick={() => modalDispatch({ type: 'REGISTER_MODAL'})}>here</span></p>
            </form>
        </div>
        </>
    )
}

export default Login