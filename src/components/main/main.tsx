import SliderPart from "@/components/sliderPart/slider";
import BillingPart from "@/components/billing/billing";
import FeaturesListTrial from "@/components/featuresListTrial/featuresListTrial";

export default function Main() {
  return (
    <>
      <main className="w-full h-2/3 flex justify-center items-center">
        <section className="flex flex-col pt-8 pb-8 justify-center w-1/2 h-fit gap-8 rounded-lg bg-[color:var(--Very-Pale-Blue)]">
          <SliderPart></SliderPart>

          <BillingPart></BillingPart>

          <hr className="w-full" />

          <FeaturesListTrial></FeaturesListTrial>
        </section>
      </main>
    </>
  );
}
