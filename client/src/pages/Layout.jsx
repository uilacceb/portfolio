import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <Header />
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;