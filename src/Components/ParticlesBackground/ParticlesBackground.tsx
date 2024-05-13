import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

function ParticlesBackground(props) {
  // this customizes the component tsParticles installation
  const customInit = (engine: any) => loadFull(engine as Engine).catch((error) => console.error(error));

  const options = {
    /* custom options */
  };

  return (
    <Particles id="tsparticles" options={options} init={customInit} />
  );
}

export default ParticlesBackground;
