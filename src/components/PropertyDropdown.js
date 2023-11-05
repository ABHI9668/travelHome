import React, { useContext, useState } from 'react';
import { RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine,RiHome5Line } from 'react-icons/ri';
import {Menu} from "@headlessui/react"
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const {Property,setProperty,Properties}=useContext(HouseContext);
 
  const[isOpen,setisOpen]=useState(false)
  return <Menu as='div' className="dropdown relative ">
    
    <Menu.Button className="dropdown-btn w-full text-left " onClick={()=>setisOpen(!isOpen)}>
      <RiHome5Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-tight '>
          {Property}
        </div>
        <div className='text-[13px]'>Select Your place</div>
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
        Properties.map((property,index)=>{
          return(
            <Menu.Item as="li" key={index} className="cursor-pointer hover:text-violet-700 transition"
            onClick={()=>setProperty(property)}>{property}</Menu.Item>
          )
        })
      }
    </Menu.Items>
  </Menu >;
};

export default PropertyDropdown;
