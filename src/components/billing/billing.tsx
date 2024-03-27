import ToggleButton from "./toggleButton";

export default function BillingPart() {
  return (
    <>
      <section className="flex justify-end items-center gap-4 pr-8 pl-8 w-full">
        <div className="flex gap-2 justify-center items-center w-fit">
          <span className="text-[color:var(--Grayish-Blue)] text-sm">
            Monthly Billing
          </span>
          <ToggleButton></ToggleButton>
        </div>
        <div className="flex gap-2 justify-center items-center w-fit">
          <span className="text-[color:var(--Grayish-Blue)] text-sm">
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
