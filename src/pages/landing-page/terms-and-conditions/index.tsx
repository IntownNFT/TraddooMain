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
        title="Terms and Conditions"
        subtitle="Any question or remarks? Just write us a message!"
        subtitleStyles="font-poppins font-medium !text-[#717171] mt-3"
      />
      <article
        className="mt-20 font-poppins bg-dark-grey border border-light-grey rounded-lg py-12 px-5 md:px-16"
        id="markdown"
      >
        <Markdown
          components={renderers}
          remarkPlugins={[remarkGfm]}
          className="[&_th]:p-4 [&_th]:bg-gray-900 [&_th]:text-left [&_td]:p-4 [&_td]:border-b [&_td]:border-gray-900 [&_table]:mt-6 [&_table]:mb-12 [&_table]:w-full"
        >
          {markdown}
        </Markdown>
      </article>
    </main>
  );
};

export default TermsAndConditions;
