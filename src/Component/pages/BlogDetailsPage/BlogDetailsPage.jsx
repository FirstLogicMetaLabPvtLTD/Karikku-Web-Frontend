import { RiTwitterXLine } from 'react-icons/ri'
import Navbar from '../../common/Navbar/Navbar'
import './BlogDetailsPage.scss'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoLink } from 'react-icons/go'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import ScrollToTopOnMount from '../../common/ScrollToTopOnMount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxDotFilled } from 'react-icons/rx'
import Footer from '../../common/Footer/Footer'

const BlogDetailsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const blogData = [
        {
            id: 1,
            image: "/Images/blog-img1.svg",
            category: "Health",
            title: "Why Karikku Tender Coconut Water is the Ultimate Natural Hydrator",
            description: "In a world full of sugary drinks and synthetic flavors, going back to nature's perfect hydration solution...",
            author: "Willard Harris",
            date: "11 May 2024",
            readTime: "10 Mins read"
        },
        {
            id: 2,
            image: "/Images/blog-img2.svg",
            category: "Health",
            title: "The Science Behind Natural Electrolytes in Coconut Water",
            description: "Discover how coconut water naturally replenishes your body's electrolyte balance better than sports drinks...",
            author: "Sarah Johnson",
            date: "10 May 2024",
            readTime: "8 Mins read"
        },
        {
            id: 3,
            image: "/Images/blog-img3.svg",
            category: "Wellness",
            title: "Post-Workout Recovery: Nature's Way vs Artificial Supplements",
            description: "Learn why natural coconut water outperforms artificial recovery drinks in post-exercise hydration...",
            author: "Mike Chen",
            date: "9 May 2024",
            readTime: "12 Mins read"
        },
        {
            id: 4,
            image: "/Images/blog-img1.svg",
            category: "Nutrition",
            title: "Essential Minerals Your Body Needs Daily",
            description: "Understanding the vital role of potassium, magnesium, and calcium in maintaining optimal health...",
            author: "Dr. Emily Watson",
            date: "8 May 2024",
            readTime: "15 Mins read"
        },
        {
            id: 5,
            image: "/Images/blog-img2.svg",
            category: "Lifestyle",
            title: "Sustainable Living: Choosing Natural Over Processed",
            description: "How making simple switches to natural products can transform your health and environmental impact...",
            author: "Green Living Team",
            date: "7 May 2024",
            readTime: "6 Mins read"
        },
        {
            id: 6,
            image: "/Images/blog-img3.svg",
            category: "Health",
            title: "Hydration Myths: What You Think You Know",
            description: "Debunking common misconceptions about hydration and revealing the truth about optimal fluid intake...",
            author: "Dr. Robert Kim",
            date: "6 May 2024",
            readTime: "9 Mins read"
        }
    ]
    // Calculate pagination
    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogs = blogData.slice(startIndex, endIndex);

    // Handle pagination
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <div className='BlogDetailsPageMainWrapper'>
            <ScrollToTopOnMount />
            <Navbar />
            <div className="blog-details-content">
                <h1 className='blog-detail-heading'>Why Karikku Tender Coconut Water Is the <br /> Hydration Your Body Deserves!</h1>
                <p className='blog-details-decription'>In a world full of sugary drinks and synthetic flavors, going back to nature is not just refreshing — <br />it’s necessary. That’s where Karikku Tender Coconut Water comes in.</p>
                <div className="auther-wrapper">
                    <div className="auther-left">
                        <div className="auther-image">
                            <img src="/Images/dummy-user.svg" alt="" />
                        </div>
                        <div className="auther-name">
                            <h6>Willard Harris</h6>
                            <p>Supply Chain Management Expert</p>
                        </div>
                    </div>
                    <div className="auther-right">
                        <div className="social-links"><RiTwitterXLine className='social-icon' /></div>
                        <div className="social-links"><FaFacebookF className='social-icon' /></div>
                        <div className="social-links"><FaLinkedinIn className='social-icon' /></div>
                        <div className="social-links"><GoLink className='social-icon' /></div>
                    </div>
                </div>
                <div className="banner">
                    <img src="/Images/Blog-banner.svg" alt="" />
                </div>
                <div className="blogs">
                    <div className="blog-content">
                        <h3 className="blog-heading">Straight from Kerala's Coconut Groves</h3>
                        <p className="blog-description">
                            At Karikku, we source our tender coconuts from the lush, sun-soaked groves of Kerala. These coconuts are harvested at just the right age — when the water inside is naturally sweet, full of electrolytes, and hydrating to the core.
                        </p>
                        <h3 className="blog-heading">Straight from Kerala's Coconut Groves</h3>
                        <p className="blog-description">
                            At Karikku, we source our tender coconuts from the lush, sun-soaked groves of Kerala. These coconuts are harvested at just the right age — when the water inside is naturally sweet, full of electrolytes, and hydrating to the core.
                        </p>
                        <div className="sub-banner">
                            <img src="/Images/blog-img2.svg" alt="" />
                        </div>
                    </div>

                    <div className="blog-content">
                        <h3 className="blog-heading">Straight from Kerala's Coconut Groves</h3>
                        <p className="blog-description">
                            At Karikku, we source our tender coconuts from the lush, sun-soaked groves of Kerala. These coconuts are harvested at just the right age — when the water inside is naturally sweet, full of electrolytes, and hydrating to the core.
                        </p>
                        <h3 className="blog-heading">Straight from Kerala's Coconut Groves</h3>
                        <p className="blog-description">
                            At Karikku, we source our tender coconuts from the lush, sun-soaked groves of Kerala. These coconuts are harvested at just the right age — when the water inside is naturally sweet, full of electrolytes, and hydrating to the core.
                        </p>
                        <div className="sub-banner">
                            <img src="/Images/blog-discussion.svg" alt="" />
                        </div>
                        <p>Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.</p>

                        <p>Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.</p>

                        <h3 className="blog-heading">Conclusion</h3>
                        <p className="blog-description">
                            Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.Unlike many packaged drinks, our coconut water is extracted and bottled in a sterile, temperature-controlled environment — without any added sugar, colors, or preservatives. What you get is exactly what nature intended: clean, crisp, and nutrient-rich hydration.
                        </p>
                    </div>
                </div>
            </div>
            {/* Related Topic */}
            <div className="related-topic">
                <div className="related-topic-header">
                    <h3>Related Topic</h3>
                    <div className="arrows-wrapper">
                        <div
                            className="left-arrow"
                            onClick={handlePrevPage}
                            style={{
                                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                opacity: currentPage === 1 ? 0.5 : 1
                            }}
                        >
                            <BsArrowLeftShort className='arrow' />
                        </div>
                        <div
                            className="right-arrow"
                            onClick={handleNextPage}
                            style={{
                                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                opacity: currentPage === totalPages ? 0.5 : 1
                            }}
                        >
                            <BsArrowRightShort className='arrow' />
                        </div>
                    </div>
                </div>

                 <div className="blog-cards-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            {currentBlogs.map((blog) => (
                                <div key={blog.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <Link to="/blog-details" className='blog-link'>
                                        <div className="blog-card">
                                            <div className="blog-image">
                                                <img src={blog.image} alt={blog.title} />
                                            </div>
                                            <div className="blog-content">
                                                <div className="category">{blog.category}</div>
                                                <h2 className="blog-title">{blog.title}</h2>
                                                <h4 className="blog-description">{blog.description}</h4>
                                                <h5 className="blogged-user">{blog.author}</h5>
                                                <div className="date-wrapper">
                                                    <div className='date'>{blog.date}</div>
                                                    <div><RxDotFilled className='dot-icon' /></div>
                                                    <div className='time'>{blog.readTime}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default BlogDetailsPage
