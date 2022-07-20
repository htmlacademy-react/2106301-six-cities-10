import { OffersReview } from "../../types/offers";
import Card from "../cards/card";

type sentensProps = {
  offers: OffersReview[];
}

// const mapCardOffers = ({offers}: sentensProps) => {
//   offers.map(el => {
//     return(
//       <Card offers={offers}/>
//     )
//   })
// }

function SentensCards({offers}:sentensProps): JSX.Element {
  return(
    <>
      {offers.map(offer => {
        return(
          <Card key={offer.id} offer={offer}/>
        )
      })}
    </>
  )
}

export default SentensCards;
