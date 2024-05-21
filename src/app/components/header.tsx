import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  return (
    <div className="font-oswald">
      <div className="flex items-center justify-between fixed inset-x-0 h-16 top-0 z-50 border-b border-slate-300 bg-white px-4 sm:px-8 md:px-16 lg:px-24">
        <span className="text-xl font-black">Ian DeLong</span>
        <div className="flex items-center space-x-4 sm:space-x-8 md:space-x-10">
          <Link className="text-xl font-semibold hover:text-gray-600" href="https://github.com/idelong/" target="_blank">github</Link>
          <Link className="text-xl font-semibold hover:text-gray-600" href="https://www.linkedin.com/in/ian-delong/" target="_blank">linkedin</Link>
          <a className="relative" href="mailto:iandelong1@gmail.com">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span className="relative inline-block h-full w-full rounded border-2 border-black bg-emerald-300 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-emerald-400 hover:text-gray-900">hire me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
