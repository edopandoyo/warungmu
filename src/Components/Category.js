import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const menus = [
    {
        nama: 'makanan',
        icon: 'https://image.flaticon.com/icons/svg/262/262594.svg'
    },
    {
        nama: 'minuman',
        icon: 'https://image.flaticon.com/icons/svg/751/751621.svg'
    },
    {
        nama: 'cemilan',
        icon: 'https://image.flaticon.com/icons/svg/1046/1046835.svg'
    },
    {
        nama: 'makanan',
        icon: 'https://etanee-images.s3-ap-southeast-1.amazonaws.com/product-category/sayuran.svg'
    },
    {
        nama: 'minuman',
        icon: 'https://etanee-images.s3-ap-southeast-1.amazonaws.com/product-category/sembako.svg'
    },
    {
        nama: 'cemilan',
        icon: 'https://etanee-images.s3-ap-southeast-1.amazonaws.com/product-category/buah.svg'
    },

]


class Category extends Component {
    render() {
        return (
            <div className="container category">
                <div className="row">
                    <p><b>Kategori</b></p>
                    {menus.map((menu) => {
                        return (
                            <div className="col s4 category-box">
                                <div className="box-category">
                                    <div className="category-icons">
                                        <img src={menu.icon} alt={menu.nama}/>
                                    </div>
                                    <div className="category-nama">
                                        <p>{menu.nama}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Category;