import React, { useContext, useEffect, useState } from 'react';
import '../css/landingpage.css'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword as signInWithEmail,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { MenuButton, List } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Sidebar from './Header';
import google from '../img/google.png'
import github from '../img/github.png'
import wheel from '../img/icons8-spinning-circle.gif'
/* import { BoxesLoader } from "react-awesome-loaders"; */
function Login() {
    const [showNavItems, setShowNavi] = useState(window.innerWidth);
    const [sideNavbar, setSideNAvbar] = useState(false)
    const [info, setInfo] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const ref = useRef();
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [loader, setLoader] = useState(false)
    const closeSidebar = (e) => {
        if (e.target === ref.current) {
            setSideNAvbar(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowNavi(window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setShowNavi(window.innerWidth)
            })
        }

    }, [])
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            setInfo(userCredential);
            navigate('/app');
        } catch (error) {
            console.error(error);
            setInfo({ error: error.message });
        }
    };
    /*   const signupWithEmailAndPassword = async (e) => {
          e.preventDefault();
          try {
              const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              setInfo(userCredential);
              navigate('/app');
          } catch (error) {
              console.error(error);
              setInfo({ error: error.message });
          }
      }; */
    const signInWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try {
            setLoader(true)
            const userCredential = await signInWithEmail(auth, email, password);
            setInfo(userCredential);
            navigate('/app');
        } catch (error) {
            console.error(error);
            setInfo({ error: error.message });
        } finally {
            setLoader(false)
        }
    };
    const signUp = async (e) => {
        e.preventDefault();
        try {
            setLoader(true)
            const userCredential = await signInWithPopup(auth, provider);
            setInfo(userCredential);
            navigate('/app');
        } catch (error) {
            console.error(error);
            setInfo({ error: error.message });
        } finally {
            setLoader(false)
        }
    };
    const handleNavbar = () => {
        setSideNAvbar(true)
    }
    const takeToSignUp = () => {
        navigate('/')
    }

    return (
        <div className='main-landing'>
            <div className='rotat'>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="1920" height="878" viewBox="0 0 1920 878" fill="none">
                    <path d="M-156.261 27L1929.5 -303.352L2064.15 546.794L-21.6108 877.145L-156.261 27Z" fill="#099DFF" />
                </svg></div>
            <div id='home'>
                <div className='navbar'>
                    <div className='logo'>
                        <p>TaskFlow</p>
                    </div>


                    {showNavItems > 700 ?
                        <div className='nav-items'>
                            <a href="#home">Home</a>
                            <a href="#features">Features</a>
                            <a href="#upgrade">Upgrade</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div> : <List className='menu-button' size={34} onClick={handleNavbar} color='white' />}
                </div>


                {sideNavbar &&
                    <div className={`side-navbar ${Sidebar ? 'transition' : ""}`} onClick={closeSidebar} ref={ref}>
                        <div className='nav-items-sidebar'>
                            <a href="#home" onClick={() => setSideNAvbar(false)}>Home</a>
                            <a href="#features" onClick={() => setSideNAvbar(false)}>Features</a>
                            <a href="#upgrade" onClick={() => setSideNAvbar(false)}>Upgrade</a>
                            <a href="#about" onClick={() => setSideNAvbar(false)}>About</a>
                            <a href="#contact" onClick={() => setSideNAvbar(false)}>Contact</a>
                        </div>
                    </div>}


                
                <div className='heading-login'>
                    <div className='landing-heading'>
                        <p>From Chaos  to Clarity:  TaskFlow Simplifies  Your To-Dos</p>
                    </div>


                    <div className='login-page singin'>
                        <h3>Sign In</h3>
                        {info && info.error && <h5>Error!</h5>}
                        <div className='email'>
                            <label>Email</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email...' />
                        </div>
                        <div className='password'>
                            <label>Password</label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Pass...' />
                        </div>
                        <h6>Forgot Password?</h6>
                        <button type='button' className='button-1' onClick={signInWithEmailAndPassword}>
                            {loader ? ' Signing In' : 'Sign In'}</button>
                        {/* <button onClick={signUp}>Sign up with Google</button><br /> */}

                        {/*   {info && info.error && <h1>Error: {info.error}</h1>} */}
                        <div className='line-and-or'>
                            <div className='left-line'></div>
                            <h4>Or</h4>
                            <div className='right-line'></div>
                        </div>
                        <div className='logo-container'>
                            <img className='google-img' onClick={signUp} src={google} alt='google-logo' />
                            <img className='google-img' src={github} alt='google-logo' />
                        </div>
                        <div className='already-user'><h5>Not An User? <span onClick={takeToSignUp}>SignUp</span></h5></div>
                    </div>
                </div>
            </div>
            {loader && < div className='loader'>
                <div className="spining-wheel">
                    <img src={wheel}></img>
                </div>
            </div>}
        </div >
    );
}
export default Login;















