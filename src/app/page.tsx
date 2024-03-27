import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col justify-center items-center relative h-1/3">
        <h2 className="text-2xl text-[color:var(--Dark-Desaturated-Blue)] font-extrabold">
          Simple, traffic-based pricing
        </h2>
        <p className="text-xs text-[color:var(--Grayish-Blue)]">
          Sign-up for our 30-day trial. No credit card required.
        </p>
        <Image
          src="/pattern-circles.svg"
          width={128}
          height={128}
          alt={
            "Image representing two circle that are intersecting in one point"
          }
          className="absolute -z-10"
        />
      </header>
      <main className="w-full h-2/3"></main>
    </>
  );
}
