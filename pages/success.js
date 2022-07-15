import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from "react-icons/bs";

import { runFireworks } from '../lib/utils';
import { useStateContext } from '../context/StateContext';



const Success = () => {

  const {setCartItems,setTotalPrice,setTotalQuantities}=useStateContext();
  useEffect(()=>{ //This useEffect is being used to remove every data about cart so that now new data can be placed
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  },[]);//empty array here will make useEffect to load only once when this page is loaded for first time
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for your order!</h2>
        <p className="email-msg">
            Check your email inbox for the receipt
        </p>
        <p className="description">
            If you have any questions, please email
            <a href="mailto:order@example.com" className="email">
                order@example.com
            </a>
        </p>
        <Link href="/">
        <button type="button" className="btn" width="300px">
            Continue Shopping
        </button>
        </Link>
        </div>
    </div>
  )
}

export default Success