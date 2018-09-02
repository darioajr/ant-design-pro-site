webpackJsonp([78],{

/***/ 2447:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h3",
      "What is the difference between Ant Design React and Ant Design Pro?"
    ],
    [
      "p",
      "It can be understood that Ant Design React is a set of React component libraries, and Pro is a complete front-end scaffolding using this set of component libraries."
    ],
    [
      "h3",
      "How to use Ant Design Pro?"
    ],
    [
      "p",
      "Please read the document ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/getting-started"
        },
        "Getting Started"
      ],
      ", and Ant Financial users please read ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/getting-start-inner"
        },
        "Getting Started (Ants Financial User)"
      ],
      "."
    ],
    [
      "h3",
      "Can I use Ant Design Pro in a production environment?"
    ],
    [
      "p",
      "Of course you can! Ant Design Pro is based on the latest antd version. There are currently multiple middle and backend projects in use."
    ],
    [
      "h3",
      "How to update Ant Design Pro?"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Upgrade the ",
          [
            "code",
            "antd"
          ],
          " version separately for updating the base components."
        ]
      ],
      [
        "li",
        [
          "p",
          "Compare the differences between different Ant Design Pro versions and manually modify the local configuration."
        ]
      ],
      [
        "li",
        [
          "p",
          "You can also try merging remote branches: ",
          [
            "code",
            "git pull https://github.com/ant-design/ant-design-pro"
          ],
          " (note that you need to resolve conflicts yourself)."
        ]
      ],
      [
        "li",
        [
          "p",
          "Copy the latest typical template directly on GitHub."
        ]
      ]
    ],
    [
      "h3",
      [
        "code",
        "npm test"
      ],
      " hangs on ",
      [
        "code",
        "MacOS Sierra"
      ],
      "?"
    ],
    [
      "p",
      "You need to install ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-test-hangs-on-macos-sierra"
        },
        "watchman"
      ],
      "."
    ],
    [
      "h3",
      "How to modify the default webpack configuration?"
    ],
    [
      "p",
      "See ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#configuration"
        },
        "roadhog configuration"
      ],
      " for details."
    ],
    [
      "h3",
      "How to add babel plugins?"
    ],
    [
      "p",
      "See details ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#extrababelplugins"
        },
        "roadhog extraBabelPlugins"
      ],
      "."
    ],
    [
      "h3",
      "How to use static resources such as pictures?"
    ],
    [
      "p",
      "Absolute paths can be used directly (map support is required). If you want to use local files directly, you can import them as follows."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'../assets/picture.png'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<img src={require('../assets/picture.png')} />"
      ]
    ],
    [
      "h3",
      "How is my ",
      [
        "code",
        "#"
      ],
      " number in my url? How to get rid of?"
    ],
    [
      "p",
      "Please refer to the deploy document ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/deploy#Routing-and-server-integration"
        },
        "Routing and server integration"
      ],
      "."
    ],
    [
      "h3",
      "How to add scss support?"
    ],
    [
      "p",
      "Open the ",
      [
        "code",
        "sass"
      ],
      " configuration in ",
      [
        "code",
        ".webpackrc"
      ],
      ", see ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#sass"
        },
        "sass"
      ],
      "."
    ],
    [
      "h3",
      "Git commit error?"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png",
          "width": "600"
        }
      ]
    ],
    [
      "p",
      "Scaffolding defaults to the ",
      [
        "a",
        {
          "title": null,
          "href": "http://eslint.org/"
        },
        "eslint"
      ],
      " code style check. Please follow the prompts and resubmit it, or you can manually check ",
      [
        "code",
        "npm run lint"
      ],
      "."
    ],
    [
      "h3",
      "Disable browser opening automatically on ",
      [
        "code",
        "npm start"
      ]
    ],
    [
      "p",
      "Modify ",
      [
        "code",
        "scripts.start"
      ],
      " in ",
      [
        "code",
        "package.json"
      ],
      " to:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token string\">\"start\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"cross-env BROWSER=none roadhog server\"</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "\"start\": \"cross-env BROWSER=none roadhog server\","
      ]
    ],
    [
      "h3",
      "Does Ant Design Pro support internationalization?"
    ],
    [
      "p",
      "This is one of the features of Ant Design Pro. The first version is currently available in Chinese. Internationalization is in our 2.0 plan and will be released soon."
    ],
    [
      "h3",
      "English Documentation?"
    ],
    [
      "p",
      "English Documentation will be translated in next couple of monthes, trace ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479"
        },
        "ant-design/ant-design-pro#54"
      ],
      " and ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/issues/120"
        },
        "ant-design-pro/issues/120"
      ],
      " for more detail."
    ],
    [
      "hr"
    ],
    [
      "p",
      "More FAQs can be found in ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting"
        },
        "Trouble Shooting"
      ],
      " and ",
      [
        "a",
        {
          "title": null,
          "href": "Https://github.com/sorrycc/roadhog"
        },
        "roadhog"
      ],
      ". If this does not solve your problem, please ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/issues"
        },
        "Report to us"
      ],
      "."
    ]
  ],
  "meta": {
    "order": 22,
    "title": "FAQ",
    "type": "Other",
    "filename": "docs/faq.en-US.md"
  },
  "description": [
    "section",
    [
      "p",
      "Before you ask a question, please check the following FAQ."
    ]
  ],
  "toc": [
    "ul"
  ]
};

/***/ })

});