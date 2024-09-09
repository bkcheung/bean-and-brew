'use client'
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import cx from 'classnames'

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu(){
        setShowMenu(!showMenu);
    }
    return(
        <div>
            <div className={cx("bg-white/90 text-black fixed top-0 left-0 \
                                min-h-[100vh] min-w-[75vw] flex flex-col justify-center text-2xl"
                               , showMenu?'show':'hidden')}>
                <Link className="p-10" href="/" onClick={toggleMenu}>Home</Link>
                <Link className="p-10" href="/shop"onClick={toggleMenu}>Shop All</Link>
                <Link className="p-10" href="/cart"onClick={toggleMenu}>Cart</Link>
            </div>
            <button onClick={toggleMenu}>
                <Image
                src="/images/menu.png"
                alt="menu logo"
                width={30}
                height={30}
                />
            </button>
        </div>
    )
}

export default Menu