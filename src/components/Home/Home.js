import React from "react";
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
import logo from '../../pictures/logo.svg';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const firstThreeReview = reviews.slice(0, 3);
    return (
        <div>
            <section className='mt-20'>
                <div>
                    <h1 className='text-center text-4xl font-bold'>
                        The World1 Travel Agency
                    </h1>
                    <p className='text-center mt-6 brand-color'>
                        If you have an upcoming international trip and you need your travel covered by an insurance policy, it is likely that you want COVID-19 covered. This is also a requirement by the Bangladeshi immigration for outbound tourists. Travel Health Insurance for Bangladesh Including Coverage for COVID-19 We provide travel health insurance coverage to our fellow Bangladesh through our exclusive partners in Bangladesh and the United States who have over 20 years of experience and offer insurance products from every major insurance company.
                    </p>
                    <div className='flex justify-center my-6'>
                        <Link to={'/about'} className='text-blue-700 hover:text-white border border-blue-800 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 dark:border-blue-500 dark:hover:text-white'>
                            Details Here
                        </Link>
                    </div>
                </div>
                <img src={logo} alt="company logo" />
            </section>


            <section className='review-container my-10'>
                <h1 className='text-6xl text-center'>
                    "Our Customer Review"
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                    {firstThreeReview.map((review) => (
                        <Review key={review.id} review={review}></Review>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Link
                        to={'/reviews'}
                        className='text-blue-700 hover:text-white border border-blue-800 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2.5 dark:border-blue-500 dark:hover:text-white'
                    >
                        See whole review
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
