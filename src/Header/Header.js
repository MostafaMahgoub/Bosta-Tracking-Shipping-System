
import { ReactComponent as BostaEnglish } from './assets/bosta-english.svg'
import { ReactComponent as BostaArabic } from './assets/bosta-arabic.svg'
import { AppContext } from '../AppContext';
import React, { useContext } from 'react';
import DropdownButton from './Components/DropdownButton';
import { Divider } from 'antd';
import LangButtong from './Components/LangButton';

function HeaderElement(){
    const { language } = useContext(AppContext);
    
    return (
        <>
        <header className='flex flex-col gap-5 sm:gap-0 sm:flex-row pt-8 px-40 items-center'>
            {language === 'en' ? <BostaEnglish /> : <BostaArabic />}
            <div className='flex-grow' />
            <div className='flex flex-row gap-5'>
            <DropdownButton />
            <Divider className='h-auto bg-[#dbdbdb]' type="vertical" />
            <LangButtong />
            </div>
        </header>
        <Divider />
        </>
    )
}


export default React.memo(HeaderElement);
