import React, { Component } from "react";
// import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import 'fa-icons';
import TopHeader from "./navbar";
import PostsContainer from "./PostContainer";
import FooterContainer from "./FooterContainer";
import PopularPosts from "./PopularPosts"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div>
            
                <div class="container-md">
                    <div class="row">
                        <div class="col-lg-8 col-12">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <PostsContainer />
                        </div>
                        <div class="col-lg-4 col-12">
                            <PopularPosts />
                        </div>
                    </div>
                </div>
                <FooterContainer /> 
            </div>
        )

    }

}
export default App