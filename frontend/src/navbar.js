import React from 'react';
import './scss/style.scss';
import * as Scroll from 'react-scroll';
import ErrorBoundary from "./ErrorBoundary"
class TopHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showClass: false, navbaroffset: 0 };
    this.scrollListener = this.scrollListener.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener)
    this.setState({ navbaroffset: document.getElementById("navbar").offsetTop })

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }
  scrollListener() {
    //  console.log("pg"+window.pageYOffset+"navbar"+document.getElementById("navbar").offsetTop)
    if (window.pageYOffset >= this.state.navbaroffset) {
      // alert(document.getElementById("navbar").offsetTop)
      this.setState({ showClass: true })
    }
    else {

      this.setState({ showClass: false })
    }
    // ("scroll pos is"+window.pageYOffset)
  }
  render() {
    // alert("page offset is"+window.pageYOffset)
    return (
      <div>
        <div class="d-xs-none d-none d-md-block">

          {/* <div class="row text-light px-5" style={{ backgroundColor: 'black' }}>
            <div class="col-auto">
              ldgmk njfsjjsgjvegb
  </div>
            <div class="col-auto">
              New York
  </div>
            <div class="col-auto">
              Wednesdat,May 6,2020
  </div>
            <div class="col-auto">
              <a href="#" className="signColor" >  Sign in/Join</a>

            </div>
            <div class="col-auto ml-auto">
              Sign in/Join
  </div>
          </div> */}
        </div>
        <div class="container">
        <div class="row px-4">
          <div class="col-md-4">
            <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/np10blue-retina.png"
              alt=""  class="w-100"/>
          </div>

          <div class="col-md-8 pt-3">
            <img src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg"
              alt="" class="w-100" />
            </div>
          </div>
        </div>
        {/* <ErrorBoundary> */}
        <div id="navbar" className={this.state.showClass ? 'sticky' : null}>
          <a class="active" href="javascript:void(0)">Home</a>
          <a href="javascript:void(0)">News</a>
          <a href="javascript:void(0)">Fashion</a>
          <a href="javascript:void(0)">Gadgets</a>
        </div>


        {/* </ErrorBoundary> */}
        {/* <button onClick={() => Scroll.animateScroll.scrollToTop()}></button> */}
      </div>

    )
  }
}
export default TopHeader;