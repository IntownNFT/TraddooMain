import { Glow, GlowCapture } from "@codaworks/react-glow";
import FormButton from "../../../components/FormButton";
import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  return (
    <GlowCapture className="p-16">
      <Glow color="rgba(54, 113, 233, 0.1)">
        <div className="py-16 bg-dark-grey border-4 border-light-grey rounded-lg glowable-text">
          <div>
            <h3 className="font-raleway font-bold text-center text-3xl md:text-5xl">
              Join Our {" "}
              <span className="text-blue">Newsletter <span className="text-3xl md:text-5xl translate-y-2 material-symbols-rounded">
                mark_email_unread
              </span></span>
            </h3>
            <p className="mt-5 mb-12 font-inter text-xl text-center max-w-xl mx-auto text-balance text-[#717171]">
              Experience the best execution with tight spreads and a multi
              trading platform experience. Join our newsletter today!
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <input
              type="email"
              placeholder="john@email.com"
              className="w-full max-w-2xl bg-transparent px-3 py-2 text-lg border-2 border-[#717171] focus:border-blue transition-colors rounded-md placeholder:text-light-grey focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              title="email"
            />
            <FormButton
              type="submit"
              text="Join"
              classes="max-w-2xl rounded-md bg-blue backdrop:blur-xl hover:bg-opacity-30"
            />
          </div>
        </div>
      </Glow>
    </GlowCapture>
  );
};

export default SubscriptionForm;
