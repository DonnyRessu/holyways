import { useQuery } from 'react-query';
import foto3 from '../../images/foto3.png'
import { API } from '../../config/api';


const CardViewFund = () => {
    let { data: raisefund } = useQuery('donationRaiseFundCache', async () => {
        const response = await API.get('/donation-by-user');
        return response.data.data;
      });
    
      console.table(raisefund)

    return (
        <div className=" flex px-32 pt-10 gap-10">
            {raisefund?.map((item) => (
            <div className='w-1/4 h-[400px] bg-white'>
                <img className='w-full h-1/2' src={item?.image} />
                <h1 className='px-2 text-black font-bold py-1'>{item?.title}</h1>
                <p className='px-2'>{item?.description}</p>
                <progress className="progress progress-error w-full px-2" value="40" max="100"></progress>
                <div className='flex px-2 justify-between pt-3'>
                    <div>
                        <p>Rp {item?.goal}</p>
                    </div>
                    <div>
                        <button className='bg-red-700 text-white px-2 rounded-lg'>View Fund</button>
                    </div>
                    </div>
            </div>
            ))}
        </div>
    )
}

export default CardViewFund