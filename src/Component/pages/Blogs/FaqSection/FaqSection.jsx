import { useState } from 'react';
import './FaqSection.scss'
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

const faqData = {
  'Sale FAQs': [
    {
      id: 1,
      question: "How do I place an order?",
      answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. Follow the step-by-step process to complete your purchase."
    },
    {
      id: 2,
      question: "Do you offer discounts or promotional codes?",
      answer: "Yes, we regularly offer discounts and promotional codes. Subscribe to our newsletter or follow our social media accounts to stay updated on current offers and seasonal sales."
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, digital wallets like Apple Pay and Google Pay, and bank transfers for your convenience."
    }
  ],
  'My Account': [
    {
      id: 4,
      question: "How do I create an account?",
      answer: "Click on 'Sign Up' or 'Register' on our homepage, fill in your details including email and password, and verify your email address to activate your account."
    },
    {
      id: 5,
      question: "I forgot my password. How can I reset it?",
      answer: "Click on 'Forgot Password' on the login page, enter your registered email address, and follow the instructions sent to your email to reset your password."
    },
    {
      id: 6,
      question: "How do I update my profile information?",
      answer: "Log into your account, go to 'My Profile' or 'Account Settings', and edit your personal information, address, or contact details as needed."
    }
  ],
  'Payments': [
    {
      id: 7,
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard SSL encryption and secure payment gateways to protect your financial information. We never store your complete card details on our servers."
    },
    {
      id: 8,
      question: "Can I save my payment methods for future purchases?",
      answer: "Yes, you can securely save your payment methods in your account for faster checkout. You can manage and remove saved payment methods anytime in your account settings."
    },
    {
      id: 9,
      question: "What should I do if my payment fails?",
      answer: "If your payment fails, please check your card details, ensure sufficient funds, and try again. If the issue persists, contact your bank or try an alternative payment method."
    }
  ],
  'Post Delivery Services': [
    {
      id: 10,
      question: "What if my product is damaged during delivery?",
      answer: "If you receive a damaged product, please contact our customer service within 48 hours with photos of the damage. We'll arrange for a replacement or full refund immediately."
    },
    {
      id: 11,
      question: "Do you provide installation services?",
      answer: "Yes, we offer professional installation services for select products. Installation availability and pricing vary by product and location. Contact us for more details."
    },
    {
      id: 12,
      question: "How do I leave a product review?",
      answer: "After receiving your order, you can leave a review by logging into your account, going to 'Order History', and clicking 'Write Review' next to the purchased product."
    }
  ],
  'My Order Queries': [
    {
      id: 13,
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and visiting 'My Orders', or use the tracking link sent to your email. Enter your order number for real-time updates."
    },
    {
      id: 14,
      question: "Can I modify my order after placing it?",
      answer: "Order modifications are possible within 1 hour of placement if the order hasn't been processed. Contact customer service immediately with your order number and required changes."
    },
    {
      id: 15,
      question: "What are your delivery timeframes?",
      answer: "Standard delivery takes 3-7 business days, express delivery takes 1-2 business days, and same-day delivery is available in select cities. Delivery times may vary based on location and product availability."
    }
  ],
  'Cancellations and Returns': [
    {
      id: 16,
      question: "How do I cancel my order?",
      answer: "You can cancel your order within 1 hour of placement through your account dashboard or by contacting customer service. Once the order is shipped, cancellation may not be possible."
    },
    {
      id: 17,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and returned with the receipt. Some items like personalized products may not be returnable."
    },
    {
      id: 18,
      question: "How long does it take to process refunds?",
      answer: "Refunds are processed within 5-7 business days after we receive your returned item. The refund will be credited to your original payment method."
    }
  ]
};

const FaqItem = ({ question, answer, isExpanded, onToggle }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onToggle}>
        <h3>{question}</h3>
        <button className={`expand-btn ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? <LuMinus size={20} /> : <FiPlus size={20} />}
        </button>
      </div>
      <div className={`faq-answer ${isExpanded ? 'expanded' : ''}`}>
        <div className="faq-answer-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState('Sale FAQs');
  const [expandedItems, setExpandedItems] = useState({});

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setExpandedItems({}); // Reset expanded items when category changes
  };

  const toggleItem = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const categories = Object.keys(faqData);

  return (
    <div className='FaqSectionMainWrapper'>
      <div className="faq-section">
        <img src="/Images/faq-mask.svg" className='mask-image' alt="" />
        <h1 className='faq-heading'>Frequently asked <br /> questions!</h1>
        <div className="categories-wrapper">
          {categories.map((category) => (
            <div
              key={category}
              className={`category-item ${activeCategory === category ? 'active-category' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="questian-section-wrapper">
          {faqData[activeCategory].map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isExpanded={expandedItems[item.id] || false}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqSection