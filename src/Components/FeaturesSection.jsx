import React from 'react'
import any from '../images/icon-access-anywhere.svg'
import sec from '../images/icon-security.svg'
import col from '../images/icon-collaboration.svg'
import ill from '../images/icon-any-file.svg'

const FeaturesSection = () => {
    return (
      <section className="pt-20 px-8" style={{ backgroundColor: '#181f2a' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-20 md:grid-cols-2">
          <article className="text-center">
            <img
              src={any}
              alt=""
              className="block mx-auto"
            />
            <h3 className="text-white font-bold mt-8 mb-4 text-xl md:text-2xl">
              Access your files, anywhere
            </h3>
            <p className="text-white">
              The ability to use a smartphone, tablet, or computer to access your
              account means your files follow you everywhere.
            </p>
          </article>
  
          <article className="text-center">
            <img src={sec} alt="" className="block mx-auto" />
            <h3 className="text-white font-bold mt-8 mb-4 text-xl md:text-2xl">
              Security you can trust
            </h3>
            <p className="text-white">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your files.
            </p>
          </article>
  
          <article className="text-center">
            <img
              src={col}
              alt=""
              className="block mx-auto"
            />
            <h3 className="text-white font-bold mt-8 mb-4 text-xl md:text-2xl">
              Real-time collaboration
            </h3>
            <p className="text-white">
              Securely share files and folders with friends, family and colleagues
              for live collaboration. No email attachments required.
            </p>
          </article>
  
          <article className="text-center">
            <img src={ill}alt=""  className="block mx-auto"/>
            <h3 className="text-white font-bold mt-8 mb-4 text-xl md:text-2xl">
              Store any type of file
            </h3>
            <p className="text-white">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </article>
        </div>
      </section>
    );
  };

export default FeaturesSection