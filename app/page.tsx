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
    const weddingDate = new Date("2026-07-18T00:00:00").getTime();

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
  const [guest, setGuest] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [alcohol, setAlcohol] = useState<string[]>([]);

  const toggleAlcohol = (item: string) => {
    setAlcohol((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const submitForm = async () => {
    setError("");

    if (!name.trim()) {
      setError("Введіть ім’я");
      return;
    }

    if (!attending) {
      setError("Оберіть: буду / не буду");
      return;
    }

    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbw-VoO1i4lby-OEgv2QCy1pAfzE-JN1acscbT5YVJ1iXdeCRR5B4QokekOFFTYyvNB8/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            name,
            attending,
            alcohol: alcohol.join(", "),
          }),
        }
      );

      alert("Дякуємо! 🙌");

      setName("");
      setAttending(null);
      setAlcohol([]);

    } catch (err) {
      setError("Помилка відправки");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  justify-center">
      <div className="b w-[500px] text-center bg-[#fffdeb]">

        {/* <div style={{ backgroundImage: "url('/sasa/i1.jpg')" }} className="h-[600px]  bg-cover bg-center flex items-center justify-center"> */}
        <div style={{ backgroundImage: "url('/i1.jpg')" }} className="h-[600px]  bg-cover bg-center flex items-center justify-center">
          <h1 className="mt-[-380px] text-olive-300 font-['Great_Vibes',cursive] text-[100px] text-center leading-none">
            <span>Олександр</span> <span>та</span> <span>Наталія</span>
          </h1>
        </div>

        <div className="position: relative flex flex-col gap-y-[30px]"> {/* контейнер  */}
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
              <div className="w-10 h-10 flex items-center justify-center"></div>
              <div className="w-10 h-10 flex items-center justify-center"></div>
              {days.map((day, index) => (
                <div key={day} className="w-10 h-10 flex items-center justify-center">
                  {day === 18 ? (
                    <div style={{ backgroundImage: "url('/i5.svg')" }} className="animate-sway h-[47px] w-[47px] bg-cover bg-center flex items-center justify-center text-red-500">
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

          <div className="bg-[#507c53] position: relative pt-[90px] text-[#fffdeb] pb-[90px]">
            <div className="position: absolute z-[999] top-[-30px]">
              {/* <img src="/sasa/i4.png" alt="" /> */}
              <img src="/i4.png" alt="" />
            </div>
            <div className="pb-[30px]">
              <h2 className="font-['Great_Vibes',cursive] text-[50px] ">
                Місце проведення
              </h2>
              <p>Navaria Village, Наварія, Львівська область, Україна</p>
            </div>
            <a href="https://maps.app.goo.gl/8TsKPmcxDb7uXvnm7" className="flex justify-center">
              {/* <button
                className=" w-[130px] text-[20px] mt-2 mb-3 bg-[#233c1a] text-[#fffdeb] p-2 rounded hover:opacity-90 disabled:opacity-50"

              >
                Локація
              </button> */}


              <button
                className="
                mb-4
        group
        relative
        flex
        h-11
        w-[200px]
        cursor-pointer
        items-center
        overflow-hidden
        rounded-xl
        border-0
        bg-[#233c1a]
        pl-5
        pr-14
        text-white
        shadow-[inset_0_0_1.6em_-0.6em_#714da6]
        transition-all
      "
              >
                <span className="font-medium tracking-wide">
                  Локація
                </span>

                <div
                  className="
          absolute
          right-1
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          bg-white
          
          transition-all
          duration-300
          group-hover:w-[calc(100%-0.5rem)]
          active:scale-95
        "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="
            h-5
            w-5
            text-[#233c1a]
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </div>
              </button>






            </a>
            {/* <img src="/sasa/i3.png" alt="" /> */}
            <img src="/i3.png" alt="" />

            <div className="position: absolute z-[999] bottom-[-40px]">
              {/* <img src="/sasa/i4.png" alt="" /> */}
              <img src="i4.png" alt="" />
            </div>

          </div>
          {/* ------------------------------------------------------------------------------------ */}

          <div className="bg-[#507c53] position: relative pt-[90px] text-[#fffdeb] pb-[90px] flex flex-col gap-y-[40px] text-xl">
            <div className="position: absolute z-[999] top-[-30px]">
              {/* <img src="/sasa/i4.png" alt="" /> */}
              <img src="/i4.png" alt="" />
            </div>

            <h2 className="font-['Great_Vibes',cursive] text-[50px] ">
              Програма дня
            </h2>

            <div className="grid grid-cols-3 gap-2 px-[30px]">
              <h3 className="flex items-center justify-center">ВІНЧАННЯ</h3>
              {/* <div style={{ backgroundImage: "url('/sasa/wedding.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center "></div> */}
              <div style={{ backgroundImage: "url('/wedding.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center ">
              </div>
              <h3 className="flex items-center justify-center">12:00</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 px-[30px]">
              <h3 className="flex items-center justify-center text-[15px]">Церква Різдва Пресвятої Богородиці УГКЦ</h3>
              {/* <div style={{ backgroundImage: "url('/sasa/food.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center">
              </div> */}
              <div style={{ backgroundImage: "url('/church.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center">
              </div>
              <a href="https://maps.app.goo.gl/whvCUaD3Pe1geg9K8?g_st=it">
                {/* <button
                  className=" w-[130px] text-[20px] mt-2 mb-3 bg-[#233c1a] text-[#fffdeb] p-2 rounded hover:opacity-90 disabled:opacity-50"

                >
                  Локація
                </button> */}

                <button
                  className="
        group
        relative
        flex
        h-11
        w-full
        cursor-pointer
        items-center
        overflow-hidden
        rounded-xl
        border-0
        bg-[#233c1a]
        pl-5
        pr-14
        text-white
        shadow-[inset_0_0_1.6em_-0.6em_#714da6]
        transition-all
      "
                >
                  <span className="font-medium tracking-wide">
                    Локація
                  </span>

                  <div
                    className="
          absolute
          right-1
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          bg-white
          
          transition-all
          duration-300
          group-hover:w-[calc(100%-0.5rem)]
          active:scale-95
        "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="
            h-5
            w-5
            text-[#233c1a]
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
                  </div>
                </button>









              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 px-[30px]">
              <h3 className="flex items-center justify-center">БАНКЕТ</h3>
              {/* <div style={{ backgroundImage: "url('/sasa/food.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center">
              </div> */}
              <div style={{ backgroundImage: "url('/food.svg')" }} className="w-15 h-15 mx-auto bg-cover bg-center">
              </div>
              <h3 className="flex items-center justify-center">14:00</h3>
            </div>




            <div className="position: absolute z-[999] bottom-[-40px]">
              <img src="/i4.png" alt="" />
              {/* <img src="/sasa/i4.png" alt="" /> */}
            </div>

          </div>

          <div className="ml-[20px] mr-[20px]">
            <h2 className="pt-[10px] font-['Great_Vibes',cursive] text-[50px] ">
              Побажання
            </h2>
            <img className="mx-auto h-[80px]" src="/i9.png" alt="" />
            {/* <img className="mx-auto h-[80px]" src="/sasa/i9.png" alt="" /> */}
            <p>Просимо вас не дарувати нам квіти, ми не встигнемо насолодитися їх красою.
              Замість букетів будемо щасливі отримати книгу
              з Вашим підписом та побажанням —
              на згадку про цей особливий день ❤️</p>
          </div>

          {/* ---------------------------------------------------------------------------------------- */}
          {/* <div style={{ backgroundImage: "url('/sasa/i10.jpg')" }} className="position: relative h-[600px]  bg-cover bg-center flex flex-col gap-20 text-white"> */}
          <div style={{ backgroundImage: "url('/i10.jpg')" }} className="position: relative h-[600px]  bg-cover bg-center flex flex-col gap-20 text-white">
            <div className="position: absolute z-[999] top-[-30px]">
              {/* <img src="/sasa/i4.png" alt="" /> */}
              <img src="/i4.png" alt="" />
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
              <img src="/i4.png" alt="" />
              {/* <img src="/sasa/i4.png" alt="" /> */}
            </div>
          </div>
          {/* --------------------------------------------------------------------------- */}

          <div className="ml-[20px] mr-[20px]">
            <h2 className=" font-['Great_Vibes',cursive] text-[50px] ">
              Просимо відповісти на декілька запитань:
            </h2>
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
            <div className="mb-4 flex flex-col gap-2">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attending"
                  checked={attending === "yes"}
                  onChange={() => setAttending("yes")}
                />
                Я розділю з вами цей день
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attending"
                  checked={attending === "yes"}
                  onChange={() => setAttending("yes")}
                />
                Я буду з
              </label>
              <div className="mb-4">
                <input
                  type="text"
                  value={guest}
                  // onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#233c1a] p-2 rounded"
                  placeholder="Імена гостей"
                />
              </div>


              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="attending"
                  checked={attending === "no"}
                  onChange={() => setAttending("no")}
                />
                Я нажаль незможу
              </label>

            </div>



            {error && (
              <p className="text-red-600 mt-2 text-sm">
                {error}
              </p>
            )}

            {/* Кнопка */}
            {/* <button
              onClick={submitForm}
              disabled={loading}
              className="w-full mt-4 bg-[#233c1a] text-[#fffdeb] p-2 rounded hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Відправка..." : "Відправити"}
            </button> */}




            <button
              className="
        group
        relative
        flex
        h-11
        w-full
        cursor-pointer
        items-center
        overflow-hidden
        rounded-xl
        border-0
        bg-[#233c1a]
        pl-5
        pr-14
        text-white
        shadow-[inset_0_0_1.6em_-0.6em_#714da6]
        transition-all
      "
            >
              <span className="font-medium tracking-wide">
                Відправити
              </span>

              <div
                className="
          absolute
          right-1
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          bg-white
         
          transition-all
          duration-300
          group-hover:w-[calc(100%-0.5rem)]
          active:scale-95
        "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="
            h-5
            w-5
            text-[#233c1a]
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                </svg>
              </div>
            </button>








          </div>

          {/* --------------------------------------------------------------- */}
          {/* <div style={{ backgroundImage: "url('/sasa/i2.jpg')" }} className=" position: relative h-[600px]  bg-cover bg-center text-white" > */}
          <div style={{ backgroundImage: "url('/i2.jpg')" }} className=" position: relative h-[600px]  bg-cover bg-center text-white" >
            <div className="position: absolute z-[999] top-[-30px]">
              <img src="/i4.png" alt="" />
              {/* <img src="/sasa/i4.png" alt="" /> */}
            </div>
            <h2 className="pt-[60px] font-['Great_Vibes',cursive] text-[35px] ">
              Будемо раді бачити вас на нашому святі!
            </h2>

          </div>

        </div>

      </div>

    </div >
  );
}