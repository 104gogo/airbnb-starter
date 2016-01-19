/**
 * <CarouselPicture loadone=true showdesc=false current=0 data='{id:1,desc:'desc',gourl='abc',items:[{id:100,desc:'100',imgurl:'/res/0.jpg',gourl:'/0'},{id:101,desc:'101',imgurl:'/res/1.jpg',gourl:'/1'},{id:102,desc:'102',imgurl:'/res/2.jpg',gourl:'/2'}]}'/>
 *
 * <SimpleCarousel data-current=0 data-items=>
 *
 */

import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
//import classNames from 'classnames';
import classNames from 'classnames/bind';
import styles from '../../scss/components/_carousel-simple';
const cx = classNames.bind(styles);

export default class CarouselBootstrap extends Component {

  render() {
    return (
    <div>
      <div className="carousel carousel-wind-main">
        <div className={cx('fit-image-wrap-outter')}>
          <div className={cx('fit-image-wrap-inner')}>
            <img src={this.props.imgurl} className={cx('fit-image-origin')} />
          </div>
        </div>
        <div className="carousel-control left" onClick={this.props.prevItem} >
          <i className="glyphicon glyphicon-chevron-left" />
        </div>
        <div className="carousel-control right" onClick={this.props.nextItem} >
          <i className="glyphicon glyphicon-chevron-right" />
        </div>
      </div>
    </div>
    );
  }

}


