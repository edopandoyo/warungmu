import React, {Component} from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'


const photos = [
    {
      nama : 'Bakso',
      url : 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/12/11/1132603/540x270/5-cara-membuat-bakso-sapi-ayam-dan-ikan-ala-rumahan.jpg'
    },
    {
      nama : 'Mi Ayam',
      url : 'https://caramembuat.id/wp-content/uploads/elementor/thumbs/cara-membuat-mie-ayam-o88lhl5c4azgwywwdsj6hcykl05mc2e834wbr9g39w.jpg'
    },
    {
        nama : 'Sate',
        url : 'https://sifu.unileversolutions.com/image/id-ID/recipe-topvisual/2/1260-709/sate-ayam-50417948.jpg'
      },
      {
        nama : 'Bakso',
        url : 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/12/11/1132603/540x270/5-cara-membuat-bakso-sapi-ayam-dan-ikan-ala-rumahan.jpg'
      },
      {
        nama : 'Mi Ayam',
        url : 'https://caramembuat.id/wp-content/uploads/elementor/thumbs/cara-membuat-mie-ayam-o88lhl5c4azgwywwdsj6hcykl05mc2e834wbr9g39w.jpg'
      },
      {
          nama : 'Sate',
          url : 'https://sifu.unileversolutions.com/image/id-ID/recipe-topvisual/2/1260-709/sate-ayam-50417948.jpg'
        },
        
  ];

class PalingLaku extends Component {
  render () {
    return (
        <div className="produk-pilihan">
            <span><b>Paling Laku hari ini</b></span>
            <ScrollContainer className=" scroll-container">
                <div className="produk-pilihan-box">
                    {photos.slice(0, 5).map((photo) => {
                        return (
                            <div className="banner-produk-pilihan">
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card">
                                            <div className="card-image-paling-laku">
                                                <img src={photo.url} alt={photo.nama}/>
                                            </div>
                                            <div className="card-content">
                                                <p>{photo.nama}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </ScrollContainer>
        </div>
    )
  }
}

export default PalingLaku;