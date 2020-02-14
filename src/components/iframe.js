import React from "react"

export function Iframe(props) {
  const { src } = props

  return (
    <iframe style={{ border: 0, width: 180, height: 180 }} src={src} seamless>
      Horizontal Phase by Horizontal Phase
    </iframe>
  )
}
