import React from 'react';
import './Login.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../Shared-lib/btn-translate/loader/loader';
import InputEmail from '../../Shared-lib/btn-translate/loader/inputs/inputsEmail/inputEmail';
import InputPass from '../../Shared-lib/btn-translate/loader/inputs/inputsPassword/inputPass';
import LanguageSelector from '../../Shared-lib/btn-translate/ButtonTranslate';
import useLoginLogic from './LoginLogic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const {
        username,
        password,
        passwordVisible,
        isLoading,
        emailInvalid,
        passwordInvalid,
        setEmail,
        setPassword,
        togglePasswordVisibility,
        handleLogin,
        handleBlurEmail,
        handleBlurPassword,
        t,
    } = useLoginLogic();

    return (
        <>
            {isLoading && <Loader />}
            <div className="login-page">
                <ToastContainer />
                <div className="header">
                    <div className="header-text">
                        <img src="../../../src/assets/image/Frame 1820547883.svg" alt="Audit Station Logo" />
                    </div>
                </div>
                <div className="all">
                    <div className="auth-login">
                        <h2>{t('Login.welcome', { defaultValue: 'Welcome 👋' })}</h2>
                        <span>{t('Login.loginMethod', { defaultValue: 'You can login with' })}</span>
                        <br />
                        <p>{t('Login.prompt', { defaultValue: 'Please enter your email and password to continue' })}</p>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleLogin}>
                            <div className="aa mb-3">
                                <label htmlFor="email" className="form-label">
                                    {t('Login.labelEmail', { defaultValue: 'Email' })}
                                </label>
                        
                                <InputEmail
                                    value={username}
                                    placeholder={t('Login.placeholderEmail', { defaultValue: 'Enter your Email' })}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={handleBlurEmail}
                                    required
                                    isInvalid={emailInvalid}
                                />
                              
                                {emailInvalid && <span className="error-message">{t('validatorsInputs.required')}</span>}
                            </div>

                            <div className="aa mb-3">
                                <label htmlFor="password" className="form-label">
                                    {t('Login.labelPassword', { defaultValue: 'Password' })}
                                </label>
                                
                                <InputPass
                                    value={password}
                                    placeholder={t('Login.placeholderPassword', { defaultValue: 'Enter your Password' })}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={handleBlurPassword}
                                    passwordVisible={passwordVisible}
                                    required
                                    isInvalid={passwordInvalid}
                                />
                                {passwordInvalid && (
                                    <span className="error-message">{t('validatorsInputs.required')}</span>
                                )}

                                <span className="password-toggle" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                                </span>
                            </div>

                            <button type="submit" className="btn-login btn">
                                {t('Login.buttonLogin', { defaultValue: 'Login' })}
                            </button>
                        </form>
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
