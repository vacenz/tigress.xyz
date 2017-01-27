import React, { Component } from 'react'
import styles from './Tigress.css'
import CSSModules from 'react-css-modules'

import Card from './Card'
import Player from './Player'

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
    /* spinning ball */

    var C = document.createElement('canvas');
    var c = C.getContext('2d');

    C.width = 200; C.height = 200;
    document.getElementById("spinning-ball").appendChild(C);

    var particles = [];
    for(var i = 3000; i--; particles.push([
    Math.random() * Math.PI * 1,
    Math.random() * Math.PI * 1,
    [
    Math.random() * 256 | 0,
    Math.random() * 256 | 0,
    Math.random() * 256 | 0
    ]
    ]));

    (function render() {
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.scale(C.width/2, C.height/2);
    c.translate(1, 1);

    c.globalCompositeOperation = 'source-over';
    c.fillStyle = 'rgba(0, 0, 0, .5)';
    c.fillRect(-12, -2, 20, 4);

    var x, y, z, w, t, p, r = .7, f = 1;
    c.globalCompositeOperation = 'lighter';

    for(var i = 0; p = particles[i++];) {
    t = Date.now() / 8000 * (i%1 ? 1 : -1);
    x = r * Math.sin(p[0] + t) * Math.cos(p[1] + t);
    y = r * Math.cos(p[0] + t);
    z = r * Math.sin(p[0] + t) * Math.sin(p[1] + t);
    w = f / (f - z);
    c.beginPath(); c.arc(x*w, y*w, w/100, 0, 2*Math.PI);
    c.fillStyle = 'rgba(' + p[2] + ', ' + w/4 + ')';
    c.fill();
    }

    requestAnimationFrame(render);
    })();
  }

  render() {
    return (
      <div styleName='Projects'>

        <div styleName='TitleContainer'>
          <h1 styleName='Title'>My Tigress Mistress</h1>
          <h1 styleName='Title'>The explicit soundscape to your summer...</h1>
        </div>
        <Card
          image='https://s-media-cache-ak0.pinimg.com/originals/0e/32/25/0e32258a15121e43558072b971ebcb4f.gif' />

        <div styleName='Card'>
          <div id="spinning-ball" />
          <Player />
        </div>

        <Card
          image='http://i.imgur.com/dSnX7wZ.jpg' />

        <Card
          image='http://i.imgur.com/X1BceaT.jpg' />

      </div>
    )
  }
}
