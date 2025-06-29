


"use client"
import React from 'react';
import { useState } from 'react';


const HeroSection = () => {

  const [email, setEmail] = useState("imran2@gmail.com")
  const [password, setPassword] = useState("pass123")

  const handleSignup =  async () =>{
    try {
     const res  =await  fetch("https://alibackend.duckdns.org/authentication_app/signup/",{
        method:"POST",
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
          'Accept':'application/json',
          // 'Authorization':"Bearer jdakldjklasjdklas"
        },
        body:JSON.stringify({
          email, password
        })
      })
      const result = await res.json();
      console.log(result);
      
    } catch (error) {
      console.log(error);
      
      alert(error.message)
    }
  }

  return (
    <div className=" mt-80">
      <button className=' w-6 h-2 bg-red-600' onClick={handleSignup}n >Signup</button>
    </div>
  );
};

export default HeroSection;