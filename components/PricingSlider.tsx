import { useState } from "react";
import { motion } from "framer-motion";
import BillingToggle from "./BillingToggle";

const pricingData = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];

export default function PricingSlider() {
  const [billingYearly, setBillingYearly] = useState(false);
  const [index, setIndex] = useState(2);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(Number(e.target.value));
  };

  const currentPrice = billingYearly
    ? pricingData[index].price * 0.75
    : pricingData[index].price;

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg w-96 transition-all"
    >
      <h2 className="text-lg font-semibold text-center">
        {pricingData[index].views} Pageviews
      </h2>
      <motion.input
        type="range"
        min="0"
        max="4"
        step="1"
        value={index}
        onChange={handleSliderChange}
        className="w-full mt-3 cursor-pointer accent-blue-500"
        whileHover={{ scale: 1.05 }}
      />
      <div className="mt-4 flex justify-between items-center">
        <motion.span
          className="text-xl font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ${currentPrice.toFixed(2)} / {billingYearly ? "year" : "month"}
        </motion.span>
        <BillingToggle
          billingYearly={billingYearly}
          setBillingYearly={setBillingYearly}
        />
      </div>
    </motion.div>
  );
}
