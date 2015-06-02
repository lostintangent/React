import express from "express";
import FilterApp from "../FilterApp";
import React from "react";

// This server supports serving two things:
// 1) The app itself, which is dynamically generated using React
// 2) All of the static assets (e.g. JS, CSS) for the app

let server = express();
server.get("/", (req, res) => {
    // 1) Generate a string of HTML that represents the
    //    the body content of the app
    let bodyContent = React.renderToString(<FilterApp />);

    // 2) Wrap the app inside the neccesary HTML "scaffold"
    //    using static markup, since we don't need the <html>, <body>, etc.
    //    elements to include the "magic IDs" that React would add to them
    let staticContent =
        React.renderToStaticMarkup(
            <html>
                <head>
                    <title>Movies</title>
                    <script src="/assets/Browser.js" defer />
                </head>
                <body
                    dangerouslySetInnerHTML={{
                        __html: bodyContent
                    }}>
                </body>
            </html>
        );

    res.setHeader("Content-Type", "text/html");
    res.end(staticContent);
});

server.use("/assets", express.static("./dist/assets"));

server.listen(process.env.PORT);

console.log(`Server listening on http://localhost:${process.env.PORT}, press Ctrl+C to quit...`);