import { useContext } from 'react'
import fotoprofile from '../images/FotoProfile.png'
import { UserContext } from '../context/userContext'
import { useQuery } from 'react-query'
import { API } from '../config/api'
import { data } from 'autoprefixer'

const Profile = () => {
    const [userState, _] = useContext(UserContext)
    console.log("kk", userState)

    // const {data: user,} = useQuery('profile', async () => {
    //     const response = await API.get(`user/${userState.user.id}`);
    //     return response.data.data;
    //   });
    
    // window.location.reload()
    return (
        <>
        <div className='flex bg-slate-50 font-bold h-[600px] justify-around'>
            <div>
                <h1 className='text-xl text-black pt-10'>My Profile</h1>
                {userState && (
                <div className='flex gap-7 pt-5'>
                    <div>
                        <img className='w-56' src={userState?.user.image} />
                    </div>
                    <div>
                        <div className='pb-3'>
                            <h2 className='text-red-700'>Full Name</h2>
                            <p>{userState?.user.fullname}</p>
                        </div>
                        <div className='pb-3'>
                            <h2 className='text-red-700'>Email</h2>
                            <p>{userState?.user.email}</p>
                        </div>
                        <div className='pb-3'>
                            <h2 className='text-red-700'>Phone</h2>
                            <p>{userState?.user.phone}</p>
                        </div>
                        <div>
                            <h2 className='text-red-700'>Address</h2>
                            <p>{userState?.user.address}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div>
                <h1 className='text-xl text-black pt-10 pb-5'>History Donation</h1>
                <div className=' bg-white w-[400px] shadow-slate-600 shadow-lg rounded'>
                    <h2 className='px-5 py-2 text-black'>The Strength of People. Power of Comunnity </h2>
                    <p className='px-5'><span className='text-black'>Saturday</span>, 12 April 2021</p>
                    <div className='flex px-5 justify-between pt-2 py-2'>
                        <p className='text-red-500'>Total : Rp 45.000</p>
                        <button className='px-5 bg-green-100 text-green-700'>Finished</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile