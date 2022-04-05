import React from "react";
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='my-30'>
            <h1 className='mb-8 text-center text-6xl font-medium'>
                    What are our customers say?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {reviews.map((review) => (
                    <Review key={review.id} review={review}></Review>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
