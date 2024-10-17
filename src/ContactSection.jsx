import React, { useState } from 'react';
import Lottie from './emoji/lottie.gif'; // Import the gif

const TELEGRAM_API_TOKEN = '5995370233:AAFpKV1HANwF9ymq2Fk4E3eRYSGGPtA7LPQ'; // замените на свой токен
const TELEGRAM_CHAT_ID = '486479899'; // замените на свой идентификатор чата

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone, email, message } = formData;
        const text = `Имя: ${name}\nE-mail: ${email}\nТел: ${phone}\nСообщение: ${message}\n`;

        try {
            const apiUrl = `https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: text,
                }),
            });

            if (response.ok) {
                alert('Сообщение отправлено!');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
            } else {
                alert('Ошибка! Сообщение не было отправлено.');
            }
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
            alert('Ошибка! Сообщение не было отправлено.');
        }
    };

    return (
        <section id="contact-section" className="h-192 md:h-auto mt-60 sm:mt-60 md:mt-28 lg:mt-36 gap-1">
            <div className='container flex flex-col md:flex-row gap-2'>
                <div className="relative p-2 relative bg-primary h-96 md:h-192 w-full md:w-1/2 feedback_form flex flex-col rounded-md relative">
                    <p className="absolute bottom-2 right-2 text-5xl 2xl:text-8xl font-semibold text-white">
                        24/7
                    </p>
                    <p className="text-2xl 2xl:text-5xl font-semibold text-white">
                        оставьте заявку на разработку и наши специалисты свяжутся с вами в самое ближайшее время
                    </p>
                    <img src={Lottie} alt="Eyes" className="absolute bottom-2 left-2 w-10 h-10" />
                </div>
                <div className="feedback_form w-full md:w-1/2 h-96 md:h-192">
                    <form onSubmit={handleSubmit} className="h-96 md:h-192 w-full border-2 border-white p-8 rounded-md flex flex-col justify-start">
                        <input
                            className="bg-transparent font-semibold text-white text-2xl 2xl:text-5x border-2 border-white w-full p-2 mb-4 rounded-md"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="имя:"
                        />
                        <input
                            className="bg-transparent font-semibold text-white text-2xl 2xl:text-5x border-2 border-white w-full p-2 mb-4 rounded-md"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="телефон:"
                        />
                        <input
                            className="bg-transparent font-semibold text-white text-2xl 2xl:text-5x border-2 border-white w-full p-2 mb-4 rounded-md"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="почта:"
                        />
                        <textarea
                            id="message"
                            name="message"
                            // rows="4"
                            // cols="50"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="о вашем проекте:"
                            className="bg-transparent font-semibold text-white text-2xl 2xl:text-5x border-2 border-white w-full p-2 mb-4 rounded-md"
                        ></textarea>
                    </form>
                </div>
            </div>
            <button
                className="footerbutton2 mt-1 w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#00ff85] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white"
                onClick={handleSubmit}
            >
                <span
                    className="w-full h-24 relative transition-all ease-in duration-75 text-white font-semibold text-4xl bg-primaryy-200 rounded-md group-hover:bg-opacity-0 flex flex-col justify-center"
                >
                    отправить заявку
                </span>
            </button>
        </section>
    );
};

export default ContactSection;
