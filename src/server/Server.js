import express from "express";
import FilterApp from "../FilterApp";
import React from "react";

let server = express();
server.get("/", (req, res) => {
    let content =
        React.renderToStaticMarkup(
            <html>
                <head>
                    <title>Movies</title>
                    <script src="/assets/Browser.js" defer />
                </head>
                <body
                    dangerouslySetInnerHTML={{
                        __html: React.renderToString(<FilterApp />)
                    }}>
                </body>
            </html>
        );

    res.setHeader("Content-Type", "text/html");
    res.end(content);
});

server.use("/assets", express.static("./dist/assets"));

server.listen(8000);

console.log("Server listening on http://localhost:8000, press Ctrl+C to quit...");