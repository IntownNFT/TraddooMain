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
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a href={href || "#"} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    ),
  };

  return (
    <main className="mt-16">
      <SectionHeader
        title="Cookie Policy"
        subtitle="Learn about how we use cookies and tracking technology"
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <div className="mt-8 space-y-6 text-[#717171]">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Cookies & Tracking Technology</h2>
          <p>
            The Site may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to the Site, and understanding how visitors use the Site. Cookies can also help customize the Site for visitors.
          </p>
        </section>
      </div>
    </main>
  )
};

export default CookiePolicy;
