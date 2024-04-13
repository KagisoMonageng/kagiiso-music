import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, ScrollToPlugin, EaselPlugin, PixiPlugin, TextPlugin);

export default function About() {

  useGSAP(() => {
    gsap.from(
      ".abt-heading",
      {
        text: { value: '' }, opacity: 0, duration: 1.5, scrollTrigger: {
          trigger: '.abt-heading',
          start: 'top 70%'
        }
      },
    );

    gsap.from(".about-text", {opacity: 0.2, duration:3, stagger:1,scrollTrigger:{
      trigger: '.abt-heading',
      start: 'top 60%'
    }});


  }, [])

  return (
    <>
      <div className="container py-96 overflow-hidden mx-auto" >
        <h2 className='font-bold text-2xl mb-7 bebas abt-heading text-center' id='about'>About</h2>
     

        <div className="w-full lg:w-1/2 mx-auto">
          <p className='about-text  mb-4 text-center'>
            KAGIISO is an RnB and Afro-Pop singer, songwriter and producer based in South Africa. Born and raised in Segwaelane - Brits, North West. </p>

          <p className='about-text  text-center'>He started singing from an early age and would frequently enter scholar music competitions. KAGIISO’s sound has been greatly influenced and shaped by the likes of John Legend, Langa Mavuso, Manana, Sam Smith and Donald. </p>

          <div className="indicator w-full my-5 about-text">
            <span className="indicator-item badge badge-outline text-xs">KAGIISO</span>
            <div className=" w-full bg-base-300 place-items-center py-8 px-3 italic"><p className='text-center'>“The songs of these artists make one believe that love really exists. I am marvelled at how they create beautiful well composed music. This is what I want people to feel when they listen to my music.”</p></div>
          </div>

          <p className='about-text  text-center'>KAGIISO has had the honour to work with South African RnB/House legend Donald alongside the Dube brothers, King Khustah and Ditheto Music.</p>

          <div className="indicator w-full my-5 about-text">
            <span className="indicator-item badge badge-outline text-xs">KAGIISO</span>
            <div className=" w-full bg-base-300 place-items-center py-8 px-3 italic"><p className='text-center'> ⁠”Music evokes memories and emotions. It can touch hearts and shape them in a positive way.”
            </p></div>
          </div>
        </div>

      </div>
    </>
  )
}
