import "@/assets/style/global.css";

export const metadata = {
  title: "HomePage",
  keywords: "rental, propery",
  decription: "find the right property",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
