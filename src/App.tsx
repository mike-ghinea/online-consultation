import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import s from "./App.styles";
import Content from "./Content/Content";

const App: React.FC = () => {
  return (
    <s.AppWrapper>
      <Header />
      <Content />
      <Footer />
    </s.AppWrapper>
  );
};

export default App;
