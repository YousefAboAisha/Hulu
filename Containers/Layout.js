import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[800px]">{children}</main>
      <Footer />
    </>
  );
}
