import { useQuery } from 'react-query';
import foto3 from '../images/foto3.png';
import { API } from '../config/api';
import { Link, useParams } from 'react-router-dom';

const CardDonate = () => {
    const { id } = useParams()

    const { data: donation } = useQuery('danateDetailCache', async () => {
        const response = await API.get('/donations');
        return response.data.data
    })

    console.log('babiii ', donation)
    return (
        <>
        <div className='bg-slate-100 text-center pb-10' >
            <h1 className='text-xl pt-10 pb-10 text-red-700 font-bold'>Donate Now</h1>
            <div className='flex w-2/3 mx-auto gap-10'>
                {donation?.map((donation) => (
                <div key={donation?.id} className='w-60 h-[400px] bg-white'>
                    <img className='w-full h-1/2' src={donation?.image} />
                    <Link to={`/detail-donate/${donation?.id}`}>
                    <h1 className='px-2 text-black font-bold py-1'>{donation?.title}</h1>
                    </Link>
                    <p className='px-2'>{donation?.description}</p>
                    <progress className="progress progress-error w-full px-2" value="40" max="100"></progress>
                    <div className='flex px-2 justify-between pt-3'>
                        <div>
                            <p>Rp {donation?.goal}</p>
                        </div>
                        <div>
                            <button className='bg-red-700 text-white px-4 rounded-lg'>Donate</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default CardDonate