webpackJsonp([80],{

/***/ 2445:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "During the user's use, various abnormal situations may be encountered, such as page 404, application result failure, request return exception, etc. This document will introduce the corresponding processing suggestions according to the error report form."
    ],
    [
      "h2",
      "Page Error"
    ],
    [
      "h3",
      "When to be used"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "The route is directed to the error page. For example, the URL you entered does not match any page and can be routed to the default 404 page."
        ]
      ],
      [
        "li",
        [
          "p",
          "Code control jumps to the error page, such as the user returned without permission to the 403 page based on the data returned by the request."
        ]
      ]
    ],
    [
      "h3",
      "Achieve"
    ],
    [
      "p",
      "For page-level error reporting, we provide two business components for you to choose from, which makes it easy to implement an error page:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://preview.pro.ant.design/#/exception/404"
            },
            "Exception Page"
          ]
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token operator\">&lt;</span>Exception type<span class=\"token operator\">=</span><span class=\"token string\">\"404\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>"
          },
          [
            "code",
            "<Exception type=\"404\" />"
          ]
        ]
      ]
    ],
    [
      "p",
      "By default, it supports 404, 403, and 500 errors, and can also customize the copy and other content."
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://preview.pro.ant.design/#/result/fail"
            },
            "Result Page"
          ]
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token operator\">&lt;</span>Result\n  type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n  title<span class=\"token operator\">=</span><span class=\"token string\">\"提交失败\"</span>\n  description<span class=\"token operator\">=</span><span class=\"token string\">\"请核对并修改以下信息后，再重新提交。\"</span>\n  actions<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Button size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>返回修改<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span><span class=\"token punctuation\">}</span>\n<span class=\"token operator\">/</span><span class=\"token operator\">></span>"
          },
          [
            "code",
            "<Result\n  type=\"error\"\n  title=\"提交失败\"\n  description=\"请核对并修改以下信息后，再重新提交。\"\n  actions={<Button size=\"large\" type=\"primary\">返回修改</Button>}\n/>"
          ]
        ]
      ]
    ],
    [
      "p",
      "This component is generally used to display the results of the presentation, copywriting operations, etc. can be customized."
    ],
    [
      "h2",
      "Prompt error"
    ],
    [
      "h3",
      "When to be used"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Form verification error."
        ]
      ],
      [
        "li",
        [
          "p",
          "Operation feedback."
        ]
      ],
      [
        "li",
        [
          "p",
          "Network request error."
        ]
      ]
    ],
    [
      "h3",
      "实现"
    ],
    [
      "p",
      "For an error in the form item, please refer to the implementation in ",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/form-cn/"
        },
        "antd Form"
      ],
      ". For operational feedback and network request error prompts, there are some components that might be used:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://ant.design/components/alert-cn/"
            },
            "Alert"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://ant.design/components/message-cn/"
            },
            "message"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://ant.design/components/notification-cn/"
            },
            "notification"
          ]
        ]
      ]
    ],
    [
      "p",
      "In a single-page application, the most common requirement is to handle network error messages. We can use message and notification to spit out the response Interface/Network/Business data errors."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/cVTaurnfguplvNbctgBN.png",
          "width": "400"
        }
      ]
    ],
    [
      "p",
      "Ant Design Pro encapsulates a powerful ",
      [
        "code",
        "request.js"
      ],
      " unified processing request, providing default error handling and hints."
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">const</span> checkStatus <span class=\"token operator\">=</span> response <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>response<span class=\"token punctuation\">.</span>status <span class=\"token operator\">>=</span> <span class=\"token number\">200</span> <span class=\"token operator\">&amp;&amp;</span> response<span class=\"token punctuation\">.</span>status <span class=\"token operator\">&lt;</span> <span class=\"token number\">300</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> response<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">const</span> errortext <span class=\"token operator\">=</span> codeMessage<span class=\"token punctuation\">[</span>response<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">]</span> <span class=\"token operator\">||</span> response<span class=\"token punctuation\">.</span>statusText<span class=\"token punctuation\">;</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`请求错误 </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>response<span class=\"token punctuation\">.</span>status<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>response<span class=\"token punctuation\">.</span>url<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> errortext<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> error <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Error</span><span class=\"token punctuation\">(</span>errortext<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  error<span class=\"token punctuation\">.</span>name <span class=\"token operator\">=</span> response<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">;</span>\n  error<span class=\"token punctuation\">.</span>response <span class=\"token operator\">=</span> response<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">throw</span> error<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const checkStatus = response => {\n  if (response.status >= 200 && response.status < 300) {\n    return response;\n  }\n  const errortext = codeMessage[response.status] || response.statusText;\n  notification.error({\n    message: `请求错误 ${response.status}: ${response.url}`,\n    description: errortext,\n  });\n  const error = new Error(errortext);\n  error.name = response.status;\n  error.response = response;\n  throw error;\n};"
      ]
    ],
    [
      "p",
      "In order to facilitate the display of 404 and other pages, we encapsulate the logic in the ",
      [
        "code",
        "request.js"
      ],
      " to jump to the corresponding page according to the state. It is recommended to delete this logic in the online environment. The code is as follows:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "    <span class=\"token punctuation\">.</span><span class=\"token keyword\">catch</span><span class=\"token punctuation\">(</span>e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> status <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token number\">401</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// @HACK</span>\n        <span class=\"token comment\" spellcheck=\"true\">/* eslint-disable no-underscore-dangle */</span>\n        window<span class=\"token punctuation\">.</span>g_app<span class=\"token punctuation\">.</span>_store<span class=\"token punctuation\">.</span><span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          type<span class=\"token punctuation\">:</span> <span class=\"token string\">'login/logout'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token comment\" spellcheck=\"true\">// environment should not be used</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token number\">403</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        router<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/exception/403'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">&lt;=</span> <span class=\"token number\">504</span> <span class=\"token operator\">&amp;&amp;</span> status <span class=\"token operator\">>=</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        router<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/exception/500'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">>=</span> <span class=\"token number\">404</span> <span class=\"token operator\">&amp;&amp;</span> status <span class=\"token operator\">&lt;</span> <span class=\"token number\">422</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        router<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/exception/404'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "    .catch(e => {\n      const status = e.name;\n      if (status === 401) {\n        // @HACK\n        /* eslint-disable no-underscore-dangle */\n        window.g_app._store.dispatch({\n          type: 'login/logout',\n        });\n        return;\n      }\n      // environment should not be used\n      if (status === 403) {\n        router.push('/exception/403');\n        return;\n      }\n      if (status <= 504 && status >= 500) {\n        router.push('/exception/500');\n        return;\n      }\n      if (status >= 404 && status < 422) {\n        router.push('/exception/404');\n      }\n    });"
      ]
    ],
    [
      "p",
      "The complete code can refer to: ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js"
        },
        "https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js"
      ]
    ]
  ],
  "meta": {
    "order": 17,
    "title": {
      "en-US": "Error Handle",
      "zh-CN": "错误处理"
    },
    "type": "Advanced",
    "filename": "docs/error-handle.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Page-Error",
          "title": "Page Error"
        },
        "Page Error"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Prompt-error",
          "title": "Prompt error"
        },
        "Prompt error"
      ]
    ]
  ]
};

/***/ })

});