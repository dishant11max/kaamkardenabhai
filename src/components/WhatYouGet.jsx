import { motion } from "framer-motion";

const benefits = [
  {
    title: "Github Green Dots (Fake)",
    description:
      "Main tere contributions ko apne repo pe push karunga. Credit mera, mehnat teri.",
  },
  {
    title: "DSA Notes",
    description:
      "Jo maine kabhi nahi padhe. Shayad tere kaam aa jayein (doubtful).",
  },
  {
    title: "Referral (Lol)",
    description:
      "TCS/Wipro mein nahi, par mere agle 'revolutionary' startup mein zarur.",
  },
  {
    title: "Mere Ashirwad",
    description:
      "Jab main bada 'Tech Lead' ban jaunga, tab shayad tujhe pehchan lun.",
  },
];

const WhatYouGet = () => {
  return (
    <section className="py-32 px-6 bg-white border-t border-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-20 text-center uppercase tracking-tighter"
        >
          Tujhe Kya Milega?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-black p-10 hover:bg-black hover:text-white transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
