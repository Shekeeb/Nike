import React from 'react'
import {NavLink} from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosList } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

const SideBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/add">
                <IoIosAddCircleOutline style={{ fontSize: "24px", cursor: "pointer" }}/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/list">
                <IoIosList style={{ fontSize: "24px", cursor: "pointer" }}/>
                <p className='hidden md:block'>List Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/orders">
                <CiCircleCheck style={{ fontSize: "24px", cursor: "pointer" }}/>
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar