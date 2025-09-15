import catSvg from '../assets/images/cat.svg'
import '../styles/DancingCat.css'
import useAnimation from '../hooks/useAnimation'

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation(true)

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : 'still'}`}>
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>

      <div className="controls">
        <button
          onClick={toggleAnimation}
          className={`dance-button ${isAnimating ? 'stop' : 'start'}`}
          aria-label={isAnimating ? '춤 멈추기' : '춤 시작하기'}
        >
          {isAnimating ? '🛑 춤 멈추기' : '💃 춤 시작하기'}
        </button>
        <div className="keyboard-hint">
          <p>키보드 단축키: <kbd>스페이스바</kbd> 토글 | <kbd>R</kbd> 시작 | <kbd>S</kbd> 정지</p>
        </div>
      </div>

      <div className="dance-floor">
        <div className="floor-pattern"></div>
        <div className="sparkles">
          <span className="sparkle">✨</span>
          <span className="sparkle">⭐</span>
          <span className="sparkle">💫</span>
          <span className="sparkle">🌟</span>
        </div>
      </div>
    </div>
  )
}

export default DancingCat