## Prerequisites

1. Familiarity with express and its routing functions.

2. Understands basic HTML

3. Understands callback functions in Node

## Directions

BEFORE ANYTHING, RUN `npm install` while in the project's working directory.

1. In app.js, on line 15, inside the callback for app.get(), write `response.render('index');`.

2. Start the server by running `node --harmony app.js` in the console while in the project's working directory.

3. Open the browser to [http://localhost:3000]. You should see "Welcome to an EJS tutorial" on the page and "EJS Tutorial"
    as the title of the page.

4. Open views/index.ejs. It looks just like HTML so far, but let's change something. Inside the `<title>` tags, 
    on line 4, replace "EJS Tutorial" with `<%= title %>`. The entire line should be `<title><%= title %></title>`.

5. Go back to the line we added in step (1) (in app.js) and change it to `response.render('index', { title: 'Hello World' });`

6. Restart the server by pressing "Ctrl-C" and then run `node --harmony app.js` again.

7. Open the browser to the page (like in step (3)) and reload. You should notice that the title of the page is now
    "Hello World"

8. How it works: When you call `response.render('index', { title: 'Hello World' });` it replaces `<%= title %>` in index.ejs
    with "Hello World" and then sends the page to the client as an HTML file.

9. Try it again, open index.ejs and add `<%= body %>` inside the `<body>` tags just like what you did with the title tags.

10. Go back to the line we added in step (1) (in app.js) and change it to 
    `response.render('index', { title: 'Hello World', body: 'This is the body' });`

11. Restart the server and reload the page in your browser. You should see "This is the body" on the page.