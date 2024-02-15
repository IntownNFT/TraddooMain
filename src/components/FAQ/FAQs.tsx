import { useEffect, useState } from "react";
import Squeezebox from "../SqueezeBox";
import file from "./FAQs_Traddoo.md";
import Markdown from "react-markdown";

const FAQs = () => {
  const [markdown, setMarkdown] = useState("");
  const [structuredMd, setStructuredMd] = useState([""]);

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
    setStructuredMd(markdown.split("{thisisquestion}"));
  }, [markdown]);

  console.log(structuredMd[9]?.split("\n>\n"));

  const renderers = {
    a: ({
      href,
      children,
    }: {
      href: string | undefined;
      children: JSX.Element | string;
    }) => (
      <a href={href || "#"} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  return (
    <div className="flex flex-col gap-8 mt-9">
      {structuredMd.slice(1).map((md, index) => {
        const faq = md?.split("\n>\n")
        const question = faq[0]
        const answer = faq[1]
        return (
          <>
            <Squeezebox
              title={<Markdown components={renderers}>{question}</Markdown>}
              description={
                <Markdown components={renderers}>{answer}</Markdown>
              }
              key={index}
            />
          </>
        );
      })}
    </div>
  );
};

export default FAQs;
