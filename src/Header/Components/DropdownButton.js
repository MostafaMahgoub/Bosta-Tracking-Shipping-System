import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { Dropdown, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Search } = Input;

function DropdownButton() {
  const { setTrackingNumber , t } = useContext(AppContext);
  const [inputText, setInputText] = useState('');

  const handleSearch = () => {
    setTrackingNumber(inputText);
    setInputText('');
  };

  const menu = (
    <div className='mt-6'>
      <Search
        placeholder={t('Put Tracking No.')}
        enterButton
        onSearch={handleSearch}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
    </div>
  );

  return (
    <Dropdown overlay={menu} trigger={['hover']}>
      <a className="ant-dropdown-link flex gap-3" onClick={(e) => e.preventDefault()}>
        <span className="text-[#e30613] text-lg font-bold leading-6 break-words self-center">{t('Tracking shipments')}</span>
        <DownOutlined className='text-[#e30613]' />
      </a>
    </Dropdown>
  );
}

export default DropdownButton;
