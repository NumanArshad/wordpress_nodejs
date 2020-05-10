import React from 'react';
class PopularPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div class="my-4">
                    <span class="p-2 text-white bg-dark" style={{ textTransform: 'uppercase' }}>
                        Most Popular
                    </span>
                    <hr style={{ marginTop: 5, height: 1 }} class="bg-dark"  ></hr>
                </div>

                <div class="row">
                    <div class="col-4">
                        <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                    </div>
                    <div class="col-8">
                        Modern Monochrome Home with Calm and Cosy Terrace and Steps
                        August 7, 2019
                   </div>
                </div>

                <div class="row py-4">
                    <div class="col-4">
                        <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                    </div>
                    <div class="col-8">
                        Modern Monochrome Home with Calm and Cosy Terrace and Steps
                        August 7, 2019
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                    </div>
                    <div class="col-8">
                        Modern Monochrome Home with Calm and Cosy Terrace and Steps
                        August 7, 2019
                    </div>
                </div>

                <div class="row py-4">
                    <div class="col-4">
                        <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                    </div>
                    <div class="col-8">
                        Modern Monochrome Home with Calm and Cosy Terrace and Steps
                        August 7, 2019
                    </div>
                </div>

                <div class="my-2">
                    <span class="p-2 text-white bg-dark" style={{ textTransform: 'uppercase' }}>
                        Recent Comments
                    </span>
                    <hr style={{ marginTop: 5, height: 1 }} class="bg-dark"  ></hr>
                </div>

                <div style={{ fontSize: 15 }}>
                    Mary Dill on
                   <span style={{ fontWeight: 'bold', color: 'black' }}>
                        <i> Another Big Apartment Project Slated for Broad Ripple Company</i></span>
                </div>

                <div class="my-2" style={{ fontSize: 15 }}>
                    Georgia Summer on
                   <span style={{ fontWeight: 'bold', color: 'black' }}>
                        <i>   Patricia Urquiola Coats Transparent Glas Tables for Livings
                            </i></span>
                </div>

                <div  style={{ fontSize: 15 }}>
                    Michael Brain on
                   <span style={{ fontWeight: 'bold', color: 'black' }}>
                        <i>    Top Fashion Trends to Look for in Every Important Collection
                            </i></span>
                </div>

                <div class="my-2" style={{ fontSize: 15 }}>
                    Armin Vans on
                   <span style={{ fontWeight: 'bold', color: 'black' }}>
                        <i>   WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City
                            </i></span>
                </div>

                <div  style={{ fontSize: 15 }}>
                    Armin Vans on
                   <span style={{ fontWeight: 'bold', color: 'black' }}>
                        <i>  Discover the Most Magical Sunset in Santorini
                            </i></span>
                </div>





            </div>
        )
    }
}
export default PopularPosts;