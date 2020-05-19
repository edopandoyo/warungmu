import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'materialize-css/dist/css/materialize.min.css';


const photos = [
    {
      nama : 'Bakso',
      harga : '15.000',
      url : 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/12/11/1132603/540x270/5-cara-membuat-bakso-sapi-ayam-dan-ikan-ala-rumahan.jpg'
    },
    {
      nama : 'Mi Ayam',
      harga : '12.000',
      url : 'https://caramembuat.id/wp-content/uploads/elementor/thumbs/cara-membuat-mie-ayam-o88lhl5c4azgwywwdsj6hcykl05mc2e834wbr9g39w.jpg'
    },
    {
        nama : 'Sate',
        harga : '10.000',
        url : 'https://sifu.unileversolutions.com/image/id-ID/recipe-topvisual/2/1260-709/sate-ayam-50417948.jpg'
      }
  ];

class Banner extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2.1,
            slidesToScroll:1,
            swipeToSlide: true,
            arrows: false,

          };
          
          return (
            <Slider {...settings}>
              {photos.map((photo) => {
                return (
                      <div>
                          <div className="row">
                              <div className="col s12">
                                  <div className="card">
                                      <div className="card-image">
                                          <img src={photo.url} alt={photo.nama}/>
                                          <div className="promo">
                                              <span>promo</span>
                                          </div>
                                      </div>
                                      <div className="card-content">
                                          <span><b>{photo.nama}</b></span><br/>
                                          <span>{photo.harga}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                )
              })}
      
            </Slider>
          )  

    }
}

export default Banner;