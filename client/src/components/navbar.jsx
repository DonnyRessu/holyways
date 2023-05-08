import icon from '../images/icon.png'
import Login from './modal/login';
import Register from './modal/register';
import { ModalContext } from '../context/modalContext';
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import avatar from '../images/avatar.png';
import UserDropdown from './modal/userDropdown';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [modalState, modalDispatch] = useContext(ModalContext)
  console.log(modalState)
  const [userState, _] = useContext(UserContext)
  const [userDropdown, setUserDropdown] = useState(false)
  console.log(userDropdown)
  return (
    <>
    <div className="navbar bg-red-700" >
      <div className="flex-1">
        <Link to={'/'}><p className="btn btn-ghost normal-case text-xl pl-20"><img src={icon}/></p></Link>
      </div>
      <div className="flex-none pr-20">
      {/* button login & register */}
      {!userState.isLogin && (
        <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <button onClick = {() => modalDispatch({ type: 'LOGIN_MODAL'})} className='bg-red-700 font-bold text-white'>Login</button>
            </li>
            <li>
              <button onClick={() => modalDispatch({ type: 'REGISTER_MODAL'})} className='bg-white text-red-700 font-bold'>Register</button>
            </li>
        </ul>
        )}
      {/* avatar when user login */}
      {userState.isLogin && (
        <ul>
          <li>
            <img className='cursor-pointer' src={avatar} onClick={() => setUserDropdown(!userDropdown)}/>
          </li>
        </ul>
      )}
      {/* user Dropdown */}
      {userDropdown && (
        <div onClick={() => setUserDropdown(!userDropdown)}>
          <UserDropdown/>
        </div>
      )}
      </div>
    </div>

        {/* Register Modal */}
        {modalState.isRegisterModal && (
          <div className="fixed">
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 w-full h-[200vh] z-10" onClick={() => modalDispatch({ type: 'CLOSE_AUTH_MODAL' })}></div>
            <div className="fixed w-full z-10 flex justify-center">
            <Register className={`absolute w-96 bg-transparent mt-32 p-8 rounded-md z-10`} />
          </div>
          </div>
        )}
      {/* Login Modal */}
      {modalState.isLoginModal && (
        <div className="">
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 w-[200vh] h-[200vh] z-40" onClick={() => modalDispatch({ type: 'CLOSE_AUTH_MODAL' })}></div>
          <div  className="fixed w-full z-40 flex justify-center">
          <Login className={`absolute w-96 bg-transparent mt-32 p-8 rounded-md z-50`} />
        </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
