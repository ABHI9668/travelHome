import React, { useContext, useState } from 'react';
import { RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine,RiHome5Line,RiWallet3Line } from 'react-icons/ri';
import {Menu} from "@headlessui/react"
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const {Price,setprice}=useContext(HouseContext);

  const Prices=[{
    value:"price range (any)",
  },
  {
    value:"100000-130000",
  },
  {
    value:"130000-160000",
  },
  {
    value:"160000-190000",
  },
  {
    value:"190000-220000",
  },
  {
    value:"10000-30000",
  },
  {
    value:"30000-40000",
  }
]
 
  const[isOpen,setisOpen]=useState(false)
  return <Menu as='div' className="dropdown relative ">
    
    <Menu.Button className="dropdown-btn w-full text-left " onClick={()=>setisOpen(!isOpen)}>
      <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight '>
          {Price}
        </div>
        <div className='text-[13px]'>Choose your range</div>
        {
          isOpen ? (
           <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ):(
            <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )
        }
      </div>
    </Menu.Button>
    <Menu.Items className="dropdown-menu">
      {
        Prices.map((price,index)=>{
          return(
            <Menu.Item as="li" key={index} className="cursor-pointer hover:text-violet-700 transition"
            onClick={()=>setprice(price.value)}>{price.value}</Menu.Item>
          )
        })
      }
    </Menu.Items>
  </Menu >;
};

export default PriceRangeDropdown;
