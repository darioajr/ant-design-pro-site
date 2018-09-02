webpackJsonp([82],{

/***/ 2443:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "Build"
    ],
    [
      "p",
      "When you finish the development, you can run the following command to build your application:"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run build"
      },
      [
        "code",
        "$ npm run build"
      ]
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://asciinema.org/a/198144"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://asciinema.org/a/198144.png",
            "alt": "asciicast"
          }
        ]
      ]
    ],
    [
      "p",
      "Since Ant Design Pro use ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/"
        },
        "Umi"
      ],
      " as development tool, complex processes have been encapsulated and for most scenarios only one command ",
      [
        "code",
        "umi build"
      ],
      " is required to build the package, after build successfully, it will generate the ",
      [
        "code",
        "dist"
      ],
      " folder in the root directory, which contains packaged files, usually static files like ",
      [
        "code",
        "*.js"
      ],
      ", ",
      [
        "code",
        "*.css"
      ],
      ", ",
      [
        "code",
        "index.html"
      ],
      "."
    ],
    [
      "p",
      "But if you want to custom the build result, like specify the result directory, you can configure it in ",
      [
        "code",
        "config/config.js"
      ],
      ", refer to ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/config.html"
        },
        "Umi configuration"
      ],
      " for more details."
    ],
    [
      "h3",
      "Analyze build result"
    ],
    [
      "p",
      "If your build file is large, you can optimize your code with the ",
      [
        "code",
        "analyze"
      ],
      " command to build and analyze the volume distribution of dependent modules."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run analyze"
      },
      [
        "code",
        "$ npm run analyze"
      ]
    ],
    [
      "p",
      "The command will open analyze result in your default browser automatically."
    ],
    [
      "h2",
      "Release"
    ],
    [
      "p",
      "For release purposes, you only need publish the resulting static file, which is usually the static file in the ",
      [
        "code",
        "dist"
      ],
      " folder, to your CDN or static server. It should be noted that",
      [
        "code",
        "index.html"
      ],
      " will be your application's entry page."
    ],
    [
      "h3",
      "Routing and server integration"
    ],
    [
      "p",
      "Umi has two modes of router, ",
      [
        "code",
        "browserHistory"
      ],
      " and ",
      [
        "code",
        "hashHistory"
      ],
      "."
    ],
    [
      "p",
      [
        "code",
        "hashHistory"
      ],
      " uses a URL such as ",
      [
        "code",
        "https://cdn.com/#/users/123"
      ],
      " and take the path following the ",
      [
        "code",
        "#"
      ],
      " as the application route. ",
      [
        "code",
        "browserHistory"
      ],
      " uses ",
      [
        "code",
        "https://cdn.com/users/123"
      ],
      " directly. When using ",
      [
        "code",
        "hashHistory"
      ],
      " the browser always requests ",
      [
        "code",
        "index.html"
      ],
      " under the root directory. Using ",
      [
        "code",
        "browserHistory"
      ],
      " requires that the server be prepared to handle URLs. It should be OK to handle the initial ",
      [
        "code",
        "/"
      ],
      ". However, when the user jumps back and forth and refreshes ",
      [
        "code",
        "/users/123"
      ],
      ", the server receives a ",
      [
        "code",
        "/users/123"
      ],
      " request, then you need to configure the server to handle this URL to return the correct index.html. If you can control the server, we recommend using browserHistory."
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "http://expressjs.com/"
        },
        "express"
      ]
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "app<span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span>express<span class=\"token punctuation\">.</span><span class=\"token function\">static</span><span class=\"token punctuation\">(</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'build'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\napp<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/*'</span><span class=\"token punctuation\">,</span> function <span class=\"token punctuation\">(</span>req<span class=\"token punctuation\">,</span> res<span class=\"token punctuation\">)</span> {\n  res<span class=\"token punctuation\">.</span><span class=\"token function\">sendFile</span><span class=\"token punctuation\">(</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'build'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'index.html'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
      },
      [
        "code",
        "app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});"
      ]
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://eggjs.org/"
        },
        "egg"
      ]
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "<span class=\"token operator\">/</span><span class=\"token operator\">/</span> controller\nexports<span class=\"token punctuation\">.</span>index <span class=\"token operator\">=</span> function<span class=\"token operator\">*</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  yield this<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token string\">'App.jsx'</span><span class=\"token punctuation\">,</span> {\n    context<span class=\"token punctuation\">:</span> {\n      user<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>session<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> router\napp<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'home'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'/*'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'home.index'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
      },
      [
        "code",
        "// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');"
      ]
    ],
    [
      "p",
      "You can refer to ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html"
        },
        "Umi Router"
      ],
      " for more router information."
    ]
  ],
  "meta": {
    "order": 8,
    "title": "Build & Deploy",
    "type": "Introduction",
    "filename": "docs/deploy.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Build",
          "title": "Build"
        },
        "Build"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Release",
          "title": "Release"
        },
        "Release"
      ]
    ]
  ]
};

/***/ })

});