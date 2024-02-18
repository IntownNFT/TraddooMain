import { useEffect, useState } from "react";
import Squeezebox from "../SqueezeBox";
import Markdown from "react-markdown";

const FAQs = ({file}:{file:RequestInfo | URL}) => {
  const [markdown, setMarkdown] = useState("");
  const [structuredMd, setStructuredMd] = useState([""]);
  
  useEffect(() => {
    fetch(file)
    .then((res) => res.text())
    .then((text) => setMarkdown(text));
    setStructuredMd(markdown.split("{thisisquestion}"));
  }, [file, markdown]);
  
  console.log(structuredMd);

  const renderers = {
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a href={href || "#"} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    ),
  };

  return (
    <div className="flex flex-col gap-8 mt-9">
      {structuredMd.slice(1).map((md, index) => {
        const normalizedMd = md.replace(/\r\n/g, '\n')
        const faq = normalizedMd?.split("\n>\n")
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
