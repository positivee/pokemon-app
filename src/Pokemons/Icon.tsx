import React from 'react'
import {GiGrass, GiWaterDrop, GiPoisonBottle, GiButterfly, GiUndergroundCave, GiFairyWand, GiPsychicWaves,GiFallingRocks, GiElectric,GiSteelClaws, GiGhost,GiBiceps} from "react-icons/gi"
import {AiFillFire} from "react-icons/ai"
import {FaDragon} from "react-icons/fa"
import {RiEmotionNormalLine} from "react-icons/ri"

type IconProps = {
    iconName: string
}



 

export default function Icon({iconName}: IconProps) {
    const icons = 
    [
      { icon: <GiGrass />, name: "grass" },
      { icon: <GiWaterDrop />, name: "water" },
      { icon: <GiPoisonBottle />, name: "poison" },
      { icon: <GiButterfly />, name: "flying" },
      { icon: <AiFillFire />, name: "fire" },
      { icon: <RiEmotionNormalLine />, name: "normal" },
      { icon: <FaDragon />, name: "dragon" },
      { icon: <GiFairyWand />, name: "fairy" },
      { icon: <GiPsychicWaves />, name: "psychic" },
      { icon: <GiUndergroundCave />, name: "ground" },
      { icon: <GiFallingRocks />, name: "rock" },
      { icon: <GiElectric />, name: "electric" },
      { icon: <GiSteelClaws />, name: "steel" },
      { icon: <GiGhost />, name: "ghost" },
      { icon: <GiBiceps />, name: "fighting" }

    ]

    const iconMatched = icons.find((icon) => icon.name === iconName)



  return (
    <>{iconMatched !== undefined && iconMatched.icon}</>
  )
}
