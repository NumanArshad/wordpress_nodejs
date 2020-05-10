import React from 'react';
import 'fa-icons';
class PostsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { commentData: '', name: '', email: '', website: '', allComments: [] };
        this.saveComment = this.saveComment.bind(this)
    }
    componentDidMount() {
        fetch("http://localhost:3301/api/allComments").then(response => {
            response.json().then(data => {
                // alert("result is" + JSON.stringify(data))
                if (data.commentStatus == "GetSuccess") {
                    this.setState({ allComments: data.allComments })
                }
            })
        })


    }
    saveComment(event) {
        event.preventDefault()
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                Name: this.state.name,
                Email: this.state.email,
                CommentText: this.state.commentData,
                Website: this.state.website
            })
        };
        fetch("http://localhost:3301/api/saveComments", options).then(response => {
            response.json().then(data => {
                // alert("result is" + JSON.stringify(data))
                if (data.commentStatus == "GetSuccess") {
                    this.setState({ allComments: data.allComments,name:'',email:'',commentData:'',website:'' })
                }
            })
        })


    }
    render() {
        const { commentData, name, email, website } = this.state
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">LifeStyle</a></li>
                        <li class="breadcrumb-item"><a href="#">Fitness</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Ulitimate Exreise to imporve black muscles</li>
                    </ol>
                </nav>

                <header style={{ fontSize: '35px', color: 'black' }}>
                    Increase your Endurance Through the Pilates Method
                </header>

                <i style={{ fontSize: '20px', color: 'silver' }}>The full member list of the Trump Leadership Council, a group of corporate
                influencers who guided the president’s anti-regulatory policy blitz.</i>

                <div class=" clearfix my-4">
                    <div class="float-left">
                        <img src="/src/img1.jpg" alt="..." class="rounded-circle" style={{ width: 30, height: 30 }} />
                        <span class="ml-1"><strong>Hinalgo Baker</strong></span>
                    </div>
                    <div class="float-right">
                        <span>2sf</span>
                    </div>
                </div>

                <div>
                    <button type="button" class="btn btn-primary ">f | Facebook</button>
                    <button type="button" class="btn btn-secondary mx-2">twitter</button>
                    <button type="button" class="btn btn-secondary">pinterest</button>
                    <button type="button" class="btn btn-secondary mx-2 d-md-none  d-xs-block">whatsap</button>
                </div>

                <img src="/src/img1.jpg" class="my-4 w-100" alt="..." />
                <div class="container-md px-md-4 px-0">
                    <p>
                        We woke reasonably late following the feast and free flowing wine the night before.
                        After gathering ourselves and
                        our packs, we headed down to our homestay family’s small dining room for breakfast.
                    </p>
                    <p>
                        <strong>
                            We woke reasonably late following the feast and free flowing wine the night before.
                            After gathering ourselves and our packs, we headed down to our
                            homestay family’s small dining room for breakfast.
                        </strong>
                    </p>
                    <p>
                        We were making our way to the Rila Mountains, where we were visiting the Rila Monastery
                        where we enjoyed scrambled eggs, toast, mekitsi, local jam and peppermint tea.
                    </p>
                </div>

                <figure class="figure my-2">
                    <img src="/src/img1.jpg" class="w-100" alt="aderal and flirting with blumia in an attempt to whittle herself" />
                    <figcaption class="figure-caption"><i>
                        aderal and flirting with blumia in an attempt to whittle herself
                        </i>
                    </figcaption>
                </figure>

                <p >
                    We wandered the site with busloads of other tourists, yet strangely the place did not
                    seem crowded. I’m not sure if it was the sheer size of the place, or whether the masses
                    congregated in one area and didn’t venture far
                    from the main church, but I didn’t feel overwhelmed by tourists in the monastery.
                </p>

                <div class="my-4" >
                    <img src="/src/img1.jpg" class="customImageGrid my-2"
                        alt="aderal and flirting with blumia in an attempt to whittle herself" />
                    <p class="customPara">
                        Headed over Lions Bridge and made our way to the Sofia Synagogue, then sheltered
                        in the Central Market Hall until the recurrent (but short-lived)
                        mid-afternoon rain passed.
                    </p>
                    <p class="customPara my-4">
                        Feeling refreshed after an espresso, we walked a short distance
                        to the small
                        but welcoming Banya Bashi Mosque, then descended into the ancient
                        Serdica complex.
                    </p>
                    <p class="customPara my-4">
                        We were exhausted after a long day of travel, so we
                        headed back to the hotel and crashed
                    </p>
                    <p class="customPara my-4 ">
                        I had low expectations about Sofia as a city, but after the walking
                        tour I absolutely
                        loved the place. This was an easy city to navigate, and it was a
                        beautiful city – despite
                        its ugly, staunch and stolid communist-built surrounds. Sofia has a very average facade as
                        you enter the city, but once you lose yourself in the old town area,
                        everything changes.
                    </p>
                </div>

                <hr />

                <button type="button" class="btn btn-primary ">f | Facebook</button>
                <button type="button" class="btn btn-secondary mx-2">twitter</button>
                <button type="button" class="btn btn-secondary">pinterest</button>
                <button type="button" class="btn btn-secondary mx-2 d-md-none  d-xs-block">whatsap</button>
                <hr />

                <div class="row my-4">
                    <div class="col-6">
                        <header class="text-secondary">
                            Previous Article
                        </header>
                        The Ultimate Exercises to Improve Back Muscles
                    </div>
                    <div class="col-6" style={{ textAlign: 'right' }}>
                        <header class="text-secondary">   Next Article</header>
                        The Ultimate Exercises to Improve Back Muscles
                    </div>
                </div>

                <div class="card my-4">
                    <div class="card-body row ">
                        <div class="col-md-4 col-12 text-center">
                            <img src="/src/img1.jpg" alt="..." style={{ maxWidth: 130 }} />
                        </div>
                        <div class="col-md-8 col-12 customAuthorPorfile">
                            <header class="py-2" ><b>Armin Vans</b></header>
                            <span><i>http://www.tagdiv.com</i></span>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum ac vehicula leo.
                            Donec urna lacus gravida ac vulputate sagittis tristique vitae lectus. Nullam rhoncus
                            tortor at dignissim vehicula.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="my-4">
                    <span class="p-2 text-white bg-dark" style={{ textTransform: 'uppercase' }}>
                        Related Articles
                    </span>
                    <hr style={{ marginTop: 5, height: 1 }} class="bg-dark"  ></hr>
                </div>

                <div class="row my-4">
                    <div class="col-md-4 col-12 row">
                        <div class="col-md-12 col-4">
                            <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                        </div>
                        <div class="col-md-12 col-8">
                            <header>  Increase your Endurance Through the Pilates Method</header>
                            <div class="d-block d-md-none" style={{ fontSize: '15px' }} >
                                <span style={{ fontWeight: 'bold' }}>
                                    Armin Vans
                                </span>
                                <span class="text-secondary">
                                    - August 7, 2019
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 row my-md-0 my-2">
                        <div class="col-md-12 col-4">
                            <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                        </div>
                        <div class="col-md-12 col-8">
                            <header>  Increase your Endurance Through the Pilates Method</header>
                            <div class="d-block d-md-none" style={{ fontSize: '15px' }} >
                                <span style={{ fontWeight: 'bold' }}>
                                    Armin Vans
                                </span>
                                <span class="text-secondary">
                                    - August 7, 2019
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 row">
                        <div class="col-md-12 col-4">
                            <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                        </div>
                        <div class="col-md-12 col-8">
                            <header>  Increase your Endurance Through the Pilates Method</header>
                            <div class="d-block d-md-none" style={{ fontSize: '15px' }} >
                                <span style={{ fontWeight: 'bold' }}>
                                    Armin Vans
                                </span>
                                <span class="text-secondary">
                                    - August 7, 2019
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr style={{ height: 1, backgroundColor: 'blue' }} />
                <div class="text-center">{this.state.allComments.length} Comments</div>

                {this.state.allComments.map((comment) => {
                    return <div class="row py-4">
                        <div class="col-2">
                            <img src="/src/img1.jpg" alt="..." style={{ width: '100%' }} />
                        </div>
                        <div class="col-10">
                            <h4 style={{ color: 'black' }}>{comment.Name}</h4>
                            <span>{comment.CommentText}</span>

                        </div>
                    </div>
                })}

                <div class="my-4">
                    <span class="p-2 text-dark" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Leave a reply
                    </span>
                </div>






                <form class="my-4">
                    <textarea class="form-control" rows="4" placeholder="Comment:"
                        value={commentData} onChange={(event) => this.setState({ commentData: event.target.value })}
                    />

                    <input type="text" class="form-control my-4" placeholder="Name:"
                        value={name} onChange={(event) => this.setState({ name: event.target.value })} />

                    <input type="email" class="form-control" placeholder="Email:"
                        value={email} onChange={(event) => this.setState({ email: event.target.value })} />
                    <input type="text" class="form-control my-4" placeholder="Website:"
                        value={website} onChange={(event) => this.setState({ website: event.target.value })}
                    />

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Save my name, email, and website in this browser for the next time I comment.
                       </label>
                    </div>

                    <button class="btn bg-dark text-white my-4"
                        onClick={this.saveComment}
                    >Post Comment</button>
                </form>

                {/* <div class="content">

                    <h3>Sticky Navigation Example</h3>
                    <p>The navbar will stick to the top when you reach its scroll position.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                </div> */}

            </div>
        )
    }
}
export default PostsContainer;