import { motion } from "framer-motion";

type Props = {
  billingYearly: boolean;
  setBillingYearly: (value: boolean) => void;
};

export default function BillingToggle({ billingYearly, setBillingYearly }: Props) {
  return (
    <motion.button
      className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setBillingYearly(!billingYearly)}
    >
      {billingYearly ? "Switch to Monthly" : "Switch to Yearly"}
    </motion.button>
  );
}
