import Header from './Header';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div>
          <main >
            <div >
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;