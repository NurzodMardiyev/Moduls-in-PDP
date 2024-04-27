import React, { Component } from 'react'
import Card from '../Card/Card.jsx'
import '../../App.css'
class CardBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: [4, 53, 43, 12, 11, 1, 89, 93],
      img: [],
    }

    this.handleClikc = this.handleClikc.bind(this)
  }

  handleClikc() {
    // Random id
    const idArray = []
    for (let i = 0; i < 8; i++) {
      const idRan = Math.floor(Math.random() * 99)
      idArray.push(idRan)
      this.setState({ id: idArray })
    }
    //Fetch Api coming Data
    const imgArray = []
    for (let i = 0; i < 8; i++) {
      fetch(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id[i]}.png`,
      )
        .then((res) => {
          if (!res.ok) {
            console.log('Error nimadadir')
          }
          return res
        })
        .then((res) => {
          imgArray.push(res.url)
          this.setState({ img: imgArray })
        })
        .catch((error) => {
          console.error(error, 'Error Api')
        })
    }
  }

  // componentDidMount() {}

  render() {
    return (
      <div>
        <div className="cardsTop cards">
          <Card img={this.state.img[0]} />
          <Card img={this.state.img[1]} />
          <Card img={this.state.img[2]} />
          <Card img={this.state.img[3]} />
        </div>
        <div className="cardsBottom cards">
          <Card img={this.state.img[4]} />
          <Card img={this.state.img[5]} />
          <Card img={this.state.img[6]} />
          <Card img={this.state.img[7]} />
        </div>
        <button onClick={this.handleClikc}>btn</button>
      </div>
    )
  }
}

export default CardBox

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png
