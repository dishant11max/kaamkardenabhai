import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sahil",
    role: "Fired in 2 days",
    text: "Sir asked me to fix a bug. I deleted the database. Best 2 days of my life.",
    rotation: "rotate-2",
  },
  {
    name: "Himanshu",
    role: "Blocked on WhatsApp",
    text: "Asked for a stipend. He sent me a sticker of a laughing cat. 10/10 would not recommend.",
    rotation: "-rotate-1",
  },
  {
    name: "Priyanshu",
    role: "Still Crying",
    text: "Bola tha 'Exposure' milega. Dhoop mein khada kar diya.",
    rotation: "rotate-3",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-white border-t border-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter"
        >
          Hall of Shame (Fired Interns)
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className={`bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${review.rotation}`}
            >
              <div className="text-4xl mb-4">❝</div>
              <p className="text-xl font-bold mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t-2 border-black pt-4">
                <p className="font-black uppercase tracking-wider">
                  {review.name}
                </p>
                <p className="text-sm text-gray-500 font-bold uppercase">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
