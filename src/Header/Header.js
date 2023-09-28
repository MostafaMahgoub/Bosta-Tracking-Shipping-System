
import { ReactComponent as BostaEnglish } from './assets/bosta-english.svg'
import { ReactComponent as BostaArabic } from './assets/bosta-arabic.svg'
import { AppContext } from '../AppContext';
import React, { useContext } from 'react';

function HeaderElement(){
    const { language } = useContext(AppContext);
    
    return (
        <header className='flex flex-row py-8 px-40'>
            {language === 'en' ? <BostaEnglish /> : <BostaArabic />}
        </header>
    )
}


export default React.memo(HeaderElement);
