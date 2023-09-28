import React from 'react';
import { Dropdown, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Search } = Input;

function DropdownButton() {
  const menu = (
    <div className='mt-6'>
      <Search placeholder="Put Tracking No." enterButton /> 
    </div>
  );

  return (
    <Dropdown overlay={menu} trigger={['hover']}>
      <a className="ant-dropdown-link flex gap-3" onClick={(e) => e.preventDefault()}>
        <span className="text-[#e30613] text-lg font-poppins font-medium leading-6 break-words">Tracking shipments</span>
        <DownOutlined className='text-[#e30613]' />
      </a>
    </Dropdown>
  );
}

export default DropdownButton;
