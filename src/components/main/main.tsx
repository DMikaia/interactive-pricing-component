import SliderPart from "@/components/sliderPart/slider";
import BillingPart from "@/components/billing/billing";
import FeaturesListTrial from "@/components/FeaturesListTrial/featuresListTrial";

export default function Main() {
  return (
    <>
      <main className="w-full pl-5 pr-5 md:p-0 h-2/3 flex justify-center items-center">
        <section className="flex flex-col pt-5 pb-5 gap-6 md:w-fit lg:w-1/2 2xl:w-1/3 xl:pt-8 xl:pb-8 xl:gap-8 justify-center rounded-lg bg-[color:var(--Very-Pale-Blue)]">
          <SliderPart></SliderPart>

          <BillingPart></BillingPart>

          <hr className="w-full" />

          <FeaturesListTrial></FeaturesListTrial>
        </section>
      </main>
    </>
  );
}
