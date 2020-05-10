import React from 'react';
class FooterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div class="footerContainer">
                <div class="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>

                    <div class="row">
                        <div class="col-lg-4 col-12">
                            <h4 style={{ textTransform: 'uppercase', color: 'white' }}>
                                Editor Pics
                            </h4>
                            <div class="row py-3">
                                <div class="col-4">
                                    <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/115-218x150.jpg" alt="..." style={{ width: '100%' }} />
                                </div>
                                <div class="col-8">
                                    Modern Monochrome Home with Calm and Cosy Terrace and Steps
                                    August 7, 2019
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/111-218x150.jpg" alt="..." style={{ width: '100%' }} />
                                </div>
                                <div class="col-8">
                                    Modern Monochrome Home with Calm and Cosy Terrace and Steps
                                    August 7, 2019
                                </div>
                            </div>
                            <div class="row py-3">
                                <div class="col-4">
                                    <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/110-218x150.jpg" alt="..." style={{ width: '100%' }} />
                                </div>
                                <div class="col-8">
                                    Modern Monochrome Home with Calm and Cosy Terrace and Steps
                                    August 7, 2019
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-12">
                            <h4 style={{ textTransform: 'uppercase', color: 'white' }}>
                                Popular Posts
                            </h4>
                            <div class="row py-3">
                                <div class="col-4">
                                    <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/54-1-218x150.jpg" alt="..." style={{ width: '100%' }} />
                                </div>
                                <div class="col-8">
                                    Modern Monochrome Home with Calm and Cosy Terrace and Steps
                                    August 7, 2019
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-218x150.jpg" alt="..." style={{ width: '100%' }} />
                                </div>
                                <div class="col-8">
                                    Modern Monochrome Home with Calm and Cosy Terrace and Steps
                                    August 7, 2019
                                </div>
                            </div>
                            <div class="row py-3">
                                <div class="col-4">
                                    <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-218x150.jpg" alt="..." style={{ width: '100%' }} />
                                </div>
                                <div class="col-8">
                                    Modern Monochrome Home with Calm and Cosy Terrace and Steps
                                    August 7, 2019
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-4 col-12">
                            <h4 style={{ textTransform: 'uppercase', color: 'white' }}>
                                Popular Category
                            </h4>
                            <div class="clearfix text-white pt-3 pb-2" >
                                <div class="float-left">Racing</div>
                                <div class="float-right">20</div>
                            </div>
                            <div class="clearfix text-white" >
                                <div class="float-left">Street Fashion</div>
                                <div class="float-right">15</div>
                            </div>
                            <div class="clearfix text-white py-2" >
                                <div class="float-left">New Look</div>
                                <div class="float-right">15</div>
                            </div>
                            <div class="clearfix text-white " >
                                <div class="float-left">Style Hunter</div>
                                <div class="float-right">15</div>
                            </div>
                            <div class="clearfix text-white py-2" >
                                <div class="float-left">Gadgets</div>
                                <div class="float-right">15</div>
                            </div>
                            <div class="clearfix text-white" >
                                <div class="float-left">Mobile Phones</div>
                                <div class="float-right">15</div>
                            </div>
                            <div class="clearfix text-white py-2" >
                                <div class="float-left">Photo Graphy</div>
                                <div class="float-right">15</div>
                            </div>

                        </div>
                    </div>
                    <hr style={{ width: '80%' }} />
                    <div class="row py-4">
                        <div class="col-lg-3 col-12">
                            
                            <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/np10blue-white-retina.png" 
                            class="w-100 h-100"
                            alt="..."  />
                        </div>

                        <div class="col-lg-5 col-12 py-lg-0 py-4">
                            <h1 class="text-white">ABOUT US</h1>
                            <span class="my-4">     Newspaper is your news, entertainment, music fashion website.
                            We provide you with the latest breaking news and videos straight from the entertainment industry.</span>
                            <span>   Contact us: contact@yoursite.com</span>
                        </div>
                        <div class="col-lg-4 col-12">
                            <h1 class="text-white mb-4">Follow US</h1>
                            <div>
                                <button type="button" class="btn btn-primary ">f </button>
                                <button type="button" class="btn btn-secondary mx-2">tw</button>
                                <button type="button" class="btn btn-secondary">pint</button>
                                <button type="button" class="btn btn-secondary mx-2">wh</button>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        )
    }
}
export default FooterContainer;