import React from 'react';

const Footter = () => {
    return (
        <section className="mt-60 sm:mt-60 md:mt-28 lg:mt-36">
            <footer
                class="h-32 p-2 mt-60 sm:mt-60 md:mt-28 lg:mt-36 bg-primary rounded-md text-white flex flex-col justify-center">
                <div class="container mx-auto text-center font-semibold">
                    <p class="mb-2">&copy; 2024 morph</p>
                    <a href="tel:+79680977797" class="">+7(968)097-77-97</a>
                    <p class="mt-2 text-gray">ИНН 501213545420</p>
                </div>
            </footer>
        </section>
    );
};

export default Footter;
