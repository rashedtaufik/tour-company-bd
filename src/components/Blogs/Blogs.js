import React from "react";
const Blogs = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <article className='max-w-md p-5 bg-neutral-300 shadow-lg rounded-lg my-15'>
                    <div>
                        <h2 className='text-red-500 text-3xl brand-color'>What is Context API?</h2>
                        <p className='mt-4 text-gray-600 brand-color'>
                            The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                            The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication etc.
                        </p>
                    </div>
                </article>
                <article className='max-w-md p-5 bg-neutral-300 shadow-lg rounded-lg my-15'>
                    <div>
                        <h2 className='text-red-500 text-3xl brand-color'>
                        What is Semantic Tags?
                        </h2>
                        <p className='mt-4 text-gray-600 brand-color'>
                        Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain. Newly HTML5 semantic tags to structure the document in a meaningful way are: header, nav, article, section, aside, footer semantic tags also help search engines to parse the webpage correctly and find accurate information. For this reason, helping search engines to correctly index the page.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blogs;
