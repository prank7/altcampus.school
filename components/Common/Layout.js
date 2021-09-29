import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutHome({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
