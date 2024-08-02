"use client";

import Carousel from "@/components/ui/Carousel";
import {
  Divider,
  Spacer,
  Chip,
  Input,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
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
            startContent={<Search size={18} className="text-white/80" />}
          />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h1 className="text-[36px] font-semibold">Popular beats</h1>
          <p className="text-default-500">
            The most popular beats in recent times
          </p>
          <Spacer y={2} />
          <Divider />
        </div>
        <Carousel />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-[36px] font-semibold">FAQ</h1>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="What is the Beats Marketplace?"
            title="What is the Beats Marketplace?"
          >
            The Beats Marketplace is an online platform where music producers
            and artists can buy, sell, and license high-quality beats and
            instrumentals for their projects.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="How do I purchase a beat?"
            title="How do I purchase a beat?"
          >
            To purchase a beat, browse our listings, select the beat you want,
            and click "Buy Now." Follow the prompts to complete your payment
            securely.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Can I listen to a preview of the beats?"
            title="Can I listen to a preview of the beats?"
          >
            Yes! Each beat listing includes a preview audio player so you can
            listen before making a purchase.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
