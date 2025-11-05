const http = require('http');
const PORT = 3000;

// Styles for the website
const css = `
    body {
        font-family: 'Segoe UI', Arial, sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f5;
        color: #333;
    }
    
    nav {
        background: #2c3e50;
        padding: 15px 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    nav ul {
        list-style: none;
        display: flex;
        gap: 40px;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    
    nav a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        transition: color 0.3s;
    }
    
    nav a:hover {
        color: #3498db;
    }
    
    .container {
        max-width: 1000px;
        margin: 40px auto;
        padding: 40px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    h1 {
        color: #2c3e50;
        font-size: 36px;
        margin-bottom: 20px;
    }
    
    h2 {
        color: #2c3e50;
        margin-top: 30px;
        margin-bottom: 15px;
    }
    
    h3 {
        color: #3498db;
        margin-bottom: 10px;
    }
    
    p {
        line-height: 1.6;
        margin-bottom: 15px;
        font-size: 16px;
    }
    
    ul {
        margin-left: 30px;
        line-height: 1.8;
    }
    
    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
        margin-top: 30px;
    }
    
    .box {
        background: #ecf0f1;
        padding: 25px;
        border-radius: 8px;
        border-left: 4px solid #3498db;
        transition: transform 0.3s;
    }
    
    .box:hover {
        transform: translateY(-5px);
    }
    
    .contact-info {
        background: #ecf0f1;
        padding: 25px;
        border-radius: 8px;
        margin: 30px 0;
    }
    
    form {
        margin-top: 30px;
        background: #f9f9f9;
        padding: 30px;
        border-radius: 8px;
    }
    
    input, textarea {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 15px;
        font-family: inherit;
    }
    
    input:focus, textarea:focus {
        outline: none;
        border-color: #3498db;
    }
    
    button {
        background: #27ae60;
        color: white;
        padding: 12px 35px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s;
    }
    
    button:hover {
        background: #229954;
    }
    
    footer {
        background: #2c3e50;
        color: white;
        text-align: center;
        padding: 20px;
        margin-top: 40px;
    }
    
    .error-page {
        text-align: center;
        padding: 100px 20px;
        min-height: 80vh;
    }
    
    .error-page h1 {
        font-size: 100px;
        color: #e74c3c;
        margin: 0;
    }
    
    .error-page p {
        font-size: 20px;
        color: #555;
    }
    
    .error-page a {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 30px;
        background: #3498db;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background 0.3s;
    }
    
    .error-page a:hover {
        background: #2980b9;
    }
`;

// Function to create pages with navigation and footer
const createPage = (title, content) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} - Quick Laundry Service</title>
        <style>${css}</style>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        
        ${content}
        
        <footer>
            <p>&copy; 2025 Quick Laundry Service. All rights reserved.</p>
        </footer>
    </body>
    </html>
    `;
};

// Home Page
const homePage = createPage('Home', `
    <div class="container">
        <h1>Welcome to Quick Laundry Service</h1>
        <p>Your trusted partner for clean and fresh clothes. We provide professional laundry services with the highest quality standards.</p>
        
        <div class="features">
            <div class="box">
                <h3>⚡ Fast Service</h3>
                <p>Get your clothes cleaned and delivered within 24 hours.</p>
            </div>
            <div class="box">
                <h3>🧺 Premium Quality</h3>
                <p>We use eco-friendly detergents and modern washing techniques.</p>
            </div>
            <div class="box">
                <h3>🚚 Home Pickup</h3>
                <p>Free pickup and delivery service for all orders.</p>
            </div>
        </div>
    </div>
`);

// About Page
const aboutPage = createPage('About', `
    <div class="container">
        <h1>About Quick Laundry Service</h1>
        <p>Quick Laundry Service is a leading provider of professional laundry and dry cleaning services. With over 10 years of experience, we have served thousands of satisfied customers.</p>
        
        <h2>Our Mission</h2>
        <p>To provide exceptional laundry services that exceed customer expectations while maintaining environmental responsibility and sustainability.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
            <li>Experienced and trained laundry professionals</li>
            <li>State-of-the-art cleaning equipment</li>
            <li>Eco-friendly and biodegradable detergents</li>
            <li>Affordable pricing with transparent rates</li>
            <li>Same-day delivery available</li>
            <li>Specialized care for delicate fabrics</li>
        </ul>
        
        <h2>Our Values</h2>
        <p><strong>Quality:</strong> We maintain the highest standards in every service.</p>
        <p><strong>Reliability:</strong> You can depend on us to deliver on time.</p>
        <p><strong>Sustainability:</strong> We care about the environment.</p>
    </div>
`);

// Contact Page
const contactPage = createPage('Contact', `
    <div class="container">
        <h1>Contact Us</h1>
        <p>Have questions or need our services? Get in touch with us today!</p>
        
        <div class="contact-info">
            <h3>📍 Address</h3>
            <p>123 Clean Street, Laundry City, LC 12345</p>
            
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567 (Available 24/7)</p>
            
            <h3>📧 Email</h3>
            <p>info@quicklaundry.com</p>
        </div>
        
        <form>
            <h2>Send us a Message</h2>
            
            <label>Your Name:</label>
            <input type="text" placeholder="Enter your name" required>
            
            <label>Your Email:</label>
            <input type="email" placeholder="Enter your email" required>
            
            <label>Your Message:</label>
            <textarea rows="6" placeholder="Write your message here..." required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
    </div>
`);

// 404 Error Page
const errorPage = createPage('404 Error', `
    <div class="error-page">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <a href="/">← Go Back to Home</a>
    </div>
`);

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;
    
    // Log the request
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${url}`);
    
    // Route handling
    if (url === '/' || url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);
    } 
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(aboutPage);
    } 
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(contactPage);
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(errorPage);
    }
});

// Start the server
server.listen(PORT, () => {
    console.log('\n========================================');
    console.log('🚀 Server is running!');
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log('========================================');
    console.log('Available routes:');
    console.log(`  • http://localhost:${PORT}/`);
    console.log(`  • http://localhost:${PORT}/about`);
    console.log(`  • http://localhost:${PORT}/contact`);
    console.log('========================================');
    console.log('Press Ctrl+C to stop the server\n');
});