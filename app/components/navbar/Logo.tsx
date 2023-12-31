'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    function handleClick() {
        router.push('/');
    }

    return(
        <Image 
        onClick={handleClick}
        alt="Logo" 
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png" />
    )
}

export default Logo;