import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticate] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('jwt');

        if (token) {
          const payload = jwtDecode(token);
          if (payload.userExist.role === 'employee' || payload.userExist.role === 'client') {
            setAuthenticate(true);
            setRole(payload.userExist.role);
          } else {
            setAuthenticate(false);
            navigate('/login', { replace: true });
          }
        } else {
          setAuthenticate(false);
          navigate('/login', { replace: true });
        }
      } catch (error) {
        setAuthenticate(false);
        console.log('Error in check auth', error);
      }
    };

    checkAuth();
  }, [navigate]);

  if (!authenticated) {
    return null; // Or a loading spinner
  }

  return <Outlet />;
}

export default Layout;
