export const PORTFOLIO_DATA = {
  hero: {
    title: "Senior Product Designer",
    subtitle: "10+ Years Experience | Singapore",
    specialization: "AI-Augmented Design & Vibe Coding",
    bio: "Architecting high-impact digital ecosystems at the intersection of human intent and AI precision. Leveraging 10 years of UI/UX expertise in Singapore to turn complex business logic into intuitive, high-performance products.",
    vibeCoding: "Using tools like Figma AI, Stitch, and Framer, along with Cursor and Gemini 3, to accelerate design workflows and rapidly prototype ideas."
  },
  projects: {
    uxCaseStudies: [
      {
        id: "wizlah",
        title: "Wizlah Return & Refund",
        role: "Main UX Designer",
        heroImage: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wizlahreturn.jpg",
        cardImage: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wizlahreturn.jpg",
        challenge: "Users found the existing return and refund process to be cumbersome, leading to high customer service call volumes and dissatisfaction.",
        solution: "A streamlined, user-friendly return and refund interface that reduces complexity and encourages self-service through a human-centered design approach.",
        impact: "Reduced customer service call volumes and increased customer satisfaction by simplifying the return process and providing real-time status updates.",
        metrics: [
          "Reduced Call Volume",
          "Increased Self-Service",
          "Faster Refund Processing"
        ],
        details: [
          {
            title: "About Project",
            content: "This case study details the development of a new return and refund process for an interior design e-commerce platform, aimed at simplifying the user experience and increasing customer satisfaction."
          },
          {
            title: "My Role",
            content: "Main UX Designer responsible for the entire design lifecycle, including Design Strategy, Problem Solution, Information Architecture, Empathy Mapping, User Flow, Wireframes, Competitive Analysis, User Research, User Persona, UI Design, Prototyping, and Usability Testing."
          },
          {
            title: "Design Process",
            content: "Employed a human-centered design approach following the Design Thinking Process: Discover, Define, Ideate, Design, and Test to ensure the solution directly addresses user needs and pain points."
          }
        ],
        caseStudy: [
          {
            type: "text-grid",
            title: "Qualitative Research",
            subtitle: "Understanding the user experience",
            content: "Our goal was to understand the user experience, identify pain points, and gather insights that can inform improvements. We focused on identifying why users found the existing process cumbersome and what they expected from a modern return system."
          },
          {
            type: "insight-cards",
            title: "Interview Insights",
            items: [
              { label: "Streamlined Process", text: "Frequent returns highlight the need for a streamlined process to handle inaccurate descriptions and defects efficiently." },
              { label: "Clear Policies", text: "Users demand clear, accessible return policies and prefer a simple, efficient return process with quick refunds." },
              { label: "Real-time Updates", text: "Real-time status updates and multiple initiation methods are crucial to avoid user frustration and anxiety." }
            ]
          },
          {
            type: "image-text",
            title: "Competitive Analysis",
            content: "Reviewed leading competitors to benchmark best practices and identify gaps. This helped in creating a user-friendly return and refund flow that enhances satisfaction and retention.",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wizlahappimg1.jpg"
          },
          {
            type: "persona",
            title: "User Persona",
            name: "Amanda Zhou",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/personawizlah.jpg",
            bio: "A 32-year-old Software Developer living in Singapore. She is married with one child and values efficiency and clear communication in her busy lifestyle.",
            goals: ["Fast, hassle-free online return process", "Clear, upfront return policies", "Real-time updates on status"],
            needs: [
              "Simple initiation methods",
              "Clear instructions to avoid frustration",
              "Quick and transparent refund processing"
            ],
            motivations: [
              "Saving time for family and work",
              "Peace of mind through reassurance",
              "Trust in the platform's reliability"
            ],
            pains: ["Cumbersome manual processes", "Lack of transparency in status", "High effort required to initiate returns"]
          },
          {
            type: "full-image",
            title: "User Journey Map",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/userjourneymapwzl.jpg",
            caption: "Detailed maps illustrated each step of the user's journey from decision-making to final resolution, highlighting emotional highs and lows."
          },
          {
            type: "full-image",
            title: "User Flow",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/returnrefund-flow.jpg",
            caption: "Developed a simplified flow with fewer steps and clearer options, designed to efficiently guide users through the return process."
          },
          {
            type: "image-grid",
            title: "High Fidelity Wireframes",
            images: [
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlprototype1.jpg",
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlprototype2.jpg",
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlprototype3.jpg",
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlprototype5.jpg"
            ]
          },
          {
            type: "text-grid",
            title: "Usability Testing",
            subtitle: "Iterating based on user feedback",
            content: "Initially, we combined return and refund options at the order level, which proved confusing. Based on feedback, we revised the design to include separate CTAs for each item, significantly improving clarity and ease of use."
          }
        ]
      },
      {
        id: "wizmarketplace",
        title: "WizMarketplace Admin",
        role: "Product Designer",
        heroImage: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wizlahmktplc1.jpg",
        cardImage: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wizlahmktplc1.jpg",
        challenge: "High cognitive load for vendors managing complex inventories and multi-channel orders. The legacy system was slow, non-responsive, and required extensive manual data entry.",
        solution: "Architected a data-dense, intuitive dashboard focused on operational efficiency and real-time analytics. Implemented an AI-driven inventory suggestion engine to help vendors optimize their stock levels.",
        impact: "Improved data density for admin efficiency, reducing vendor onboarding time by 60%. Vendors reported a 45% reduction in support tickets related to order management.",
        metrics: [
          "60% Faster Onboarding",
          "45% Reduction in Support Tickets",
          "Real-time Inventory Sync"
        ],
        details: [
          {
            title: "The Challenge",
            content: "Vendors were overwhelmed by the volume of data. The primary goal was to reduce 'time-to-action' for order fulfillment and inventory updates."
          },
          {
            title: "Design Solution",
            content: "I introduced a modular widget-based layout that allowed vendors to customize their workspace. We prioritized 'Critical Actions' in a persistent sidebar, ensuring that urgent orders were never missed."
          },
          {
            title: "Business Value",
            content: "By streamlining the backend, we reduced the operational overhead for the platform owner, allowing them to scale from 30 to 200+ vendors without increasing support staff."
          }
        ],
        caseStudy: [
          {
            type: "text-grid",
            title: "Information Architecture",
            subtitle: "Simplifying complex vendor workflows",
            content: "The legacy system had deep, nested menus that made simple tasks like 'Update Stock' take 5-7 clicks. We flattened the architecture, bringing high-frequency actions to the surface."
          },
          {
            type: "insight-cards",
            title: "Admin Pain Points",
            items: [
              { label: "Data Silos", text: "Inventory and orders were managed in separate modules, requiring constant tab-switching." },
              { label: "Slow Onboarding", text: "New vendors took 2 weeks to learn the system due to its non-intuitive interface." },
              { label: "Manual Reporting", text: "Generating sales reports required exporting CSVs and manual Excel processing." }
            ]
          },
          {
            type: "image-text",
            title: "Dashboard Optimization",
            content: "We designed a 'Command Center' dashboard that provides an at-a-glance view of pending orders, low-stock alerts, and daily revenue. The use of high-density data tables with inline editing significantly reduced task completion time.",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/Refunddashboard.jpg"
          },
          {
            type: "persona",
            title: "User Persona",
            name: "David, The Operations Manager",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/persona2.jpg",
            bio: "David manages a mid-sized furniture warehouse. He handles 100+ SKUs and needs to ensure that stock levels are accurate across Wizlah and other sales channels to avoid over-selling.",
            goals: ["Minimize order processing time", "Maintain accurate inventory", "Generate quick performance reports"],
            needs: [
              "Streamlined return process.",
              "Automated customer updates.",
              "User-friendly tools."
            ],
            motivations: [
              "Increase efficiency.",
              "Improve workflows.",
              "Enhance transparency."
            ],
            pains: ["System lag during peak hours", "Complex bulk upload process", "Lack of mobile-responsive admin tools"]
          },
          {
            type: "full-image",
            title: "User Journey Map",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzladminJourneyMapS.jpg",
            caption: "Comprehensive diagrams outlined every phase of the user’s experience"
          },
          {
            type: "image-grid",
            title: "High Fidelity Admin UI",
            columns: 2,
            aspect: "4/3",
            images: [
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlRefundadmin1.png",
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlRefundadmin2.png",
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlRefundadmin3.png",
              "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/wzlRefundadmin4.png"
            ]
          },
          {
            type: "text-grid",
            title: "Impact & Scalability",
            subtitle: "Supporting 10x vendor growth",
            content: "The new admin portal didn't just look better—it performed better. By optimizing the database queries and the UI rendering, we achieved a 3x speed improvement, allowing the platform to scale to 300+ active vendors seamlessly."
          }
        ]
      },
      {
        id: "sgbustimes",
        title: "SG Bus Times",
        subtitle: "Redefining the Singapore Commute: A minimalist real-time transit solution.",
        role: "lead UI/UX Designer",
        heroImage: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/sgbustime2.jpg",
        cardImage: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/sgbustime2.jpg",
        challenge: "Transforming fragmented LTA transit data into a 'Zero-Noise' navigation tool. Reduced user's cognitive load by 40%, ensuring critical commute info remains legible even in high-stress, outdoor environments.",
        solution: "Redefining the Singapore Commute: A minimalist real-time transit solution that prioritizes speed and clarity above all else.",
        impact: "By eliminating ad-heavy layouts and implementing a context-aware UI, we achieved 0% ad intrusion and a sub-3s time-to-value for daily commuters.",
        metrics: [
          "0% Ad Intrusion",
          "<3s Time-to-Value",
          "100% Real-time LTA Sync"
        ],
        details: [
          {
            title: "Smart Proximity",
            content: "Instant stop detection via geofencing ensures the most relevant information is always at the top of your screen."
          },
          {
            title: "Live Motion Tracking",
            content: "Real-time coordinates with occupancy color coding allows users to make informed decisions about their commute comfort."
          },
          {
            title: "Full Route Insights",
            content: "Vertical linear progress tracker with MRT interchange highlights provides a clear, scannable overview of the entire route."
          }
        ],
        caseStudy: [
          {
            type: "text-grid",
            title: "OVERVIEW",
            subtitle: "Redefining the Singapore Commute",
            content: "SG Bus Times was born from the frustration of navigating ad-heavy, slow-loading transit apps. The goal was to create a 'Zero-Noise' tool that delivers critical information in under 3 seconds."
          },
          {
            type: "image-text",
            title: "FEATURE A",
            subtitle: "Smart Proximity",
            content: "Smart Proximity - Instant stop detection via geofencing ensures the most relevant information is always at the top of your screen.",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/sgbustimesimg1.jpg"
          },
          {
            type: "image-text",
            title: "FEATURE B",
            subtitle: "Live Motion Tracking",
            content: "Live Motion Tracking - Real-time coordinates with occupancy color coding allows users to make informed decisions about their commute comfort.",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/sgbustimesimg2.jpg"
          },
          {
            type: "image-text",
            title: "FEATURE C",
            subtitle: "Full Route Insights",
            content: "Full Route Insights - Vertical linear progress tracker with MRT interchange highlights provides a clear, scannable overview of the entire route.",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/sgbustimesimg3.jpg"
          },
          {
            type: "persona",
            title: "User Persona",
            name: "Chloe, The Busy Professional",
            image: "https://raw.githubusercontent.com/shuangshuang666/uiux-portfolio/main/public/assets/persona5.jpg",
            bio: "A 28-year-old account manager who values efficiency. She needs instant, accurate arrival times to manage her tight schedule and reduce commute-related stress.",
            goals: ["Instant arrival times", "Accurate bus tracking", "Minimalist interface"],
            pains: ["Ad-heavy layouts", "Inaccurate data", "High cognitive load"]
          },
          {
            type: "full-image",
            title: "The Interface",
            image: "https://github.com/shuangshuang666/uiux-portfolio/raw/main/public/assets/Green%20Modern%20Technology%20Phone%20Hacks%20YouTube%20Intro.mp4",
            caption: "Clean interface optimized for high-stress transit environments."
          }
        ]
      }
    ],
    uiPortfolio: {
      title: "Visual Craft Portfolio",
      description: "A collection of high-fidelity website designs focusing on typography, layout precision, and interactive storytelling.",
      categories: ["E-commerce", "SaaS", "Lifestyle"]
    }
  },
  about: {
    experience: "10 Years in Singapore",
    philosophy: "I focus on simplifying complex workflows and creating intuitive, user-centered experiences. Recently, I've integrated AI-assisted workflows and lightweight coding (vibe coding) to improve speed and iteration — while keeping design thinking at the core.",
    skills: [
      "Product Strategy",
      "UI/UX Design",
      "AI-Augmented Workflows",
      "Video Production & Motion Design",
      "Rapid Prototyping",
      "Design Systems"
    ]
  },
  process: [
    {
      step: "01",
      title: "Discovery & Intent",
      description: "Deep dive into business logic and user pain points. I architect the strategic foundation before a single pixel is moved.",
      tools: ["Stakeholder Interviews", "User Research", "Strategic Mapping"]
    },
    {
      step: "02",
      title: "AI-Augmented Ideation",
      description: "Leveraging LLMs to explore structural possibilities and generative tools to define the visual 'vibe' at scale.",
      tools: ["Midjourney", "ChatGPT", "Moodboarding"]
    },
    {
      step: "03",
      title: "Vibe-to-Prototype",
      description: "Rapidly turning intent into functional, high-fidelity prototypes. I bridge the gap between design and live code.",
      tools: ["v0.dev", "Cursor", "Figma"]
    },
    {
      step: "04",
      title: "Refinement & Precision",
      description: "Fine-tuning visual craft, micro-interactions, and accessibility to ensure a world-class user experience.",
      tools: ["Micro-Interaction Design", "HTML & CSS", "Responsive Layouts"]
    }
  ]
};
