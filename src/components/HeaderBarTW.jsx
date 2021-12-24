export default function HeaderBar() {
  return (
    <div id="header-bar">
      <div
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
            text-left
            w-full
            bg-orange-100"
        >
          <p>logo</p>
        </div>
        <div
          id="menu-items"
          className="
            col-span-1
            text-center
            w-full
            bg-orange-100
            border-2 border-rose-600"
        >
          <p>menuitems</p>
        </div>
        <div
          id="suffix-items"
          className="
            col-span-1
            text-right
            w-full
            bg-orange-100"
        >
          <p>suffix</p>
        </div>
      </div>
    </div>
  )
}
