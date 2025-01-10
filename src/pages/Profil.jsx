import React from 'react'
import InputEmail from '../components/InputEmail/InputEmail'
import InputPassword from '../components/InputPassword/InputPassword'
import './Profil.scss'
import Cta from '../components/cta/Cta'

function Profil() {
    return (
        <>
            <div className='wrapper-Profil'>
                <div className='profil-content'>
                    <div className='pic-profil-name'>
                        <div className='profil'>

                        </div>
                        <span className='name'>
                            JohnDoe
                        </span>
                    </div>
                    <div className='links'>
                        <span className='link'>
                            Profile
                        </span>
                        <span className='link'>
                            Setting
                        </span>
                        <span className='link'>
                            Lorem
                        </span>

                    </div>
                </div>
                <div className='more-info'>
                    <span className='title-more-info'>
                        Information
                    </span>
                    <div className='wrapper-input-email'>
                        <div className='wrapper-input'>
                            <InputEmail />
                        </div>
                        <div className='wrapper-input'>
                            <InputPassword
                                value={'Loremipsum123@'}
                                variant={'active'} />
                        </div>

                    </div>
                    <div className='line'></div>

                    <div className='delete-account'>
                        <div className='top-account'>
                            <span className='h1-account'>
                                Delete my account
                            </span>
                            <span className='p-account'>
                                This action is permanent and will result in the deletion of all your data associated with this account. If you are sure you want to continue, confirm your choice below.
                            </span>
                            <div className='wrapper-input-del'>
                                <Cta type={'delAccount'}
                                    label={'Delete Account'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profil