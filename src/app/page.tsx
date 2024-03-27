import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="w-full flex flex-col justify-center items-center relative h-1/3">
        <h2 className="text-3xl z-10 text-[color:var(--Dark-Desaturated-Blue)] font-extrabold">
          Simple, traffic-based pricing
        </h2>
        <p className="text-s z-10 text-[color:var(--Grayish-Blue)]">
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
      <main className="w-full h-2/3 flex justify-center items-center">
        <section className="flex flex-col pt-4 pb-4 justify-center w-1/2 h-fit gap-4 rounded-lg bg-[color:var(--Very-Pale-Blue)]">
          <section className="flex flex-col gap-6 pr-8 pl-8">
            <section className="flex justify-between items-center">
              <p className="uppercase text-[color:var(--Grayish-Blue)] tracking-widest">
                100k Pageviews
              </p>
              <div className="flex gap-1 justify-center items-center">
                <span className="text-3xl font-extrabold text-[color:var(--Dark-Desaturated-Blue)]">
                  $16.00
                </span>
                <span className="text-[color:var(--Grayish-Blue)]">
                  / month
                </span>
              </div>
            </section>

            <section id="input-box" className="w-full">
              <input type="range" min="0" max="32" className="w-full" />
            </section>

            <section>
              <div>
                <span>Monthly Billing</span>
              </div>
              <div>
                <span>Yearly Billing</span>
                <span>25% discount</span>
              </div>
            </section>
          </section>

          <hr className="w-full" />

          <section className="pr-8 pl-8">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button>Start my trial</button>
          </section>
        </section>
      </main>
    </>
  );
}
