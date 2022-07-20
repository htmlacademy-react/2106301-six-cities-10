import Amsterdam from "../../components/favoritesCitys/amsterdam/amsterdam";
import Berlin from "../../components/favoritesCitys/moscow/berlin";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function FavoritesPage() {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <Amsterdam/>
              <Berlin/>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
