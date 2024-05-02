import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/header';
import { ReactNode, useEffect, useState } from 'react';

interface PopupProps {
  onClose: () => void; 
  children: ReactNode;
}
const Popup:React.FC<PopupProps> = ({ onClose, children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center font-oswald">
    <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
    <div className="relative z-60 w-3/5 h-4/5 bg-gray-200 pt-16 rounded-sm shadow-lg">
      <button onClick={onClose} className="absolute top-4 right-6 text-2xl font-bold">
        &times;  {/* Close button */}
      </button>
      {children} {/* Content of the popup */}
    </div>
  </div>
);

const Home: React.FC = () => {
  const [popupType, setPopupType] = useState("");
  const handleDonePopupSelect = (type:string) => {
    setPopupType(type);
  };
  const closePopup = () => {
    setPopupType("");
  };
  const getPopupContent = () => {
    switch (popupType) {
      case "swy":
        return <div className="w-full h-full">
          <div className="flex justify-center items-center">
          <Image className="border-solid border-0 border-white shadow-md"
          src="/ProdScheduler.png" 
          alt="Calendar" 
          width={700}  
          height={700} 
          /> 
          </div>
          <div className="bg-white mt-16 h-1/3 w-full p-8">
              <div className="text-black font-medium text-lg">
                      Smiling Woods Yurts
              </div>
              <div className="text-black font-semibold   text-2xl">
                Production Scheduler
              </div>
            <div className="text-me font-light mt-2">Smiling Woods Yurts Information</div>
          </div>
          
        </div>;
      case "peq":
        return <div>PowerEQN Information</div>;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (popupType !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; 
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [popupType]);
  
  
  return (
    <div className="font-oswald">
      <Header/>
      {popupType !== "" && (
        <Popup onClose={closePopup}>{getPopupContent()}</Popup>
      )}
      <div className="ml-48 mt-40 flex flex-col">
        <span className="w-1/3 text-3xl font-semibold">Hey, I&apos;m Ian - A Software Engineer in Seattle.</span>
        <div className="w-2/5 mt-10 text-xl font-light">I&apos;ve crafted interactive solutions for production scheduling at Smiling Woods Yurts, developed full-stack applications for Garmin devices at PowerEQN, and I’m currently looking for my next opportunity.  </div>
        <Link className="mr-auto mt-5 text-xl font-normal hover:text-gray-700 hover:border-slate-600 border-solid border-b border-slate-900" href="mailto:iandelong1@gmail.com" target="_blank">iandelong1@gmail.com</Link>
      </div>
      <div className="ml-48 mt-24 mr-48">
        <div className="text-3xl font-semibold">
          Featured Work.
        </div>
        <div className="mt-16 grid grid-cols-2 gap-10">
          <div className="relative w-full h-96 group hover:cursor-pointer" onClick={() => handleDonePopupSelect("swy")}>
            <div className="absolute inset-0 border-solid border-4 border-emerald-200 rounded-md bg-white flex justify-center items-center">
            <Image className="border-solid border-0 border-white shadow-md"
              src="/ProdScheduler.png" 
              alt="Calendar" 
              width={400}  
              height={400} 
            />
            </div>

            <div className="absolute inset-0 rounded-md bg-emerald-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            
              <div className="text-white font-medium ml-5 mt-5 text-xl">
                  Smiling Woods Yurts
              </div>
              <div className="text-white font-semibold ml-5  text-2xl">
                Production Scheduler
              </div>
            </div>
          </div>
          <div className="relative w-full h-96 group hover:cursor-pointer" onClick={() => handleDonePopupSelect("peq")}>
            <div className="absolute inset-0 border-solid border-4 border-emerald-200 rounded-md bg-white flex justify-center items-center">
              <Image className="border-solid border-0 border-white"
                src="/Watch.png" 
                alt="Watch" 
                width={200}  
                height={200} 
              />
            </div>
            <div className="absolute inset-0 rounded-md bg-emerald-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            <div className="text-white font-medium ml-5 mt-5 text-xl z-10">
                PowerEQN
              </div>
              <div className="text-white font-semibold ml-5 text-2xl">
                Training App
              </div>
            </div>
          </div>
          <div className="relative w-full h-96 group" >
            <div className="absolute inset-0 border-solid border-0 bg-gray-100 flex justify-center items-center hover:">
              
            </div>
            <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
              <div className="text-white font-normal ml-5 mt-5 text-xl z-10">
                Company
              </div>
              <div className="text-white font-semibold ml-5 text-2xl">
                App
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;