import React from "react";

const Integrations = () => {
  const integrations = {
    title: "Quick Integrations",
    description:
      "Effortless Collaboration: Seamlessly integrate tools for unified efficiency with our SaaS platform.",
    subtitle: "Effortless expert Saas integrations, just a snap away.",
    subtitleDescription:
      "Elevate efficiency with our SaaS platform's seamless integration feature. Connect tools effortlessly for a unified digital workspace.",
    buttonName: "Quick Connect",
    logos: [
      "assets/logos/amazon.svg",
      "assets/logos/slack.svg",
      "assets/logos/openai.svg",
      "assets/logos/github.svg",
      "assets/logos/whatsapp.svg",
      "assets/logos/twitter.svg",
    ],
  };

  return (
    <div className="py-20 lg:px-40">
      <div className="flex flex-col items-center space-y-4 pb-10">
        <h1 className="text-3xl font-bold">{integrations.title}</h1>
        <p className="">{integrations.description}</p>
      </div>
      <div className="hero bg-base-200 rounded-xl lg:py-12 lg:px-16">
        <div className="hero-content space-x-8">
          <div className="lg:w-1/2">
            <h1 className="text-2xl font-semibold">{integrations.subtitle}</h1>
            <p className="py-6">{integrations.subtitleDescription}</p>
            <button className="btn btn-primary btn-md text-secondary-content">
              {integrations.buttonName}
            </button>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-wrap justify-between lg:w-full space-between">
              {integrations.logos
                .filter((_, idx) => idx <= 2)
                .map((logo, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-white p-4 overflow-hidden"
                  >
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                ))}
            </div>
            <div className="flex flex-wrap  justify-between lg:w-full pt-10">
              {integrations.logos
                .filter((_, idx) => idx > 2)
                .map((logo, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-white p-4 overflow-hidden"
                  >
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
