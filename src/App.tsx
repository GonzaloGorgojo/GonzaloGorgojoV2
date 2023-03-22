import Footer from './components/footer/footer';
import Header from './components/header/header';
import PageIndex from './components/page-index/pageIndex';
import ContactLinks from './components/social/contact';

function App(): JSX.Element {
  return (
    <div className="container">
      <PageIndex />
      <ContactLinks />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
