import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="w-full flex flex-col justify-center items-center relative h-1/3 gap-2">
        <h2 className="text-xl md:text-3xl z-10 text-[color:var(--Dark-Desaturated-Blue)] font-extrabold">
          Simple, traffic-based pricing
        </h2>
        <p className="text-base w-56 md:w-full text-center z-10 text-[color:var(--Grayish-Blue)]">
          Sign-up for our 30-day trial. No credit card required.
        </p>
        <Image
          src="/pattern-circles.svg"
          width={0}
          height={0}
          alt={
            "Image representing two circle that are intersecting in one point"
          }
          className="absolute object-cover w-32 h-32"
        />
      </header>
    </>
  );
}
