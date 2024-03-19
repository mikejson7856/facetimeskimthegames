import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

const login = () => {
  const router = useRouter();
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e =>
    setData(x => ({ ...x, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data);
    router.push('/jhgh');
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-xs">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login With Skipthegames
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-5 rounded-md border-2 border-blue-400"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <input
            className="w-full mb-5 rounded-md border-2 border-blue-400"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 text-xl font-semibold"
          >
            Login
          </button>
        </form>
      </div>
      <div
        className={
          showConsent ? 'hidden' : 'fixed inset-0 bg-slate-700 bg-opacity-70'
        }
      >
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
          <span className="text-dark text-base mr-16">
            This website uses cookies to improve user experience. By using our
            website you consent to all cookies in accordance with our Cookie
            Policy.
          </span>
          <button
            className="bg-green-500 py-2 px-8 rounded text-white"
            onClick={() => acceptCookie()}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
