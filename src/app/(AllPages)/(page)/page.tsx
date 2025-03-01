import ChoiceSection from "@/app/components/home/ChoiceSection";
import ImageSection from "@/app/components/home/ImageSection";
import { SomePopular } from "@/app/components/home/SomePopular";

export default function Home() {
  return (
    <div className="bg-neutral-800 py-6 w-full">
      <ImageSection />
      <SomePopular />
      <ChoiceSection />
    </div>
  );
}
