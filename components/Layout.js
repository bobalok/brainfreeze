import Navbar from "./Navbar";
import Footer from "./Footer";
import Navigation from "./Navigation";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Navigation /> */}
      <main className="bg-purple-900">{children}</main>
      <Footer />
    </>
  );
}
