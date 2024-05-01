import Link from 'next/link';
import Header from '@/app/components/header';

const Home: React.FC = () => {
  return (
    <div className="font-oswald">
      <Header/>
      <div className="ml-48 mt-40 flex flex-col">
        <span className="w-1/3 text-4xl font-semibold">Hey, I&apos;m Ian - A Software Engineer in Seattle</span>
        <div className="w-2/5 mt-10 text-xl font-light">I&apos;ve crafted interactive solutions for production scheduling at Smiling Woods Yurts, developed full-stack applications for Garmin devices at PowerEQN Inc, and I’m currently looking for my next role.  </div>
        <Link className="mr-auto mt-5 text-xl font-normal hover:text-gray-700 hover:border-slate-600 border-solid border-b border-slate-900" href="mailto:iandelong1@gmail.com" target="_blank">iandelong1@gmail.com</Link>
      </div>
      <div className="ml-48 mt-24">
        <div className="text-4xl font-semibold">
          Featured Work
        </div>
        
        
      </div>
    </div>
  );
};

export default Home;