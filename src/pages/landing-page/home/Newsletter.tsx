import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="py-24 px-5 bg-dark-grey border border-light-grey rounded-lg space-y-4">
      <h3 className="font-raleway font-bold text-center text-3xl md:text-5xl">
        Join Our Newsletter{" "}
        <span className="text-blue text-3xl md:text-5xl translate-y-2 material-symbols-rounded">
          mark_email_unread
        </span>
      </h3>
      <div className="relative flex w-full max-w-lg mx-auto">
        <Input
          type="email"
          label="Email Address"
          value={email}
          placeholder="John@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className="pr-20 bg-transparent px-3 py-2 text-lg text-white rounded-md border-2 !border-light-grey focus:!border-blue placeholder:!opacity-100 placeholder:!text-light-grey"
          containerProps={{
            className: "min-w-0",
          }}
          labelProps={{ className: "hidden" }}
          required
          crossOrigin={""}
        />
        <Button
          placeholder={""}
          size="sm"
          disabled={!email}
          className="!absolute right-1 top-1 bg-blue disabled:!opacity-100"
        >
          Invite
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
