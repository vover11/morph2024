import React from 'react';

const Button = () => {
    const handleClick = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="heading mt-1">
            <button
                onClick={handleClick}
                className="mt-1 w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#00ff85] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white">
                <span
                    className="w-full h-24 relative transition-all ease-in duration-75 text-white font-semibold text-4xl bg-primary-200 rounded-md group-hover:bg-opacity-0 flex flex-col justify-center items-center">
                    связаться с нами
                </span>
            </button>
        </section>
    );
};

export default Button;
