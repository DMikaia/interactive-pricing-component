import Image from "next/image";

export default function FeaturesListTrial() {
  return (
    <>
      <section className="pr-8 pl-8 flex justify-between items-center flex-col md:flex-row gap-6 md:gap-0">
        <ul className="text-[color:var(--Grayish-Blue)] font-semibold text-sm flex flex-col gap-3">
          <li className="flex gap-2 items-center">
            <Image
              src="./icons/icon-check.svg"
              width={9}
              height={8}
              alt={"Image representing a check icon"}
            />
            Unlimited websites
          </li>
          <li className="flex gap-2 justify-start items-center">
            <Image
              src="./icons/icon-check.svg"
              width={9}
              height={8}
              alt={"Image representing a check icon"}
            />
            100% data ownership
          </li>
          <li className="flex gap-2 justify-start items-center">
            <Image
              src="./icons/icon-check.svg"
              width={9}
              height={8}
              alt={"Image representing a check icon"}
            />
            Email reports
          </li>
        </ul>
        <button className="pt-3 pb-3 text-sm pl-10 pr-10 text-[color:var(--Pale-Blue)] focus:text-[color:var(--White)] hover:text-[color:var(--White)] rounded-3xl w-fit h-fit bg-[color:var(--Dark-Desaturated-Blue)] ease-linear duration-300">
          Start my trial
        </button>
      </section>
    </>
  );
}
