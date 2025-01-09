import React from 'react'
import './ResetPage.scss'
import InputEmail from '../components/InputEmail/InputEmail'
import Cta from '../components/cta/Cta'

function ResetPage() {
    return (
        <>
            <div className='wrapper-reset'>
                <div className='wrapper-side-reset'>
                    <div className='header-reset'>
                        <span className='h1-reset'>Reset your password ✍🏾</span>
                        <span className='p-reset'>Enter your email address to receive a reset link. Follow the instructions to set a new password securely.</span>
                    </div>
                    <div className='header-reset-form'>
                        <div className='wrapper-input-email'>
                            <InputEmail />
                        </div>
                        <div className='wrapper-input-cta-get'>
                            <Cta
                                label={'get a link'}
                                type={'get'} />
                        </div>

                    </div>

                </div>

                <div className='wrapper-side-cover'>
                </div>
            </div>

        </>
    )
}

export default ResetPage