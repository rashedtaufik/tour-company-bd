import React from "react";
import UserLink from '../UserLink/UserLink';
import "./Header.css";

const Header = () => {
    return (
        <nav className='flex align-center'>
            <h5 className='text-3xl w-40 font-bold standard-color'>Around The World1 Travel Agency</h5>
            <div className='flex justify-center items-start ml-6 w-full'>
                <div className='flex  space-x-14'>
                    <UserLink to='/' className="text-xl">Home</UserLink>
                    <UserLink to="dashboard" className="text-xl">Dashboard</UserLink>
                    <UserLink to='reviews' className="text-xl">Reviews</UserLink>
                    <UserLink to='blogs' className="text-xl">Blogs</UserLink>
                    <UserLink to='about' className="text-xl">About</UserLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
