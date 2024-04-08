import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./css/Comp.css";
import vinyl from "../assets/vinyl.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import * as PIXI from "pixi.js";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, ScrollToPlugin, EaselPlugin, PixiPlugin, TextPlugin);

PixiPlugin.registerPIXI(PIXI);
export default function Hero() {
    const vinyl_img = useRef();

    useGSAP(() => {
        // gsap.to(vinyl_img.current, { rotate: 360, repeat: -1, ease: 'none', duration: 20 });

        gsap.to(vinyl_img.current,{rotate: 200,translateY:100,opacity:0,ease:'power1.inOut',scrollTrigger:{
            trigger:vinyl_img.current,
            start:'top 80%',
            scrub: true
        }} );


        gsap.fromTo(
            ".hero-text",
            { text: { value: '' }, opacity: 0 },
            {
                text: 'I KNOW MY WORDS WON\'T <span>FADE</span>', opacity: 1, duration: 3, onComplete: () => {
                    gsap.fromTo(
                        ".hero-text span",
                        { opacity: 1 },
                        { opacity: 0.2, yoyo: true, duration: 1.5, repeat: -1 }
                    );
                }
            },

        );
        return () => {
            gsap.killTweensOf([vinyl_img,".hero-text span",".hero-text",]); // Stop animation
        };
    }, [])

    useLayoutEffect(() => {

        return () => {

        };
    }, [])



    return (
        <div className='hero min-h-screen relative' id='home'>
            <img src={vinyl} alt="vinyl" className='absolute hero-vinyl' ref={vinyl_img} />
            <div className="hero-content flex-col">
                <h1 className="hero-text bebas text-7xl">I KNOW MY WORDS WON'T FADE</h1>
                <div className="badge py-1 text-xs">WORDS - EP </div>
                <a className='btn btn-outline'>LISTEN NOW</a>
            </div>
        </div>
    )
}
