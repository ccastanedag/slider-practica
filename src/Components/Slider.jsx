import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100vw;
  height: 70vh;
  background: #aaa;
  overflow-x: hidden;
  display: flex;
`

const StyledSlideContainer = styled.div`
  min-width: 100vw;
  height: 70vh;
  background: url(${props => `${props.backgroundImage}`});
  background-position: center center;
  background-size: cover;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => `${props.currentIndex * -100}%`});
  position: relative
  `

const Slider = ({ photos, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(currentIndex + 1)
      if (currentIndex === photos.length - 1)
        setCurrentIndex(0)
    }, interval)
    return () => clearInterval(timer)
  }, [currentIndex, interval, photos.length])

  return (
    <StyledContainer>
      {
        photos.map(photo => (<StyledSlideContainer
          interval={interval}
          currentIndex={currentIndex}
          backgroundImage={photo}
          index={photo} >
            <h1>HELLO</h1>
          </StyledSlideContainer>)
        )
      }
    </StyledContainer>
  )
}

Slider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number.isRequired
}

export default Slider
