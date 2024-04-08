import React from 'react'

export default function Navigation() {
    return (
        <div className="w-full absolute top-0 py-8 z-50 flex justify-center">
            <div className="container">
                <div className="flex gap-8 place-items-center justify-center">
                    <ul className="menu menu-horizontal lg:gap-8">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <span className="logo font-bold text-3xl bebas">KAGIISO</span>
                    <ul className="menu menu-horizontal lg:gap-8">
                        <li><a href="#">Discography</a></li>
                        <li><a href="#">Bookings</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
