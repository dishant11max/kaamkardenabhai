import { motion } from "framer-motion";

const responsibilities = [
  {
    title: "Lab Record Chapayi",
    description:
      "50 page ka PDF hai, blue pen se likhna hai. Handwriting match honi chahiye.",
  },
  {
    title: "Proxy Lagana",
    description:
      "Jab main 'sick leave' (aka bunk) pe hoon, tab class mein 'Present Sir' bolna.",
  },
  {
    title: "Viva Prep",
    description:
      "External examiner ke aage meri izzat bachana. Ratwa dena ki Polymorphism kya hota hai.",
  },
  {
    title: "Debugging My Spaghetti Code",
    description:
      "Mere code mein 100 errors hain, aur deadline kal hai. StackOverflow tera naya ghar hai.",
  },
];

const Responsibilities = () => {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-20 text-center uppercase tracking-tighter"
        >
          Teri Zimmadariyan
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-white pl-8 py-2"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
