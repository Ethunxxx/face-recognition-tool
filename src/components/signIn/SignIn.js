import React, { useState } from 'react'
import { serverUrl } from '../../App.js'




const SignIn = ({ onRouteChange, loadUser }) => {

    const [signInEmail, setSignInEmail] = useState(''); const [signInPassword, setSignInPassword] = useState('');

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }
    const onEnterPress = (event) => {
        if (event.code === "Enter") {
            // console.log('submitted via enter')

            onSubmitSignIn();
        }
    }

    const onSubmitSignIn = () => {
        fetch(`${serverUrl}/signin`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user)
                    onRouteChange('home')
                }
                else {
                    alert(`Wrong credentials. Please try again.`)
                }
            })
    }

    return (
        <article className="gradient ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80 w-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        {/* <legend className="f3 fw6 ph0 mh0 tc center">Sign in user</legend> */}
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
                            onClick={onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p
                            onClick={() => onRouteChange('register')}
                            className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>
    );
}


export default SignIn;