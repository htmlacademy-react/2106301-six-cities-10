import MainPage from '../../pages/mainPage/main-page';

type countOfAvailablePlaces = {
  places: number;
};

function App({places}: countOfAvailablePlaces): JSX.Element {
  return (
    <MainPage places = {places}/>
  );
}

export default App;
