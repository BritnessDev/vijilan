import React, { useState } from 'react';
import Logo from '../../assets/img/logo.svg';
import { DefaultInput, PasswordInput } from '../../components/UI/Input';
import { BlueButton } from '../../components/UI/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ChatDialog } from '../../components/UI/Dialog';

export const SignIn = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="bg-themeBg1 w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="p-4 w-full flex justify-center">
                <div className="md:py-16 md:px-24 py-8 px-12 shadow-card flex justify-center flex-col rounded-lg bg-white md:w-[752px] w-full">
                    <img alt="no logo" src={Logo} className="h-14" />
                    <p className="mt-2.5 w-full text-center text-2xl font-inter">
                        <span className="text-textBlue1 font-semibold">Login</span> into Portal
                    </p>
                    <p className="mt-6 text-textGray1 text-sm max-w-[530px] text-center">Please insert your credentials below</p>
                    <div className="mt-6 flex flex-col gap-y-4">
                        <DefaultInput
                            placeholder="Email address"
                            value={email}
                            setValue={(e) => {
                                setEmail(e);
                            }}
                            cssClasses="w-full"
                        />
                        <PasswordInput
                            placeholder="Password"
                            value={password}
                            setValue={(e) => {
                                setPassword(e);
                            }}
                            cssClasses="!w-full !m-0"
                        />
                    </div>
                    <a className="mt-2 text-sm font-inter font-medium text-textBlue1">Forgot your pasword?</a>
                    <div className="mt-10 flex md:justify-end md:items-start items-center gap-2 md:flex-row flex-col">
                        <div className="flex flex-col items-center">
                            <BlueButton
                                onClickHandler={() => {
                                    console.log('');
                                }}
                                Label={
                                    <div className="font-inter font-medium text-white uppercase">
                                        NEXT <ChevronRightIcon />
                                    </div>
                                }
                            />
                            <a className="text-textBlue1 text-xs underline mt-4 cursor-pointer" href="/sign-up">
                                &gt; Or sign up your existing account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute 2xl:bottom-32 bottom-16 right-16">
                <ChatDialog label="Hi there! Do you need any help?" />
            </div>
        </div>
    );
};

export default SignIn;
