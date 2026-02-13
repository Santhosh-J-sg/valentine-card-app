import { useState, useEffect } from 'react'
import '../styles/ValentineCard.css'

export default function ValentineCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [particles, setParticles] = useState([])
  const [showNames, setShowNames] = useState(false)

  useEffect(() => {
    // Generate random particles
    setParticles(
      [...Array(30)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 3 + Math.random() * 2
      }))
    )
  }, [])

  const toggleFlip = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      // Show names when card is being flipped to back
      setTimeout(() => {
        setShowNames(true)
      }, 400) // Half of the flip animation duration
    } else {
      // Hide names when flipping back to front
      setShowNames(false)
    }
  }

  return (
    <div className="valentine-container">
      {/* Animated background */}
      <div className="background-animation">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>

      {/* Floating particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left + '%',
              animationDelay: particle.delay + 's',
              animationDuration: particle.duration + 's'
            }}
          >
            {['💕', '🌹', '💖', '✨', '💝'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Main card wrapper */}
      <div className="card-wrapper">
        {/* Card */}
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
          {/* Front of card */}
          <div className="card-front">
            <div className="front-content">
              {/* Animated rose */}
              <div className="rose-container">
                <div className="rose">🌹</div>
              </div>

              {/* Main text with animation */}

              {/* Beating heart */}
              <div className="beating-heart-container">
                <div className="heart-beat">💕</div>
                <div className="heart-beat-alt">💖</div>
              </div>

              {/* Interactive hint */}
          
              {/* Decorative elements */}
              <div className="front-decoration">
                <span className="deco-item">💕</span>
                <span className="deco-item">💕</span>
                <span className="deco-item">💕</span>
              </div>
            </div>

            {/* Card shine effect */}
            <div className="card-shine"></div>
          </div>

          {/* Back of card */}
          <div className="card-back">
            {/* Overlay with full screen names display */}
            {showNames && (
              <div className="names-overlay">
                <div className="names-display">
                  <div className="name-item name-item-1">
                    <span className="name-text">Sahana</span>
                    <div className="name-decoration">💕</div>
                  </div>
                  <div className="and-symbol">
                    <span>&</span>
                  </div>
                  <div className="name-item name-item-2">
                    <div className="name-decoration">💖</div>
                    <span className="name-text">Buji</span>
                  </div>
                </div>

                {/* Particles around names */}
                <div className="names-particles">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="name-particle"
                      style={{
                        '--angle': (i * 30) + 'deg',
                        animationDelay: (i * 0.1) + 's'
                      }}
                    >
                      {['💕', '🌹', '💖', '✨'][i % 4]}
                    </div>
                  ))}
                </div>

                {/* Close hint */}
                <div className="names-close-hint">Click to Close</div>
              </div>
            )}

            <div className="back-content" style={{ opacity: showNames ? 0 : 1, pointerEvents: showNames ? 'none' : 'auto' }}>
              {/* Top decoration */}
              <div className="back-top-decoration">
                <div className="flower">🌹</div>
                <div className="flower">🌹</div>
              </div>

              {/* Names with animation */}
              <div className="valentine-names">
                <span className="name name-1">Sahana</span>
                <span className="and">&</span>
                <span className="name name-2">Buji</span>
              </div>

              {/* Happy message */}
              <h2 className="valentine-message">Happy Valentine's Day!</h2>

              {/* Main message box with glass effect */}
              <div className="message-box">
                <div className="message-item">
                  <span className="emoji-left">🌹</span>
                  <p>May your love bloom as beautifully as a rose</p>
                  <span className="emoji-right">🌹</span>
                </div>
                <div className="divider"></div>
                <div className="message-item">
                  <span className="emoji-left">💕</span>
                  <p>Every moment with you is a treasure</p>
                  <span className="emoji-right">💕</span>
                </div>
                <div className="divider"></div>
                <div className="message-item">
                  <span className="emoji-left">✨</span>
                  <p>Thank you for all the joy and laughter</p>
                  <span className="emoji-right">✨</span>
                </div>
                <div className="divider"></div>
                <div className="message-item">
                  <span className="emoji-left">🎉</span>
                  <p>Here's to a lifetime of beautiful moments</p>
                  <span className="emoji-right">🎉</span>
                </div>
              </div>

              {/* Bottom decoration */}
              <div className="back-decoration">
                <span className="deco-circle">💕</span>
                <span className="deco-circle">🌹</span>
                <span className="deco-circle">💖</span>
                <span className="deco-circle">🌹</span>
                <span className="deco-circle">💕</span>
              </div>

              {/* Close hint */}
              <p className="close-hint">Click to Close</p>
            </div>

            {/* Card shine effect */}
            <div className="card-shine-back"></div>
          </div>
        </div>

        {/* Card shadow/depth */}
        <div className="card-shadow"></div>
      </div>

      {/* Confetti */}
      <div className="confetti-container">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 0.5 + 's'
            }}
          />
        ))}
      </div>
    </div>
  )
}