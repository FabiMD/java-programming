import React from "react"
import { normalizeExerciseId } from "../../util/strings"

const H1 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}

  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <h1 class="material-header" id={id}>
      {children}
    </h1>
  )
}

export default H1
