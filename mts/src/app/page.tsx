"use client";

import {
  navItems,
  primaryFeatures,
  textDeployment,
  secondaryFeatures,
  textDeployment2,
} from "@/app/data";

import Hero from "@/app/components/Hero";
import Grid from "@/app/components/Grid";
import { FloatingNav } from "@/app/components/ui/FloatingNav";
import { Deployment } from "./components/Deployment";
import { Server } from "./components/Server";
import { Boxes, BoxesCore } from "./components/ui/BackgroundBoxes";
import { HeroHighlight } from "./components/ui/GeminiEffect";
import { LampDemo } from "./components/ui/Lamp";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Deployment
          primaryFeatures={primaryFeatures}
          textDeployment={textDeployment}
        />
        <LampDemo />
        <Server
          secondaryFeatures={secondaryFeatures}
          textDeployment2={textDeployment2}
        />

        {/* <Grid /> */}
      </div>
    </main>
  );
};

export default Home;
