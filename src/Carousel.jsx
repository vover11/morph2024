import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import icon from './images/i.png'; // Import the image
import eyesGif from './emoji/eyes.gif'; // Import the gif

const Carousel = () => {
    const [flipped, setFlipped] = useState([false, false, false, false]);

    const toggleFlip = (index) => {
        setFlipped((prevState) => {
            const newFlipped = [...prevState];
            newFlipped[index] = !newFlipped[index];
            return newFlipped;
        });
    };

    return (
        <section className="container mt-60 sm:mt-60 md:mt-28 lg:mt-36">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={8}
                breakpoints={{
                    480: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="relative h-192"
            >
                {[ // Карточки с информацией
                    {
                        front: 'лендинг',
                        back: 'рекламный лендинг с современным и адаптивным дизайном, для привлечения новых клиентов и максимальной конверсии посетителей в клиенты',
                        // gradient: 'linear-gradient(to bottom right, #1137c6, black)',
                        gradient: 'radial-gradient(ellipse at left, #1137c6 10%, #0d0d0d 70%, #0d0d0d 15%)',
                        imageOpacity: 0.1,
                        backgroundSize: '100% 100%',
                        additionalContent: (
                            <div className="absolute inset-0 bg-primaryy-900 rounded-md rotate-y-180 opacity-100 p-2 flex flex-col justify-center items-center">
                                <div className="pl-2 w-full rounded-full  h-14 mx-auto flex flex-col justify-center">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ удобный user интерфейс</p>
                                </div>
                                <div className="pl-2 w-full rounded-full  h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ узнаваемость бренда в сети</p>
                                </div>
                                <div className="pl-2 w-full rounded-full  h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ быстрое время загрузки</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ анимация и интерактивность</p>
                                </div>
                                <div className="w-full h-24 mt-12 flex justify-around">
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">🛒</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">💳</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">🎁</div>
                                </div>
                            </div>
                        )
                    },
                    {
                        front: 'магазин',
                        back: 'онлайн магазин с автоматизацией импорта, экспорта товаров, увеличьте эффективность бизнеса, легкостью управляя товарами и бизнес процессами',
                        gradient: 'radial-gradient(ellipse at center, #00ff85 10%, #0d0d0d 70%, #0d0d0d 15%)',
                        imageOpacity: 0.1,
                        additionalContent: (
                            <div className="absolute inset-0 bg-primaryy-900 rounded-md rotate-y-180 opacity-100 p-2 flex flex-col justify-center items-center">
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center">
                                    <p className="text-white text-2xl xl:text-2xl  2xl:text-4xl text-left">★ широкий ассортимент</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ быстрый и удобный заказ</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ безопасная оплата</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ брендированный контент</p>
                                </div>
                                <div className="w-full h-24 mt-12 flex justify-around">
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">💡</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">🚀</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">🎯</div>
                                </div>
                            </div>
                        )
                    },
                    {
                        front: 'портал',
                        back: 'бизнес портал интегрированный с CRM, ERP и другими системами для упрощения работы с данными и увеличения продуктивности вашей компании.',
                        gradient: 'radial-gradient(ellipse at center, #DD637C 10%, #0d0d0d 70%, #0d0d0d 15%)',
                        imageOpacity: 0.1,
                        additionalContent: null,
                        backgroundSize: '50% 100%',
                        imageOpacity: 0.1,
                        additionalContent: (
                            <div className="absolute inset-0 bg-primaryy-900 rounded-md rotate-y-180 opacity-100 p-2 flex flex-col justify-center items-center">
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ online управление бизнесом</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ интеграция с CRM и ERP</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ ЛК пользователя</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ безопасность</p>
                                </div>
                                <div className="w-full h-24 mt-12 flex justify-around">
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">🏢</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">📊</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">🤝</div>
                                </div>
                            </div>
                        )
                    },
                    {
                        front: 'блог',
                        back: 'инфо-блог, который привлекает и удерживает аудиторию, с новостной лентой для удобства пользователей и повышения вовлеченности.',
                        gradient: 'radial-gradient(ellipse at center, #5d6c67 10%, #0d0d0d 70%, #0d0d0d 15%)',
                        imageOpacity: 0.1,
                        additionalContent: (
                            <div className="absolute inset-0 bg-primaryy-900 rounded-md rotate-y-180 opacity-100 p-2 flex flex-col justify-center items-center">
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ подписка для гостей</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ лента новостей</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ обсуждения и комментарии</p>
                                </div>
                                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                                    <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ фотоальбом</p>
                                </div>
                                <div className="w-full h-24 mt-12 flex justify-around">
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">📝</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">📢</div>
                                    <div className="w-24 h-24 border-2 border-white rounded-full flex flex-col justify-center items-center text-4xl">💬</div>
                                </div>
                            </div>
                        )
                    },
                ].map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => toggleFlip(index)}
                        className="relative  w-full cursor-pointer"
                    >
                        <div
                            className="relative h-full w-full transition-transform duration-500"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                            }}
                        >
                            {/* Передняя сторона */}
                            <div
                                className="relative h-full w-full rounded-md shadow"
                                style={{
                                    background: slide.gradient,
                                    backgroundSize: slide.backgroundSize || 'cover',
                                    backfaceVisibility: 'hidden',
                                }}
                                
                                
                            >
                                {/* <div className="absolute inset-0 rounded-md"
                                    style={{
                                        backgroundImage: `url('/images/6595125.jpg')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: slide.imageOpacity
                                    }}
                                /> */}
                                <div className="h-full flex flex-col justify-between p-4">
                                    <img className="w-[50px]" src={icon} alt="Icon" /> {/* Use the imported image */}
                                    <span className="text-5xl 2xl:text-5xl font-semibold text-white">{slide.front}</span>
                                    <span className="text-2xl 2xl:text-3xl text-gray-300 hover:text-white">{slide.back}</span>
                                </div>
                            </div>
                            <img src={eyesGif} alt="Eyes" className="absolute top-2 right-2 w-10 h-10" />
                            {/* Задняя сторона */}
                            <div
                                className="absolute inset-0 rounded-md flex items-center justify-center p-4"
                                style={{
                                    background: slide.gradient,
                                    backgroundSize: slide.backgroundSize || 'cover',
                                    transform: 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                {slide.additionalContent ? slide.additionalContent : <span className="text-2xl 2xl:text-3xl text-gray-300">{slide.back}</span>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Carousel;
