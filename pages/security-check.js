import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Security from "../components/Security";

function SecurityCheckPage() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(Cookies.get("email"));
  }, []);

  return (
    <>
    {/* header */}
   <div className="">
     <div className="container pt-[10px]  flex flex-col  items-center lg:flex-row lg:justify-between">
       <div className="lg:self-start mt-[3px] lg:mt-0">
         <img src={"/images/logo.png"} alt="logo" priority />
       </div>

       <p className=" mt-[8px]  text-custom-gray text-lg text-center font-medium  px-[75px] lg:px-0">
         Skip the{" "}
         <span className="block lg:inline-block">
           games.Get satisfaction.
         </span>
       </p>

       <div className="lg:self-end mt-2 lg:mt-0 text-end text-[14.4px]">
         {/* <p className="text-custom-gray4">Hi,</p> */}
         <p className="text-custom-rose underline font-bold">{email}</p>
         <div className="">
           <span className="text-custom-gray4 hover:text-custom-rose hover:underline cursor-pointer">
             go to your account
           </span>
           <span className="ml-1 text-custom-rose hover:underline cursor-pointer">
             | log out
           </span>
         </div>
       </div>

    
     </div>
   </div>
     {/* route */}
   <div className="shadow-inner-custom">
     <div className="container   lg:px-0 flex items-center gap-2 text-[11px]">
       <p className="">SKIPTHEGAMES.COM</p>
       <span className="text-custom-cyan">»</span>
       {/* <span className="text-custom-cyan">&#187;</span> */}
       <p className="text-custom-cyan">Security CHECK</p>
     </div>
   </div>

    {/* form */}
   <Security/>

     {/* footer */}
     <div className="container px-4 lg:px-0">
     <div className="py-[20px] flex lg:justify-between text-custom-gray border-t border-slate-300">
       <div className="">
         <p className="cursor-pointer hover:text-custom-gray2">
           ©skipthegames.com
         </p>
       </div>
       <div className="flex flex-wrap gap-2 lg:gap-[22px]">
         {[
           "Home",
           "Contact",
           "About",
           "Privacy",
           "Terms",
           "Escort Info",
         ].map((link, i) => (
           <div key={i} className="first:text-custom-gray  text-custom-cyan">
             <p className="cursor-pointer hover:text-custom-gray2">{link}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
</>
  );
}

export default SecurityCheckPage;
