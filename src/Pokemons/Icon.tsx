import React from "react";
import {
  GiGrass,
  GiWaterDrop,
  GiPoisonBottle,
  GiButterfly,
  GiUndergroundCave,
  GiFairyWand,
  GiPsychicWaves,
  GiFallingRocks,
  GiElectric,
  GiSteelClaws,
  GiGhost,
  GiBiceps,
} from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { FaDragon } from "react-icons/fa";
import { RiEmotionNormalLine } from "react-icons/ri";

type IconProps = {
  iconName: string;
};

type Icons = {
  [key: string]: JSX.Element;
};

const icons: Icons = {
  grass: <GiGrass />,
  water: <GiWaterDrop />,
  poison: <GiPoisonBottle />,
  flying: <GiButterfly />,
  fire: <AiFillFire />,
  normal: <RiEmotionNormalLine />,
  dragon: <FaDragon />,
  fairy: <GiFairyWand />,
  psychic: <GiPsychicWaves />,
  ground: <GiUndergroundCave />,
  rock: <GiFallingRocks />,
  electric: <GiElectric />,
  steel: <GiSteelClaws />,
  ghost: <GiGhost />,
  fighting: <GiBiceps />,
};

export default function Icon({ iconName }: IconProps) {
  return icons[iconName];
}
