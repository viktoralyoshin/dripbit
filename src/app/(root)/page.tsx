"use client";

import Carousel from "@/components/ui/Carousel";
import { Divider, Spacer, Chip, Input } from "@nextui-org/react";
import { Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col my-[40px] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Chip
            variant="solid"
            size="lg"
            classNames={{
              base: "bg-gradient-to-r from-pink-500 from-30% to-indigo-500",
              content:
                "text-white text-[16px] font-medium flex gap-1 items-center",
            }}
          >
            Dripbit
            <Sparkles size={16} fill="white" />
          </Chip>
        </motion.div>
        <h1 className="font-bold sm:text-[64px] text-[48px] text-center max-w-[1000px] px-6">
          Turn your ideas into masterpieces with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 from-30% to-indigo-500">
            Dripbit
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center mt-[40px]"
        >
          <Input
            type="text"
            label="Search"
            variant="bordered"
            size="md"
            className="max-w-[800px] px-4"
            placeholder="Type to search"
            startContent={<Search size={18} className="text-white/80"/>}
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-[36px] font-semibold">Popular beats</h1>
          <p className="text-default-500">
            The most popular bits in recent times
          </p>
          <Spacer y={2} />
          <Divider />
        </div>
        <Carousel />
      </div>
    </section>
  );
}
