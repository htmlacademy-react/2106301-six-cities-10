import MainPage from '../../pages/mainPage/main';

type Props = {
  places: number;
};

function App({places} : Props): JSX.Element {
  return (
    <MainPage places = {places}/>
  );
}

export default App;
