import { RiTwitterXLine } from 'react-icons/ri'
import Navbar from '../../common/Navbar/Navbar'
import './BlogDetailsPage.scss'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoLink } from 'react-icons/go'

const BlogDetailsPage = () => {
    return (
        <div className='BlogDetailsPageMainWrapper'>
            <Navbar/>
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
                        <div className="social-links"><FaFacebookF  className='social-icon' /></div>
                        <div className="social-links"><FaLinkedinIn  className='social-icon' /></div>
                        <div className="social-links"><GoLink  className='social-icon' /></div>
                    </div>
                </div>
                <div className="banner">
                    <img src="/Images/Blog-banner.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsPage
