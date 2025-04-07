import { Button } from "@material-tailwind/react";
import { useState } from "react";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your Discord invite link
    window.open("https://discord.gg/your-invite-link", "_blank");
  };

  return (
    <div className="py-24 px-6 bg-dark-grey border border-light-grey rounded-lg space-y-4 w-full max-w-[1120px] mx-auto">
      <h3 className="font-raleway font-bold text-center text-3xl md:text-5xl">
        Join Our Trading Community
      </h3>
      <div className="text-center text-light-grey mb-6">
        Connect with other futures traders and stay updated with the latest news from our funded trader program
      </div>
      <div className="flex justify-center">
        <Button
          placeholder={""}
          size="lg"
          onClick={handleSubmit}
          className="bg-blue font-rubik font-semibold normal-case text-base px-8"
        >
          Join Discord
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
