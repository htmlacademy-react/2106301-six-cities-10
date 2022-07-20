import { OffersReview } from '../../types/offers';
import Card from '../cards/card';

type sentensProps = {
  offers: OffersReview[];
}

function SentensCards({offers}:sentensProps): JSX.Element {
  return(
    <>
      {
        offers.map((offer) => <Card key={offer.id} offer={offer}/> )
      }
    </>
  );
}

export default SentensCards;
