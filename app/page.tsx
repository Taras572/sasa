"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let array = ["ПН", "ВТ", "CP", "ЧТ", "ПТ", "СБ", "НД"];
  let days = Array.from({ length: 31 }, (_, i) => i + 1);


  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });
 

  useEffect(() => {
    const weddingDate = new Date("2026-07-20T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          finished: true,
        });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        finished: false,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  const [name, setName] = useState("");
  const [attending, setAttending] = useState(false);
  const [alcohol, setAlcohol] = useState<string[]>([]);

  const toggleAlcohol = (item: string) => {
    setAlcohol((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };


  return (
    <div className="min-h-screen flex  justify-center">
      <div className="b w-[500px] text-center bg-[#fffdeb]">

        <div style={{ backgroundImage: "url('/sasa/i1.jpg')" }} className="h-[600px]  bg-cover bg-center flex items-center justify-center">
          <h1 className="mt-[-250px] text-olive-300 font-['Tangerine',cursive] text-[100px] text-center leading-none">
            <span>Alexander</span> <span>&</span> <span>Natalia</span>
          </h1>
        </div>

        <div className="position: relative flex flex-col gap-y-[50px]"> {/* контейнер  */}
          <div className="position: absolute z-[999] top-[-30px]">
            <img src="/sasa/i4.png" alt="" />
          </div>


          <div className="ml-[20px] mr-[20px]">
            <h2 className="pt-[40px] font-['Great_Vibes',cursive] text-[50px] ">
              Любі Гості!
            </h2>
            <p>Один день у цьому році буде для нас дуже особливим і ми хотіли би його провести у колі близьких для нас людей.</p>
            <p className="mt-[10px]"> З великим задоволенням запрошуємо вас відсвяткувати цей день разом!</p>
          </div>

          {/* ------------------------------------------------------------------------------------ */}

          <div className="max-w-[350px] mx-auto">
            <h2 className="font-['Great_Vibes',cursive] text-[50px] ">
              Липень
            </h2>
            <div className="grid grid-cols-7 gap-2">
              {array.map((day, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <div key={day} className="w-10 h-10 flex items-center justify-center">
                  {day === 20 ? (
                    <div style={{ backgroundImage: "url('/sasa/i5.svg')" }} className="animate-sway h-[47px] w-[47px] bg-cover bg-center flex items-center justify-center text-red-500">
                      {day}
                    </div>
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center">
                      {day}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* ------------------------------------------------------------------------------------ */}

          <div className="bg-[#233c1a] position: relative pt-[90px] text-[#fffdeb] pb-[90px]">
            <div className="position: absolute z-[999] top-[-30px]">
              <img src="/sasa/i4.png" alt="" />
            </div>
            <div className="pb-[30px]">
              <h2 className="font-['Great_Vibes',cursive] text-[50px] ">
                Місце проведення
              </h2>
              <p>Navaria Village, Наварія, Львівська область, Україна</p>
            </div>
            <img src="/sasa/i3.png" alt="" />

            <div className="position: absolute z-[999] bottom-[-40px]">
              <img src="/sasa/i4.png" alt="" />
            </div>

          </div>
          {/* ------------------------------------------------------------------------------------ */}

          <div className="bg-[#233c1a] position: relative pt-[90px] text-[#fffdeb] pb-[90px] flex flex-col gap-y-[40px] text-xl">
            <div className="position: absolute z-[999] top-[-30px]">
              <img src="/sasa/i4.png" alt="" />
            </div>

            <h2 className="font-['Great_Vibes',cursive] text-[50px] ">
              Програма дня
            </h2>

            <div className="grid grid-cols-3 gap-2 px-[30px]">
              <h3 className="flex items-center justify-center">ЗБІР ГОСТЕЙ</h3>
              <div style={{ backgroundImage: "url('/sasa/glass.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center ">

              </div>
              <h3 className="flex items-center justify-center">15:30</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 px-[30px]">
              <h3 className="flex items-center justify-center">ЦЕРЕМОНІЯ</h3>
              <div style={{ backgroundImage: "url('/sasa/wedding.svg')" }}  className="w-15 h-15 mx-auto bg-cover bg-center ">
              </div>
              <h3 className="flex items-center justify-center">16:00</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 px-[30px]">
              <h3 className="flex items-center justify-center">БАНКЕТ</h3>
              <div style={{ backgroundImage: "url('/sasa/food.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center">
              </div>
              <h3 className="flex items-center justify-center">18:00</h3>
            </div>


            <div className="position: absolute z-[999] bottom-[-40px]">
              <img src="/sasa/i4.png" alt="" />
            </div>

          </div>

          <div className="ml-[20px] mr-[20px]">
            <h2 className="pt-[10px] font-['Great_Vibes',cursive] text-[50px] ">
              Побажання
            </h2>
            <img className="mx-auto h-[80px]" src="/sasa/i9.png" alt="" />
            <p>Просимо вас не дарувати нам квіти, ми не встигнемо насолодитися їх красою.
              Приємним компліментом для нас буде, якщо ви замість квітів вирішите подарувати нам пляшку алкогольного напою для нашої колекції, яку ми відкриємо на найближчому нашому сімейному святі.</p>
          </div>

          {/* ---------------------------------------------------------------------------------------- */}
          <div style={{ backgroundImage: "url('/sasa/i10.jpg')" }} className="position: relative h-[600px]  bg-cover bg-center flex flex-col gap-20 text-white">
            <div className="position: absolute z-[999] top-[-30px]">
              <img src="/sasa/i4.png" alt="" />
            </div>
            <h1 className="text-[30px] mt-[90px]">
              Чекаємо на вас через:
            </h1>
            <div className="text-white flex justify-center items-center gap-3 text-4xl font-bold text-[#233c1a]">

              <div className="text-center">
                {timeLeft.days}
                <div className="text-xs font-normal">дні</div>
              </div>

              <div>:</div>

              <div className="text-center">
                {timeLeft.hours}
                <div className="text-xs font-normal">год</div>
              </div>

              <div>:</div>

              <div className="text-center">
                {timeLeft.minutes}
                <div className="text-xs font-normal">хв</div>
              </div>

              <div>:</div>

              <div className="text-center">
                {timeLeft.seconds}
                <div className="text-xs font-normal">сек</div>
              </div>

            </div>
            <div className="position: absolute z-[999] bottom-[-40px]">
              <img src="/sasa/i4.png" alt="" />
            </div>
          </div>
          {/* --------------------------------------------------------------------------- */}

          <div className="ml-[20px] mr-[20px]">
            <h2 className=" font-['Great_Vibes',cursive] text-[50px] ">
              Просимо відповісти на декілька запитань:
            </h2>
            <p>Ваша думка не дуже важлива для нас, і ми її навіть не прочитаємо <span>&#128512;</span> але заповнити треба</p>
          </div>


          {/* -------------------------------------------------------------------------------- */}

          <div className="max-w-[500px] mx-auto p-2 bg-[#fffdeb] text-[#233c1a]">
            {/* Ім'я */}
            <div className="mb-4">
              <label className="block mb-1">Ваше ім’я</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#233c1a] p-2 rounded"
                placeholder="Введіть прізвище та ім’я"
              />
            </div>

            {/* Чи прийду */}
            <div className="mb-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={attending}
                onChange={() => setAttending(!attending)}
              />
              <label>Я планую бути на весіллі</label>
              <input
                type="checkbox"
                checked={attending}
                onChange={() => setAttending(!attending)}
              />
              <label> А ніхуя </label>
            </div>

            {/* Алкоголь */}
            <div className="mb-4">
              <p className="mb-2 mt-[20px]">Який алкоголь ви вибираєте:</p>


              <div className="grid grid-cols-2 gap-2 mt-[20px]">
                {["Горілка", "Віскі", "Вино", "Ром", "Шампанське"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={alcohol.includes(item)}
                      onChange={() => toggleAlcohol(item)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Кнопка */}
            <button className="w-full mt-4 bg-[#233c1a] text-[#fffdeb] p-2 rounded hover:opacity-90">
              Відправити
            </button>

          </div>

          {/* --------------------------------------------------------------- */}
          <div style={{ backgroundImage: "url('/sasa/i2.jpg')" }} className=" position: relative h-[600px]  bg-cover bg-center text-white" >
            <div className="position: absolute z-[999] top-[-30px]">
              <img src="/i4.png" alt="" />
            </div>
            <h2 className="pt-[60px] font-['Great_Vibes',cursive] text-[35px] ">
              Будемо раді бачити вас на нашому святі!
            </h2>
             <h1 className="mt-[30px] text-white font-['Tangerine',cursive] text-[70px] text-center leading-none">
            <span>Саньок</span> <span>та</span> <span>Натаха</span>
          </h1>

          </div>

        </div>

      </div>

    </div>
  );
}