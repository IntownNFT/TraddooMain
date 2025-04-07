import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader"
import Markdown from "react-markdown";
import file from "./PrivacyPolicy.md"

const PrivacyPolicy = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  const renderers = {
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a href={href || "#"} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    ),
  };

  return (
    <main className="mt-16">
      <SectionHeader
        title="Privacy Policy"
        subtitle="Your privacy is essential to us. Here at Traddoo, we believe that privacy is a top priority."
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <div className="mt-8 space-y-6 text-[#717171]">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Introduction</h2>
          <p>
            We know that you care how information about you is used and shared. Thus, we provide this Privacy Policy to summarize our procedures and practices as regards to information collection and use. This will serve you as a guide in making an intelligent decision in sharing your information with us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Collection & Use</h2>
          <p>
            If you attempt to use the services and applications of our website and/or choose to provide information to us, this website shall collect Personal Information from you. This information includes, but is not limited to: name, address, telephone number, mobile number and/or email address.
          </p>
          <p className="mt-2">
            After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.
          </p>
        </section>

        {/* Add more sections based on TradersLaunch privacy policy */}
      </div>
    </main>
  )
};

export default PrivacyPolicy;
