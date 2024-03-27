"use client";

import { useState } from "react";

export default function ToggleButton() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setToggle(!toggle)}
        className={`hover:bg-[color:var(--Strong-Cyan)] w-10 h-5 p-1 rounded-xl ${
          toggle
            ? "bg-[color:var(--Strong-Cyan)]"
            : "bg-[color:var(--Light-Grayish-Blue-Toggle)]"
        } flex items-center relative duration-300 ease-linear cursor-pointer`}
      >
        <div
          className={`w-4 h-4 bg-[color:var(--White)] rounded-full absolute ${
            toggle ? "right-1" : "left-1"
          } ease-linear duration-300`}
        ></div>
      </div>
    </>
  );
}
