export const fadeInVariant = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1, y: 0, transition: { type: "spring", duration: 1.5 }
  }
}
