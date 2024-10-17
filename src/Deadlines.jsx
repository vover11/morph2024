import React, { useEffect, useRef } from 'react';

const Deadlines = () => {
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
        <section className='mt-60 sm:mt-60 md:mt-28 lg:mt-36'>
            <div className="h-192 flex flex-col w-full gap-2 font-semibold ">
                {/* Контейнер 1 */}
                <div ref={(el) => (containersRef.current[0] = el)} className="flex-1 border-2 border-white rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none opacity-0 translate-y-4 transition-all duration-700 ease-in-out">
                    <div className="p-2 h-full flex flex-col justify-between">
                        <h2 className="text-success  text-2xl 2xl:text-5xl">айдентика</h2>
                        {/* <p className="underline text-center text-success font-semibold  text-1xl xl:text-2xl 2xl:text-4xl">01</p> */}
                        <div className="text-center flex justify-end">
                            <p className="text-gray-300 text-right text-xl 2xl:text-3xl">14 дней</p>
                        </div>
                    </div>
                </div>

                {/* Контейнер 2 */}
                <div ref={(el) => (containersRef.current[1] = el)} className="flex-1 border-2 border-white rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none opacity-0 translate-y-4 transition-all duration-700 ease-in-out">
                    <div className="p-2 h-full flex flex-col justify-between">
                        <h2 className="text-success text-2xl 2xl:text-5xl">макет</h2>
                        {/* <p className="underline text-center text-success font-semibold  text-1xl xl:text-2xl 2xl:text-4xl">02</p> */}
                        <div className="text-center flex justify-end">
                            <p className="text-gray-300 text-right text-xl 2xl:text-3xl">10 дней</p>
                        </div>
                    </div>
                </div>

                {/* Контейнер 3 */}
                <div ref={(el) => (containersRef.current[2] = el)} className="flex-1 border-2 border-white rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none opacity-0 translate-y-4 transition-all duration-700 ease-in-out">
                    <div className="p-2 h-full flex flex-col justify-between">
                        <h2 className="text-success text-2xl 2xl:text-5xl">вёрстка</h2>
                        {/* <p className="underline text-center text-success font-semibold  text-1xl xl:text-2xl 2xl:text-4xl">03</p> */}
                        <div className="text-center flex justify-end">
                            <p className="text-gray-300 text-right text-xl 2xl:text-3xl">14 дней</p>
                        </div>
                    </div>
                </div>

                {/* Контейнер 4 */}
                <div ref={(el) => (containersRef.current[3] = el)} className="flex-1 border-2 border-white rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none opacity-0 translate-y-4 transition-all duration-700 ease-in-out">
                    <div className="p-2 h-full flex flex-col justify-between">
                        <h2 className="text-success text-2xl 2xl:text-5xl">разработка</h2>
                        {/* <p className="underline text-center text-success font-semibold  text-1xl xl:text-2xl 2xl:text-4xl">04</p> */}
                        <div className="text-center flex justify-end">
                            <p className="text-gray-300 text-right text-xl 2xl:text-3xl">14 дней</p>
                        </div>
                    </div>
                </div>

                {/* Контейнер 5 */}
                <div ref={(el) => (containersRef.current[4] = el)} className="flex-1 border-2 border-white rounded-tl-none rounded-tr-xl rounded-bl-xl rounded-br-none opacity-0 translate-y-4 transition-all duration-700 ease-in-out">
                    <div className="p-2 h-full flex flex-col justify-between">
                        <h2 className="text-success text-2xl 2xl:text-5xl">оптимизация</h2>
                        {/* <p className="underline text-center text-success font-semibold text-1xl xl:text-2xl 2xl:text-4xl">05</p> */}
                        <div className="text-center flex justify-end">
                            <p className="text-gray-300 text-right text-xl 2xl:text-3xl">7 дней</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deadlines;
