import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import Router from 'next/router';
import Link from "next/link";

const { Title } = Typography;

function Information() {
  const [userName, setUserName] = useState();
  if (typeof window != "undefined") {
    useEffect(() => setUserName(localStorage.getItem("username")));
  }


  return (
    <div className='info_center'>
      <Title level={2}>User Information</Title>
      <p>Username: {userName}</p>
      {/* Add other information here */}
      <button onClick={() => Router.push('/mainPage')}>Return to Main Page</button>
      <button> <Link href="/login">Return to Login Page </Link></button>
    </div>
  );
};

export default Information;
