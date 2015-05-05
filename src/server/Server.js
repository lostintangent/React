import express from "express";
import FilterApp from "../FilterApp";
import React from "react";

let server = express();
server.get("/", (req, res) => {
    let dynamicContent = React.renderToString(<FilterApp />);

    let staticContent =
        React.renderToStaticMarkup(
            <html>
                <head>
                    <title>Movies</title>
                    <script src="/assets/Browser.js" defer />
                </head>
                <body
                    dangerouslySetInnerHTML={{
                        __html: dynamicContent
                    }}>
                </body>
            </html>
        );

    res.setHeader("Content-Type", "text/html");
    res.end(staticContent);
});

server.use("/assets", express.static("./dist/assets"));

server.listen(8000);

console.log("Server listening on http://localhost:8000, press Ctrl+C to quit...");