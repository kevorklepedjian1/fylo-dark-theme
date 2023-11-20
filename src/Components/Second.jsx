import React from 'react'
import img1 from '../images/illustration-stay-productive.png'
import arrow from '../images/icon-arrow.svg'



const Second = () => {
    return (
      <div style={{ backgroundColor: '#181f2a' }}>
      <section className="py-20 max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-16" >
      <article>
        <img src={img1} alt="" />
      </article>

      <article>
        <h2 className="text-white font-bold my-8 text-3xl md:text-4xl">
          Stay productive, wherever you are
        </h2>

        <p className="text-white mb-4">
          Never let location be an issue when accessing your files. Fylo has
          you covered for all of your file storage needs.
        </p>

        <p className="text-white mb-4">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <a
          
          className=" link text-sm flex items-start justify-start gap-2 underline"
          style={{ color: 'hsl(176, 68%, 64%)' }}
         
        >
          See how Fylo works <img src={arrow} alt="" />
        </a>
      </article>
    </section>
    </div>
    );
  };
  
  export default Second;
  