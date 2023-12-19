import React, { useContext,useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/pngwing.com.png';
import logout from '../img/logout-svgrepo-com.svg';
import { getAuth, signOut } from 'firebase/auth';
import { TodoContext } from '../context';
  const User = () => {
  const { setAuthorize,setUser}=useContext(TodoContext)
  const navigate=useNavigate()
  const auth = getAuth();
  const ref = useRef();
  const closeModal = (e) => {
    if (e.target === ref.current) {
      setShowPopUp(false);
    }
  };
  const signout = async () => {
     await signOut(auth)
       .then(() => {
         setUser(null)
         setAuthorize(false)
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };
    const [showPopUp, setShowPopUp] = useState(false);
  const openpopup = () => {
    setShowPopUp(true);
  };
  const closePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <div>
      <div className='user'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='username'>
          <p>Nishant</p>
          <img className='logout' onClick={openpopup} src={logout} alt='Logout' />
          {showPopUp && (
            <div ref={ref} onClick={closeModal} className='popup-content'>
              <div className='popup'>
                <p>Are you sure you want to logout?</p>
                <div className='popup-buttons'>
                  <button onClick={closePopUp}>No</button>
                  <button onClick={() => { closePopUp(); signout();setAuthorize(false) }}>Yes</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
