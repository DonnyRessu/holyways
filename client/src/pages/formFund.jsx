import { useState } from "react"
import { useMutation } from "react-query";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";
import { AlertError, AlertSuccess } from "../components/modal/alert";

const FormFund = () => {
    let navigate = useNavigate()
    const [message, setMessage] = useState(null)
    const [form, setForm] = useState({
        title: '',
        image: '',
        goal: '',
        description: '',
    });

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === 'file' ? e.target.files : e.target.value
        });
    };
    console.log(form)


    const  handleOnSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            const config = {
                headers: {
                  'Content-type': 'multipart/form-data',
                },
            };

            const formData = new FormData();
            formData.set('title', form.title)
            formData.set('image', form.image[0], form.image[0].name);
            formData.set('goal', form.goal);
            formData.set('description', form.description);

            const response = await API.post('/donation', formData, config)
            setMessage(<AlertSuccess message='donation succes' />)
            console.log('donation success', response)
            navigate('/raise-fund')
        } catch (err) {
            console.log('donation failed', err)
            setMessage(<AlertError message='donation failed' />)
        }
    })

    return (
        <>
        <div className="bg-slate-100 px-56 h-[600px]">
            {message && message}
            <h1 className="text-black font-bold text-2xl pt-20">Make Raise Fund</h1>
            <form onSubmit={(e) => handleOnSubmit.mutate(e)} className="mt-10">
                <input onChange={handleOnChange} value={form.title} name="title" className="w-full bg-slate-300 px-3 py-1 rounded text-black" type="text" placeholder="Title" />
                <label for="input" className="flex mt-3">
                    <input onChange={handleOnChange} name="image" type="file" placeholder="attach thumbnail" id="input" hidden />
                    <p className="bg-red-700 px-5 py-1 rounded cursor-pointer text-white">Attach Thumbnail</p>
                </label>
                <input onChange={handleOnChange} value={form.goal} name="goal" className="w-full bg-slate-300 px-3 py-1 rounded text-black mt-3" type="text" placeholder="Goals Donation" />
                <textarea onChange={handleOnChange} value={form.description} name="description" className="w-full bg-slate-300 px-3 py-1 rounded text-black mt-3 h-32 resize-none" placeholder="Desription" />
                <div className="text-right mt-10">
                    <button className="bg-red-700 px-16 py-1 text-white">Public Fundraising</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default FormFund