import React from 'react'
import { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Navigation() {

    useEffect(() => {
        const anchorLinks = document.querySelectorAll('.scrollTo');

        anchorLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log("clicked");
                let target = "#" + link.rel;
                gsap.to(window, { duration: 2, scrollTo: target });
            })
        });
    }, [])


    return (
        <div className="w-full absolute top-0  z-50 flex justify-center">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar place-items-center">

                        <span className="flex-1 logo text-2xl font-semibold bebas">KAGIISO</span>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal place-items-center">
                                {/* Navbar menu content here */}
                                <li><a className="scrollTo" rel='home'>Home</a></li>
                                <li><a className="scrollTo" rel='about'>About</a></li>
                                <li><a className="scrollTo" rel='discography'>Discography</a></li>
                                <li><a className='scrollTo btn btn-outline' rel='bookings'>Bookings</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 relative">
                        {/* Sidebar content here */}
                        <li><a className="scrollTo" rel='home'>Home</a></li>
                        <li><a className="scrollTo" rel='about'>About</a></li>
                        <li><a className="scrollTo" rel='discography'>Discography</a></li>
                        <li><a className='scrollTo btn btn-outline' rel='bookings'>Bookings</a></li>
                        <li className="absolute bottom-4 left-0">
                            <div className="py-1 text-xs">WORDS  &ndash;  EP is out now.<br></br>Available on all major streaming platforms</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
