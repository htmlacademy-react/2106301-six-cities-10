import FavoritesPage from "../../../pages/favoritesPage/favorites-page";
import FavoritesCard from "../../cards/fovorites-card";

function Berlin() {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesCard />
        <FavoritesCard />
      </div>
    </li>
   );
}

export default Berlin;
