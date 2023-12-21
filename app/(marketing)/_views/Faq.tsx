import React from "react";

const Faq = () => {
  const faqs = {
    title: "FAQS",
    description:
      "Find solutions, tips, and more to enhance your SaaS experience.",
    qaas: [
      {
        question: "How does SaaS benefit my business?",
        answer:
          "SaaS offers several advantages, including cost-effectiveness, scalability, automatic updates, and accessibility. It allows businesses to focus on core operations while the software provider handles maintenance and updates.",
      },
      {
        question: "What features are included in your SaaS platform?",
        answer:
          "Our SaaS platform comes with a range of features, including but not limited to:\n- User authentication and authorization\n- Data storage and management\n- Analytics and reporting tools\n- Integration with third-party services\n- Regular software updates to introduce new features and improvements.",
      },
      {
        question: "How can I upgrade my plan?",
        answer:
          "Upgrading your plan is easy! Simply log in to your account, navigate to the 'Billing' or 'Subscription' section, and you'll find options to upgrade your plan. Follow the on-screen instructions to complete the process.",
      },
      {
        question: "Is there a trial period for your SaaS platform?",
        answer:
          "Yes, we offer a trial period for our SaaS platform. During this period, you can explore the features and functionalities of our platform to ensure it meets your business needs. After the trial period, you can choose a suitable subscription plan to continue using our services.",
      },
      {
        question: "How is data security handled on your platform?",
        answer:
          "Ensuring the security of your data is our top priority. We implement industry-standard security measures, including encryption, regular security audits, and access controls, to protect your data from unauthorized access and breaches. Additionally, we comply with relevant data protection regulations to safeguard your information.",
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 lg:px-40">
      <div className="flex flex-col items-center space-y-4 pb-10">
        <h1 className="text-3xl font-bold">{faqs.title}</h1>
        <p className="">{faqs.description}</p>
      </div>
      <div className="card card-compact w-[38vw] bg-base-100 rounded-none">
        <div className="card-body">
          {faqs.qaas.map((qa, index) => (
            <div key={index} className="collapse collapse-arrow rounded border">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-md font-medium">
                {qa.question}
              </div>
              <div className="collapse-content">
                <p className="text-sm">{qa.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
