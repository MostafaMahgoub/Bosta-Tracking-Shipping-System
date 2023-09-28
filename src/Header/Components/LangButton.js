import React , { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function LangButton() {
  const { language , toggleLanguage } = useContext(AppContext);
  const items = [
    {
      label: (
        <span className='text-[#e30613]'>
          ENGLISH
        </span>
      ),
      key: 'en',
      onClick: () => toggleLanguage('en'),

    },
    {
      label: (
        <span className='text-[#e30613]'>
          ARABIC
        </span>
      ),
      key: 'ar',
      onClick: () => toggleLanguage('ar'),
    },
  ];

  return (
    <Dropdown className='self-center' menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <span className="text-[#e30613] text-lg font-poppins font-medium leading-6 break-words">{language === 'en' ? "ENG" : "AR"}</span>
          <DownOutlined className='text-[#e30613]'/>
        </Space>
      </a>
    </Dropdown>
  );
};

export default LangButton;
