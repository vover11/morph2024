import React, { useEffect, useRef } from 'react';

const Component6 = () => {
    const cardsRef = useRef([]);

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

        cardsRef.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cardsRef.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    const cardsData = [
        { title: 'разработка сайтов', description: 'быстрое развёртывание и оптимизация сайтов' },
        { title: 'фирменный стиль', description: '2D/3D дизайн, айдентика, анимация' },
        { title: 'интеграция с маркетплейсами', description: 'синхронизация, импорт товаров, автоматизация' },
        { title: 'чат-боты', description: 'ai ассистенты, чат-боты' },
    ];

    return (
        <section className="h-auto mt-60 sm:mt-60 md:mt-28 lg:mt-36">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="card flex flex-col justify-between rounded-md h-72 md:h-96 p-2 border-2 border-white opacity-0 translate-y-4 transition-all duration-700 ease-in-out"
                        >
                            <h2 className="font-semibold text-success text-2xl 2xl:text-5xl inline-block align-text-top">
                                {card.title.split(' ')[0]}<br />
                                {card.title.includes('с') ? card.title.split(' ').slice(1).join(' ') : card.title.split(' ')[1]}
                            </h2>
                            <p className="mt-2 text-gray-300 text-xl 2xl:text-3xl">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Component6;
