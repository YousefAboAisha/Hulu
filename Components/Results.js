import Thumnail from "./thumnail"

export default function Results({ movies }) {
  if (!movies) return <h2>Loading...</h2>

  if (movies === null) return <h2>Data Not Found...</h2>

  return (
    <div className="relative grid gap-5 md:gap-5 sm:grid md:grid-cols-2 lg:grid-cols-3 pt-[10px] pb-[50px] overflow-y-hidden xl:grid-cols-4">
      {movies.map((elem) => {
        return <Thumnail key={elem.id} result={elem} />
      })}
    </div>
  )
}
