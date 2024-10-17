import React, { useEffect, useRef } from 'react';
import lamp from './emoji/lamp.gif'; // Import the lamp emoji gif
import rocket from './emoji/rocket.gif'; // Import the rocket emoji gif

const Greetings = () => {
    const containersRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                } else {
                    entry.target.classList.remove('opacity-100', 'translate-y-0');
                    entry.target.classList.add('opacity-0', 'translate-y-4');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50% 0px'
        });

        containersRef.current.forEach(container => {
            if (container) {
                observer.observe(container);
            }
        });

        return () => {
            containersRef.current.forEach(container => {
                if (container) {
                    observer.unobserve(container);
                }
            });
        };
    }, []);

    return (
        <section className="mt-60 sm:mt-60 md:mt-28 lg:mt-36">
            <div className='container flex flex-col md:flex-row gap-2'>
                <div
                    ref={el => containersRef.current[0] = el}
                    className="h-96 md:h-192 px-2 py-2 bg-primary rounded-md w-full md:w-1/2 relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
                >
                    <h2 className="text-2xl 2xl:text-5xl font-semibold text-white">
                        воплощение вашего бизнеса в виртуальном мире с помощью современнных технологических решений
                    </h2>
                    <img src={lamp} alt="Lamp Emoji" className="absolute bottom-2 left-2 w-12 h-12" /> {/* Use the lamp emoji */}
                </div>
                <div
                    ref={el => containersRef.current[1] = el}
                    className='h-96 md:h-192 px-2 py-2 shadow-inner shadow-[#42FFA4] rounded-md w-full md:w-1/2 relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out'
                >
                    <img src={rocket} alt="Rocket Emoji" className="absolute top-2 left-2 w-12 h-12" /> {/* Use the rocket emoji */}
                    <h2 className='h-full text-2xl 2xl:text-5xl font-semibold text-success flex flex-col justify-end'>
                        мы разрабатываем веб-решения, способствующие привлечению клиентов, и эффективной автоматизации бизнес-процессов
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Greetings;
