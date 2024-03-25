import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const Security = () => {
  const [showModal,setShowModal]=useState(false)
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName(Cookies.get("userName"));
  }, []);

    
	const copyText = () => {
        navigator.clipboard.writeText(userName);
        setShowModal(true)
    }
  return (
    <div className="container px-4 lg:px-0">
    <div className="pt-[4px]  py-[38px] text-custom-gray2">
      <h3 className="text-[27px]">Security check</h3>
      <div className=" space-y-[22px]">
        <p className="">
        Dear Providers, An email has been sent to your address. Forward this email to our official verify team email address to verify your account follow the instruction and scroll down to follow instruction email address <br/>
        here:-
        </p>
        <p className="font-semibold  text-base">
        Copy our verify-team email address:-
        </p>
        <span>{userName}</span>
        <button className='bg-[#2ba6cb] ml-3 border-none px-2 py-3 text-white rounded' onClick={copyText}>Copy Mail</button>

        {/* Modal */}

      {
        showModal &&(
          <>
          <div class="w-full h-screen flex items-center justify-center ">
  <div>
    
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      x-show="open"
      x-cloak
    >
      {/* Modal */}
      <div class="flex items-center justify-center min-h-screen">
        <div
          class="bg-white p-6 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      
        >
         {/* Modal header  */}
          <div class="flex flex-col items-center justify-center">
            
              <img src={"/images/tick.png"} className=" w-[120px] h-[120px]"/>
              <div class="mt-8">
                <p class="text-3xl text-gray-500">
                 {userName} Mail Copied
                </p>
              </div>
              <div class="text-left my-2 pt-3">
            <p class="text-base  text-gray-500">Mail has been copyToClipboard.</p>
          </div>

          <div class="flex items-center justify-end gap-2 mt-4">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border bg-[#7066e0] px-5 py-3 text-base font-medium text-white"
              onClick={()=>setShowModal(false)}
            >
              OK
            </button>
          
          </div>
            
           
          </div>

         
          

          
    
        </div>
      </div>
    </div>
  </div>
</div>
          </>
        )
      }

<div class="flex items-center border-b border-gray-300">
<p class="mb-4"> 
<b>Step-1:</b> Go to your email </p>
<img src={"/images/step1.jpeg"} alt="" width={"300px"} height={"200px"}/></div>
<div class="flex items-center border-b border-gray-300">
<p class="mb-4"> 
<b>Step-2:</b> Click 3 dots to Forward </p>
<img src={"/images/step2.jpeg"} alt="" width={"300px"} height={"200px"}/></div>
<div class="flex items-center border-b border-gray-300">
<p class="mb-4"> <b>Step-3:</b> Put our official email to sent </p>
<img src={"/images/step3.jpeg"} alt="" width={"300px"} height={"200px"}/></div>

        <p className="">The email you received is good for 30 minutes.</p>
        <p className="">
          It may take the code up to 10 minutes to arrive. Make sure to check
          your Spam/Junk/Trash folder.
        </p>

        <div className="flex gap-9 text-custom-rose">
          <p className="cursor-pointer hover:text-custom-rose2 underline">
            Resend the code
          </p>
          <p className="cursor-pointer hover:text-custom-rose2 underline">
            I don't have access to this email account
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Security;
