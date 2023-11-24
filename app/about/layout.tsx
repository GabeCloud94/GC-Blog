import Footer from "@/components/Footer";
import Header from "@/components/Header";


const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
      <main>
        <Header />
        {children}
        <Footer />
      </main>
  );
};

export default Layout;