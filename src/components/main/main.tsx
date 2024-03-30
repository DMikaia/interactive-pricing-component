import SliderPart from "@/components/sliderPart/slider";
import BillingPart from "@/components/billing/billing";
import List from "@/components/List/List";

export default function Main() {
  return (
    <>
      <main className="w-full pl-5 pr-5 md:p-0 h-2/3 flex justify-center items-center">
        <div className="flex flex-col pt-5 pb-5 gap-6 md:w-fit lg:w-136 xl:pt-8 xl:pb-8 xl:gap-8 justify-center rounded-lg bg-[color:var(--Very-Pale-Blue)]">
          <SliderPart></SliderPart>

          <BillingPart></BillingPart>

          <hr className="w-full" />

          <List></List>
        </div>
      </main>
    </>
  );
}
