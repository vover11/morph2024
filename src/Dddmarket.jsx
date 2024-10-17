import React, { useEffect, useRef, useState } from 'react';
import { Chat, Speed, Sync } from '@mui/icons-material';
import eyesGif from './emoji/eyes.gif'; // Import the gif

const Dddmarket = () => {
  const containersRef = useRef([]);
  const [flipped, setFlipped] = useState([false, false, false]); // состояние переворота карточек

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

  const handleFlip = (index) => {
    setFlipped(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Градиенты для каждого блока
  const gradientStyles = [
    { background: 'radial-gradient(ellipse at left, #1137c6 10%, #0d0d0d 70%, #0d0d0d 15%)' }, // Первый блок
    { background: 'radial-gradient(ellipse at center, #00ff85 10%, #0d0d0d 70%, #0d0d0d 15%)' }, // Второй блок
    {
      background: 'radial-gradient(ellipse at center, #DD637C 10%, #0d0d0d 70%, #0d0d0d 15%)',
      backgroundSize: '50% 100%' // Третий блок с дополнительным свойством
    },
  ];

  const cardStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
  };

  const frontBackCommonStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    color: 'white',
    borderRadius: '10px',
  };

  return (
    <section className="mt-60 sm:mt-60 md:mt-28 lg:mt-36">
      <div className='container h-full md:h-192 flex flex-col'>
        <div className='h-auto md:h-1/2 flex flex-col md:flex-row gap-2'>
          {/* Карточка 1 */}
          <div
            ref={el => containersRef.current[0] = el}
            className="h-96 md:h-96 w-full md:w-1/3 rounded-md relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
            style={{ ...gradientStyles[0] }}
            onClick={() => handleFlip(0)} // Переворот карточки по клику
          >
            <div style={{ ...cardStyle, transform: flipped[0] ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
              <div style={{ ...frontBackCommonStyle, background: 'rgba(0, 0, 0, 0.6)', transform: 'rotateY(0deg)' }}>
                <img src={eyesGif} alt="Eyes" className="absolute top-2 right-2 w-10 h-10" />
                <h2 className="text-2xl 2xl:text-5xl font-semibold">чатботы для<br />продаж</h2>
                <Chat className="absolute bottom-4 left-4" fontSize="inherit" style={{ color: '#ffffff', fontSize: '48px' }} />
              </div>
              <div style={{ ...frontBackCommonStyle, background: 'rgba(0, 0, 0, 0.8)', transform: 'rotateY(180deg)' }}>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ автоматизация продаж</p>
                </div>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ обработка заказов</p>
                </div>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ консультирование клиентов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div
            ref={el => containersRef.current[1] = el}
            className="h-96 md:h-96 w-full md:w-1/3 rounded-md relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
            style={{ ...gradientStyles[1] }}
            onClick={() => handleFlip(1)}
          >
            <div style={{ ...cardStyle, transform: flipped[1] ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
              <div style={{ ...frontBackCommonStyle, background: 'rgba(0, 0, 0, 0.6)', transform: 'rotateY(0deg)' }}>
                <img src={eyesGif} alt="Eyes" className="absolute top-2 right-2 w-10 h-10" />
                <h2 className="text-2xl 2xl:text-5xl font-semibold">чатботы для<br />служба поддержки</h2>
                <Sync className="absolute bottom-4 left-4" fontSize="inherit" style={{ color: '#ffffff', fontSize: '48px' }} />
              </div>
              <div style={{ ...frontBackCommonStyle, background: 'rgba(0, 0, 0, 0.8)', transform: 'rotateY(180deg)' }}>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ поддержка клиентов</p>
                </div>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ обработка запросов</p>
                </div>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ решения вопросов</p>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div
            ref={el => containersRef.current[2] = el}
            className="h-96 md:h-96 w-full md:w-1/3 rounded-md  relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
            style={{ ...gradientStyles[2] }}
            onClick={() => handleFlip(2)}
          >
            <div style={{ ...cardStyle, transform: flipped[2] ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
              <div style={{ ...frontBackCommonStyle, background: 'rgba(0, 0, 0, 0.6)', transform: 'rotateY(0deg)' }}>
                <img src={eyesGif} alt="Eyes" className="absolute top-2 right-2 w-10 h-10" />
                <h2 className="text-2xl 2xl:text-5xl font-semibold">маркетинговые<br /> чатботы</h2>
                <Speed className="absolute bottom-4 left-4" fontSize="inherit" style={{ color: '#ffffff', fontSize: '48px' }} />
              </div>
              <div style={{ ...frontBackCommonStyle, background: 'rgba(0, 0, 0, 0.8)', transform: 'rotateY(180deg)' }}>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ автоматизация рассылок</p>
                </div>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ продвижение услуг</p>
                </div>
                <div className="pl-2 w-full rounded-full h-14 mx-auto flex flex-col justify-center mt-2">
                  <p className="text-white text-2xl xl:text-2xl 2xl:text-4xl text-left">★ привлечение клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Узкие плашки с видами чатботов */}
        <div className='h-auto md:h-1/2 flex flex-col md:flex-row mt-2 gap-2'>
          <div className="w-full h-72 md:h-full shadow-inner shadow-[#42FFA4] md:w-1/3 text-white p-2 rounded-md">
            <div className='flex flex-col justify-between h-full'>
              <h3 className="text-2xl 2xl:text-4xl text-success font-semibold">Быстрый отклик<br />на запросы</h3>
              <p className='mt-8 text-gray-300 text-xl 2xl:text-3xl'>telegram чатботы позволяют мгновенно реагировать на запросы клиентов</p>
            </div>
            {/* <div className='flex justify-end mt-4'>
            <img src={telegramIcon} alt="Telegram Icon" className='w-10 h-10' />
            </div> */}
          </div>
          <div className="w-full h-72 md:h-full md:w-1/3 shadow-inner shadow-[#42FFA4] text-white p-2 rounded-md">
            <div className='flex flex-col justify-between h-full'>
              <h3 className="text-2xl 2xl:text-4xl text-success font-semibold">Автоматизация<br /> бизнес-процессов</h3>
              <p className='mt-8 text-gray-300 text-xl 2xl:text-3xl'>чатботы упрощают обработку заказов и ведение клиентов</p>
            </div>
            {/* <div className='flex justify-end mt-4'>
            <img src={telegramIcon} alt="Telegram Icon" className='w-10 h-10' />
            </div> */}
          </div>
          <div className="w-full h-72 md:h-full md:w-1/3 shadow-inner shadow-[#42FFA4] text-white p-2 rounded-md">
            <div className='flex flex-col justify-between h-full'>
              <h3 className="text-2xl 2xl:text-4xl text-success font-semibold">Преимущество<br />на рынке</h3>
              <p className='mt-8 text-gray-300 text-xl 2xl:text-3xl'>использование чатботов дает вам преимущество на рынке</p>
              {/* <div className='flex justify-end mt-4'>
            <img src={telegramIcon} alt="Telegram Icon" className='w-10 h-10' />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dddmarket;



































// import React, { useEffect, useRef } from 'react';
// import { Chat, Speed, Sync } from '@mui/icons-material';
// import telegramIcon from './images/telegram.png';

// const Dddmarket = () => {
//   const containersRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.remove('opacity-0', 'translate-y-4');
//           entry.target.classList.add('opacity-100', 'translate-y-0');
//         } else {
//           entry.target.classList.remove('opacity-100', 'translate-y-0');
//           entry.target.classList.add('opacity-0', 'translate-y-4');
//         }
//       });
//     }, {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50% 0px'
//     });

//     containersRef.current.forEach(container => {
//       if (container) {
//         observer.observe(container);
//       }
//     });

//     return () => {
//       containersRef.current.forEach(container => {
//         if (container) {
//           observer.unobserve(container);
//         }
//       });
//     };
//   }, []);

//   // Градиенты для каждого блока
//   const gradientStyles = [
//     { background: 'radial-gradient(ellipse at left, #1137c6 10%, #0d0d0d 70%, #0d0d0d 15%)' }, // Первый блок
//     { background: 'radial-gradient(ellipse at center, #00ff85 10%, #0d0d0d 70%, #0d0d0d 15%)' }, // Второй блок
//     {
//       background: 'radial-gradient(ellipse at center, #DD637C 10%, #0d0d0d 70%, #0d0d0d 15%)',
//       backgroundSize: '50% 100%' // Третий блок с дополнительным свойством
//     },
//   ];

//   return (
//     <section className="mt-60 sm:mt-60 md:mt-28 lg:mt-36">
//       <div className='container h-full md:h-192 flex flex-col'>
//         <div className='h-auto md:h-1/2 flex flex-col md:flex-row gap-2'>
//           {/* Блок про быстрый отклик через чатботы */}
//           <div
//             ref={el => containersRef.current[0] = el}
//             className="h-96 md:h-96 px-4 py-4 rounded-md w-full md:w-1/3 relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
//             style={gradientStyles[0]}
//           >
//             <h2 className="text-2xl 2xl:text-5xl font-semibold text-white">
//               быстрый отклик<br /> на запросы
//             </h2>
//             <p className="mt-4 text-xl 2xl:text-3xl text-white">
//               telegram чатботы позволяют мгновенно реагировать на запросы клиентов, повышая их удовлетворенность
//             </p>
//             <Chat className="absolute bottom-4 left-4" fontSize="inherit" style={{ color: '#ffffff', fontSize: '48px' }} />
//           </div>

//           {/* Блок про автоматизацию процессов */}
//           <div
//             ref={el => containersRef.current[1] = el}
//             className="h-96 md:h-96 px-4 py-4 rounded-md w-full md:w-1/3 relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
//             style={gradientStyles[1]}
//           >
//             <h2 className="text-2xl 2xl:text-5xl font-semibold text-white">
//               автоматизация<br /> бизнес-процессов
//             </h2>
//             <p className="mt-4 text-xl 2xl:text-3xl text-white">
//               чатботы упрощают обработку заказов, ведение клиентов и интеграцию с CRM, освобождая время сотрудников
//             </p>
//             <Sync className="absolute bottom-4 left-4" fontSize="inherit" style={{ color: '#ffffff', fontSize: '48px' }} />
//           </div>

//           {/* Блок про конкурентное преимущество */}
//           <div
//             ref={el => containersRef.current[2] = el}
//             className="h-96 md:h-96 px-4 py-4 rounded-md w-full md:w-1/3 relative opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
//             style={gradientStyles[2]}
//           >
//             <h2 className="text-2xl 2xl:text-5xl font-semibold text-white">
//               преимущество<br /> на рынке
//             </h2>
//             <p className="mt-4 text-xl 2xl:text-3xl text-white">
//               использование чатботов дает вам преимущество, ускоряя процессы и улучшая взаимодействие с клиентами
//             </p>
//             <Speed className="absolute bottom-4 left-4" fontSize="inherit" style={{ color: '#ffffff', fontSize: '48px' }} />
//           </div>
//         </div>

//         {/* Узкие плашки с видами чатботов */}
//         <div className='h-auto md:h-1/2 flex flex-col md:flex-row mt-2 gap-2'>
//           <div className="w-full h-72 md:h-full border-2 border-white md:w-1/3 text-white p-2 rounded-md">
//             <div className='flex flex-col justify-between h-full'>
//               <h3 className="text-2xl 2xl:text-4xl text-success font-semibold">чатботы для продаж</h3>
//               <p className='mt-8 text-gray-300 text-xl 2xl:text-3xl'>автоматизация продаж, обработка заказов и консультирование клиентов в режиме реального времени</p>
//             </div>
//             {/* <div className='flex justify-end mt-4'>
//             <img src={telegramIcon} alt="Telegram Icon" className='w-10 h-10' />
//             </div> */}
//           </div>
//           <div className="w-full h-72 md:h-full md:w-1/3 border-2 border-white text-white p-2 rounded-md">
//             <div className='flex flex-col justify-between h-full'>
//               <h3 className="text-2xl 2xl:text-4xl text-success font-semibold">служба поддержки</h3>
//               <p className='mt-8 text-gray-300 text-xl 2xl:text-3xl'>чатботы для поддержки клиентов, обработки запросов и решения вопросов в любое время суток</p>
//             </div>
//             {/* <div className='flex justify-end mt-4'>
//             <img src={telegramIcon} alt="Telegram Icon" className='w-10 h-10' />
//             </div> */}
//           </div>
//           <div className="w-full h-72 md:h-full md:w-1/3 border-2 border-white text-white p-2 rounded-md">
//             <div className='flex flex-col justify-between h-full'>
//               <h3 className="text-2xl 2xl:text-4xl text-success font-semibold">маркетинговые чатботы</h3>
//               <p className='mt-8 text-gray-300 text-xl 2xl:text-3xl'>автоматизированные рассылки, продвижение услуг и привлечение клиентов через мессенджеры</p>
//               {/* <div className='flex justify-end mt-4'>
//             <img src={telegramIcon} alt="Telegram Icon" className='w-10 h-10' />
//             </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dddmarket;
