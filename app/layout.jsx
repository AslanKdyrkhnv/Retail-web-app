import "@/assets/style/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "HomePage",
  keywords: "rental, propery",
  decription: "find the right property",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
