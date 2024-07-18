const Landing = () => {
  return (
    <section className="bg-[rgb(27,33,47)]">
      <div className="container">
        <div className="flex-center flex-col w-full mt-52 sm:mt-36">
          <div className="w-[300px] sm:w-[500px] lg:w-[750px]">
            <img
              src="./src/assets/images/illustration-intro.png"
              alt=""
              className="w-full h-fit"
            />
          </div>
          <div className="text-white capitalize text-center my-5">
            <h1 className="text-2xl sm:text-4xl my-6 font-semibold">
              All your files in one secure location
              <br />
              accessable anywere
            </h1>
            <p className="md:w-[75%] lg:w-[50%] text-md md:px-5 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              saepe inventore consectetur expedita amet non unde corrupti
              voluptate vitae aliquam.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[150px] h-[40px] sm:w-[200px] sm:h-[55px] flex-center rounded-[30px] text-white"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="w-full h-[150px]">
        <img
          src="./src/assets/images/bg-curvy-desktop.svg"
          alt="curvy-img"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
