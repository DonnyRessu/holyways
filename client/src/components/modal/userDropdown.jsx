import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { BsFillTriangleFill } from 'react-icons/bs'
import { FaRegUser, FaDonate } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'
import { Link, useNavigate } from "react-router-dom"

const UserDropdown = () => {
    const navigate = useNavigate()
    const [_, userDispatch] = useContext(UserContext)
    const navigateHome = () => {
        navigate('/')
        console.log('logout succes')
        userDispatch({ type: 'LOGOUT' })
        window.location.reload()
    }
    return (
        <div className="relative mt-12">
            <div className={`absolute top-full z-20 right-9 text-zinc-800 mt-1`}>
                <BsFillTriangleFill />
            </div>
            <div className={`absolute w-40 top-full right-7 mt-4 rounded-md py-2 bg-zinc-800 z-10`}>
                <Link to={'/profile'} className="flex items-center cursor-pointer gap-2 font-semibold px-5 mb-2">
                    <FaRegUser className="text-xl text-red-700" /> Profile
                </Link>
                <Link to={'/raise-fund'} className="flex items-center cursor-pointer gap-2 font-semibold px-5 mb-2">
                    <FaDonate className="text-xl text-red-700" />Raise Fund
                </Link>
                <hr className="w-full h-2" />
                <Link onClick={navigateHome} className="flex items-center cursor-pointer gap-2 font-semibold px-5">
                    <IoLogOut className="text-xl text-red-700" /> Logout
                </Link>
            </div>
        </div>
    )
}

export default UserDropdown