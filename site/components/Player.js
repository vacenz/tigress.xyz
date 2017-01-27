import React, { Component } from 'react'
import styles from './Player.css'
import CSSModules from 'react-css-modules'
import Player from 'react-soundcloud-player'

@CSSModules(styles, { allowMultiple: true })
export default class Card extends Component {
  render() {
    const { image } = this.props
    return (
      <div styleName='Audio' >
        <Player audio_id='304776969' title='' />
      </div>
    )
  }
}
