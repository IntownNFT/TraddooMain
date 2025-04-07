import { Button } from "@material-tailwind/react";

const DiscordCTA = () => {
  const handleJoinDiscord = () => {
    window.open("https://discord.gg/your-invite-link", "_blank");
  };

  return (
    <div className="py-24 px-6 bg-dark-grey border border-light-grey rounded-lg space-y-6 w-full max-w-[1120px] mx-auto">
      <h3 className="font-raleway font-bold text-center text-3xl md:text-5xl">
        Join Our Trading Community
      </h3>
      <div className="text-center text-white text-lg font-medium max-w-xl mx-auto">
        Connect with successful futures traders and get exclusive market insights in our Discord community.
      </div>
      <div className="flex justify-center pt-4">
        <Button
          placeholder={""}
          size="lg"
          onClick={handleJoinDiscord}
          className="bg-blue font-rubik font-semibold normal-case text-base px-16 py-3 hover:bg-blue/90 transition-all duration-300 flex items-center gap-3"
        >
          <span className="px-3">Join Discord</span>
        </Button>
      </div>
    </div>
  );
};

export default DiscordCTA; 