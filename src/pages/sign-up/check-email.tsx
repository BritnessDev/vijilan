import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function CheckEmail() {
    return (
        <div className='bg-gray-500 flex items-center h-screen'>
            <div className='mx-auto my-auto login-block bg-white max-w-lg'>
                <div className='py-16 px-[100px]'>
                    <div className='px-16'>
                        <div className='flex justify-center'>
                            <CheckCircleOutlineIcon className='text-3xl text-[#40B17B]' />
                        </div>
                        <div>
                            Your registration was successfull!
                        </div>
                        Please, check your email to activate your account.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckEmail;
