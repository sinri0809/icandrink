/* eslint-disable */
import "./../../style/drinks.scss";
import DrinksCard from "./DrinksCard";


const alcoholType = ["Beer", "Cocktail", "Vodka", "Rum", "Gin", "Tequila", "Whiskey"]


const Drinks = ({alcohols}) => {
  return<main>
    <section className="container drinks">
      <div className="drinks-type">
        <h2>Alcohols</h2>
        <h3>Non-Alcohols</h3>
      </div>
      <ul className="alcohols-type nonalcohols-type">
        {
          alcoholType.map((item) => {
            return<li>{item}</li>
          })
        }
        {/* <li>Beer</li>
        <li>Cocktail</li>
        <li>VodKa</li> */}
      </ul>

      <div className="cards">
      {
        alcohols.map((alcohol, index) => {
          return <DrinksCard key={index} 
            alcohol={alcohol}
          />
        })
      }
      </div>
    </section>
  </main>
}

export default Drinks;