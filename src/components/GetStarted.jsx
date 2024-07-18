const GetStarted = () => {
  return (
    <section className="text-white capitalize relative">
      <div className="container">
        <div className="absolute start-[50%] translate-x-[-50%] mt-[-200px] md:mt-[-150px] bg-[#1c2230] rounded-lg p-5 sm:p-10 text-center drop-shadow-lg w-[280px] sm:w-[400px] md:w-[600px] lg:w-[750px]">
          <h3 className="text-2xl md:text-4xl font-semibold tracking-wider">
            get early access today
          </h3>
          <p className="my-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            odio, corrupti inventore ipsa quam suscipit soluta impedit autem
            tempore sequi!
          </p>
          <form className="flex-center gap-5 flex-col md:flex-row md:px-8">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-grow rounded-[35px] px-5 py-3 outline-none text-slate-900"
            />
            <button
              type="submit"
              className="capitalize bg-[#42b0d1] hover:bg-[#8cdae4] font-semibold transition-all duration-300 px-5 py-3 rounded-[30px] w-[220px]"
            >
              get started for free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
