import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader"
import Markdown from "react-markdown";
import file from "./cookie-policy.md"

const CookiePolicy = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  const renderers = {
    a: ({ href, children }:{href:string|undefined; children:JSX.Element|string}) => (
      <a href={href || "#"} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  return (
    <main className="mt-16">
      <SectionHeader
        title="Cookie Policy"
        subtitle="Any question or remarks? Just write us a message!"
        titleStyles="mt-24"
        subtitleStyles="font-poppins font-medium !text-[#717171] mt-3"
      />
      <article className="mt-20 font-poppins bg-dark-grey border border-light-grey rounded-lg py-12 px-5 md:px-16" id="markdown">
        <Markdown components={renderers}>{markdown}</Markdown>
      </article>
    </main>
  )
};

export default CookiePolicy;
