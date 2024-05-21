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
          <div className="bg-white mt-16 w-full p-8">
              <div className="text-black font-medium text-lg">
                Smiling Woods Yurts
              </div>
              <div className="text-black font-semibold text-2xl">
                Production Scheduler
              </div>
            <div className="text-me font-light">As a Software Engineer Intern at Smiling Woods Yurts, I developed a production scheduling solution using TypeScript, React, and Next.js, integrated with Google Sheets. This streamlined order control, reducing manual data entry time by 50% with dynamic graphs and a TV dashboard for real-time data input. I also designed an intuitive UI, conducted training sessions, and optimized production scheduling based on user feedback.</div>
          </div>
          
        </div>;
      case "peq":
        return <div className="w-full h-full">
          <div className="flex justify-center items-center">
          <Image className="border-solid border-0 border-white"
          src="/Watch2.png" 
          alt="Calendar" 
          width={250}  
          height={250} 
          /> 
          </div>
          <div className="bg-white mt-16  w-full p-8">
              <div className="text-black font-medium text-lg">
                PowerEQN
              </div>
              <div className="text-black font-semibold   text-2xl">
                Training App
              </div>
            <div className="text-me font-light">As a Full-Stack Intern at PowerEQN Inc., I developed a custom Connect IQ app for Garmin watches, crucial to the company&apos;s MVP. Collaborating with a physicist, I improved algorithm accuracy by 20%, ensuring real-world performance. I focused on intuitive UI design for workout info access during runs, incorporating tactile feedback for engagement. I also led validation and enhancement of a proprietary run power formula through live testing.</div>
          </div>
          
        </div>;
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
      <div className="mt-20 md:mt-40 px-4 sm:px-8 md:px-16 lg:px-48 flex flex-col items-center md:items-start">
      <span className="w-full md:w-2/3 lg:w-1/2 text-3xl font-semibold text-center md:text-left">
        Hey, I&apos;m Ian - A Software Engineer in Seattle.
      </span>
      <div className="w-full md:w-3/4 lg:w-2/5 mt-10 text-xl font-light text-center md:text-left">
        I&apos;ve crafted interactive solutions for production scheduling at Smiling Woods Yurts, developed full-stack applications for Garmin devices at PowerEQN, and I’m currently looking for my next opportunity.
      </div>
      <Link className="mt-5 text-xl font-normal hover:text-gray-700 border-b border-slate-900 hover:border-slate-600 text-center md:text-left" href="mailto:iandelong1@gmail.com" target="_blank">
        iandelong1@gmail.com
      </Link>
    </div>
      <div className="mt-24 px-4 sm:px-8 md:px-16 lg:px-48">
        <div className="text-3xl font-semibold">
          Featured Work.
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <div className="relative h-64 w-full sm:h-128  group hover:cursor-pointer" onClick={() => handleDonePopupSelect("swy")}>
            <div className="absolute inset-0 border-solid border-4 border-emerald-300 rounded-md bg-white flex justify-center items-center">
            <Image className="border-solid border-0 border-white shadow-md"
              src="/ProdScheduler.png" 
              alt="Calendar" 
              width={400}  
              height={400} 
            />
            </div>

            <div className="absolute inset-0 rounded-md bg-emerald-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            
              <div className="text-white font-medium ml-10 mt-10 text-lg">
                Smiling Woods Yurts
              </div>
              <div className="text-white font-semibold ml-10 text-2xl">
                Production Scheduler
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-128  group hover:cursor-pointer" onClick={() => handleDonePopupSelect("peq")}>
            <div className="absolute inset-0 border-solid border-4 border-emerald-300 rounded-md bg-white flex justify-center items-center">
              <Image className="border-solid border-0 border-white"
                src="/Watch.png" 
                alt="Watch" 
                width={200}  
                height={200} 
              />
            </div>
            <div className="absolute inset-0 rounded-md bg-emerald-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            <div className="text-white font-medium ml-10 mt-10 text-lg z-10">
                PowerEQN
              </div>
              <div className="text-white font-semibold ml-10 text-2xl">
                Training App
              </div>
            </div>
            
          </div>
          <div className="pb-4"></div>
        </div>


        
      </div>
    </div>
  );
};

export default Home;