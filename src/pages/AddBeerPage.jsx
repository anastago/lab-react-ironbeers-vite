import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"

function AddBeerPage(props) {
  const API_URL = " https://ih-beers-api2.herokuapp.com/beers/new"
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState("")
  const [contributed, setContributed] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const beer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributed,
    }
    axios
      .post(`${API_URL}`, beer)
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <Navbar></Navbar>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(event) => handleSubmit(event)}
      >
        <label name="name" type="text">
          {" "}
          Name
        </label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <label name="tagline" type="text">
          {" "}
          Tagline
        </label>
        <input
          value={tagline}
          type="text"
          onChange={(event) => {
            setTagline(event.target.value)
          }}
        />
        <label name="description" type="text">
          {" "}
          Description
        </label>
        <input
          value={description}
          type="text"
          onChange={(event) => {
            setDescription(event.target.value)
          }}
        />
        <label name="firstBrewed" type="text">
          {" "}
          First Brewed
        </label>
        <input
          value={firstBrewed}
          type="text"
          onChange={(event) => {
            setFirstBrewed(event.target.value)
          }}
        />
        <label name="brewers_tips" type="text">
          {" "}
          Brewer's Tips
        </label>
        <input
          value={brewersTips}
          type="text"
          onChange={(event) => {
            setBrewersTips(event.target.value)
          }}
        />

        <label name="attenuation_level" type="number">
          Attenuation Level
        </label>
        <input
          value={attenuationLevel}
          type="number"
          onChange={(event) => {
            setAttenuationLevel(event.target.value)
          }}
        />

        <label name="contributed_by" type="text">
          {" "}
          Contributed By
        </label>
        <input
          value={contributed}
          type="text"
          onChange={(event) => {
            setContributed(event.target.value)
          }}
        />
        <button type="submit">Add beer</button>
      </form>
    </div>
  )
}

export default AddBeerPage
