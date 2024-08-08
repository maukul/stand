import { createBreakpoint } from "react-use";

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1400
} as const

type useBreakpointType = () => keyof typeof breakpoints

export const useBreakpoint = createBreakpoint(breakpoints) as useBreakpointType;