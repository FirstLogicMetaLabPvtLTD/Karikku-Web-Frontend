import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx'
import Navbar from '../../common/Navbar/Navbar'
import './Blogs.scss'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import FaqSection from './FaqSection/FaqSection';

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Extended blog data array with more entries
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
        },
        {
            id: 7,
            image: "/Images/blog-img1.svg",
            category: "Fitness",
            title: "Pre-Workout Nutrition: Fueling Your Body Right",
            description: "The importance of proper hydration and nutrition before exercise for maximum performance...",
            author: "Fitness Expert Lisa",
            date: "5 May 2024",
            readTime: "11 Mins read"
        },
        {
            id: 8,
            image: "/Images/blog-img2.svg",
            category: "Wellness",
            title: "Morning Rituals for Better Health",
            description: "Start your day right with these simple, natural habits that boost energy and wellbeing...",
            author: "Wellness Coach Tom",
            date: "4 May 2024",
            readTime: "7 Mins read"
        },
        {
            id: 9,
            image: "/Images/blog-img3.svg",
            category: "Nutrition",
            title: "The Truth About Sugar in Your Drinks",
            description: "Hidden sugars in popular beverages and why natural alternatives are the healthier choice...",
            author: "Nutritionist Amy",
            date: "3 May 2024",
            readTime: "13 Mins read"
        },
        {
            id: 10,
            image: "/Images/blog-img1.svg",
            category: "Health",
            title: "Coconut Water vs Sports Drinks: The Ultimate Comparison",
            description: "A detailed analysis of why coconut water is nature's superior sports drink alternative...",
            author: "Sports Scientist John",
            date: "2 May 2024",
            readTime: "14 Mins read"
        },
        {
            id: 11,
            image: "/Images/blog-img2.svg",
            category: "Lifestyle",
            title: "Building Healthy Habits That Last",
            description: "Practical strategies for incorporating healthy choices into your daily routine sustainably...",
            author: "Habit Coach Maria",
            date: "1 May 2024",
            readTime: "10 Mins read"
        },
        {
            id: 12,
            image: "/Images/blog-img3.svg",
            category: "Wellness",
            title: "Stress Management Through Natural Remedies",
            description: "How natural ingredients and mindful practices can help you manage stress more effectively...",
            author: "Wellness Expert David",
            date: "30 Apr 2024",
            readTime: "12 Mins read"
        },
        {
            id: 13,
            image: "/Images/blog-img1.svg",
            category: "Health",
            title: "The Role of Hydration in Mental Clarity",
            description: "Exploring the connection between proper hydration and cognitive function, focus, and mental performance...",
            author: "Dr. Brain Health",
            date: "29 Apr 2024",
            readTime: "8 Mins read"
        },
        {
            id: 14,
            image: "/Images/blog-img2.svg",
            category: "Nutrition",
            title: "Micronutrients: Small but Mighty",
            description: "Understanding how trace minerals and vitamins in natural foods support overall health...",
            author: "Nutrition Scientist",
            date: "28 Apr 2024",
            readTime: "11 Mins read"
        },
        {
            id: 15,
            image: "/Images/blog-img3.svg",
            category: "Fitness",
            title: "Recovery Nutrition for Athletes",
            description: "Optimal post-exercise nutrition strategies using natural ingredients for faster recovery...",
            author: "Sports Nutritionist",
            date: "27 Apr 2024",
            readTime: "16 Mins read"
        }
    ];

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
        <div className='BlogsMainWrapper'>
            <Navbar />
            <div className="blogs-content">
                <div className='blog-header'>
                    <h1>Our Blogs</h1>
                </div>
                <div className="blog-cards-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            {currentBlogs.map((blog) => (
                                <div key={blog.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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
                <FaqSection />

        </div>
    )
}

export default Blogs