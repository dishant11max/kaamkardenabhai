import { motion } from "framer-motion";

const Why = () => {
  return (
    <section className="py-32 px-6 bg-white border-t border-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter"
        >
          Kyun Karna Hai Ye?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl font-medium leading-relaxed text-black"
        >
          Dekh bhai, Final Year hai. Project bhi banana hai, aur Viva mein
          bezati bhi nahi karwani. Tere paas "free time" hai, aur mujhe C++ ke
          pointers samajh nahi aa rahe. Yeh "internship" ek barter system hai:
          Tu mera code debug kar, main tujhe "Industry Exposure" dunga. milega.
          <br />
          <br />
          <span className="font-bold bg-black text-white px-2 py-1">
            Win-Win situation hai.
          </span>
          (Mostly mere liye win, but tu feel le le).
        </motion.p>
      </div>
    </section>
  );
};

export default Why;
