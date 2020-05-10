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
import { Link } from 'react-router-dom'
class Check extends React.Component {
    render() {
        return (
            <div>
                <div class="topnav">
                    <div class="container">
                        <Link class="active" to="/">Home</Link>

                        <Link to="/comment">Post-Comment</Link>

                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={template} />
            </div>
        )

    }
}
export default Check