import Link from "next/link"
import {IoAddSharp} from 'react-icons/io5';

export const TombolBuat = () => {
    return (
        <Link 
        href="/" 
        className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
        >
            <IoAddSharp size={20}/>
        Buat
        </Link>
    );
};