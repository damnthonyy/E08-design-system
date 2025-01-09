import React from 'react'
import InputPassword from '../components/InputPassword/InputPassword'
import InputEmail from '../components/InputEmail/InputEmail'
import './SignUp.scss'


function SignUp() {
    return (
        <>
            <div className='wrapper-form'>
                <div className='form-content'>
                    <InputEmail />
                    <InputPassword />
                    < a href='/Reset.jsx' >
                        <span className='fg-pwd'>Forgot Password ?</span>
                    </a>
                </div>

                <div className='wrapper-side-cover'>

                </div>


            </div>

        </>

    )
}

export default SignUp