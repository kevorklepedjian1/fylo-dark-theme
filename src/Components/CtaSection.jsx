import React from 'react'

// CtaSection Component (Continued)
const CtaSection = () => {
    return (
      <section
      className="p-8 rounded-lg shadow-2xl -mb-40 relative max-w-4xl mx-auto"
      style={{ backgroundColor: 'hsl(217, 28%, 15%)' }}
    >
      <h2 className="text-white font-bold text-2xl md:text-3xl mb-8 lg:text-center">
        Get early access today
      </h2>

      <p className="text-white mb-8 lg:text-center lg:mb-12">
        It only takes a minute to sign up and our free starter tier is
        extremely generous. If you have any questions, our support team would
        be happy to help you.
      </p>

      <form className="lg:flex max-w-2xl mx-auto">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          required
          className="w-full lg:w-7/12 py-3 px-4 rounded-full placeholder-gray-400 text-sm mb-4 lg:mb-0"
        />
        <button type="submit" className="btn w-full lg:w-auto">
          Get Started For Free
        </button>
      </form>
    </section>
    );
  };
  
  export default CtaSection;
  