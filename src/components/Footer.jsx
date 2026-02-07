const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-black text-center text-sm font-medium">
      <p className="mb-2">
        © {new Date().getFullYear()} KaamKarNaBhai. All wrongs reserved.
      </p>
      <p>
        Yeh website mazaak hai, dil pe mat le. (Disclaimer: I am not liable for
        your wasted potential.)
      </p>
      <p className="mt-4">
        Hate mail / Fan mail (I don't care):{" "}
        <a
          href="mailto:kaamkardenabhai@gmail.com"
          className="hover:text-gray-600 underline decoration-1 underline-offset-4"
        >
          kaamkardenabhai@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
