import { useParams } from 'react-router-dom'
import fotoDetailDonate from '../images/fotoDetailDonate.png'
import { useQuery } from 'react-query'
import { API } from '../config/api'

const ViewFund = () => {
    const { id } = useParams()
    const { data: detailDonation } = useQuery("donationDetailCache", async () => {
        const response = await API.get(`/donation/${id}`)
        console.log(response.data.data)
        return response.data.data
    })
    console.log('JEMBUTTT ', detailDonation)
    return (
        <>
        <div className="bg-slate-100 h-full pb-10">
            <div className="flex w-2/3 mx-auto justify-between pt-10 gap-10">
                <div>
                    <img className='w-[700px]' src={detailDonation?.image} />
                </div>
                <div>
                    <h1 className='text-black font-bold text-xl'>{detailDonation?.title}</h1>
                    <p className='pt-10'><span className='text-red-500'>Rp 25.000.000</span> Gathered From <span>Rp {detailDonation?.goal}</span></p>
                    <progress className="progress progress-error w-80" value="40" max="100"></progress>
                    <div className='flex justify-between pb-7'>
                        <div>
                            <p className='text-black'><span className='font-bold'>200</span> Donation</p>
                        </div>
                        <div >
                            <p className='pr-32 text-black'><span className='font-bold'>150</span> More Day</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-justify'>{detailDonation?.description}</p>
                    </div>
                    <div className='pt-4'>
                        <button className='bg-red-600 w-full rounded py-1 text-white'>Donate</button>
                    </div>
                </div>
            </div>
            <div className='w-2/3 mx-auto pt-10'>
                <h1 className='text-2xl font-bold text-black'>List Donation (200)</h1>
                <div className='bg-white px-2 py-2'>
                    <p className='text-black font-bold'>Andi</p>
                    <p className='text-black text-sm'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                    <p className='text-red-500 text-sm'>Total : Rp 45.000</p>
                </div>
                <div className='bg-white px-2 py-2 mt-2'>
                    <p className='text-black font-bold'>Jamal</p>
                    <p className='text-black text-sm'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                    <p className='text-red-500 text-sm'>Total : Rp 45.000</p>
                </div>
                <div className='bg-white px-2 py-2 mt-2'>
                    <p className='text-black font-bold'>Udin</p>
                    <p className='text-black text-sm'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                    <p className='text-red-500 text-sm'>Total : Rp 45.000</p>
                </div>
            </div>
            <div className='w-2/3 mx-auto pt-10 '>
                <h1 className='text-2xl font-bold text-black'>Donation has not been approved (10)</h1>
                <div className='bg-white px-2 py-2 flex justify-between items-center mt-5'>
                    <div>
                        <p className='text-black font-bold'>Zain</p>
                        <p className='text-black text-sm'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                        <p className='text-red-500 text-sm'>Total : Rp 45.000</p>
                    </div>
                    <div className='mr-10'>
                        <button className='bg-red-700 px-10 rounded-lg text-white'>View</button>
                    </div>
                </div>
                <div className='bg-white px-2 py-2 flex justify-between items-center mt-5'>
                    <div>
                        <p className='text-black font-bold'>Fadhil</p>
                        <p className='text-black text-sm'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                        <p className='text-red-500 text-sm'>Total : Rp 45.000</p>
                    </div>
                    <div className='mr-10'>
                        <button className='bg-red-700 px-10 rounded-lg text-white'>View</button>
                    </div>
                </div>
                <div className='bg-white px-2 py-2 flex justify-between items-center mt-5'>
                    <div>
                        <p className='text-black font-bold'>Radhif</p>
                        <p className='text-black text-sm'><span className='font-bold'>Saturday</span>, 12 April 2021</p>
                        <p className='text-red-500 text-sm'>Total : Rp 45.000</p>
                    </div>
                    <div className='mr-10'>
                        <button className='bg-red-700 px-10 rounded-lg text-white'>View</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ViewFund