export default function GridList({ itemList }) {
  return (
    <section
      id="gridlist-container"
      className="
        grid grid-rows-1 grid-cols-4
        gap-x-2 gap-y-12"
    >
      {itemList?.map((item) => (
        <div
          id="image-container"
          className="
            col-span-1 
            h-24 w-full
            border-2 border-rose-600"
        >
          <img
            className="
              object-contain 
              m-auto
              max-w-full max-h-full"
            src={item.url}
          />
        </div>
      ))}
    </section>
  )
}
