import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { FormEvent, useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (email === "") {
      setErr("Please fill in the email field.");
      return;
    }
    if (!email.includes("@")) {
      setErr("Please enter a valid email address.");
      return;
    }
    try {
      await axios.post("http://localhost:3000/subscribe", { email: email });
      setSuccess("Email successfully registered!");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErr(err.response?.data || "An error occurred.");
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="py-24 px-6 bg-dark-grey border border-light-grey rounded-lg space-y-4 w-full max-w-[1120px] mx-auto">
      <h3 className="font-raleway font-bold text-center text-3xl md:text-5xl">
        Join Our Newsletter
      </h3>
      <form
        className="relative flex flex-col gap-2 w-full max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          label="Email Address"
          value={email}
          placeholder="John@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className={`pr-20 bg-transparent px-3 !h-11 !text-lg font-raleway font-semibold text-white rounded-md border-2 !border-light-grey focus:!border-blue placeholder:!opacity-100 placeholder:!text-light-grey !transition-none ${
            err === "" ? "" : "!border-blue"
          }`}
          containerProps={{
            className: "min-w-0",
          }}
          labelProps={{ className: "hidden" }}
          required
          crossOrigin={""}
        />
        {err === "" || <label className="text-xs pl-2 text-red">{err}</label>}
        {success === "" || (
          <label className="text-xs pl-2 text-green-500">{success}</label>
        )}
        <Button
          placeholder={""}
          size="sm"
          type="submit"
          disabled={!email}
          className="!absolute right-1 top-1 bg-blue disabled:!opacity-100 font-rubik font-semibold normal-case !text-sm"
        >
          Join
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
