"use client";

import React from "react";
import { Input, Spacer, Link, Image, Button, Divider, Checkbox } from '@nextui-org/react';
import { EyeIcon, EyeOffIcon, LogIn } from "lucide-react";

export default function AuthForm({ type }: { type: string }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="flex flex-col h-full justify-center items-center">
      <div className="flex flex-col items-center gap-8 min-w-full">
        <div className="flex flex-col gap-4 items-center">
          <Link color="foreground" href="/" className="flex gap-2 items-center cursor-pointer">
            <Image src="logo.png" alt="alt" width={40} />
            <p className="font-semibold text-2xl text-inherit">Dripbit</p>
          </Link>
          <Divider/>
          <h1 className="text-2xl font-semibold">Sign Up</h1>
        </div>
        <form action="" className="flex flex-col gap-4 w-1/3 min-w-[300px]">
        <Input
            isRequired
            variant="bordered"
            size="md"
            type="text"
            label="Username"
            className="text-[18px]"
            placeholder="Enter your username"
          />
          <Input
            isRequired
            variant="bordered"
            size="md"
            type="email"
            label="Email"
            className="text-[18px]"
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            variant="bordered"
            size="md"
            placeholder="Enter your password"
            isRequired
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Checkbox>I agree with Terms of Service</Checkbox>
          <Button color="primary" type="submit" variant="shadow" startContent={<LogIn size={20}/>}>Sign Up</Button>
        </form>
      </div>
    </section>
  );
}
