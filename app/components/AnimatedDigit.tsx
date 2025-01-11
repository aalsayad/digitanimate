import { motion } from "framer-motion";

interface AnimatedDigitProps {
  digit: number;
}

export default function AnimatedDigit({ digit }: AnimatedDigitProps) {
  // Calculate the top position based on the digit
  const topPosition = `-${digit * 100}%`;

  // Create digit stack using for loop
  const digits = [];
  for (let d = 0; d < 10; d++) {
    digits.push(
      <div key={d} className="h-24 flex items-center justify-center">
        <span className="text-6xl font-bold">{d}</span>
      </div>
    );
  }

  return (
    <div
      id="digit-container"
      className="relative h-24 w-12 overflow-hidden
                [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_70%,transparent_100%)]"
    >
      <motion.div
        id="digits-col"
        animate={{ top: topPosition }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute w-full"
        style={{ top: "0%" }} // Initial position
      >
        {digits}
      </motion.div>
    </div>
  );
}
