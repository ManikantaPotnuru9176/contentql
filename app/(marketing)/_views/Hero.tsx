import React from "react";

const Hero = () => {
  const heroData = {
    _id: 1,
    title: (
      <span>
        Revolutionize your business with our{" "}
        <span className="text-primary">dynamic SaaS</span> solutions
      </span>
    ),
    description: `Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.`,
    buttonName: "Get Started",
    learnMoreButtonName: "Learn More",
  };

  return (
    <div className="hero min-h-screen lg:px-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 flex self-start pt-4">
          <img
            src="https://cdn.dribbble.com/users/4152578/screenshots/7316405/media/c94c667c986128261cdb25da23f1af5c.jpg"
            className="rounded-lg shadow-2xl w-full lg:w-[38vw] lg:h-80"
            alt="Hero Image"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold mb-6">{heroData.title}</h1>
          <p className="py-6">{heroData.description}</p>
          <div className="flex space-x-4">
            <button className="btn btn-primary text-secondary-content  rounded">
              {heroData.buttonName}
            </button>
            <button className="btn text-accent-content  rounded">
              {heroData.learnMoreButtonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
