import { useState } from "react";
import { motion } from "framer-motion";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    skill: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Application for Slavery from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0ASkill Level: ${formData.skill}/10%0D%0AReason: ${formData.reason}`;
    window.location.href = `mailto:kaamkardenabhai@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
        >
          Apply Now (If You Dare)
        </motion.h2>
        <p className="text-gray-400 mb-12 text-lg">
          Don't stress, I'm definitely not reading this.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-left"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
              Name (Or whatever you call yourself)
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-zinc-700 py-3 text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder="e.g. 'Disappointment'"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
              Writing Skill Level (1-10)
            </label>
            <input
              type="number"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              min="0"
              max="10"
              className="w-full bg-transparent border-b-2 border-zinc-700 py-3 text-xl focus:outline-none focus:border-white transition-colors placeholder-zinc-800"
              placeholder="Don't lie, I can smell fear."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
              Why do you want this suffering?
            </label>
            <textarea
              rows={3}
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-zinc-700 py-3 text-xl focus:outline-none focus:border-white transition-colors resize-none placeholder-zinc-800"
              placeholder="e.g. 'I enjoy pain'"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-black text-xl py-5 mt-12 hover:bg-gray-200 transition-colors uppercase tracking-widest"
          >
            Send Into The Abyss
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Apply;
