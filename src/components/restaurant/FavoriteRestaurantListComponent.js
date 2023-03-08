import RestaurantListComponent from "./RestaurantListComponent";
import RestaurantInstance from "../../domain/RestaurantsStore";
import CustomElement from "../../abstracts/CustomElement";

class FavoriteRestaurantListComponent extends CustomElement {
  connectedCallback() {
    super.connectedCallback();
    RestaurantInstance.subscribe(this);
    RestaurantInstance.publish();
  }

  rerender(restaurantList) {
    const restaurants = restaurantList
      .filter((restaurant) => restaurant.isFavorite)
      .map((restaurant) => {
        return `
          <restaurant-element 
          category="${restaurant.category}" 
          name="${restaurant.name}" 
          distance="${restaurant.distance}" 
          description="${restaurant.description}" 
          link="${restaurant.link}"
          >
          </restaurant-element>`;
      })
      .join("");

    this.shadowRoot.querySelector(".restaurant-list").innerHTML = restaurants;
  }

  template() {
    return `
        <style>
            * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            }
            :host {
            width: 50%;
            height: 100%;
            }
            .restaurant-list-container {
            display: flex;
            flex-direction: column;
            
            padding: 0 16px;
            margin: 16px 0;
            }
            ul {
            list-style: none;
            }
        </style>
        <section class="restaurant-list-container">
            <ul class="restaurant-list"></ul>
        </section>
    `;
  }
}

customElements.define(
  "favorite-restaurant-list",
  FavoriteRestaurantListComponent
);
export default FavoriteRestaurantListComponent;
