"use client";

import { useState } from "react";
import "./slider.css";

export default function SliderPart() {
  const [money, setMoney] = useState<number>(16.0);

  const changeMoneyValue = (e: any) => {
    let value = e.target.value;
    setMoney(value);
  };

  return (
    <>
      <section className="flex justify-between items-center pr-8 pl-8">
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

      <section id="input-box" className="w-full relative pr-8 pl-8">
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
    </>
  );
}
