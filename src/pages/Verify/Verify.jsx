/*import React, { useContext, StoreContext } from 'react'
import './verify.css'
import {useNavigate, useSearchParams} from 'react-router-dom'
import axios from "axios"
import { useEffect } from 'react'

const Verify = () => {


const [searchParams,setsearchParams] = useSearchParams();
const success = searchParams.get("success")  
const orderId = searchParams.get("orderId")  
const {url} = useContext(StoreContext);
const navigate = useNavigate();

  const verifyPayment = async()=>{
    const response = await axios.post(url+"/api/order/verify",success,orderId) 
  
if(response.data.success) {
    navigate("/myOrders")
}
else{
    navigate("/")
}
}

useEffect(()=>{
    verifyPayment()
},[])

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify */

import React, { useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        console.log("Verifying payment with:", { success, orderId });

        if (!orderId) {
            console.error("Missing orderId");
            navigate("/");
            return;
        }

        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
            console.log("Response from server:", response.data);
            
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/");
        }
    };

    useEffect(() => {
        verifyPayment();
    }, []);

    return (
        <div className="verify">
            <div className="spinner"></div>
        </div>
    );
};

export default Verify; 
