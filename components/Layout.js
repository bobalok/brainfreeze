// import Navbar from './Navbar';
import Navi from "./Navi";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import HorizontalLine from "./HorizontalLine";

export default function Layout({ children }) {
  return (
    <>
      <Navi />
      <main className="bg-tatsuBG bg-hero-pattern bg-hero-size">
        {/* <Image
          className=""
          src="/images/landing-page-background-pattern.png"
          alt="Picture of the author"
          layout="intrinsic"
          width={2881}
          height={820}
        /> */}
        {children}
      </main>
      <Footer />
    </>
  );
}
