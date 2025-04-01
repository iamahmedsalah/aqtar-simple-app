import React from 'react';

const inputs = ({icno:Icon,...props}) => {
    return (
        <div className='relative mb-6'>
            <div className='absolute inset-y-0 flex items-center pl-3 pointer-events-none'>
                <Icon className=' size-5 text-amber-500' />
            </div>
            
            <input {...props}
            className=' w-full pl-10 pr-3 py-2 bg-gray-800/25 rounded-xl border border-gray-700/50 outline-none
            focus:border-amber-500 focus:ring-yellow-500 text-white placeholder-gray-300 transition-all duration-200' />
        </div>
    );
};

export default inputs;