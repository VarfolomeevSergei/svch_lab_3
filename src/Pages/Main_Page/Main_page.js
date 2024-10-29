import Header from './components/header/header'; // Убедитесь, что путь правильный
import Main from './components/Main/main'
import Footer from './components/footer/footer.js'

const Main = () => {
  return (
    <div>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
};

export default Main;
