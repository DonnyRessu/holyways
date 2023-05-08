import foto3 from '../../images/foto3.png'

const CardViewFund = () => {
    return (
        <div className=" flex px-32 pt-10 gap-10">
                <div className='w-1/4 h-[400px] bg-white'>
                    <img className='w-full h-1/2' src={foto3} />
                    <h1 className='px-2 text-black font-bold py-1'>The Strength of a People. Power of Community</h1>
                    <p className='px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, mollitia.</p>
                    <progress className="progress progress-error w-full px-2" value="40" max="100"></progress>
                    <div className='flex px-2 justify-between pt-3'>
                        <div>
                            <p>Rp 25.000.000</p>
                        </div>
                        <div>
                            <button className='bg-red-700 text-white px-2 rounded-lg'>View Fund</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardViewFund