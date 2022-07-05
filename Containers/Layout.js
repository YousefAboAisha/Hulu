import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
