import React, { useState } from 'react';
import Logo from '../../assets/img/logo.svg';
import { DefaultInput } from '../../components/UI/Input';
import { BlueButton } from '../../components/UI/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const SignUp = () => {
    const [companyName, setCompanyName] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div className="bg-themeBg1 w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="p-4">
                <div className="md:py-16 md:px-24 py-8 px-12 shadow-card flex justify-center flex-col rounded-lg bg-white">
                    <img alt="no logo" src={Logo} className="h-14" />
                    <p className="mt-2.5 w-full text-center text-2xl font-inter">
                        <span className="text-textBlue1 font-semibold">Sign Up</span> Vijilan&apos;s Portal
                    </p>
                    <p className="mt-6 text-textGray1 text-sm max-w-[530px] text-center">
                        Vijilan’s Portal is your gateway to access all the products and services that are available from Vijilan. Fill the information
                        below to start your registration.
                    </p>
                    <div className="mt-6 flex flex-col gap-y-4">
                        <DefaultInput
                            placeholder="Company name*"
                            value={companyName}
                            setValue={(e) => {
                                setCompanyName(e);
                            }}
                            cssClasses="w-full"
                        />
                        <div className="flex md:flex-row flex-col gap-4">
                            <DefaultInput
                                placeholder="First name*"
                                value={firstName}
                                setValue={(e) => {
                                    setFirstname(e);
                                }}
                                cssClasses="w-full"
                            />
                            <DefaultInput
                                placeholder="Last name*"
                                value={lastName}
                                setValue={(e) => {
                                    setLastname(e);
                                }}
                                cssClasses="w-full"
                            />
                        </div>
                        <DefaultInput
                            placeholder="Corporate email address*"
                            value={email}
                            setValue={(e) => {
                                setEmail(e);
                            }}
                            cssClasses="w-full"
                        />
                    </div>
                    <div className="mt-6 flex md:justify-between md:items-start items-center gap-2 md:flex-row flex-col">
                        <p>I am not a robot</p>
                        <div className="flex flex-col items-center">
                            <BlueButton
                                onClickHandler={() => {
                                    console.log('');
                                }}
                                Label={
                                    <div className="font-inter font-medium text-white uppercase">
                                        Sign UP <ChevronRightIcon />
                                    </div>
                                }
                            />
                            <p className="text-textBlue1 text-xs underline mt-4 cursor-pointer">&gt; Or sign in your existing account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
