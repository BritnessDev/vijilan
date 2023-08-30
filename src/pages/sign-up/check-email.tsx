import React from 'react';
import CircleCheckMark from '../../assets/img/circle-check-mark.svg';

import { IOutlineButton } from '../../components/UI/Button';


function CheckEmail() {
    return (
        <div className="bg-themeBg1 w-[100vw] h-[100vh] flex justify-center items-center md:px-24 px-2">
            <div className="p-4 max-w-[713px]">
                <div className="md:py-16 sm:px-28 px-8 py-8 shadow-card flex justify-center flex-col bg-white rounded-lg">
                    <img src={CircleCheckMark} className='w-10 mx-auto'/>
                     <p className="mt-6 text-textGray1 text-base max-w-[530px] text-center font-normal">
                        Your registration was successfull!
                    </p>
                    <p className="mt-2.5 w-full text-center text-2xl font-inter">
                        <span className="font-semibold">Please, check your email to activate your account.</span>
                    </p>

                    <p className="mt-2.5 w-full text-[#46505E] text-center text-xs font-normal">
                        <span>An email has been sent to <span className="font-bold">john.doe@email.com.</span> If you don&lsquo;t receive this email in 15 minutes or less, please request a new link by clicking on the button below:</span>
                    </p>

                    <p className="mt-8 w-full text-[#46505E] text-center text-xs font-normal">
                        <span><span className="font-bold">Please note:</span> You will receive an email from Vijilan with the subject line ”Account details for Portal”. If you don&lsquo;t see the email, please check your spam folder. In case you need help, please contact us at <span className="font-bold">support@vijilan.com</span> or +1 (954) 334-9988</span>
                    </p>
                    
                    <div className="mt-6 flex justify-center">
                        <div className="flex flex-col items-center">
                            <IOutlineButton
                                onClickHandler={() => {
                                    console.log('');
                                }}
                                Label={
                                    <div className="font-inter font-medium uppercase">
                                        request new link 
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckEmail;
