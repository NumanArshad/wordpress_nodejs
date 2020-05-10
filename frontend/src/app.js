import React, { Component } from "react";
// import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import 'fa-icons';
import TopHeader from "./navbar";
import PostsContainer from "./PostContainer";
import FooterContainer from "./FooterContainer";
import PopularPosts from "./PopularPosts"
var __html = require('./practise.html')
var template = { __html: __html }
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Check from './homePage'
import Comment from './Comment'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Check} />
                    <Route exact path="/comment" component={Comment} />
                </Switch>
            </BrowserRouter>
            // <div dangerouslySetInnerHTML={template} />
            // <div>

            //     <div class="container-md">
            //         <div class="row">
            //             <div class="col-lg-8 col-12">
            //                 <i class="fa fa-facebook" aria-hidden="true"></i>
            //                 <PostsContainer />
            //             </div>
            //             <div class="col-lg-4 col-12">
            //                 <PopularPosts />
            //             </div>
            //         </div>
            //     </div>
            //     <FooterContainer />
            // </div>
        )

    }

}
export default App