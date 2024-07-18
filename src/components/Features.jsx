import Feature from "./Feature";

const Features = () => {
  const features = [
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files any where",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nemo. adipisicing elit. Labore, nemo.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real time collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nemo. adipisicing elit. Labore, nemo.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of files",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nemo. adipisicing elit. Labore, nemo.",
    },
    {
      icon: "icon-security.svg",
      title: "Be safe and secured",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nemo. adipisicing elit. Labore, nemo.",
    },
  ];
  return (
    <section className="pb-36">
      <div className="container">
        <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:w-[850px] mx-auto">
          {features.map((item) => {
            return <Feature key={item.title} info={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
