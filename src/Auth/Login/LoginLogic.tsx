import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function useLoginLogic() {
    const { t, i18n } = useTranslation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };
    
   
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailInvalid(!username.trim());
        setPasswordInvalid(!password.trim());

        if (!username.trim() || !password.trim()) {
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                toast.success('Login successful!', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setTimeout(() => {
                    setIsLoading(false);
                    window.location.href = '/dashboard';
                }, 500);
            } else {
                setIsLoading(false);
                toast.error('Login failed: ' + data.message, {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            setIsLoading(false);
            toast.error('Login failed: ' + (error as Error).message, {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const handleBlurEmail = () => {
        setEmailInvalid(!username.trim());
    };

    const handleBlurPassword = () => {
        setPasswordInvalid(!password.trim());
    };

    useEffect(() => {
        const lang = localStorage.getItem("lang") || "en";
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    return {
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
    };
}

export default useLoginLogic;
