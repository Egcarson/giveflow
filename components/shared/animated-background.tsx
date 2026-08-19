// "use client";

// import { motion } from "framer-motion";

// const particles = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   left: `${Math.random() * 100}%`,
//   top: `${Math.random() * 100}%`,
//   duration: 8 + Math.random() * 10,
// }));

// export default function AnimatedBackground() {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className="absolute h-3 w-3 rounded-full bg-violet-300/40"
//           style={{
//             left: particle.left,
//             top: particle.top,
//           }}
//           animate={{
//             y: [-20, 20, -20],
//             x: [-10, 10, -10],
//             scale: [1, 1.4, 1],
//           }}
//           transition={{
//             duration: particle.duration,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       <motion.div
//         className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl"
//         animate={{
//           x: [-40, 40, -40],
//           y: [-20, 20, -20],
//         }}
//         transition={{
//           duration: 18,
//           repeat: Infinity,
//         }}
//       />

//       <motion.div
//         className="absolute right-0 top-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl"
//         animate={{
//           x: [30, -30, 30],
//           y: [20, -20, 20],
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//         }}
//       />
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, left: "10%", top: "20%" },
  { id: 2, left: "25%", top: "70%" },
  { id: 3, left: "40%", top: "30%" },
  { id: 4, left: "60%", top: "80%" },
  { id: 5, left: "80%", top: "40%" },
  { id: 6, left: "90%", top: "15%" },
];

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-2 w-2 rounded-full bg-violet-300/40"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
    </div>
  );
}
