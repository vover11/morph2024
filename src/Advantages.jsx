import React, { useRef, useEffect } from 'react';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InterestsIcon from '@mui/icons-material/Interests';
import BrushIcon from '@mui/icons-material/Brush'; // Айдентика
import SmartToyIcon from '@mui/icons-material/SmartToy'; // Чат-боты
import SpeedIcon from '@mui/icons-material/Speed'; // Оптимизация
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty'; // 3D

const Advantages = () => {
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

    return (
        <section className="relative h-full flex flex-col justify-center items-center mt-60 sm:mt-60 md:mt-28 lg:mt-36">
            {/* First row of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                <div ref={el => cardsRef.current[0] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <LogoDevIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">разработка</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">создание технологичных веб-приложений</p>
                </div>
                <div ref={el => cardsRef.current[1] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <SwapHorizIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">интеграция</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">интеграция систем через API для синхронизации</p>
                </div>
                <div ref={el => cardsRef.current[2] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <TheaterComedyIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">кастомизация</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">настройка решений под уникальные задачи</p>
                </div>
                <div ref={el => cardsRef.current[3] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <InterestsIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">интерактивность</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">создание интерактивных интерфейсов и UX-анимаций</p>
                </div>
            </div>

            {/* Second row of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full mt-2">
                <div ref={el => cardsRef.current[4] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <BrushIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">айдентика</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">разработка уникальной визуальной идентичности</p>
                </div>
                <div ref={el => cardsRef.current[5] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <SmartToyIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">чат-боты</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">внедрение умных чат-ботов для автоматизации</p>
                </div>
                <div ref={el => cardsRef.current[6] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <ThreeSixtyIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">3D</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">интеграция 3D графики для уникальных проектов</p>
                </div>
                <div ref={el => cardsRef.current[7] = el} className="p-2 h-72 md:h-96 w-full rounded-lg shadow-inner shadow-[#42FFA4] flex flex-col justify-between items-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out">
                    <SpeedIcon sx={{ fontSize: { xs: 150, sm: 200, md: 200, lg: 200 } }} className="text-white" />
                    <p className="w-full font-semibold text-success text-2xl 2xl:text-5xl mt-2">оптимизация</p>
                    <p className="text-gray-300 text-xl 2xl:text-3xl">оптимизация производительности и работы</p>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
