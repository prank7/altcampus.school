import Header from './Header';
import Footer from './Footer';

export default function LayoutHome({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
