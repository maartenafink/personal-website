import styled from "styled-components"
import { space } from "styled-system"

const Blur = styled("div")(
  space,
  {
    opacity: 0.6,
    textDecoration: "line-through",
    backgroundImage:
      "linear-gradient(225deg, #32C5FF 0%, #B620E0 51%, #F7B500 100%)",
    width: 360,
    height: 360,
    borderRadius: "50%",
    filter: "blur(50px)",
    position: "absolute",
    zIndex: -1,
    marginTop: -75,
    animation: "blur 4s ease 0s infinite",
    marginLeft: -180,
    marginRight: "auto",
    left: "50%",
  },
  {}
)

// const fast = { tension: 50, friction: 1000 }
// const slow = { mass: 50, tension: 1500, friction: 1500 }
// const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

// export function Goo() {
//     const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
//     return (
//       <>
//         <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//           <filter id="goo">
//             <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
//             <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
//           </filter>
//         </svg>
//         <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
//           {trail.map((props, index) => (
//             <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
//           ))}
//         </div>
//       </>
//     )
//   }

export default Blur
