import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Layout from '../auth';

const AccountLayout = () => {
  return (
    <Layout>
      <>
        <div><Navbar /></div>
        <div className='flex'><Sidebar /><Outlet /></div>
      </>
    </Layout>
  );
};

export default AccountLayout;
