import Header from './components/header/header'; // Убедитесь, что путь правильный
import About from './components/about/about.js'
import Footer from './components/footer/footer.js'

const about_us = () => {
  return (
    <div>
      <Header />
      <About/>
      <Footer/>
    </div>
  );
};

export default about_us;
