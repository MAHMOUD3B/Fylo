const Feature = ({ info: { icon, title, desc } }) => {
  return (
    <>
      <div className="flex-center flex-col text-white text-center">
        <img src={`./images/${icon}`} alt="" />
        <h3 className="text-xl font-semibold my-3">{title} </h3>
        <p className="text-sm">{desc}</p>
      </div>
    </>
  );
};

export default Feature;
