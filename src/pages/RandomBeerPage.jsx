import Navbar from "../components/Navbar"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function RandomBeerPage(props) {
  const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random"
  const [beer, setBeer] = useState(null)

  function fetchOneBeer() {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        console.log(res.data)
        setBeer(res.data)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    fetchOneBeer()
  }, [])

  if (!beer) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <article key={beer._id}>
          <img src={beer.image_url} style={{ height: "10rem" }} />
          <h2>{beer.name}</h2>

          <p>{beer.tagline} </p>
          <p>{beer.first_brewed} </p>
          <p>Attenuation level: {beer.attenuation_level} </p>
          <p>{beer.description} </p>
          <p>By: {beer.contributed_by} </p>
        </article>
      </div>
    </div>
  )
}

export default RandomBeerPage
