export const overAllData = [
  {
    extraData: "aesthetic.OverAll.Performance",
    primaryText: "Performance",
    subLayout: [
      {
        usability_key: "Page Load Speed",
        contentVal:
          "Loading Speed (less than 3 sec to prevent high bounce rate)",
      },
    ],
  },
  {
    primaryText: "Responsiveness",

    extraData: "aesthetic.OverAll.Responsiveness",
    subLayout: [
      {
        usability_key: "Mobile Responsive Design",
        contentVal: "Allow auto completion of search query ",
        child_val: "AUTOCOMPLETION",
      },
    ],
  },
  {
    primaryText: "Compliance ",
    subLayout: [
      {
        usability_key: "SSL Certificate",
        contentVal: "The URL begins with HTTPS instead of HTTP",
        child_val: "SSL_CERTIFICATE",
      },
      {
        usability_key: "PCI-DSS Compliance",
        contentVal:
          "If the site handles Credit cards (no 3rd party payment partner),  it should be PCI DSS compliant       ",
        child_val: "PCI_DSS_COMPLIANCE",
      },
      {
        usability_key: "GDPR Compliance",
        contentVal:
          "If operating  in the European Union (EU) or handle EU customer data, ensure compliance with GDPR regulations. Obtain user consent for data collection and processing.       ",
        child_val: "GDPR_COMPLIANCE",
      },
      {
        usability_key: "Taxes Compliance",
        contentVal:
          "calculate and collect the appropriate sales tax during the checkout process.       ",
        child_val: "TAX_COMPLIANCE",
      },
      {
        usability_key: "Cookie Consent",
        contentVal:
          "Provides clear information about the types of cookies used, their purpose, and obtains user consent before placing non-essential cookies      ",
        child_val: "COOKIE_CONSENT",
      },
    ],
  },
];

export const UsabilityData = [
  {
    primaryText: "Search**",
    subLayout: [
      {
        usability_key: "Search Query",
        contentVal: "Allow auto completion of search query ",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Search Query spelling errors",
        contentVal: "Handles spelling errors/typo in search query",
        child_val: "HANDLE_SPELLING_ERROR",
      },
      {
        usability_key: "Search Query Result page",
        contentVal:
          "No search result page is not a dead end  - has recommendations or synonym results",
        child_val: "NO_SEARCH_RESULT",
      },
      {
        usability_key: "Search Box",
        contentVal:
          "Clear and Prominent Search Bar (header or at a visible location) & Mobile Optimized",
        child_val: "PROMINENT_SEARCH_BAR",
      },
      {
        usability_key: "Search Result",
        contentVal: "Accurate and Relevant Results",
        child_val: "RELEVANT_RESULT",
      },
      {
        usability_key: "Search Result",
        contentVal:
          "Ensure that the search function can handle a high volume of queries without delays - Lazy Load, Pagination ",
        child_val: "PAGINATION",
      },
      {
        usability_key: "Search Result",
        contentVal: "Relevant Filter and Sorting available",
        child_val: "FILTER_RELEVANT",
      },
      {
        usability_key: "Search Result",
        contentVal: "Relevant Product Info and CTA on product tile",
        child_val: "RELEVANT_PRODUCT",
      },
    ],
  },
  {
    primaryText: "Navigation",
    subLayout: [
      {
        usability_key: "Breadcrumbs",
        contentVal:
          "Clear Hierarchy and Breadcrumb Navigation (trail of their location and allow easy navigation back to previous levels)",
        child_val: "BREADCRUMB",
      },
      {
        usability_key: "Category Hierarchy",
        contentVal: "Handles spelling errors/typo in search query",
        child_val: "CATEGORY_HIERARCHY",
      },
      {
        usability_key: "Sub Category",
        contentVal:
          "Should avoid too many nested categories.Aim for at least 10 products in the categories at the deepest level.No search result page is not a dead end  - has recommendations or synonym results",
        child_val: "SUB_CATEGORY",
      },
    ],
  },
  {
    primaryText: "Content",
    subLayout: [
      {
        usability_key: "Blogs",
        contentVal:
          "Sharable - engaging, educational content aligning to target segments interest and need",
        child_val: "BLOGS",
      },
      {
        usability_key: "Gift Guides/Curated Magazines",
        contentVal:
          "Themed gift guides or curated collections as magazine that feature a selection of products suited for specific occasions, target audiences, or interests. ",
        child_val: "GIFT_GUIDE",
      },
      {
        usability_key: "Quiz",
        contentVal: "",
        child_val: "QUIZ",
      },
      {
        usability_key: "Social Posts",
        contentVal:
          "Showcase social media posts from users on website with tagged products",
        child_val: "SOCIAL_POSTS",
      },

      {
        usability_key: "Videos",
        contentVal:
          "Sharable - engaging, educational content (tutorial) aligning to target segments interest and need",
        child_val: "VIDEOS",
      },
    ],
  },
  {
    primaryText: "Community Engagement",
    subLayout: [
      {
        usability_key: "Forum Conversations",
        contentVal: "Product mentions and conversations in discussion forum",
        child_val: "FORUM_ENGAGEMENT",
      },
      {
        usability_key: "Blog Comments",
        contentVal: "User engagement as Blog comments",
        child_val: "BLOG_COMMENTS",
      },
      {
        usability_key: "Influencer Collab",
        contentVal: "Influencer posts and product reviews",
        child_val: "INFLUENCER_COLLAB",
      },
      {
        usability_key: "Expert Content",
        contentVal: "Expert Content - Article/Video",
        child_val: "EXPERT_CONTENT",
      },

      {
        usability_key: "Expert Engagement",
        contentVal: "Expert Connect - Message/Live Video appointment",
        child_val: "EXPERT_ENGAGEMENT",
      },
    ],
  },

  {
    primaryText: "Product Listing",
    subLayout: [
      {
        usability_key: "Universal Atrributes 1",
        contentVal:
          "Name - Concise names that contain important and meaningful product characteristics Price Images - Photos large enough to identify a known item and show differences between items Variation - Indication of other available colors/size/style",
        child_val: "UNIVERSAL_ATTRIBUTES",
      },
      {
        usability_key: "Next Level Attributes ",
        contentVal:
          "Ratingsavailabilty Info Icons/Badges to mark as New, On Sale, Best Seller Alternate Images on hover",
        child_val: "NEXT_LVL_ATTRIBUTE",
      },
      {
        usability_key: "Contextual Image",
        contentVal:
          "The product photos match any user-selected filters or search query (in case of variation if user searched for red dress show the red variation image on the list page)",
        child_val: "CONTEXTUAL_IMAGE",
      },
      {
        usability_key: "CTAs",
        contentVal: "Add to Cart, Add to Wishlist, Quick View",
        child_val: "CTAS",
      },

      {
        usability_key: "Optimize Information density / Page Performance",
        contentVal:
          "The number of Products Listed on the page should not be too much resulting in clutter and slow page load. (Lazy load/Show more options)",
        child_val: "OPTIMIZE_INFORMATION",
      },
    ],
  },
  {
    primaryText: "Product Filter /Sorting ",
    subLayout: [
      {
        usability_key: "Category Specific Filters",
        contentVal: "Provide category specific filters",
        child_val: "PRODUCT_SORTING",
      },
      {
        usability_key: "Next Level Attributes ",
        contentVal:
          "Ratingsavailabilty Info Icons/Badges to mark as New, On Sale, Best Seller Alternate Images on hover",
        child_val: "ATTRIBUTE",
      },
      {
        usability_key: "Edit Filters",
        contentVal:
          "Allow user to view selected filters, change filters, remove filter",
        child_val: "EDIT_FILTER",
      },
      {
        usability_key: "Multi filter selection",
        contentVal: "Allow selection of multi filter values",
        child_val: "MULTI_FILTER",
      },
    ],
  },
];
export const EvolutionData = [
  {
    primaryText: "Product Detail Page",
    subLayout: [
      {
        usability_key: "Product Image",
        contentVal:
          "Multiple high-resolution product images that help users assess the product's details, texture, and color accurately for all variants ",
        child_val: "PRODUCT_IMAGE",
      },
      {
        usability_key: "Product Image",
        contentVal: "Zoom, 360 degree rotate,  ",
        child_val: "PRODUCT_IMAGE_ROTATE",
      },
      {
        usability_key: "Product Description",
        contentVal:
          "Product description in a concise and easily scannable format.Clear Shipping, Delivery and Return Information (Provide details on delivery methods, tracking options, and any restrictions or limitations) ",
        child_val: "PRODUCT_DESCRIPTION",
      },
      {
        usability_key: "Product Video /Supplement Content",
        contentVal:
          "There are supplement content that aids with the buying decision - eg Video, Guides, Instructions etc ",
        child_val: "PRODUCT_VIDEO",
      },
      {
        usability_key:
          "Product Reviews**** not significant for D2C Brands. For D2C customers rely on off-site review content for making their purchase decision.",
        contentVal: "Reviews & Ratings displayed for products ",
        child_val: "PRODUCT_REVIEW",
      },
      {
        usability_key: "Inventory Status",
        contentVal:
          "Clearly indicate the product's availability status, such as In Stock,Out of Stock, or Pre-Order. ",
        child_val: "INVENTORY_STATUS",
      },
      {
        usability_key: "Size Guide** (Specific to Category)",
        contentVal: " ",
        child_val: "SIZE_GUIDE",
      },
      {
        usability_key: "CTA",
        contentVal:
          "Add to Cart, Save for later (wishlist) is placed on the top fold ",
        child_val: "CTA",
      },
    ],
  },
  {
    primaryText: "Price",
    subLayout: [
      {
        usability_key: "Price ",
        contentVal:
          "Clear display of the price and offer price, locating them closely together ",
        child_val: "PRICE",
      },
    ],
  },
  {
    primaryText: "Promotions",
    subLayout: [
      {
        usability_key: "Promo display ",
        contentVal: "Display applied promotion/discount in the shopping cart",
        child_val: "PROMOTION",
      },
      {
        usability_key: "Savings Display ",
        contentVal:
          "Display savings and discount applied in the final Payment Page",
        child_val: "SAVING_DISPLAY",
      },
      {
        usability_key: "Promo display ",
        contentVal: "Display product specific promotions on PLP & PDP",
        child_val: "PROMO_DISPLAY",
      },
    ],
  },
];

export const purchaseData = [
  {
    primaryText: "Cart       ",
    subLayout: [
      {
        usability_key: "Cart visibility",
        contentVal: "Easy to access and prominently placed on the site",
      },
      {
        usability_key: "Edit Cart",
        contentVal: "Easy to update - remove, edit  quantity  ",
      },
      {
        usability_key: "Display Savings",
        contentVal: "Display savings for each item",
      },
      {
        usability_key: "Wishlist",
        contentVal: "Save it for later/wishlist option",
      },
      {
        usability_key: "Persistent Cart",
        contentVal:
          "Retains the items in the cart even after the user has left and is available across devices the next time user accesses the site. ",
      },
    ],
  },
  {
    primaryText: "Checkout    ",
    subLayout: [
      {
        usability_key: "Payment ",
        contentVal: "Allows Multiple payment methods",
      },
      {
        usability_key: "Optimized Checkout        ",
        contentVal: "Not more than 8 fields to enter",
      },
      {
        usability_key: "Optimized Checkout        ",
        contentVal: "Allows Zipcode detection (auto populates state & city)",
      },

      {
        usability_key: "Optimized Checkout        ",
        contentVal:
          "Implement inline validation to provide immediate feedback to users as they fill out the customer and address information forms",
      },

      {
        usability_key: "Optimized Checkout        ",
        contentVal: "Allows Guest Checkout",
      },

      {
        usability_key: "Optimized Checkout        ",
        contentVal: "Progress bar for checkout progress",
      },

      {
        usability_key: "Optimized Checkout        ",
        contentVal: "Progress bar for checkout progress",
      },
    ],
  },
  {
    primaryText: "My Account     ",
    subLayout: [
      {
        usability_key: "Account Creation        ",
        contentVal: "Remember me option for passsword",
      },
      {
        usability_key: "Account Creation        ",
        contentVal: "Ability to add/ edit Address, Password",
      },
      {
        usability_key: "Account Creation        ",
        contentVal: "Social login/sign up available",
      },
    ],
  },
];
export const PostPurchaseData = [
  {
    primaryText: "Customer Support    ",
    subLayout: [
      {
        usability_key: "24/7 Quick support/reach ",
        contentVal: "Digital first customer Service (Chat Bot /WhatsApp)",
      },
      {
        usability_key: "Self Support ",
        contentVal: "Relevant FAQs Available",
      },
    ],
  },
  {
    primaryText: "Order Tracking    ",
    subLayout: [
      {
        usability_key: "Tracking",
        contentVal:
          "Provides a single seamless order-tracking experience, without any “unavailable states”",
      },
    ],
  },
  {
    primaryText: "Returns & Refunds    ",
    subLayout: [
      {
        usability_key: "Status ",
        contentVal:
          "Timely and accurate updates on the progress of a return/refund",
      },
      {
        usability_key: "Information",
        contentVal: "Return and refund policy information easily accessible",
      },
    ],
  },
];
export const exprienceData = [
  {
    primaryText: "Inclusivity",
    subLayout: [
      {
        usability_key: "Accessibility ",
        contentVal: "Keyboard Navigation",
      },
      {
        usability_key: "Diversity in Offerings",
        contentVal: "Keyboard Navigation",
      },
      {
        usability_key: "Multi Currency/Multi Lingual",
        contentVal: "Keyboard Navigation",
      },
      {
        usability_key: "Branding",
        contentVal: "Diversity/Inclusive Imagery used across the site",
      },
    ],
  },
  {
    primaryText: "Social Consciousness",
    subLayout: [
      {
        usability_key: "Social Responsibilty Initiatives",
        contentVal:
          "Highlight your commitment to making a positive impact beyond your business operations.        ",
        child_val: "AUTOCOMPLETION",
      },
    ],
  },
  {
    primaryText: "Environmental Consciousness",
    subLayout: [
      {
        usability_key: "Sustainabiltle Products",
        contentVal: "",
        child_val: "SSL_CERTIFICATE",
      },
      {
        usability_key: "Carbon Foot Print Reduction Initiatives",
        contentVal:
          "Green Packaging : Eco friendly Packaging, Optimizing Shipping space and packaging size",
        child_val: "PCI_DSS_COMPLIANCE",
      },
      {
        usability_key: "GDPR Compliance",
        contentVal:
          "If operating  in the European Union (EU) or handle EU customer data, ensure compliance with GDPR regulations. Obtain user consent for data collection and processing.       ",
        child_val: "GDPR_COMPLIANCE",
      },
      {
        usability_key: "Sustainabilty Filters/Icons/Badges",
        contentVal: "Allow user to filter products for sustainabilty features",
        child_val: "TAX_COMPLIANCE",
      },
      {
        usability_key: "Supply Chain Transparency",
        contentVal:
          "Offers visibility into your supply chain by sharing information about the journey of your products from production to delivery ",
        child_val: "COOKIE_CONSENT",
      },
    ],
  },
  {
    primaryText: " Social Responsibilty Initiatives",
    subLayout: [
      {
        usability_key: "Goal Tracking/Progress Monitoring",
        contentVal:
          "Allows tracking and sharing progress (example - fitness level, Courses Taken etc) ",
        child_val: "AUTOCOMPLETION",
      },
    ],
  },
  {
    primaryText: "Belonging",
    subLayout: [
      {
        usability_key: "Brand Advocacy ",
        contentVal:
          "An active online forum where customers can connect with each other, ask questions, and share their experiences. ",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Customer Spotlight",
        contentVal:
          "An active online forum where customers can connect with each other, ask questions, and share their experiences. ",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Loyality Programs",
        contentVal:
          "An active online forum where customers can connect with each other, ask questions, and share their experiences. ",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Guest Blog",
        contentVal: "Allow guest blog content submissions",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Forum Moderation",
        contentVal: "Allow users to be forum moderators and group leaders",
        child_val: "AUTOCOMPLETION",
      },
    ],
  },
];

export const emotionalData = [
  {
    primaryText: "Love",
    subLayout: [
      {
        usability_key: "Recommendations",
        contentVal: "Complementary Product Recommendation on check out ",
      },
      {
        usability_key: "Communication",
        contentVal: "Email discount/reminder for abandoned cart        ",
      },
      {
        usability_key: "Promotion/Discounts",
        contentVal:
          "Sending discounts based on previous category/product interaction/ Wishlist        ",
      },
      {
        usability_key: "Website Content",
        contentVal:
          "Dynamic Banners, Content based on user segment, preferences, purchase history          ",
      },
      {
        usability_key: "Customer Support",
        contentVal: "Personalized Greetings - ChatBot, Live Support          ",
      },
    ],
  },
  {
    primaryText: "Trust",
    subLayout: [
      {
        usability_key: "Brand Authenticity",
        contentVal:
          "No Photoshooped Images/Product Images are closest to reality        ",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Brand Message",
        contentVal: "Brand Story communicated on Home Page",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Pricing Transparancy",
        contentVal: "Transparency in Pricing  (no hidden costs)",
        child_val: "AUTOCOMPLETION",
      },
      {
        usability_key: "Social Proof",
        contentVal:
          "Showcase customer reviews, ratings, and testimonials to provide social proof          ",
        child_val: "AUTOCOMPLETION",
      },
    ],
  },
  {
    primaryText: "Fun",
    subLayout: [
      {
        usability_key: "Data Privacy & Security",
        contentVal:
          " Clearly communicates data privacy and security measures to customers.        ",
        child_val: "SSL_CERTIFICATE",
      },
      {
        usability_key: "Interactivity",
        contentVal:
          "Interactive UX elements - Scratch cards, spin to win, Polls, Quiz",
        child_val: "PCI_DSS_COMPLIANCE",
      },
      {
        usability_key: "GDPR Compliance",
        contentVal:
          "If operating  in the European Union (EU) or handle EU customer data, ensure compliance with GDPR regulations. Obtain user consent for data collection and processing.       ",
        child_val: "GDPR_COMPLIANCE",
      },
      {
        usability_key: "Interactive Product Page",
        contentVal: "Virtual Try On, 360 degree view, Zoom ",
        child_val: "TAX_COMPLIANCE",
      },

      {
        usability_key: "Points/Rewards/Badges",
        contentVal:
          "Customer is rewarded for various actions - purchases, referrals, UGC, Social Share",
        child_val: "COOKIE_CONSENT",
      },
    ],
  },
  {
    primaryText: "Connected",
    subLayout: [
      {
        usability_key: "Brand Responsiveness",
        contentVal: "Real time response - Whatsapp, Email, Social Media, Chat",
      },
      {
        usability_key: "Community responsiveness",
        contentVal: "Forum comments, Notifications,",
      },
    ],
  },
];
