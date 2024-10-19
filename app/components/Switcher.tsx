"use client";

import { Switch } from "@nextui-org/react"
import { SunIcon } from "./icons/SunIcon"
import { MoonIcon } from "./icons/MoonIcon"
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Switcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleOnSwitch = (isSeleted: boolean, className: string): ReactNode => {
    if (isSeleted) {
      setTheme("light");
      return <SunIcon className={className}/>;
    } else {
      setTheme("dark");
      return <MoonIcon className={className} />;
    }
  }

  if(!mounted) return null

  return (
    <Switch
    defaultSelected={theme === "Light?" ? true : false}
    size="lg"
    color="primary"
    thumbIcon={({ isSelected, className }) => handleOnSwitch(isSelected, className)}
      
  />
  )
}

export default Switcher
