import logopayment from '../../images/logo-payment.png'

const Donation = () => {
    return (
        <>
        <div className="w-1/3 h-64 bg-white mx-auto mt-20 px-5 rounded-md">
            {/* <h2 className="text-3xl text-black font-bold pt-3">Login</h2> */}
            <form action="">
                <input type="text" placeholder="Nominal Donation" className="w-full py-3 rounded-lg px-3 mb-3 bg-slate-200 mt-5"/>
                <label for="input" className="flex mt-3 mb-3">
                    <input type="file" placeholder="attach thumbnail" id="input" hidden />
                    <p className="bg-red-700 px-8 py-1 rounded cursor-pointer text-white">Attach Payment</p>
                    <img src={logopayment}  className="absolute z-20 right-[625px] " for="input"/>
                </label>
                <button className="w-full py-3 px-3 bg-red-700 rounded-lg text-white font-bold mb-3 mt-10">Donate</button>
            </form>
        </div>
        </>
    )
}

export default Donation