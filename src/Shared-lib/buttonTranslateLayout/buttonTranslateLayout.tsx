import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './buttonTranslateLayout.css'

function ButtonTranslateLayout() {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<string>(localStorage.getItem('lang') || 'en');

    const handleLangToggle = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('lang', newLang);
        setLang(newLang);
    };

    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    return (
        <div onClick={handleLangToggle} className="alls-btns">
             <img
                    className="sss"
                    src={
                        lang === 'en'
                            ?  '../../../src/assets/image/translate/saudi-arabia.png' 
                            : '../../../src/assets/image/translate/united-states.png'
                    }
                    alt={lang === 'en' ? 'United States Flag' : 'Saudi Arabia Flag'}
                />
            <span  className="lang-toggle">
           
                {lang === 'en' ? 'العربية' : 'English'}
                
            </span>
        </div>
    );
}

export default ButtonTranslateLayout;
