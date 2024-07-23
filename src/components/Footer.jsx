import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    "About Us",
    "Contact Us",
    "Privacy",
    "Jobs",
    "Blog",
    "Terms",
  ];
  // const socialIcons = ["facebook", "twitter", "instagram"];
  return (
    <footer className="pt-56 pb-24 bg-[#0c1524] text-white">
      <div className="container">
        <a href="/" className="mb-8 block w-fit mx-auto sm:mx-0">
          <img src="./images/logo.svg" alt="Logo-img" />
        </a>
        <div className="grid gap-10 md:gap-5 place-items-start justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <p className="flex items-start gap-3 text-sm">
              <img
                src="./images/icon-location.svg"
                alt="location-img"
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              distinctio illum iusto impedit odit quasi quia reprehenderit
              porro? Quaerat, deleniti!
            </p>
          </div>
          <div>
            <p className="flex items-start gap-3 text-sm mb-5">
              <img src="./images/icon-phone.svg" alt="phone-img" />
              +201035834713
            </p>
            <p className="flex items-start gap-3 text-sm">
              <img src="./images/icon-email.svg" alt="phone-img" />
              +201035834713
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-2 gap-5">
              {footerLinks.map((link) => {
                return (
                  <li key={link}>
                    <a
                      href="/"
                      className="hover:text-primary transition-all duration-300 text-base"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-center gap-5 text-xl">
            <a
              href="/"
              className="hover:text-primary transition-colors duration-300 w-[40px] h-[40px] rounded-full border-2 flex-center hover:border-primary"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="hover:text-primary transition-colors duration-300 w-[40px] h-[40px] rounded-full border-2 flex-center hover:border-primary"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="hover:text-primary transition-colors duration-300 w-[40px] h-[40px] rounded-full border-2 flex-center hover:border-primary"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
