import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import SentensCards from '../../components/sentensCard/sentens-card';
import { OffersReview } from '../../types/offers';

type Props = {
  countOfAvailablePlaces: number;
  offers: OffersReview[];
};

function MainPage({countOfAvailablePlaces, offers}: Props) {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to="/">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOfAvailablePlaces} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0} >Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <article className="cities__card place-card">
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;120</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{ width: '80%' }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">Beautiful &amp; luxurious apartment at great location</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>
                <SentensCards offers={offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
