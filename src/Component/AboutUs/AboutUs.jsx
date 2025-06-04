import React from 'react'
import './AboutUs.scss'
import Navbar from '../Navbar/Navbar'
import ExploreBtn from '../Button/ExploreBtn'

const AboutUs = () => {
    return (
        <div className='AboutUsWrapper'>
            <Navbar bgColor={"#F3FFF4"} />
            <div className="our-story">
                <h3>Our Story</h3>
                <h2>Rooted in nature, <br />Crafted for you.</h2>
                <p>At Karikku, we believe the purest experiences come from nature. Born in the heart of Kerala,<br /> our journey began with a single purpose — to bring the authentic taste of fresh, tender<br /> coconut and traditional Kerala ingredients to the world.</p>

                <ExploreBtn buttonText='Read more about us' />

            </div>
            <div className="container-fluid">
                <div className="row vision" style={{ padding: "30px" }}>
                    <div className="col-lg-6">
                        <h3>Vision</h3>
                        <h2>Savor the spirit <br /> of Kerala's <br /> coconuts</h2>
                        <p>It all started under the shade of a coconut tree. What <br /> began as a passion project among friends has now <br />evolved into a purpose-driven brand committed to <br /> wellness, sustainability, and quality.</p>
                        <p>With every sip of our drinks and every drop of our oils, we <br /> take you back to the lush green landscapes of Kerala — <br /> fresh, vibrant, and full of life.</p>
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
                    <div className="col-lg-7">
                        <div className="mission-images">
                            <div className="mission-girl">
                                <img src="/Images/vision-child.svg" alt="" />
                            </div>
                            <div className="mission-bottle">
                                <img src="/Images/mission-bottle.svg" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h3>Mission</h3>
                        <h2>Come, Taste <br />  Kerala.</h2>
                        <p>Karikku isn’t just a brand — it’s an experience. Whether <br /> you’re sipping our tender coconut drink or using our virgin <br /> coconut oil, you’re connecting with something pure, <br /> purposeful, and proudly local.</p>
                        <ExploreBtn buttonText='Explore our products' />


                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="promise">
                    <div className="left">
                        <h2>Our promise</h2>
                        <p>At Karikku, our promises go beyond products — <br />they reflect our values. From purity and quality to <br />sustainability and care, we’re committed to <br /> delivering the best of nature with every drop.</p>
                    </div>
                    <img src="" alt="" />

                    <div className=" commitment-features">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="icon">
                                    <img src="./Images/promise-purity.svg" alt="" />
                                </div>
                                <div className="feature-head">
                                    <h3>Purity</h3>
                                </div>
                                <div className="feature-para">
                                    <p>
                                        Karikku's Tender Coconut Water is rich in electrolytes, providing effective hydration.
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
                                        Contains essential nutrients like vitamin C and potassium, supporting overall health
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
                                        Free from chemicals, additives, and preservatives, ensuring a natural product
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
                                        Karikku's coconut oil suitable for cooking, skincare, and haircare, offering multiple health benefits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs
