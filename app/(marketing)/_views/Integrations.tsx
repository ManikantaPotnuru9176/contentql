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
    cards: [
      {
        name: "Slack",
        description:
          "Streamline project discussions, share updates, and boost real-time collaboration effortlessly.",
        logo: "assets/logos/slack.svg",
      },
      {
        name: "Google Drive",
        description:
          "File management, Enhance collaboration, and Elevate your productivity with the convenience of this integrated solution",
        logo: "assets/logos/google-drive.svg",
      },
      {
        name: "Bitbucket",
        description:
          "Streamline version control, collaboration, and project management with ease. Embrace the power of seamless GitHub integration.",
        logo: "assets/logos/bitbucket.svg",
      },
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
                      className="w-10 h-10 object-cover"
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
                    className="rounded-full bg-white p-4 overflow-hidden shadow-lg"
                  >
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-6 pt-6">
        {integrations.cards.map((card, index) => (
          <div
            key={index}
            className="card rounded w-96 bg-base-100 shadow-sm border"
          >
            <div className="card-body p-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                  <div
                    key={index}
                    className="rounded-full bg-base-200 p-2 overflow-hidden"
                  >
                    <img
                      src={card.logo}
                      alt={`Logo ${index + 1}`}
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                  <h2 className="pl-4 card-title text-lg font-semibold">
                    {card.name}
                  </h2>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full bg-base-200 p-2 self-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                    >
                      <g transform="rotate(90 256 256)">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="m112 244l144-144l144 144M256 120v292"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
