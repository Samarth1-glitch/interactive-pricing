import PricingSlider from "@/components/PricingSlider";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <DarkModeToggle />
      <h1 className="text-3xl font-bold">Interactive Pricing</h1>
      <PricingSlider />
    </div>
  );
}
