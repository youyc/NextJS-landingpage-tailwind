export default function HeaderBar() {
  return (
    <section
      id="header-bar-container"
      className="
        grid grid-rows-1 grid-cols-3
        h-8
        bg-indigo-500 
        border-2 border-rose-600"
    >
      <div
        id="logo"
        className="
            col-span-1
            text-left"
      >
        <p>logo</p>
      </div>

      <div
        id="menu-items"
        className="
          grid grid-cols-4
          w-full
          border-2 border-rose-600"
      >
        <button
          className="
            btn bg-orange-100"
        >
          button1
        </button>
        <button className="btn bg-orange-100">button2</button>
        <button className="btn bg-orange-100">button3</button>
        <button className="btn bg-orange-100">button4</button>
      </div>

      <div
        id="suffix-items"
        className="
            col-span-1
            place-self-end self-center"
      >
        <button className="btn bg-orange-100">suffixbutton</button>
      </div>
    </section>
  )
}
