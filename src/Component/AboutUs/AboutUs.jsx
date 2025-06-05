import React from 'react'
import './AboutUs.scss'
import Navbar from '../Navbar/Navbar'
import ExploreBtn from '../Button/ExploreBtn'
import FollowusandBlog from '../HomePage/FollowusandBlog/FollowusandBlog'
import Footer from '../Footer/Footer'

const AboutUs = () => {
    return (
        <div className='AboutUsWrapper'>
            <Navbar bgColor={"#F3FFF4"} />
            <div className="our-story">
                <h3>Our Story</h3>
                <h2>Rooted in nature, <br className="d-none d-md-block"   />Crafted for you.</h2>
                <p>At Karikku, we believe the purest experiences come from nature. Born in the heart of Kerala,<br className="d-none d-md-block"  /> our journey began with a single purpose — to bring the authentic taste of fresh, tender<br className="d-none d-md-block"  /> coconut and traditional Kerala ingredients to the world.</p>

                <ExploreBtn buttonText='Read more about us' />

            </div>
            <div className="container-fluid">
                <div className="row vision" >
                    <div className="col-lg-6">
                        <h3>Vision</h3>
                        <h2>Savor the spirit <br className="d-none d-md-block"  /> of Kerala's <br className="d-none d-md-block"  /> coconuts</h2>
                        <p>It all started under the shade of a coconut tree. What <br className="d-none d-md-block"  /> began as a passion project among friends has now <br className="d-none d-md-block"  />evolved into a purpose-driven and committed to <br className="d-none d-md-block"  /> wellness, sustainability, and quality.</p>
                        <p>With every sip of our drinks and every drop of our oils, we <br className="d-none d-md-block"  /> take you back to the lush green landscapes of Kerala — <br className="d-none d-md-block"  /> fresh, vibrant, and full of life.</p>
                        <ExploreBtn buttonText='Explore our products' />
                    </div>
                    <div className="col-lg-6 right-vision">
                        <div className="images">
                            <div className="imge-individual"><img className='nature' src="/Images/vision-nature.svg" alt="" /></div>
                            <div className="imge-individual2"><img className='coconut' src="/Images/vision-coconut.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" >
                <div className="row mission">
                    <div className="col-lg-7 od-1">
                        <div className="mission-images">
                            <div className="mission-girl">
                                <img src="/Images/vision-child.svg" alt="" />
                            </div>
                            <div className="mission-bottle">
                                <img src="/Images/mission-bottle.svg" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 od-2">
                        <h3>Mission</h3>
                        <h2>Come, Taste <br className="d-none d-md-block"  />  Kerala.</h2>
                        <p>Karikku isn’t just a brand and — it’s an experience. Whether <br className="d-none d-md-block"  /> you’re sipping our tender coconut drink or using our virgin <br className="d-none d-md-block"  /> coconut oil, you’re connecting with something pure, <br className="d-none d-md-block"  /> purposeful, and proudly local.</p>
                        <ExploreBtn buttonText='Explore our products' />


                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="promise">
                    <div className="left">
                        <h2>Our promise</h2>
                        <p>At Karikku, our promises go beyond products — <br className="d-none d-md-block"  />they reflect our values. From purity and quality to <br className="d-none d-md-block"  />sustainability and care, we’re committed to <br className="d-none d-md-block"  /> delivering the best of nature with every drop.</p>
                    </div>
                    <img className='promise-bottle' src="/Images/promise-bottles.svg" alt="" />

                    <div className=" commitment-features">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="icon">
                                    <img src="/Images/promise-purity.svg" alt="" />
                                </div>
                                <div className="feature-head">
                                    <h3>Purity</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                        We use only the finest natural ingredients — no additives, no shortcuts. Just the real taste of nature.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className=" icon-leaf">
                                    <img src="./Images/promise-leaf.svg" alt="" />
                                </div>
                                <div className="feature-head">
                                    <h3>Hygienic Processes</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                        Every product is a reflection of Kerala’s rich heritage and natural abundance.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="icon">
                                    <img src="./Images/promise-ball.svg" alt="" />
                                </div>
                                <div className="feature-head">
                                    <h3>Sustainable Choices</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                        We’re committed to responsible sourcing, eco-friendly packaging, and supporting local farmers.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="icon">
                                    <img src="./Images/promise-call.svg" alt="" />
                                </div>
                                <div className="feature-head">
                                    <h3>Quality Service</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                       From prompt support to flexible ordering, we’re here to make your experience smooth and satisfying.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FollowusandBlog/>
            <Footer/>

        </div>
    )
}

export default AboutUs
