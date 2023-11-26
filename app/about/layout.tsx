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
        <div className=" min-h-screen relative">
          {children}
        </div>
        <Footer />
      </main>
  );
};

export default Layout;