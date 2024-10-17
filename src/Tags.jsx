import React from 'react';

const Tags = () => {
    // Массив актуальных тегов для вашего стека
    const tags = [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'React',
        'React Three Fiber',
        'TelegrafJS',
        'GraphQL',
        'Docker',
        'Next.js',
        'TypeScript',
    ];

    // Массив возможных цветовых классов
    const colors = ['border-white', 'border-white', 'border-white'];

    return (
        <section className="h-auto md:h-48 mt-60 sm:mt-60 md:mt-28 lg:mt-36 flex flex-wrap gap-4">
            <span
                className={`lowercase text-success rounded-full  font-semibold  text-2xl 2xl:text-5xl cursor-pointer transition duration-200 flex items-center justify-center`}
            >
                актуальный стек технологий 
            </span><br />
            {tags.map((tag, index) => {
                // Генерация случайного индекса для выбора цвета
                const randomColor = colors[Math.floor(Math.random() * colors.length)];

                return (
                
                    <span
                        key={index}
                        className={`${randomColor}  lowercase text-gray-300  rounded-full   text-xl 2xl:text-3xl cursor-pointer transition duration-200 flex items-center justify-center`}
                    >
                        [ {tag} ]
                    </span>
                    
                );
            })}
        </section>
    );
};

export default Tags;
