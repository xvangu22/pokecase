import { useEffect, useState } from "react";

const ToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // Show after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#top"
      className="fixed flex justify-center items-center w-16 h-16 text-3xl bottom-6 right-6 bg-slate-600 text-white p-3 rounded-full shadow-lg transition-all hover:bg-slate-500"
      aria-label="Back to top"
    >
      ↑
    </a>
  );
};

export default ToTop;
