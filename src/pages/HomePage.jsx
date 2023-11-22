import { Link } from "react-router-dom"
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

function HomePage() {
  return (
    <div>
      <div className="container-beer">
        <img alt="All Beers" src={beers} />
        <Link to="/beers">
          <h2>All beers</h2>
        </Link>
        <p>
          Welcome to our extensive collection of craft beers! Explore a diverse
          range of flavors and styles from around the world in our All Beers
          section. Whether you're a seasoned beer enthusiast or a curious
          newcomer, there's something for everyone. Cheers to discovering your
          new favorite brew!
        </p>
      </div>
      <div className="container-beer">
        <img alt="Random Beer" src={randomBeer} />
        <Link to={"/random-beer"}>
          <h2>Random beer</h2>
        </Link>
        <p>
          Take a leap into the unknown with our Random Beer feature. Feeling
          adventurous? Let us surprise you with a unique selection from our
          curated assortment. It's a great way to step out of your comfort zone
          and savor the unexpected. Embrace the element of surprise and enjoy
          the journey of discovering a random gem!
        </p>
      </div>
      <div className="container-beer">
        <img alt="New Beer" src={newBeer} />
        <Link to="/new-beer">
          <h2>New beer</h2>
        </Link>
        <p>
          Stay ahead of the brewing curve with our "New Beer" arrivals. We're
          constantly adding fresh and innovative brews to our collection, so you
          can be among the first to experience the latest in the world of craft
          beer. From bold experimental flavors to traditional classics, dive
          into the exciting realm of new and exciting brews!
        </p>
      </div>
    </div>
  )
}

export default HomePage
