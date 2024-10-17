import React from 'react';
import ReactThreeFiber from './Reactthreefiber.jsx'; // Импортируем компонент

const ServicesGrid = () => {
    return (
        <div className='h-screen container flex flex-col gap-2 sm:flex-row'>
            <div className='h-1/2 sm:h-full w-100 sm:w-1/2'>
                    <ReactThreeFiber />
            </div>
            <div className='h-1/2 sm:h-full w-100 sm:w-1/2'>
                <div className="h-full grid grid-cols-2 gap-1">
                    {/* Блок 1 */}
                    <div className="h-full relative md:rounded-tl-md md:rounded-tr-md md:rounded-br-[50px] md:rounded-bl-md rounded-tl-md rounded-tr-md rounded-br-[15px] rounded-bl-md rounded-md transition duration-500 ease-in-out transform bg-gradient-to-br from-blue-700 via-blue-800 to-black hover:bg-gradient-to-b from-blue-700 via-blue-800 to-black">
                        <div
                            className="absolute inset-0 md:rounded-tl-md md:rounded-tr-md md:rounded-br-[50px] md:rounded-bl-md rounded-tl-md rounded-tr-md rounded-br-[15px] rounded-bl-md rounded-md"
                            style={{
                                backgroundImage: `url('/images/texture.png')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.3,
                            }}
                        ></div>
                        <p className="mb-2 p-6 font-semibold text-white text-2xl 2xl:text-5xl relative z-10">вебсайты</p>
                    </div>

                    {/* Блок 2 */}
                    <div className="h-full relative md:rounded-tl-md md:rounded-tr-md md:rounded-br-md md:rounded-bl-[50px] rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-[15px] rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
                        style={{
                            background: 'radial-gradient(ellipse at center, #fd5c52 10%, black 70%, black 15%)',
                            backgroundSize: '200% 100%',
                        }}>
                        <div
                            className="absolute inset-0 md:rounded-tl-md md:rounded-tr-md md:rounded-br-md md:rounded-bl-[50px] rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-[15px] rounded-md transition-opacity duration-300 ease-in-out hover:opacity-100"
                            style={{
                                backgroundImage: `url('/images/texture.png')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.3,
                            }}
                        ></div>
                        <p className="mb-2 p-6 font-semibold text-white text-2xl 2xl:text-5xl relative z-10">дизайн</p>
                    </div>

                    {/* Блок 3 */}
                    <div className="h-full relative md:rounded-tl-md md:rounded-tr-[50px] md:rounded-br-[100px] md:rounded-bl-md rounded-tl-md rounded-tr-[15px] rounded-br-md rounded-bl-md rounded-md transition duration-500 ease-in-out transform bg-gradient-to-br from-blue-700 via-blue-800 to-black hover:bg-gradient-to-b from-blue-700 via-blue-800 to-black">
                        <div
                            className="absolute inset-0 md:rounded-tl-md md:rounded-tr-[50px] md:rounded-br-[100px] md:rounded-bl-md rounded-tl-md rounded-tr-[15px] rounded-br-md rounded-bl-md rounded-md"
                            style={{
                                backgroundImage: `url('/images/texture.png')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.3,
                            }}
                        ></div>
                        <p className="mb-2 p-6 font-semibold text-white text-2xl 2xl:text-5xl relative z-10">маркеты</p>
                    </div>

                    {/* Блок 4 */}
                    <div className="h-full relative md:rounded-tl-[50px] md:rounded-tr-[15px] md:rounded-br-[15px] md:rounded-bl-[100px] rounded-tl-[15px] rounded-tr-md rounded-br-md rounded-bl-md rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
                        style={{
                            background: 'radial-gradient(ellipse at center, #00ff85 10%, black 70%, black 15%)',
                            backgroundSize: '200% 100%',
                        }}>
                        <div
                            className="absolute inset-0 md:rounded-tl-[50px] md:rounded-tr-md md:rounded-br-md md:rounded-bl-[100px] rounded-tl-[15px] rounded-tr-md rounded-br-md rounded-bl-md rounded-md transition-opacity duration-300 ease-in-out hover:opacity-100"
                            style={{
                                backgroundImage: `url('/images/texture.png')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.3,
                            }}
                        ></div>
                        <p className="mb-2 p-6 font-semibold text-white text-2xl 2xl:text-5xl relative z-10">чат боты</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;
