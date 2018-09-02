webpackJsonp([90],{

/***/ 2435:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "In daily development, we usually sperate frontend development from backend development based on an API standard, so that the two teams won't block each other to ensure progress of the project."
    ],
    [
      "p",
      "In Ant Design Pro we already have a relatively complete set of mock feature, and ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/nikogu/roadhog-api-doc"
        },
        "roadhog-api-doc"
      ],
      " is a tool that can generate API documentation from your mock data to give you a clear overview of your APIs."
    ],
    [
      "p",
      "Live Demo：",
      [
        "a",
        {
          "title": null,
          "href": "https://preview.pro.ant.design/api.html"
        },
        "Pro API Docs"
      ],
      "。"
    ],
    [
      "h2",
      "How to use"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> roadhog-api-doc -g"
      },
      [
        "code",
        "$ npm install roadhog-api-doc -g"
      ]
    ],
    [
      "h3",
      "Running locally"
    ],
    [
      "p",
      "In the project root directory:"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ roadhog-api-doc start <span class=\"token punctuation\">[</span>port<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "$ roadhog-api-doc start [port]"
      ]
    ],
    [
      "p",
      "Then a document website will launch for the current project, provided that it must be a project based on ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog"
        },
        "roadhog"
      ],
      " as with Ant Design Pro and that the data mock feature to be used because the source of documentation is the mock file."
    ],
    [
      "p",
      "It should be additionally noted that the above ",
      [
        "code",
        "port"
      ],
      " parameter refers to the current local ",
      [
        "code",
        "roadhog"
      ],
      " application. If specified, you can directly access the project's API locally. If not specified, the network request will be staticized."
    ],
    [
      "h3",
      "Generating static site"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ roadhog-api-doc build"
      },
      [
        "code",
        "$ roadhog-api-doc build"
      ]
    ],
    [
      "p",
      "This command will generate three files: ",
      [
        "code",
        "api.html"
      ],
      ", ",
      [
        "code",
        "api.js"
      ],
      ", ",
      [
        "code",
        "api.css"
      ],
      ". You can deploy these files to your own site for online access, where the data is already statically converted (translating network requests into hardcode data)."
    ],
    [
      "h3",
      "Writing Documentation"
    ],
    [
      "p",
      "Generally speaking, you can generate documents without adding any dependencies, but if you need to write some note for some APIs, you need to modify the ",
      [
        "code",
        ".roadhog.mock.js"
      ],
      " file in the following format:"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> roadhog-api-doc --save-dev <span class=\"token comment\" spellcheck=\"true\"># Install roadhog-api-doc as development dependency</span>"
      },
      [
        "code",
        "$ npm install roadhog-api-doc --save-dev # Install roadhog-api-doc as development dependency"
      ]
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> format <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'roadhog-api-doc'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> proxy <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'GET /api/currentUser'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    $desc<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Get current user\"</span><span class=\"token punctuation\">,</span>\n    $params<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      pageSize<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        desc<span class=\"token punctuation\">:</span> <span class=\"token string\">'分页'</span><span class=\"token punctuation\">,</span>\n        exp<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    $body<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'momo.zxy'</span><span class=\"token punctuation\">,</span>\n      avatar<span class=\"token punctuation\">:</span> imgMap<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">,</span>\n      userid<span class=\"token punctuation\">:</span> <span class=\"token string\">'00000001'</span><span class=\"token punctuation\">,</span>\n      notifyCount<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span>proxy<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { format } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/currentUser': {\n    $desc: \"Get current user\",\n    $params: {\n      pageSize: {\n        desc: '分页',\n        exp: 2,\n      },\n    },\n    $body: {\n      name: 'momo.zxy',\n      avatar: imgMap.user,\n      userid: '00000001',\n      notifyCount: 12,\n    },\n  },\n};\n\nexport default format(proxy);"
      ]
    ],
    [
      "p",
      "You can define the following values："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "$desc: Description of the API"
        ]
      ],
      [
        "li",
        [
          "p",
          "$params: Parameters of the API"
        ]
      ],
      [
        "li",
        [
          "p",
          "$body: The response of the API"
        ]
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/PVfsHataJahAwAVaKDtp.png"
        }
      ]
    ],
    [
      "h3",
      "Testing mock data and the real API"
    ],
    [
      "p",
      "After launching the local API document site, you can send the ",
      [
        "code",
        "POST"
      ],
      " or",
      [
        "code",
        "GET"
      ],
      " request by clicking the ",
      [
        "code",
        "send"
      ],
      " button and the return value will be displayed in the popup:"
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/mkgrIEbmhXZFbSOWvTCz.png"
        }
      ]
    ],
    [
      "p",
      "One thing to note is that if you start the API documentation site without the port number, then the return data here is static data, if the port number is added and the project is running locally, it will perform a request to the local server and return the real data."
    ],
    [
      "p",
      "If you want to have direct access to the real data online, then you need to modify ",
      [
        "code",
        ".roadhog.mock.js"
      ],
      ", ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#mock"
        },
        "redirect"
      ],
      " of the current project to the online URL."
    ],
    [
      "p",
      "Visit ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/nikogu/roadhog-api-doc"
        },
        "roadhog-api-doc github"
      ],
      " for more information."
    ]
  ],
  "meta": {
    "order": 19,
    "title": "API Development",
    "type": "Advanced",
    "filename": "docs/api-doc.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#How-to-use",
          "title": "How to use"
        },
        "How to use"
      ]
    ]
  ]
};

/***/ })

});