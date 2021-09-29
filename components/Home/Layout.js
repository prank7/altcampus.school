import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

export default function LayoutHome({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
