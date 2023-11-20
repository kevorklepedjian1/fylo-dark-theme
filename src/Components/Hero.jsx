import React from 'react'
import illustration from '../images/illustration-intro.png'
import curv from '../images/bg-curvy-desktop.svg'
import curvmb from '../images/bg-curvy-mobile.svg'


const Hero = () => {
    return (
      <section className="p-8 relative">
      <picture className="absolute w-full bottom-0 left-0" style={{ zIndex: '-10' }}>
        <source
          media="(min-width: 768px)"
          srcSet={curv}
        />
        <img src={curvmb} alt="" className="w-full" />
      </picture>

      
        <img
          src={illustration}
          alt=""
          className="block mx-auto mb-10 lg:mb-20"
        />
     

      <article className="text-center max-w-3xl mx-auto">
        <h1
          className="text-white font-bold text-3xl md:text-4xl xl:text-5xl mb-8 xl:leading-tight"
        >
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="mb-10 text-white">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="btn list-item">Get Started</button>
      </article>
    </section>
    );
  };
  
  export default Hero;