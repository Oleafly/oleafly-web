"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
  /** Optional per-word class, aligned by index with `words`. */
  wordClassNames?: string[]
}

export function WordRotate({
  words,
  duration = 2500,
  wordClassNames,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <div className="relative overflow-hidden py-2">
      {words.map((w) => (
        <span key={w} aria-hidden="true" className="invisible block h-0 overflow-hidden whitespace-nowrap">
          {w}
        </span>
      ))}
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className, wordClassNames?.[index])}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
