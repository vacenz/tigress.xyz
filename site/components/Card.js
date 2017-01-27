import React, { Component } from 'react'
import styles from './Card.css'
import CSSModules from 'react-css-modules'

@CSSModules(styles, { allowMultiple: true })
export default class Card extends Component {
  render() {
    const { image } = this.props
    return (
      <div styleName='Card' >
        {
          image &&
            <img styleName='Image' src={image} />
        }
        {
          this.props.children
        }
      </div>
    )
  }
}
