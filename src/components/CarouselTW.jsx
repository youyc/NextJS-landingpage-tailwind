/* React component */
import { useState } from "react"

export default function Carousel({ itemList }) {
  const [state, setState] = useState(0)

  const toggleCarousel = (left_right) => async (event) => {
    left_right === "right"
      ? (state < itemList.length - 1)
        ? setState(++state)
        : setState(0)
      : (state > 0)
        ? setState(--state)
        : setState((itemList.length - 1))
  }

  return (
    <section
      id="carousel-container"
      className=" 
        flex
        relative
        justify-between
        w-full h-56
        border-2 border-cyan-400
        rounded-3xl"
    >
      <img
        src={itemList[state].url}
        alt="Item Images"
        className="
          object-cover
          w-full
          rounded-3xl"
      />
      <button
        className="
          absolute
          top-1/2
          -translate-y-1/2
          left-0
          border-2 border-red-500
          py-1"
        onClick={toggleCarousel("left")}
      >
        {"<"}
      </button>
      <button
        className="
          absolute
          top-1/2
          -translate-y-1/2
          right-0
          border-2 border-red-500
          py-1"
        onClick={toggleCarousel("right")}
      >
        {">"}
      </button>
    </section>
  )
}
