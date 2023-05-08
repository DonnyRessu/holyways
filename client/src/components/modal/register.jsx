import { useContext, useState } from "react"
import { ModalContext } from "../../context/modalContext";
import { useMutation } from 'react-query'
// import { Await } from "react-router-dom";
import { API } from "../../config/api";
import { AlertSuccess, AlertError } from "./alert";

 
const Register = () => {
    const [message, setMessage] = useState(null);
    const [_, modalDispatch] = useContext(ModalContext);
    const [form, setForm] = useState({
        email: '',
        password: '',
        fullname: '',
        phone: '',
        address: '',
    })

    const { email, password, fullname, phone, address } = form;

    const handleonChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleonSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const response = await API.post('/register', form);
            console.log('register success : ', response);
            console.log(form)
            setMessage(<AlertSuccess message="Register Success"/>)
            setForm({
                email: '',
                password: '',
                fullname: '',
                phone: '',
                address: '',
            })
        } catch (err) {
            setMessage(<AlertError message="Register Failed"/>)
        }
    })
    return (
        <>
        <div className="w-1/3 h-full bg-white mx-auto mt-14 px-5 rounded-md pb-3">
            <h2 className="text-3xl text-black font-bold pt-3">Register</h2>
            {message && message}
            <form onSubmit={(e) => handleonSubmit.mutate(e)}>
                <div className="mt-3">
                    <input onChange={handleonChange} value={email} type="email" name="email" placeholder="Email" className="w-full px-3 py-2 rounded-md bg-slate-300" required />
                </div>
                <div>
                    <input onChange={handleonChange} value={password} type="password" name="password" placeholder="Password" className="w-full px-3 py-2 rounded-md mt-2 bg-slate-300" required />
                </div>
                <div>
                    <input onChange={handleonChange} value={fullname} type="text" name="fullname" placeholder="Full Name" className="w-full px-3 py-2 rounded-md mt-2 bg-slate-300" required />
                </div>
                <div>
                    <input onChange={handleonChange} value={phone} type="text" name="phone" placeholder="Phone number" className="w-full px-3 py-2 rounded-md mt-2 bg-slate-300" required />
                </div>
                <div>
                    <input onChange={handleonChange} value={address} type="text" name="address" placeholder="Address" className="w-full px-3 py-2 rounded-md mt-2 bg-slate-300" required/>
                </div>
                <button type="submit" className="w-full bg-red-700 mt-2 px-3 py-2 rounded-md">Register</button>
                <p className="text-center text-black mt-2">Already have an account? click <span className="font-bold cursor-pointer" onClick={() => modalDispatch({ type: 'LOGIN_MODAL'})}>here</span></p>
            </form>
        </div>
        </>
    )
}

export default Register