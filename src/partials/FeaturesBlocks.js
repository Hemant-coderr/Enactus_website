// Our Projects
import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="absolute inset-0 top-8  lg:mt-0 bg-gradient-to-l from-yellow-300 to-yellow-500  pointer-events-none" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">

{/* OUR PROJECTS */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 padding-bottom: 5rem; ">OUR  PROJECTS</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img class=" w-full rounded-lg object-cover" src={require('../partials/image/b.jpeg').default} alt=""/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 pt-4">Project Bandhini</h4>
              <p className="text-gray-600 text-center">Tie and dyeing <p> of the dupattas by the </p> <i>Rural Women</i> </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img class=" w-full rounded-lg object-cover" src={require('../partials/image/s.jpeg').default} alt=""/>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 pt-4">Project Sana</h4>
              <p className="text-gray-600 text-center"> Producing reusable sanitary napkins, ensuring women hygiene, and generating employment</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img class=" w-full rounded-lg object-cover" src={require('../partials/image/m.jpeg').default} alt=""/>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 pt-4">Project M</h4>
              <p className="text-gray-600 text-center">Cultivation of mushrooms from stubble and then growing Mycelium as a substitute of plastic.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
