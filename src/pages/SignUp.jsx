import React from 'react'
import InputPassword from '../components/InputPassword/InputPassword'
import InputEmail from '../components/InputEmail/InputEmail'
import './SignUp.scss'
import Cta from '../components/cta/Cta';


function SignUp() {

    return (
        <>
            <div className='wrapper-form'>
                <div className='wrapper-side-form'>

                    <div className='header'>
                        <span className='header-h1'>
                            welcome back 👋🏾
                        </span>
                        <span className='header-p'>
                            The quick brown fox jumps over the lazy dog lorem ipsum.
                        </span>
                    </div>

                    <div className='form-content'>
                        <InputEmail />
                        <InputPassword />
                        < a href='/Reset' >
                            <span className='fg-pwd'>Forgot Password ?</span>
                        </a>
                        <Cta type={'signIn'} />
                        <div className='wrapper-side-sign-in'>
                            <div className='line-style'>
                                <div className='line-left'></div>
                                <span className='or-style'>Or</span>
                                <div className='line-right'></div>
                            </div>
                            <span className='link-to-sign-in'>Don’t you have an account ? <span className='style-span'>Sign up</span></span>
                        </div>
                    </div>

                </div>

                <div className='wrapper-side-cover'>
                    {/* <img src={'../../public/imgs/pic-login.jpeg'} alt='#1' /> */}
                </div>





            </div>

        </>

    )
}

export default SignUp