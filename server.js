const http = require('http');

const app = http.createServer((req, res)=>{

  res.setHeader('Content-Type', 'text/html');
  
  if(req.url==='/home' || req.url==='/'){
    res.statusCode = 200;
    res.write(`<html><head><title>Home</title><style>body{font-family:Arial;background-color:#f0f0f0;}nav{background-color:#333;padding:10px;}nav a{color:white;margin:5px;text-decoration:none;}</style></head><body><nav><a href="/home">Home</a><a href="/about">About</a><a href="/contact">Contact</a></nav><h1>Home page</h1><p>Welcome to our website</p></body></html>`)
    return res.end()
  }else if(req.url==='/about'){
    res.statusCode = 200;
    res.write(`<html><head><title>About</title><style>body{font-family:Arial;background-color:#f0f0f0;}nav{background-color:#333;padding:10px;}nav a{color:white;margin:5px;text-decoration:none;}</style></head><body><nav><a href="/home">Home</a><a href="/about">About</a><a href="/contact">Contact</a></nav><h1>About page</h1><p>Learn about us</p></body></html>`)
    return res.end()
  }else if(req.url==='/contact'){
    res.statusCode = 200;
    res.write(`<html><head><title>Contact</title><style>body{font-family:Arial;background-color:#f0f0f0;}nav{background-color:#333;padding:10px;}nav a{color:white;margin:5px;text-decoration:none;}</style></head><body><nav><a href="/home">Home</a><a href="/about">About</a><a href="/contact">Contact</a></nav><h1>Contact page</h1><p>Contact us at: info@example.com</p></body></html>`)
    return res.end()
  }

  res.statusCode = 404;
  res.write(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      body { font-family: Arial; background-color: #f0f0f0; margin: 20px; }
      nav { background-color: #333; padding: 10px; }
      nav a { color: white; margin: 5px; text-decoration: none; }
      h1 { color: red; }
    </style>
</head>
<body>
    <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    <h1>404 - Page Not Found</h1>
    <p>The page you requested does not exist</p>
</body>
</html>
    `
  )
  return res.end()
})

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Node server is up and running - http://localhost:${PORT}`);
})
