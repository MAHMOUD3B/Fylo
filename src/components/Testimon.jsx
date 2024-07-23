const Testimon = ({ info: { image, comment, name, position } }) => {
  return (
    <div className="p-6 bg-slate-800 rounded-lg shadow-[8px_8px_1px_8px_#1c202c] ">
      <p className="text-center sm:text-start text-sm tracking-[0.8px]">{comment}</p>
      <div className="flex gap-3 mt-5">
        <img
          src={`./images/${image}`}
          alt="profile-img"
          className="rounded-full w-[50px] h-[50px] object-contain"
        />
        <div>
          <strong className="block">{name}</strong>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimon;
