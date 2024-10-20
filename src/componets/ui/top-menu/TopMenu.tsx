import { robotoSlab } from "@/config/fonts"
import Link from 'next/link';



export const TopMenu = () => {
    return(
        <nav className="flex px-5 justify-between items-center w-full">

            {/* Logo*/}
            <div>
                <Link 
                    href="/">
                        <span className= {`${ robotoSlab.className} antialiased font-bold` }>
                        Inicio </span>
                </Link>    
            </div>
        </nav>
    );
};