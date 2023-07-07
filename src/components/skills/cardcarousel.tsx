import React, { useRef, useState, useEffect } from "react"

import "./cardcarousel.scss"

export const CardCarousel = ({ children }: any) => {
  const ref = useRef(null)
  const items = useRef([])

  const [firstVisible, setFirstVisible] = useState(true)
  const [lastVisible, setLastVisible] = useState(false)

  useEffect(() => {
    const firstItemRef = items.current[0]
    const lastItemRef = items.current[items.current.length - 1]

    const firstItemObserver = new IntersectionObserver(
      entries => setFirstVisible(entries[0].isIntersecting),
      { root: ref.current, threshold: 0.5 }
    )
    firstItemObserver.observe(firstItemRef)

    const lastItemObserver = new IntersectionObserver(
      entries => setLastVisible(entries[0].isIntersecting),
      { root: ref.current, threshold: 1 }
    )
    lastItemObserver.observe(lastItemRef)

    return () => {
      firstItemObserver.disconnect()
      lastItemObserver.disconnect()
    }
  }, [ref.current, items.current])

  const next = () =>
    ref.current.scrollBy({
      left: 240, // card width
      behavior: "smooth",
    })

  const prev = () =>
    ref.current.scrollBy({
      left: -240, // card width
      behavior: "smooth",
    })

  return (
    <div className="card-carousel-wrapper">
      {!firstVisible && (
        <button onClick={prev} className="card-carousel-button-left">
          <span>{"<"}</span>
        </button>
      )}
      <div ref={ref} className="card-carousel">
        {children.map((child: any, i: number) => (
          <div
            className="card-carousel-card"
            key={child.key ?? i}
            ref={elem => (items.current[i] = elem)}
          >
            {child}
          </div>
        ))}
      </div>
      {!lastVisible && (
        <button onClick={next} className="card-carousel-button-right">
          <span>{">"}</span>
        </button>
      )}
    </div>
  )
}
