import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import file from "./terms.md";

const TermsAndConditions = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  const renderers = {
    a: ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
  };

  return (
    <main className="mt-16">
      <SectionHeader
        title="Terms of Service"
        subtitle="Please read these terms and conditions carefully"
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <div className="mt-8 space-y-6 text-[#717171]">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h2>
          <p>
            This "Agreement" contains the complete terms and conditions that apply to your participation in our site. If you wish to use the site including its tools and services please read these terms of use carefully. By accessing this site or using any part of the site or any content or services hereof, you agree to become bound by these terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Modifications of Terms of Use</h2>
          <p>
            Amendments to this agreement can be made and effected by us from time to time without specific notice to your end. This Agreement as posted on the Site reflects the latest agreement and you should carefully review the same before you use our site.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsAndConditions;
