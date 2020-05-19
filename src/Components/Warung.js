import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const warungs = [
    {
      nama : 'Warung Bakso',
      produk : 'Bakso Boom & Mi Ayam',
      alamat : 'Sawah Baru',
      url : 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/12/11/1132603/540x270/5-cara-membuat-bakso-sapi-ayam-dan-ikan-ala-rumahan.jpg'
    },
    {
      nama : 'Warung Mi Ayam',
      produk : 'Mi Ayam Bakso & Bakso Beranak',
      alamat : 'Pasar Kampar',
      url : 'https://caramembuat.id/wp-content/uploads/elementor/thumbs/cara-membuat-mie-ayam-o88lhl5c4azgwywwdsj6hcykl05mc2e834wbr9g39w.jpg'
    },
    {
        nama : ' Warung Sate',
        produk : 'Sate Ayam, Kambing, Sapi',
        alamat : 'Airtiris',
        url : 'https://sifu.unileversolutions.com/image/id-ID/recipe-topvisual/2/1260-709/sate-ayam-50417948.jpg'
      }
  ];


const Warung = () => {
    return (
        <div className="container warung">
            <p><b>Warung Rekomendasi</b></p>
            {warungs.map((warung) => {
            return (
                <div className="row">
                    <div className="col s4">
                        <div className="img-warung">
                            <img src={warung.url} alt={warung.nama} />
                        </div>
                    </div>
                    <div className="col s8">
                        <span><b>{warung.nama}</b></span> <br/>
                        <span>{warung.produk}</span><br/>
                        <span>{warung.alamat}</span><br/>
                    </div>
                </div>
            )
            })}
        </div>
    )
}

export default Warung;