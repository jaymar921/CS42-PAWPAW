import React, { useState } from 'react'
import Header from '../components/headers/Header'
import { ApplicationConstants } from '../contants/ApplicationConstants'
import Input from '../components/formElements/Input'
import Button from '../components/buttons/Button';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const showPasswordCallback = () => {
        setShowPassword(!showPassword);
    }

    const rememberMeCallback = () => {
        setRememberMe(!rememberMe);
    }

    return (
        <div>
            <Header />
            <div className='absolute left-[50%] translate-x-[-50%]'>
                <div className='w-100 '>
                    <div className='flex justify-center'>
                        <img className='h-[250px]' src={ApplicationConstants.StraySafeLogo1} />
                    </div>
                    <div className='m-auto justify-center w-[280px] '>
                        <div className='my-2'>
                            <Input 
                                className={"w-[250px]"} 
                                placeholder={"Username"} 
                                icon={"fa-solid fa-user"}
                                value={username}
                                set={setUsername} />
                        </div>
                        <div className='my-2'>
                            <Input 
                                className={"w-[250px]"} 
                                type={showPassword ? "text" : "password"}
                                placeholder={"Password"} 
                                icon={"fa-solid fa-eye"}
                                value={password}
                                set={setPassword}
                                iconClicked={showPasswordCallback} />
                        </div>
                    </div>
                    <div className='relative my-2 grid grid-cols-2 w-[270px]'>
                            <div className='col-span-1'>
                                <Input type='checkbox' 
                                className={'rand-orange text-[13px] h-5'} 
                                placeholder={"forgot password"} 
                                checked={rememberMe} 
                                onClick={rememberMeCallback}>Remember me</Input>
                            </div>
                            <div className='col-span-1 brand-orange text-[13px] h-5 text-center'>
                                <a>Forgot Password?</a>
                            </div>
                        </div>

                        <div className='text-center mt-8'>
                            <Button className={"w-[150px] my-2"}>Sign In</Button>
                            <p className='primary-1'>Don&apos;t have an account? <a className='brand-orange'>Sign Up</a></p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage