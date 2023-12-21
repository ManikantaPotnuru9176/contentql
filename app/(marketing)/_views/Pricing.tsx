import React from "react";

const Pricing = () => {
  const pricing = {
    title: "Pricing Plans",
    description:
      "Explore flexible pricing that scales with your needs. No hidden fees, just transparent options for your success.",
    toggleItems: ["Monthly", "Yealy"],
    plans: [
      {
        type: "Free",
        price: "0",
        period: "month",
        description:
          "Experience essential features at no cost, setting the foundation for your business growth.",
        features: ["For Personal Use", "20 products", "Limited Integrations"],
        buttonName: "Start for Free",
      },
      {
        type: "Premium",
        badge: "Best Offer",
        price: "99",
        period: "month",
        description:
          "Unlock advanced features and elevate your SaaS experience with our premium plan.",
        features: [
          "Up to 10 Team Members",
          "Unlocked all Apps",
          "Use all Integrations",
          "99.9% Support Response Time",
        ],
        buttonName: "Upgrade to Premium",
      },
      {
        type: "Ultimate",
        price: "199",
        period: "month",
        description:
          "Unleash business potential with our ultimate plan. Maximize features, scalability, and success.",
        features: [
          "Unlimited Members",
          "Unlocked all Apps",
          "Use all Integrations",
          "24*7 Quick Support",
          "Marketing automations",
        ],
        buttonName: "Get Ultimate Power",
      },
    ],
  };

  return (
    <div className="py-20 lg:px-40">
      <div className="flex flex-col items-center space-y-4 pb-10">
        <h1 className="text-3xl font-bold">{pricing.title}</h1>
        <p className="">{pricing.description}</p>
        <label
          htmlFor="Toggle4"
          className="relative inline-flex items-center p-1 cursor-pointer bg-gray-200 rounded"
        >
          <input id="Toggle4" type="checkbox" className="hidden peer" />
          <span className="px-10 py-1 bg-primary text-secondary-content text-xs peer-checked:bg-gray-200 peer-checked:text-accent-content rounded">
            Monthly
          </span>
          <span className="px-10 py-1 bg-gray-200 text-xs peer-checked:bg-primary peer-checked:text-secondary-content rounded">
            Yearly
          </span>
          <div className="absolute -top-2 -right-6">
            <span className="flex h-5 w-12">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neutral text-xs text-secondary-content pl-2.5">
                -40%
              </span>
            </span>
          </div>
        </label>
      </div>
      <div className="flex flex-row space-x-6">
        {pricing.plans.map((plan, index) => (
          <div
            key={index}
            className="card w-96 bg-base-100 shadow-xl border rounded"
          >
            <div className="bg-base-200 rounded m-2 p-4">
              <div className="">
                <h3 className="text-md font-semibold">{plan.type}</h3>
                <h1
                  className={`text-4xl font-bold pt-1 ${
                    index % 2 !== 0 && "text-primary"
                  }`}
                >
                  ${plan.price}
                  <sub className="text-lg font-semibold text-accent-content">
                    /{plan.period}
                  </sub>
                </h1>
                <p className="text-sm pt-4">{plan.description}</p>
              </div>
            </div>
            <div className="card-body pt-3 flex flex-col justify-between p-0">
              <ul className="list-disc pl-2 flex flex-col space-y-2 mx-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="card-actions p-2 pt-4">
                <button
                  className={`btn btn-primary w-full btn-sm rounded ${
                    index % 2 === 0 ? "btn-outline" : "text-secondary-content"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
