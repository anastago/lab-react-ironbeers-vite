import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function AllBeersPage() {
  const API_URL = "https://ih-beers-api2.herokuapp.com"

  const [beers, setBeers] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    axios
      .get(`${API_URL}/beers/search?q=${searchQuery}`)
      .then((res) => {
        setBeers(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  if (!beers) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar></Navbar>
      <input
        type="text"
        name="search"
        placeholder="Filter beers..."
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>{" "}
      <div>
        {beers.map((beer) => {
          return (
            <article key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} style={{ height: "10rem" }} />
                <h2>{beer.name}</h2>
              </Link>
              <p>Contributed by: {beer.contributed_by} </p>
              <p>{beer.tagline} </p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default AllBeersPage
