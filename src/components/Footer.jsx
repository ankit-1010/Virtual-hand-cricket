import React from 'react'
import footer from '../images/footer.png'
export default function Footer() {
    const a={
        position:"absolute",
        height:"10vh",
        width:"80vw",
        marginLeft:"10vw",
        borderRadius:"20px",
        marginTop:"2vh",
        bottom:"15px",
        animationName:'anime',
      animationIterationCount: 1,
    }


  return (
  <img style={a} src={footer} alt='a'/>
  )
}
