export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export const copy = {
  en: {
    nav: { home: "Home", services: "Services", solutions: "Solutions", technology: "Technology", about: "About", contact: "Contact" },
    language: "中文",
    eyebrow: "INTELLIGENCE · ENGINEERING · INTEGRATION",
    title: "Engineering the next era of intelligent technology.",
    description: "We bring intelligence, software, and connected systems together to help turn complex technology challenges into practical possibilities.",
    primaryCta: "Explore what we do",
    secondaryCta: "Talk to our team",
    scroll: "SCROLL TO EXPLORE",
    heroNote: "THINKING BEYOND THE EXPECTED",
    introTag: "OUR PERSPECTIVE",
    capabilityNote: "Four connected disciplines. One engineering mindset.",
    approachLabel: "HOW WE THINK",
    approachTitle: "Complex challenges need connected thinking.",
    approachText: "We look beyond individual tools to understand how intelligence, software, devices, and systems can work together.",
    principles: [
      { number: "01", title: "Understand the system", text: "Start with the real need, the surrounding context, and the outcome that matters." },
      { number: "02", title: "Connect the disciplines", text: "Bring the right mix of software, AI, automation, and integration into the solution." },
      { number: "03", title: "Engineer for reality", text: "Focus on practical implementation, thoughtful design, and systems that work together." }
    ],
    contactFootnote: "PISIMAI TECHNOLOGY · Engineering Tomorrow. Empowering Today.",
    introLabel: "A connected approach to technology",
    introTitle: "One technology partner. Multiple disciplines. A shared direction.",
    introText: "From intelligent software to connected systems, our work sits at the intersection of emerging technology and real-world application.",
    servicesLabel: "CAPABILITY AREAS",
    servicesTitle: "Technology, connected by design.",
    servicesText: "Explore how AI, software, robotics, and system integration can work together to solve practical challenges across products, operations, and connected environments.",
    services: [
      { number: "01", title: "AI & Intelligent Systems", text: "AI-enabled applications, intelligent workflows, and model/API integration." },
      { number: "02", title: "Software & Digital Platforms", text: "Websites, web applications, and tailored software experiences." },
      { number: "03", title: "Robotics & Automation", text: "Robotics secondary development and intelligent automation concepts." },
      { number: "04", title: "System Integration", text: "Connecting software, services, devices, and data into coherent systems." }
    ],
    aboutLabel: "PISIMAI TECHNOLOGY",
    aboutTitle: "Built around what technology can make possible.",
    aboutText: "We bring together software development, AI, robotics, and system integration under one technology-focused direction.",
    contactLabel: "START A CONVERSATION",
    contactTitle: "Have a challenge worth engineering?",
    contactText: "Tell us what you are working toward. We would be glad to hear from you.",
    contactCta: "Contact us",
    footerLine: "Engineering Tomorrow. Empowering Today.",
    copyright: "All rights reserved.",
    legalCompanyName: "匹思麦(深圳)科技有限公司",
    companyAddressLabel: "Company address",
    companyAddress: "Room 1212, Taojing Business Building, Shenzhen, Guangdong, China"
  },
  zh: {
    nav: { home: "首页", services: "服务领域", solutions: "解决方案", technology: "技术方向", about: "关于我们", contact: "联系我们" },
    language: "EN",
    eyebrow: "智能 · 工程 · 集成",
    title: "以工程创新，开启智能科技新篇章。",
    description: "融合人工智能、软件与互联系统，将复杂的技术挑战转化为切实可行的创新方案。",
    primaryCta: "探索我们的业务",
    secondaryCta: "联系团队",
    scroll: "向下探索",
    heroNote: "探索科技的更多可能",
    introTag: "我们的视野",
    capabilityNote: "四大关联领域，同一种工程思维。",
    approachLabel: "我们的方式",
    approachTitle: "复杂挑战，需要协同思考。",
    approachText: "我们不局限于单一工具，而是探索智能、软件、设备与系统如何协同发挥作用。",
    principles: [
      { number: "01", title: "理解系统全貌", text: "从真实需求、应用场景与关键目标出发。" },
      { number: "02", title: "连接专业领域", text: "结合软件、人工智能、自动化与系统集成能力。" },
      { number: "03", title: "面向实际应用", text: "注重可落地的实施、严谨的设计与系统协同。" }
    ],
    contactFootnote: "PISIMAI TECHNOLOGY · 以工程创新，赋能当下。",
    introLabel: "互联的技术视野",
    introTitle: "一个技术合作伙伴，多元专业领域，共同发展方向。",
    introText: "从智能软件到互联系统，我们专注于新兴技术与实际应用的交汇点。",
    servicesLabel: "核心技术领域",
    servicesTitle: "让技术彼此连接。",
    servicesText: "了解人工智能、软件、机器人与系统集成如何协同，为产品、业务流程与互联场景构建切实可行的技术方案。",
    services: [
      { number: "01", title: "人工智能与智能系统", text: "人工智能应用、智能工作流程以及模型与 API 集成。" },
      { number: "02", title: "软件与数字平台", text: "企业网站、Web 应用程序及定制软件体验。" },
      { number: "03", title: "机器人与自动化", text: "机器人二次开发与智能自动化方案。" },
      { number: "04", title: "系统集成", text: "连接软件、服务、设备与数据，构建协同系统。" }
    ],
    aboutLabel: "PISIMAI TECHNOLOGY",
    aboutTitle: "以技术创新，拓展更多可能。",
    aboutText: "我们围绕软件开发、人工智能、机器人技术与系统集成，构建多元化的技术服务方向。",
    contactLabel: "开启合作交流",
    contactTitle: "正在寻找值得深入探索的技术方案？",
    contactText: "欢迎告诉我们您的目标与需求，我们期待与您交流。",
    contactCta: "联系我们",
    footerLine: "以工程创新，赋能当下。",
    copyright: "版权所有。",
    legalCompanyName: "匹思麦(深圳)科技有限公司",
    companyAddressLabel: "公司地址",
    companyAddress: "中国广东省深圳市，淘景商务大厦 1212"
  }
} as const;
