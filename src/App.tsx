import ApprovedImages from './components/ApprovedImages/ApprovedImages';
import Header from './components/Header/Header';
import ImageReview from './components/ImageReview/ImageReview';
import GlobalStyles from './Global.styled';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <ApprovedImages />
      <ImageReview />
    </div>
  );
}

export default App;
