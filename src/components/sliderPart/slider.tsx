"use client";

import { useState } from "react";
import "./slider.css";

export default function SliderPart() {
  const [money, setMoney] = useState<string>("16.00");

  const changeMoneyValue = (e: any) => {
    let value = parseFloat(e.target.value);

    if (value % 1 === 0) {
      setMoney(String(value) + ".00");
    } else {
      setMoney(String(value));
    }
  };

  return (
    <>
      <section className="flex flex-col gap-8 relative">
        <section className="flex justify-center flex-col gap-16 md:gap-8 md:flex-row md:justify-between items-center pr-5 pl-5 md:pr-8 md:pl-8 lg:gap-0">
          <p className="uppercase text-[color:var(--Grayish-Blue)] tracking-widest">
            100k Pageviews
          </p>
          <div className="flex gap-1 justify-center items-center">
            <span className="text-3xl font-extrabold text-[color:var(--Dark-Desaturated-Blue)]">
              ${money}
            </span>
            <span className="text-[color:var(--Grayish-Blue)]">/ month</span>
          </div>
        </section>

        <section
          id="input-box"
          className="w-full pr-5 pl-5 md:pr-8 md:pl-8 top-12 absolute md:top-0 md:relative"
        >
          <input
            type="range"
            min={0}
            max={32}
            step={0.25}
            defaultValue={16}
            className="w-full"
            onChange={(e) => changeMoneyValue(e)}
          />
        </section>
      </section>
    </>
  );
}
