import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader"
import Markdown from "react-markdown";
import file from "./return-policy.md"

const ReturnPolicy = () => {
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
        title="Return Policy"
        subtitle="Any question or remarks? Just write us a message!"
        subtitleStyles="font-poppins font-medium !text-[#717171] mt-3"
      />
      <article className="mt-20 font-poppins bg-dark-grey border border-light-grey rounded-lg py-12 px-5 md:px-16" id="markdown">
        <Markdown components={renderers}>{markdown}</Markdown>
      </article>
    </main>
  )
};

export default ReturnPolicy;
