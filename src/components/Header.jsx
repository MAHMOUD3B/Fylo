import { useEffect, useRef } from "react";

const Header = () => {
  const links = ["Features", "Team", "Signin"];
  const headerRef = useRef();

  // Make header doing effects on scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        headerRef.current.classList.remove("py-14");
        headerRef.current.classList.add("py-5", "bg-[#0c1524]");
      } else {
        headerRef.current.classList.remove("py-5", "bg-[#0c1524]");
        headerRef.current.classList.add("py-14");
      }
    });
  }, []);
  
  return (
    <>
      <header
        className="py-14 fixed top-0 w-full z-50 transition-all duration-300"
        ref={headerRef}
      >
        <div className="container flex-between gap-8 flex-col sm:flex-row">
          <a href="/">
            <img
              src="./images/logo.svg"
              alt="Logo"
              className="w-[130px] sm:w-auto"
            />
          </a>
          <nav>
            <ul className="flex-center gap-14">
              {links.map((link) => {
                return (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="text-white opacity-[.85]  hover:opacity-[1] hover:underline transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
