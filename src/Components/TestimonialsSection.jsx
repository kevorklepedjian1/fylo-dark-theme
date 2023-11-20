import React from 'react'
import quotes from '../images/bg-quotes.png'
import p1 from '../images/profile-1.jpg'
import p2 from '../images/profile-2.jpg'
import p3 from '../images/profile-3.jpg'

const TestimonialsSection = () => {
    return (
      <div className="max-w-7xl mx-auto lg:py-20">
        <img src={quotes} alt="" className="-mb-2" />
  
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
          <article
            style={{ backgroundColor: 'hsl(219, 30%, 18%)' }}
            className="p-6 rounded-lg"
          >
            <p className="text-white mb-8">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
  
            <div className="flex items-center justify-start gap-3">
              <img
                src={p1}
                alt=""
                className="w-12 rounded-full"
              />
              <ul>
                <li className="font-bold text-white text-lg">Satish Patel</li>
                <li className="text-white text-sm">Founder & CEO, Huddle</li>
              </ul>
            </div>
          </article>
  
          <article
            style={{ backgroundColor: 'hsl(219, 30%, 18%)' }}
            className="p-6 rounded-lg"
          >
            <p className="text-white mb-8">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
  
            <div className="flex items-center justify-start gap-3">
              <img
                src={p2}
                alt=""
                className="w-12 rounded-full"
              />
              <ul>
                <li className="font-bold text-white text-lg">Bruce McKenzie</li>
                <li className="text-white text-sm">Founder & CEO, Huddle</li>
              </ul>
            </div>
          </article>
  
          <article
            style={{ backgroundColor: 'hsl(219, 30%, 18%)' }}
            className="p-6 rounded-lg"
          >
            <p className="text-white mb-8">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
  
            <div className="flex items-center justify-start gap-3">
              <img
                src={p3}
                alt=""
                className="w-12 rounded-full"
              />
              <ul>
                <li className="font-bold text-white text-lg">Iva Boyd</li>
                <li className="text-white text-sm">Founder & CEO, Huddle</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    );
  };

export default TestimonialsSection