# Astro resume

## 怎么使用？

把代码克隆到本地，将 site.config.example.json 复制为 site.config.json，修改配置文件中的参数，运行`npm run dev`即可。

## 效果展示：

![alt text](/public/image.png)

## 配置文件说明

项目中的 icon 来自 @phosphor-icons/core，你可以在 https://icones.js.org/collection/ph?variant=Duotone&s=out 查看它的 icon 并自行替换

```json
{
  "username": "Whbbit1999", // 你的名字
  "workYear": "4", // 工作年限
  "jobType": "Web前端工程师", // 职位类型
  "city": "北京", // 所在城市
  "age": "25", // 年龄
  "gender": "男", // 性别
  "state": "在职", // 目前状态

  // 可以根据需要配置要显示的信息，link可以没有可以不填
  "otherInfo": [
    {
      "title": "手机号码",
      "content": "182xxxxxxxx",
      "icon": "ph:phone-duotone",
      "link": "tel:+86182xxxxxxxx"
    },
    {
      "title": "邮箱",
      "content": "xx@qq.com",
      "icon": "ph:envelope-open-duotone",
      "link": "mailto:xx@qq.com"
    },
    {
      "title": "个人网站",
      "content": "www.whbbit.cn",
      "icon": "ph:link-duotone",
      "link": "https://www.whbbit.cn"
    },
    {
      "title": "Github",
      "content": "Whbbit1999",
      "icon": "ph:github-logo-duotone",
      "link": "https://github.com/Whbbit1999"
    },
    {
      "title": "现居地址",
      "content": "北京市海淀区西二旗",
      "icon": "ph:map-pin-line-duotone",
      "link": ""
    }
  ],
  // 你的技能, title会显示为粗体，content中的每个元素都为一行
  "skills": [
    {
      "title": "使用 Javascript（ES6）/ Typescript 进行前端开发，并且熟练掌握以下框架",
      "content": [
        "Vue通用框架：Vue2 / Vue3 / Nuxt3",
        "uniapp小程序开发",
        "Vue状态管理：Pinia / Vuex ，Vue常用库：VeeValidate / VueUse / Vue Router，Vue组件库：ElementPlus / NaiveUI，Vue静态生成工具: Vitepress"
      ]
    },
    {
      "title": "熟练使用 CSS3 以及周边工具",
      "content": ["原子样式库：Tailwindcss/Unocss，预处理器：Scss", "熟练掌握HTML5/CSS3,进行响应式布局和移动端开发"]
    }
  ],
  // 工作经历，position会显示为标签样式，description中的每个元素都为一行
  "works": [
    {
      "company": "xx科技",
      "timeRange": "2023.11-至今",
      "position": ["前端开发工程师", "项目负责人"],
      "description": ["负责公司甲方项目的门户页面和SEO优化工作", "负责公司内部项目的日常开发和维护"]
    },
    {
      "company": "自由职业",
      "timeRange": "2023.3-2023.07",
      "position": ["前端开发工程师"],
      "description": ["为甲方提供官网站点的开发和SEO优化工作，使用Nuxt技术栈。", "为甲方修复特定功能Bug"]
    }
  ],
  // 教育经历
  "educations": [
    {
      "school": "xx大学",
      "major": "计算机科学与技术",
      "start": "2022.03",
      "end": "2025.01"
    }
  ],
  // 工作经历，name会显示为标题样式，有link时可以进行跳转，description中的每个元素都为一行
  "projects": [
    {
      "name": "xx项目",
      "timeRange": "",
      "link": "https://xxx.vip/",
      "company": "",
      "description": [
        "项目描述：设计公司官网首页，进行公司设计项目展示",
        "技术栈: Vue3 | Nuxt3 | Tailwindcss",
        "主要工作：负责网站 Web 端架构设计以及开发工作",
        "技术选型及说明：",
        "1. 作为一个全新的项目，使用了目前 Vue3 最新的技术栈。相较于Vue2，Vue3 带来了更加简洁的语法以及更加灵活的组件化开发。",
        "2. 作为一个主页性质的网站，使用 Nuxt3 进行SEO优化。",
        "3. 使用 Headless UI 以及Tailwind.css 作为无样式组件库以及样式解决方案"
      ]
    },
    {
      "name": "xx项目",
      "timeRange": "",
      "link": "",
      "company": "",
      "description": []
    }
  ],
  // 自我介绍，每个元素都为一行
  "introduceMyself": [
    "在业余时间参加开源项目，为Element-Plus、vue-devui、mzlureact(React)提供部分代码。",
    "是 sable 中后台脚手架(Vue3)的作者。"
  ]
}
```
