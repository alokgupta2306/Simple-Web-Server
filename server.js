const http = require('http');

const app = http.createServer((req, res)=>{
  
  if(req.url==='/'){
    res.statusCode = 200;
    res.write(`<style>body{font-family:Arial;margin:0;padding:20px;}h1{color:red;}</style><h1>Home Page</h1>`)
    return res.end()
  }else if(req.url==='/home'){
    res.statusCode = 200;
    res.write(`<style>body{font-family:Arial;margin:0;padding:20px;}h1{color:red;}</style><h1>Home Page</h1>`)
    return res.end()
  }else if(req.url==='/about'){
    res.statusCode = 200;
    res.write(`<style>body{font-family:Arial;margin:0;padding:20px;}h1{color:blue;}</style><h1>About Page</h1>`)
    return res.end()
  }else if(req.url==='/contact'){
    res.statusCode = 200;
    res.write(`<style>body{font-family:Arial;margin:0;padding:20px;}h1{color:green;}</style><h1>Contact Page</h1>`)
    return res.end()
  }else{
    res.statusCode = 404;
    res.write(
      `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>body{font-family:Arial;padding:20px;background:#f0f0f0;}h1{color:#333;}p{color:#666;}</style>
</head>
<body>
    <head>
        <h1>404 - Page Not Found</h1>
    <p>The page you requested does not exist</p>
    </head>
</body>
</html>
      `
    )
    return res.end()
  }
})

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`Node server is up and running - http://localhost:${PORT}`);
})
