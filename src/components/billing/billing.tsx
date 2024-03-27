import ToggleButton from "./toggleButton";

export default function BillingPart() {
  return (
    <>
      <section className="flex justify-end items-center gap-2 md:gap-4 pr-5 pl-5 md:pr-8 md:pl-8 w-full">
        <div className="flex gap-2 justify-center items-center w-fit">
          <span className="bill-text text-[color:var(--Grayish-Blue)] text-xs md:text-sm w-fit">
            Monthly Billing
          </span>
          <ToggleButton></ToggleButton>
        </div>
        <div className="flex gap-2 justify-center items-center w-fit">
          <span className="text-[color:var(--Grayish-Blue)] text-xs md:text-sm w-fit">
            Yearly Billing
          </span>
          <span className="text-xs bg-[color:var(--Light-Grayish-Red)] text-[color:var(--Light-Red)] p-0.5 rounded-xl">
            25% discount
          </span>
        </div>
      </section>
    </>
  );
}
