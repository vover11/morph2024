import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="tab__header rounded-md">
        <a
          href="#"
          className="tab__link p-2 block bg-primary h-48 no-underline font-semibold text-white text-2xl 2xl:text-5xl flex justify-between space-y-2 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            setActive(!active);
          }}
        >
          {title}
          <span className="text-5xl down-Arrow text-top">
            {!active ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </span>
        </a>
      </div>
      {active && <div className="tab__content p-2 border-2 border-success rounded-md mt-2">{children}</div>}
    </div>
  );
};

const Ques = () => {
  return (
    <section className="mx-auto mt-60 sm:mt-60 md:mt-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Accordion title="планирование">
            <p className="pb-5 text-xl text-gray-300">
              проводим детальный анализ вашей отрасли,
              изучаем конкурентов и исследуем целевую аудиторию
              <br />
              <br />
              формируем четкое представление
              о вашей уникальности и определяем, как ваш сайт
              может привлекать и удерживать посетителей
              <br />
              <br />
              определяем цели проекта,
              ключевые функции и требования, чтобы гарантировать,
              что конечный продукт будет полностью соответствовать
              вашим ожиданиям и потребностям ваших клиентов
            </p>
          </Accordion>

          <Accordion title="дизайн и макет">
            <p className="pb-5 text-xl text-gray-300">
              стремимся создать простой и удобный интерфейс пользователя (UI),
              который обеспечивает понятную навигацию и интуитивное взаимодействие с сайтом
              <br />
              <br />
              уделяем особое внимание пользовательскому опыту (UX),
              чтобы гарантировать, что посетители сайта получают приятное взаимодействие
              и легко достигают своих целей
              <br />
              <br />
              разрабатываем прототипы и макеты,
              чтобы визуализировать интерфейс и обеспечить согласование с вами
              перед переходом к следующему этапу
            </p>
          </Accordion>
        </div>

        <div className="flex flex-col gap-2">
          <Accordion title="разработка">
            <p className="pb-5 text-xl text-gray-300">
              превращаем утвержденные макеты в работающий продукт,
              используя современные технологии и практики разработки
              <br />
              <br />
              внедряем функционал, который был определен на этапе планирования,
              и гарантируем, что сайт будет эффективным, безопасным и масштабируемым
              <br />
              <br />
              наша команда программистов работает над созданием чистого
              и понятного кода, чтобы обеспечить высокую производительность
              и легкость в дальнейшем обслуживании
            </p>
          </Accordion>

          <Accordion title="тесты и поддержка">
            <p className="pb-5 text-xl text-gray-300">
              после завершения разработки мы проводим всесторонние тесты,
              чтобы убедиться, что сайт работает без сбоев на различных устройствах и браузерах
              <br />
              <br />
              проверяем функциональность, производительность, безопасность
              и соответствие всем требованиям
              <br />
              <br />
              после запуска сайта предлагаем услуги поддержки,
              чтобы гарантировать его стабильную работу и внедрять необходимые
              обновления и улучшения
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Ques;