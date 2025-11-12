const http = require('http');

const app = http.createServer((req, res) => {
  
  if(req.url === '/home'){
    res.write('<h1>Home Page</h1>')
    return res.end()
  }else if(req.url === '/about'){
    res.write('<h1>About Page</h1>')
    return res.end()
  }else if(req.url === '/contact'){
    res.write('<h1>Contact Page</h1>')
    return res.end()
  }else if(req.url === '/'){
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          body { margin: 0; font-family: Arial; }
          nav { background: #333; padding: 15px; }
          ul { list-style: none; margin: 0; padding: 0; }
          li { display: inline; margin-right: 20px; }
          a { color: white; text-decoration: none; }
          a:hover { color: #ddd; }
        </style>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </body>
      </html>
    `)
    return res.end()
  }else{
    res.write('<h1>404 - Page Not Found</h1>')
    return res.end()
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
