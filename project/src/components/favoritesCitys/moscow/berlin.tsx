import { OffersReview } from '../../../types/offers';
import FavoritesCard from '../../cards/fovorites-card';

type berlinProps = {
  offers: OffersReview[];
}

function Berlin({offers}: berlinProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Berlin</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => {
          if (offer.city === 'Berlin') {
            return (
              <FavoritesCard offer={offer} />
            );
          }
        })}
      </div>
    </li>
  );
}

export default Berlin;
