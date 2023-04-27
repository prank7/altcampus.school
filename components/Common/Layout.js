import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutHome({ children, coursesWithBasicInfo }) {
  return (
    <>
      <Navbar coursesWithBasicInfo={coursesWithBasicInfo} />
      {children}
      <Footer />
    </>
  );
}
