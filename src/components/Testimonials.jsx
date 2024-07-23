import Testimon from "./Testimon";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur vitae voluptate, est iste incidunt recusandae? Aut ratione accusantium fugit.",
      image: "profile-1.jpg",
      position: "Founder & CEO Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur vitae voluptate, est iste incidunt recusandae? Aut ratione accusantium fugit.",
      image: "profile-2.jpg",
      position: "Front-end Developer",
      name: "Ali",
    },
    {
      id: 3,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur vitae voluptate, est iste incidunt recusandae? Aut ratione accusantium fugit.",
      image: "profile-3.jpg",
      position: "Graphic Design Artist",
      name: "Noran",
    },
  ];
  return (
    <section className="text-white pb-[350px]">
      <div className="container">
        <div className="ms-[-10px]">
          <img src="./images/bg-quotes.png" alt="quotes-img" />
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[-15px]">
          {testimonials.map((testimon) => {
            return <Testimon key={testimon.id} info={testimon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
