import Header from "@/components/Header";


const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
      <main>
        <Header />
        <div className="min-h-screen relative">
          {children}
        </div>
      </main>
  );
};

export default Layout;