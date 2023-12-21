"use client";

import React from "react";

const Features = () => {
  const featuresData = {
    title: "Magical Things",
    subtitle:
      "Unlock the Full Potential of Your Business with Our SaaS Platform's Key Features",
    items: [
      {
        id: 1,
        title: "Fully Controlled Panel",
        tag: "Dashboard",
        coverUrl:
          "https://img.freepik.com/free-vector/infographic-dashboard-user-panel_52683-30026.jpg?w=996&t=st=1703151663~exp=1703152263~hmac=f26b32789e32b47ddc473598e8674871dcfddb3b2fcbc6e94238f2506a626363",
        description:
          "Elevate control with our dynamic SaaS dashboard-real-time insights, intuitive navigation, seamless customization.",
        features: [
          "Real-Time Data Insights",
          "Customizable Widgets",
          "Intuitive User Interface",
          "Performance Metrics at a Glance",
        ],
      },
      {
        id: 2,
        title: "Managing Entities",
        tag: "Control",
        coverUrl:
          "https://img.freepik.com/free-vector/nature-cosmetics-landing-page-template_23-2148626717.jpg?w=996&t=st=1703151863~exp=1703152463~hmac=6023f48dfc164a49103ded8c236f172084166dd3faa0a33e3735b3bd4cf374e1",
        description:
          "Our SaaS platform offers seamless management, allowing you to effortlessly oversee users, projects, and resources in one centralized hub. Gain real-time insights, streamline workflows, and optimize resource allocation for unparalleled efficiency.",
        features: [
          "User-Friendly Tools",
          "Resource Management",
          "Task Assignment",
          "Robust Control",
        ],
      },
      {
        id: 3,
        title: "Seamless Integrations",
        tag: "Workflows",
        coverUrl:
          "https://img.freepik.com/free-vector/people-buying-online-mobile-interface-design_23-2148405038.jpg?w=996&t=st=1703152019~exp=1703152619~hmac=d1a9b328395717309534cf1c88d96598ba35a2ec5eb881731f5e8bcd396a1de9",
        description:
          "Connect key tools seamlessly with our SaaS platform, streamlining your processes and boosting productivity. Experience a cohesive digital ecosystem that empowers your business for innovation and growth.",
        features: [
          "Real-time chat with Slack",
          "Engage your customer with Email",
          "Getting order from Amazon",
          "Using Ai from OpenAl",
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col py-20 lg:px-28">
      <div className="flex flex-col items-center space-y-4 pb-16">
        <h1 className="text-3xl font-bold">{featuresData.title}</h1>
        <p className="">{featuresData.subtitle}</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
        {featuresData.items.map((item, index) => (
          <div key={item.id} className="hero">
            <div
              className={`hero-content flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:w-2/5">
                <img
                  src={item.coverUrl}
                  className="rounded-lg shadow-2xl w-full lg:w-96 lg:h-72"
                  alt="Hero Image"
                />
              </div>
              <div className="lg:w-1/2 self-start pt-6">
                <div className="badge badge-primary text-secondary-content">
                  {item.tag}
                </div>
                <h3 className="text-xl font-bold pb-1">{item.title}</h3>
                <p className="">{item.description}</p>
                <ul className="list-disc pl-3 pt-3">
                  {item.features.map((feature, index) => (
                    <li key={index} className="text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
