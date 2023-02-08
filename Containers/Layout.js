import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"

export default function Layout({ children }) {
  return (
    <div className="relative w-full before:opacity-60 before:blur-[1px] before:absolute before:bg-main before:-z-10 before:w-full before:h-full before:bg-fixed scroll-smooth transition-all overflow-hidden">
      <Navbar />
      <main className="relative container">{children}</main>
      <Footer />
    </div>
  )
}
