import { Link } from 'react-router-dom';
import { OffersReview } from '../../../types/offers';
import FavoritesCard from '../../cards/fovorites-card';

type amsterdamProps = {
  offers: OffersReview[];
}

function Amsterdam({offers}: amsterdamProps) {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>Amsterdam</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => {
          if(offer.city === 'Amsterdam') {
            return(
              <FavoritesCard offer={offer} />
            );
          }
        })}
      </div>
    </li>
  );
}

export default Amsterdam;
