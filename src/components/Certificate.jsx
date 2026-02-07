import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <section className="py-32 px-6 bg-white border-t border-black flex justify-center">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter text-black"
        >
          Certificate
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white text-black p-8 md:p-12 border-4 border-black relative mx-auto max-w-3xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center"
        >
          <div className="border-2 border-dashed border-black p-8 h-full flex flex-col items-center">
            {/* Header */}
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-2 font-serif">
              Certificate
            </h3>
            <p className="text-xl italic mb-8 font-serif">of "Vella-panti"</p>

            {/* Content */}
            <p className="text-center text-lg mb-6 max-w-md font-medium">
              This completely invalid document certifies that
            </p>
            <div className="border-b-2 border-black w-3/4 mb-6"></div>
            <p className="text-center text-lg mb-12 max-w-lg leading-relaxed font-medium">
              Has successfully wasted their time doing my work, proving they
              have no social life and questionable priorities.
            </p>

            {/* Signatures */}
            <div className="flex justify-between w-full mt-auto px-4 md:px-12">
              <div className="text-center">
                <div className="font-hurricane text-4xl mb-2 font-serif rotate-[-5deg]">
                  KaarmKarNaBhai
                </div>
                <div className="text-xs uppercase tracking-wider border-t border-black pt-1 font-bold">
                  Fake Signature
                </div>
              </div>
              <div className="text-center">
                <div className="font-hurricane text-4xl mb-2 font-serif rotate-[-5deg]">
                  CEO of Unemployment
                </div>
                <div className="text-xs uppercase tracking-wider border-t border-black pt-1 font-bold">
                  Official Title
                </div>
              </div>
            </div>

            {/* Seal */}
            <div className="absolute bottom-8 right-8 hidden md:block opacity-100">
              <div className="w-24 h-24 border-4 border-black rounded-full flex items-center justify-center rotate-[-15deg] bg-black text-white">
                <span className="text-xs font-black text-center uppercase leading-tight">
                  Verified
                  <br />
                  Waste
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
