import React, { useState } from 'react';
import { data } from '../Data/data.js';
import { motion, AnimatePresence } from 'framer-motion';

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(category === 'all' ? data : data.filter(item => item.category === category));
  };

  const filterPrice = (price) => {
    setFoods(price === 'all' ? data : data.filter(item => item.price === price));
  };

  return (
    <div className='max-w-[1240px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center mb-8'>
        Top Rated Menu Items
      </h1>

      <div className='flex flex-col lg:flex-row justify-between mb-8'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Type</p>
          <div className='flex flex-wrap gap-2'>
            <button onClick={() => filterType('all')} className='filter-btn'>All</button>
            <button onClick={() => filterType('burger')} className='filter-btn'>Burgers</button>
            <button onClick={() => filterType('pizza')} className='filter-btn'>Pizza</button>
            <button onClick={() => filterType('salad')} className='filter-btn'>Salads</button>
            <button onClick={() => filterType('chicken')} className='filter-btn'>Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
          <div className='flex flex-wrap gap-2'>
            <button onClick={() => filterPrice('all')} className='filter-btn'>$ - All</button>
            <button onClick={() => filterPrice('$')} className='filter-btn'>$</button>
            <button onClick={() => filterPrice('$$')} className='filter-btn'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='filter-btn'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='filter-btn'>$$$$</button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <AnimatePresence>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {foods.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className='border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer'
            >
              <img
                className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg'
                src={item.image}
                alt={item.name}
              />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-semibold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-md'>{item.price}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Food;
