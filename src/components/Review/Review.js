import React from 'react';

const Review = ({review}) => {
    const { name, img, comments, rating} = review;
    return (
        <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20'>
            <div className='flex justify-center md:justify-start mt-10'>
                <img
                    className='w-20 h-20 object-cover rounded-full border-4 border-black-700 hover:border-dotted'
                    src={img}
                    alt="customerphoto"
                />
            </div>
            <div>
                <h2 className='text-4xl font-medium'>
                    {name}
                </h2>
                <p className='mt-2 p-2 text-emerald-900'>{comments}</p>
            </div>
            <div className='flex justify-center mt-6'>
                <p className='text-xl font-medium text-black-500'>
                    <small>{rating}</small>
                </p>
            </div>
        </div>
    );
};

export default Review;