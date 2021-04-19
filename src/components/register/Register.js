import React, { useState } from 'react'
import { serverUrl } from '../../App.js'


const Register = ({ onRouteChange, loadUser }) => {
    const [registrationName, setRegistrationName] = useState('');
    const [registrationEmail, setRegistrationEmail] = useState('');
    const [registrationPassword, setRegistrationPassword] = useState('');





    const onNameChange = (event) => {
        setRegistrationName(event.target.value);
    }
    const onEmailChange = (event) => {
        setRegistrationEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setRegistrationPassword(event.target.value);
    }
    const onEnterPress = (event) => {
        if (event.code === "Enter") {
            console.log('submitted via enter')
            onSubmitRegister();
        }
    }



    const onSubmitRegister = () => {
        // console.log('This is the server URL:', serverUrl)
        fetch(`${serverUrl}/register`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: registrationName,
                email: registrationEmail,
                password: registrationPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user)
                    onRouteChange('home')
                } else {
                    alert(`Incorrect form submission. Please provide: \n\n - User name \n - Valid email address \n - Password of at least 3 characters`)
                }
            })
    }




    return (
        <article className="gradient ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 pt2 black-80 w-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        {/* <legend className="f3 fw6 ph0 mh0 tc center tc">Register new user</legend> */}
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="name">Name
                        </label>
                            <input
                                className="pa2 input-reset ba b--black bg-transparent hover-bg-light-gray hover-black w-100"
                                type="text"
                                name="name"
                                id="name"
                                onChange={onNameChange}
                                onKeyPress={onEnterPress}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                className="pa2 input-reset ba b--black bg-transparent hover-bg-light-gray hover-black w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={onEmailChange}
                                onKeyPress={onEnterPress}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 input-reset ba b--black bg-transparent hover-bg-light-gray hover-black w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={onPasswordChange}
                                onKeyPress={onEnterPress}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={onSubmitRegister}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register"
                        />
                    </div>
                </div>
            </main>
        </article>
    );
}





export default Register;