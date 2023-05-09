import CardViewFund from '../components/modal/cardViewFund'
import foto3 from '../images/foto3.png'
import { Link } from 'react-router-dom'

const RaiseFund = () => {
    return (
        <>
        <div className='bg-slate-100 h-[700px] w-full'>
            <div className="pt-5 text-right pr-20">
                <Link to={'/form-fund'}> 
                <button className="bg-red-700 px-7 py-1 rounded text-white">Make Raise Fund</button>
                </Link>
            </div>
            <h1 className='text-2xl font-bold text-black pl-32 pt-5'>My Raise Fund</h1>
            {/* <Link to={'/view-fund'}> */}
            <CardViewFund/>
            {/* </Link> */}
        </div>
        </>
    )
}

export default RaiseFund