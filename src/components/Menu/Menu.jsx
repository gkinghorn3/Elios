import { useInView } from "react-intersection-observer";

import CocktailElement from "./CocktailElement";

import "./menu.scss";

const cocktails = [
  {
    name: "The London Cut",
    price: "£9.50",
    flavourProfile: "Crisp with a kick",
    specs:
      "Beefeater Gin, Chilli & Ginger Syrup, Fresh Cucumber, Mint, Chilli, Lime",
  },
  {
    name: "Dance with the devil no.2",
    price: "£9.00",
    flavourProfile: "Elio’s Long Island",
    specs:
      "Sloe Gin, Southern Comfort, Lychee Liqueur, Cointreau, Aperol, Lime, Lemonade",
  },
  {
    name: "The Tropics",
    price: "£10.00",
    flavourProfile: "Tropical sweet & sour",
    specs:
      "Dead Man’s Fingers Coconut & Mango Rums, Vanilla Syrup, Lime",
  },
  {
    name: "The Breakfast Club",
    price: "£9.50",
    flavourProfile: "The VBL all grown up",
    specs:
      "Vodka, Blackcurrant Jam, Crème De Mure, Lemon, Lemonade",
  },
  {
    name: "Mexican Root",
    price: "£10.00",
    flavourProfile: "Fresh & spiced",
    specs:
      "Whitley Neil Rhubarb & Ginger Gin, Olmeca Tequila, Cucumber, Lime, Ginger Beer",
  },
  {
    name: "International I.P.A.",
    price: "£10.00",
    flavourProfile: "Hoppy & Fresh",
    specs:
      "Peach Sake, Pisco, St Germain, Neck Oil Syrup, Lemon, Neck Oil Float",
  },
  {
    name: "irish espresso martini",
    price: "£10.50",
    flavourProfile: "Strong & bold",
    specs:
      "Kraken, Cazcabel Coffee, Guinness Syrup, Espresso, Guinness Float",
  },
  {
    name: "The Agave Orchard",
    price: "£10.50",
    flavourProfile: "So fresh & so clean",
    specs:
      "Olmeca Tequila, Cider Syrup, Apple, Elderflower, Lime, Mint",
  },


];

const Menu = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  return (
    <section className="menu-container">
      <div className="section-titles">
        <h3>Menu</h3>
        <h2>- Cocktails -</h2>
      </div>
      <div className="menu-image-container">
        <img
          ref={ref2}
          src="/images/negroni1.webp"
          className={`second-img ${inView2 ? "second-img-animation" : ""}`}
        />
        <img
          ref={ref}
          src="/images/espressoMartini.webp"
          className={`first-img ${inView ? "first-img-animation" : ""}`}
        />
      </div>
      <div className="menu-cocktails-container">
        {cocktails.map((cocktail) => (
          <CocktailElement
            price={cocktail.price}
            name={cocktail.name}
            flavourProfile={cocktail.flavourProfile}
            specs={cocktail.specs}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
