require('dotenv').config();
const mongoose = require('mongoose');
const Company = require('./models/Company');

const mongoURI = process.env.MONGODB_URI;

const companies = [
  { name: "Infosys", industry: "IT Services", location: "Bangalore, India", size: "Large", founded: 1981, description: "A global leader in consulting, IT services, and digital transformation." },
  { name: "Wipro", industry: "IT Services", location: "Bangalore, India", size: "Large", founded: 1945, description: "Provides IT, consulting, and business process services across the globe." },
  { name: "TCS", industry: "IT Services", location: "Mumbai, India", size: "Large", founded: 1968, description: "A major global IT services and consulting company." },
  { name: "HCL Technologies", industry: "IT Services", location: "Noida, India", size: "Large", founded: 1976, description: "Specializes in software services, digital operations, and engineering." },
  { name: "Tech Mahindra", industry: "IT Services", location: "Pune, India", size: "Large", founded: 1986, description: "Delivers digital transformation, consulting, and business reengineering services." },
  { name: "Mindtree", industry: "IT Services", location: "Bangalore, India", size: "Medium", founded: 1999, description: "Focused on digital transformation and cloud services." },
  { name: "Persistent Systems", industry: "Software", location: "Pune, India", size: "Medium", founded: 1990, description: "Provides product engineering and digital transformation solutions." },
  { name: "L&T Technology Services", industry: "Engineering Services", location: "Vadodara, India", size: "Large", founded: 2012, description: "Engineering and R&D services for global enterprises." },
  { name: "Zoho Corporation", industry: "SaaS", location: "Chennai, India", size: "Medium", founded: 1996, description: "Builds cloud-based business software like CRM, email, and ERP." },
  { name: "Freshworks", industry: "SaaS", location: "Chennai, India", size: "Medium", founded: 2010, description: "Creates SaaS products for customer support, sales, and marketing." },
  { name: "Paytm", industry: "Fintech", location: "Noida, India", size: "Large", founded: 2010, description: "Mobile-first digital payments and financial services platform." },
  { name: "Razorpay", industry: "Fintech", location: "Bangalore, India", size: "Medium", founded: 2014, description: "Online payments platform for businesses with API-based integrations." },
  { name: "Flipkart", industry: "E-commerce", location: "Bangalore, India", size: "Large", founded: 2007, description: "One of India's largest e-commerce marketplace platforms." },
  { name: "PhonePe", industry: "Fintech", location: "Bangalore, India", size: "Large", founded: 2015, description: "Digital payments platform built on UPI." },
  { name: "Swiggy", industry: "Food Delivery", location: "Bangalore, India", size: "Large", founded: 2014, description: "Food delivery and quick commerce platform." },
  { name: "Zomato", industry: "Food Delivery", location: "Gurugram, India", size: "Large", founded: 2008, description: "Restaurant discovery and food delivery platform." },
  { name: "Byju's", industry: "Edtech", location: "Bangalore, India", size: "Large", founded: 2011, description: "Digital learning app offering personalized learning programs." },
  { name: "Unacademy", industry: "Edtech", location: "Bangalore, India", size: "Medium", founded: 2015, description: "Online learning platform with courses for competitive exams." },
  { name: "Atlassian", industry: "Software", location: "Sydney, Australia", size: "Medium", founded: 2002, description: "Builds software like Jira, Confluence, and Trello." },
  { name: "HubSpot", industry: "SaaS", location: "Massachusetts, USA", size: "Medium", founded: 2006, description: "CRM and marketing automation software provider." },
  { name: "Snowflake", industry: "Cloud Data Platform", location: "Montana, USA", size: "Medium", founded: 2012, description: "Cloud-based data warehousing and analytics provider." },
  { name: "Splunk", industry: "Data Analytics", location: "California, USA", size: "Medium", founded: 2003, description: "Platform for searching, monitoring, and analyzing machine data." },
  { name: "Datadog", industry: "Monitoring & Security", location: "New York, USA", size: "Medium", founded: 2010, description: "Cloud application monitoring and security platform." },
  { name: "Twilio", industry: "Cloud Communications", location: "California, USA", size: "Medium", founded: 2008, description: "Provides APIs for SMS, voice, video, and chat communication." },
  { name: "Slack Technologies", industry: "Collaboration Software", location: "California, USA", size: "Medium", founded: 2009, description: "Team communication and collaboration platform." },
  { name: "Zendesk", industry: "Customer Support Software", location: "San Francisco, USA", size: "Medium", founded: 2007, description: "Builds customer service and support ticketing software." },
  { name: "Shopify", industry: "E-commerce SaaS", location: "Ottawa, Canada", size: "Medium", founded: 2006, description: "Online store and e-commerce platform for businesses." },
  { name: "Canva", industry: "Design Software", location: "Sydney, Australia", size: "Medium", founded: 2012, description: "Online design platform for graphics, presentations, and videos." },
  { name: "AirTable", industry: "No-code Database", location: "California, USA", size: "Medium", founded: 2012, description: "Flexible, spreadsheet-style no-code platform for teams." },
  { name: "Notion", industry: "Productivity Software", location: "San Francisco, USA", size: "Medium", founded: 2013, description: "All-in-one workspace for notes, docs, tasks, and databases." }
];

async function seedDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB for seeding");

    await Company.deleteMany({});
    await Company.insertMany(companies);

    console.log("Company data seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding data:", err);
  }
}

seedDB();
