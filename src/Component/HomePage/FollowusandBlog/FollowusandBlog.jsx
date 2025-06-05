import React from 'react'
import './FollowusandBlog.scss'
import ExploreBtn from '../../Theme/Button/ExploreBtn';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FollowusandBlog = () => {

  // Sample images - replace with your actual image URLs
  const images = [
    {
      id: 1,
      src: "./Images/follow-img1.png",
      alt: "Product 1"
    },
    {
      id: 2,
      src: "./Images/follow-img2.png",
      alt: "Product 2"
    },
    {
      id: 3,
      src: "./Images/Slide 4_3 - 4.png",
      alt: "Product 3"
    },
    {
      id: 4,
      src: "./Images/Slide 4_3 - 5.png",
      alt: "Product 4"
    },
    {
      id: 5,
      src: "./Images/follow-img-7.png",
      alt: "Product 5"
    },
    {
      id: 6,
      src: "./Images/follow-img-8.png",
      alt: "Product 6"
    }
  ];
  return (
    <div className='FollowusandBlogWrapper'>
      <div className="container-fluid">
        <div className="head-section">
          <h3>Follow us</h3>
          <h2>stay fresh with <br />karikku moments</h2>
          <p>At Karikku, our journey is deeply intertwined with the lush landscapes of Kerala, where coconuts flourish under nature's nurturing care. We are committed to delivering products that encapsulate the purity and richness of our homeland.</p>
          <button>Explore our process  <BsArrowUpRightCircleFill className='btn-icon' /> </button>
        </div>

        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee-content">
              {images.map((image) => (
                <div key={image.id} className="marquee-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate content for seamless loop */}
            <div className="marquee-content" aria-hidden="true">
              {images.map((image) => (
                <div key={`duplicate-${image.id}`} className="marquee-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom-head-section">
          <h2>Join the karikku family</h2>
          <div className="bottom-para">
            <p>Be part of our community celebrating the purity and <br className="d-none d-md-block" /> richness of Kerala's coconuts.</p>
            <div className="link">
              <a href=""><h5><img src="/Images/insta-icon.svg" alt="" /><span>KarikkuIndia</span></h5></a>

            </div>
          </div>
        </div>
        <div className="blogs-updates">
          <h2>Blogs and updates</h2>
          <div className="article-card-main">
            <div className="article-card">
              <div className="article-image">
                <img
                  src='/Images/coconut-still-life (2) 1.svg'
                  alt="Article thumbnail"
                />
              </div>

              <div className="article-content">
                <div className="article-meta">
                  <span className="category">Health</span>
                  <span className="separator">•</span>
                  <span className="type">Article</span>
                  <span className="separator">•</span>
                  <span className="date">March 4, 2024</span>
                </div>

                <h3 className="article-title">
                  ആരോഗ്യകരമാണ് എല്ലാം വലിയ സമതത്തെ ശുഭാമലാ ഒടുക്കമ്
                  കെട്ടിക്കാടു പാടുംികത്തുംം ആരോട്കരമായ ജിവിതത്തിലേക്കി
                </h3>

                <a className="read-more" href="">
                  Read more
                </a>
              </div>

              <div className="article-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
            <div className="bottom-border">

            </div>
          </div>

          <div className="article-card-main">
            <div className="article-card">
              <div className="article-image">
                <img
                  src='./Images/coconut-still-life 1.svg'
                  alt="Article thumbnail"
                />
              </div>

              <div className="article-content">
                <div className="article-meta">
                  <span className="category">Health</span>
                  <span className="separator">•</span>
                  <span className="type">Article</span>
                  <span className="separator">•</span>
                  <span className="date">March 4, 2024</span>
                </div>

                <h3 className="article-title">
                  ആരോഗ്യകരമാണ് എല്ലാം വലിയ സമതത്തെ ശുഭാമലാ ഒടുക്കമ്
                  കെട്ടിക്കാടു പാടുംികത്തുംം ആരോട്കരമായ ജിവിതത്തിലേക്കി
                </h3>

                <a className="read-more" href="">
                  Read more
                </a>
              </div>

              <div className="article-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
            <div className="bottom-border">

            </div>
          </div>

          <div className="article-card-main">
            <div className="article-card">
              <div className="article-image">
                <img
                  src='/Images/coconut-man-1.svg'
                  alt="Article thumbnail"
                />
              </div>

              <div className="article-content">
                <div className="article-meta">
                  <span className="category">Health</span>
                  <span className="separator">•</span>
                  <span className="type">Article</span>
                  <span className="separator">•</span>
                  <span className="date">March 4, 2024</span>
                </div>

                <h3 className="article-title">
                  ആരോഗ്യകരമാണ് എല്ലാം വലിയ സമതത്തെ ശുഭാമലാ ഒടുക്കമ്
                  കെട്ടിക്കാടു പാടുംികത്തുംം ആരോട്കരമായ ജിവിതത്തിലേക്കി
                </h3>

                <a className="read-more" href="">
                  Read more
                </a>
              </div>

              <div className="article-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
            <div className="bottom-border">

            </div>
            
              <div className="view">               <Link className='view-more'>View more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowusandBlog
