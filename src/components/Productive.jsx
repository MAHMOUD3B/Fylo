const Productive = () => {
  return (
    <section className="capitalize text-white pb-36">
      <div className="container">
        <div className="grid gap-10 place-items-center md:grid-cols-2">
          <div className="image">
            <img
              src="./src/assets/images/illustration-stay-productive.png"
              alt="productive-img"
            />
          </div>
          <div>
            <h3 className="text-4xl leading-normal">
              Stay productive, <br /> wherever you are
            </h3>
            <div className="my-4 opacity-80 tracking-wider">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ad necessitatibus placeat nam, officiis praesentium quis quia
                sit aut voluptatibus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ad necessitatibus placeat nam, officiis praesentium quis quia
                sit aut voluptatibus?
              </p>
            </div>
            <a
              href="/"
              className="w-fit pb-2 capitalize flex gap-2 text-primary hover:text-[#42b0d1] transition-all duration-300 border-b-2 border-primary"
            >
              see how fylo works{" "}
              <img
                src="./src/assets/images/icon-arrow.svg"
                alt="arrow-img"
                className="w-[25px] h-[25px] object-contain animate-moveRight"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
