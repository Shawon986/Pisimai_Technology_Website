import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageExperienceSections } from "@/components/page-experience-sections";
import { isLocale, type Locale } from "@/lib/i18n";

type PageCopy = {
  eyebrow: string; title: string; intro: string;
  sections: { title: string; text: string; points?: string[] }[];
  ctaTitle: string; ctaText: string; ctaLabel: string; ctaHref: string;
};
type PageRecord = { en: PageCopy; zh: PageCopy };

const pages: Record<string, PageRecord> = {
  services: {
    en: {
      eyebrow: "WHAT WE DO / CAPABILITY AREAS",
      title: "Technology capabilities, connected around your goals.",
      intro: "Explore the disciplines that shape PISIMAI TECHNOLOGY. We bring together intelligent systems, software, robotics, and integration thinking to approach practical technology challenges.",
      sections: [
        { title: "AI & Intelligent Systems", text: "Bring intelligence into products and workflows through AI-enabled applications, model and API integration, and thoughtfully designed intelligent experiences.", points: ["AI-enabled applications and assistants", "Model and API integration", "Intelligent workflow concepts"] },
        { title: "Software & Digital Platforms", text: "Design and develop digital experiences that make services easier to access, operate, and improve.", points: ["Websites and digital experiences", "Web applications and platforms", "Custom software development"] },
        { title: "Robotics & Automation", text: "Explore robotics capabilities through application-layer development, intelligent interaction, and automation-oriented solutions.", points: ["Robotics secondary development", "Intelligent interaction and control applications", "Automation concepts and integration"] },
        { title: "System Integration", text: "Connect software, services, devices, and data so that separate components can work as a coherent solution.", points: ["API and service integration", "Device and data connectivity", "Cross-system workflow design"] }
      ],
      ctaTitle: "Have a project in mind?",
      ctaText: "Tell us about the challenge, the environment, and the outcome you want to achieve.",
      ctaLabel: "Start a conversation", ctaHref: "/contact"
    },
    zh: {
      eyebrow: "我们的业务 / 核心能力",
      title: "围绕目标，连接多元技术能力。",
      intro: "了解构成 PISIMAI TECHNOLOGY 的专业领域。我们融合智能系统、软件、机器人与系统集成思维，探索切实可行的技术方案。",
      sections: [
        { title: "人工智能与智能系统", text: "通过 AI 应用、模型与 API 集成，以及精心设计的智能体验，将智能能力融入产品与工作流程。", points: ["AI 智能应用与助手", "模型与 API 集成", "智能工作流程设计"] },
        { title: "软件与数字平台", text: "设计并开发数字化体验，让服务更易于访问、运营与持续改进。", points: ["企业网站与数字体验", "Web 应用与平台", "定制软件开发"] },
        { title: "机器人与自动化", text: "通过应用层开发、智能交互与自动化方案，探索机器人技术的应用能力。", points: ["机器人二次开发", "智能交互与控制应用", "自动化方案与集成"] },
        { title: "系统集成", text: "连接软件、服务、设备与数据，让独立组件协同构成完整方案。", points: ["API 与服务集成", "设备与数据连接", "跨系统工作流程设计"] }
      ],
      ctaTitle: "您正在规划一个项目吗？",
      ctaText: "欢迎介绍您的挑战、应用环境以及希望实现的目标。",
      ctaLabel: "开启交流", ctaHref: "/contact"
    }
  },
  technology: {
    en: {
      eyebrow: "TECHNOLOGY / ENGINEERING PRINCIPLES",
      title: "The right technology is the one that works together.",
      intro: "Our technology perspective is built around interoperability, thoughtful architecture, and practical application. Tools matter—but how they connect matters just as much.",
      sections: [
        { title: "Intelligence with purpose", text: "Use AI and intelligent capabilities where they solve a real problem, improve an experience, or make a workflow more useful." },
        { title: "Software as the connective layer", text: "Build digital platforms and application logic that help people, services, and devices interact clearly." },
        { title: "Connected systems", text: "Design interfaces and integration paths that allow different technologies to exchange information and coordinate their work." },
        { title: "Engineering for the environment", text: "Consider security, reliability, performance, maintainability, and the practical conditions in which a solution will operate." }
      ],
      ctaTitle: "Explore how the pieces can work together.",
      ctaText: "Tell us about the environment and the outcome you want to create.",
      ctaLabel: "Explore our capabilities", ctaHref: "/services"
    },
    zh: {
      eyebrow: "技术 / 工程原则",
      title: "真正合适的技术，应当彼此协同。",
      intro: "我们的技术理念围绕互操作性、合理架构与实际应用展开。工具固然重要，但技术之间如何连接同样重要。",
      sections: [
        { title: "让智能发挥实际价值", text: "在 AI 能够解决真实问题、改善体验或提升工作流程价值时，合理引入智能能力。" },
        { title: "软件作为连接层", text: "构建数字平台与应用逻辑，让用户、服务与设备能够清晰地交互。" },
        { title: "构建互联系统", text: "设计接口与集成路径，让不同技术能够交换信息并协调工作。" },
        { title: "面向真实环境的工程", text: "综合考虑安全性、可靠性、性能、可维护性以及方案实际运行的环境条件。" }
      ],
      ctaTitle: "探索技术如何协同发挥作用。",
      ctaText: "欢迎介绍您的应用环境与希望实现的成果。",
      ctaLabel: "探索我们的能力", ctaHref: "/services"
    }
  },
  solutions: {
    en: {
      eyebrow: "SOLUTIONS / CONNECTED THINKING",
      title: "Start with the challenge. Engineer the right combination.",
      intro: "Technology works best when the pieces are designed to work together. We approach each opportunity by understanding the context first, then connecting the capabilities that make sense for the intended outcome.",
      sections: [
        { title: "Understand the real need", text: "Clarify the problem, users, operating environment, constraints, and the result that would make a meaningful difference." },
        { title: "Shape the right architecture", text: "Identify where software, AI, automation, APIs, devices, or existing systems can contribute—and where they should remain simple." },
        { title: "Connect and implement", text: "Bring the chosen components together with attention to usability, maintainability, and the realities of deployment." },
        { title: "Improve with purpose", text: "Treat delivery as a foundation for learning and refinement, not a reason to add complexity without value." }
      ],
      ctaTitle: "Let's explore a practical path forward.",
      ctaText: "Share the context and constraints. We can begin by understanding the problem before choosing the technology.",
      ctaLabel: "Discuss your project", ctaHref: "/contact"
    },
    zh: {
      eyebrow: "解决方案 / 协同思维",
      title: "从实际挑战出发，构建合适的技术组合。",
      intro: "当各个部分经过协同设计，技术才能发挥更大价值。我们首先理解实际场景，再围绕目标连接真正有意义的能力。",
      sections: [
        { title: "理解真实需求", text: "明确问题、用户、运行环境、限制条件，以及真正有价值的成果。" },
        { title: "规划合理架构", text: "判断软件、AI、自动化、API、设备与现有系统如何发挥作用，并保持不必要部分的简单。" },
        { title: "连接并实施", text: "将选定组件整合起来，同时关注易用性、可维护性与实际部署条件。" },
        { title: "持续优化", text: "将交付视为持续学习与改进的基础，而不是不断增加复杂度的理由。" }
      ],
      ctaTitle: "一起探索切实可行的方向。",
      ctaText: "欢迎分享您的场景与限制条件。我们可以先理解问题，再选择合适的技术。",
      ctaLabel: "讨论您的项目", ctaHref: "/contact"
    }
  },
  about: {
    en: {
      eyebrow: "ABOUT / PISIMAI TECHNOLOGY",
      title: "A connected mindset for a changing technology landscape.",
      intro: "PISIMAI TECHNOLOGY brings together a broad set of technology disciplines under one direction: making intelligent, useful, and connected solutions easier to build and apply.",
      sections: [
        { title: "What guides us", text: "We believe good engineering begins with understanding. The right solution is not necessarily the most complicated one; it is the one that fits the need, works in its environment, and can evolve responsibly." },
        { title: "How our disciplines connect", text: "AI can add intelligence to software. Software can coordinate devices and services. Robotics can extend digital capabilities into physical environments. Integration makes the parts work together." },
        { title: "Our areas of focus", text: "Our current capability direction spans AI and intelligent systems, software and digital platforms, robotics and automation, and system integration." }
      ],
      ctaTitle: "Build what comes next with us.",
      ctaText: "If your goals involve intelligent technology, software, automation, or connected systems, we'd be glad to hear about them.",
      ctaLabel: "Get in touch", ctaHref: "/contact"
    },
    zh: {
      eyebrow: "关于我们 / PISIMAI TECHNOLOGY",
      title: "以协同思维，应对不断变化的科技领域。",
      intro: "PISIMAI TECHNOLOGY 汇聚多元技术领域，围绕共同方向开展工作：让智能、实用、互联的解决方案更易于构建与应用。",
      sections: [
        { title: "我们的理念", text: "我们相信，优秀的工程始于理解。合适的方案不一定最复杂，而是能够满足需求、适应实际环境并持续发展。" },
        { title: "技术领域如何协同", text: "AI 为软件注入智能，软件协调设备与服务，机器人将数字能力延伸至物理环境，而系统集成让各个部分协同工作。" },
        { title: "我们的关注领域", text: "目前的技术方向涵盖人工智能与智能系统、软件与数字平台、机器人与自动化，以及系统集成。" }
      ],
      ctaTitle: "与我们一起探索未来。",
      ctaText: "如果您的目标涉及智能科技、软件、自动化或互联系统，我们期待了解更多。",
      ctaLabel: "联系我们", ctaHref: "/contact"
    }
  },
  contact: {
    en: {
      eyebrow: "CONTACT / START A CONVERSATION",
      title: "Tell us what you're looking to make possible.",
      intro: "Whether you're exploring an idea, planning a digital product, or connecting existing technologies, a useful conversation starts with understanding the challenge.",
      sections: [
        { title: "Share the context", text: "What are you trying to achieve? A short description of your goal and current situation is a helpful place to begin." },
        { title: "Explore the right capabilities", text: "Your project may involve software, AI, robotics, system integration, or a combination. We can start with the problem rather than assuming a particular technology." },
        { title: "A direct contact channel", text: "Use the project inquiry form below to share your requirements. Your message will be sent directly to our company inbox." }
      ],
      ctaTitle: "A thoughtful first step.",
      ctaText: "Prepare a short project brief with your goals, timeline, and any important technical constraints.",
      ctaLabel: "Explore our services", ctaHref: "/services"
    },
    zh: {
      eyebrow: "联系 / 开启交流",
      title: "告诉我们，您希望实现什么可能。",
      intro: "无论您正在探索一个想法、规划数字产品，还是连接现有技术，有价值的交流都始于对挑战的理解。",
      sections: [
        { title: "介绍项目背景", text: "您希望实现什么目标？简要说明目标与当前情况，是很好的开始。" },
        { title: "探索合适的技术能力", text: "项目可能涉及软件、人工智能、机器人、系统集成或多种技术组合。我们可以从问题出发，而不是预设技术。" },
        { title: "联系渠道", text: "您可以使用下方项目咨询表单介绍需求，消息将直接发送至我们的公司邮箱。" }
      ],
      ctaTitle: "从清晰的第一步开始。",
      ctaText: "您可以先准备简要项目说明，包括目标、时间安排与重要技术限制。",
      ctaLabel: "了解我们的服务", ctaHref: "/services"
    }
  },
  "services/ai-intelligent-systems": {
    en: {
      eyebrow: "CAPABILITY / 01",
      title: "AI & Intelligent Systems",
      intro: "Bring intelligence into products and workflows through useful AI applications, model and API integration, and carefully considered intelligent experiences.",
      sections: [
        { title: "AI-enabled applications", text: "Explore how language models, vision capabilities, and other AI services can support real user needs and product experiences." },
        { title: "Model and API integration", text: "Connect suitable AI models and services to applications through clear interfaces, controlled data flows, and maintainable integration patterns." },
        { title: "Intelligent workflows", text: "Identify repetitive or information-heavy processes where AI assistance can improve the experience while keeping people in control." }
      ],
      ctaTitle: "Have an AI use case to explore?",
      ctaText: "Start with the task, the users, and the outcome you want—not just the model.",
      ctaLabel: "Discuss an AI project", ctaHref: "/contact"
    },
    zh: {
      eyebrow: "技术领域 / 01",
      title: "人工智能与智能系统",
      intro: "通过实用的 AI 应用、模型与 API 集成，以及经过审慎设计的智能体验，将智能能力融入产品与工作流程。",
      sections: [
        { title: "AI 智能应用", text: "探索语言模型、视觉能力及其他 AI 服务如何支持真实用户需求与产品体验。" },
        { title: "模型与 API 集成", text: "通过清晰接口、受控数据流与可维护的集成方式，将合适的 AI 模型和服务连接到应用中。" },
        { title: "智能工作流程", text: "识别适合 AI 辅助的重复性或信息密集型流程，同时确保人员保有必要的控制权。" }
      ],
      ctaTitle: "正在探索 AI 应用场景？",
      ctaText: "从任务、用户与预期成果出发，而不仅仅是模型本身。",
      ctaLabel: "讨论 AI 项目", ctaHref: "/contact"
    }
  },
  "services/software-digital-platforms": {
    en: {
      eyebrow: "CAPABILITY / 02",
      title: "Software & Digital Platforms",
      intro: "Create digital experiences that help people access services, work with information, and interact with products more effectively.",
      sections: [
        { title: "Websites and digital experiences", text: "Build clear, responsive web experiences that communicate value and make the next step easy to understand." },
        { title: "Web applications and platforms", text: "Develop application interfaces and workflows around the needs of users, teams, and the wider service." },
        { title: "Custom software development", text: "Shape software around a defined problem, with attention to maintainability, security, and a sensible path for future growth." }
      ],
      ctaTitle: "Planning a digital product?",
      ctaText: "Let's understand the users, essential workflows, and the job the product needs to do.",
      ctaLabel: "Discuss a software project", ctaHref: "/contact"
    },
    zh: {
      eyebrow: "技术领域 / 02",
      title: "软件与数字平台",
      intro: "打造数字化体验，帮助用户更高效地获取服务、处理信息并与产品互动。",
      sections: [
        { title: "网站与数字体验", text: "构建清晰、响应式的网站体验，有效传达价值并让用户轻松理解下一步操作。" },
        { title: "Web 应用与平台", text: "围绕用户、团队与整体服务需求，开发应用界面与工作流程。" },
        { title: "定制软件开发", text: "围绕明确的问题设计软件，同时关注可维护性、安全性与未来扩展路径。" }
      ],
      ctaTitle: "正在规划数字产品？",
      ctaText: "让我们先了解用户、核心流程以及产品需要解决的问题。",
      ctaLabel: "讨论软件项目", ctaHref: "/contact"
    }
  },
  "services/robotics-automation": {
    en: {
      eyebrow: "CAPABILITY / 03",
      title: "Robotics & Automation",
      intro: "Explore the connection between intelligent software and physical systems through robotics application development, secondary development, and automation-oriented integration.",
      sections: [
        { title: "Robotics secondary development", text: "Develop application-layer capabilities on supported robotic platforms while respecting the boundaries of the underlying hardware and vendor SDK." },
        { title: "Intelligent interaction", text: "Connect speech, vision, and language capabilities to create more natural ways for people to interact with robotic systems." },
        { title: "Automation and integration", text: "Consider how robotic applications can coordinate with software, services, and operational workflows." }
      ],
      ctaTitle: "Exploring a robotics application?",
      ctaText: "Share the platform, application environment, and capabilities you want to develop.",
      ctaLabel: "Discuss robotics", ctaHref: "/contact"
    },
    zh: {
      eyebrow: "技术领域 / 03",
      title: "机器人与自动化",
      intro: "通过机器人应用开发、二次开发与自动化集成，探索智能软件与物理系统之间的连接。",
      sections: [
        { title: "机器人二次开发", text: "在支持的机器人平台上开发应用层能力，同时遵循底层硬件与厂商 SDK 的技术边界。" },
        { title: "智能交互", text: "结合语音、视觉与语言能力，为人与机器人系统创造更自然的交互方式。" },
        { title: "自动化与集成", text: "探索机器人应用如何与软件、服务及实际运营流程协同工作。" }
      ],
      ctaTitle: "正在探索机器人应用？",
      ctaText: "欢迎介绍平台、应用环境以及希望开发的能力。",
      ctaLabel: "讨论机器人项目", ctaHref: "/contact"
    }
  },
  "services/system-integration": {
    en: {
      eyebrow: "CAPABILITY / 04",
      title: "System Integration",
      intro: "Connect software, services, devices, and data into systems that work together instead of operating as isolated parts.",
      sections: [
        { title: "API and service integration", text: "Connect applications and services through well-defined interfaces and predictable data exchange." },
        { title: "Device and data connectivity", text: "Consider how supported devices and data sources can participate in a wider application or operational environment." },
        { title: "Cross-system workflows", text: "Map how information and actions move between components, with attention to reliability, visibility, and maintainability." }
      ],
      ctaTitle: "Need separate systems to work together?",
      ctaText: "Describe the systems involved and where the current gaps or friction occur.",
      ctaLabel: "Discuss integration", ctaHref: "/contact"
    },
    zh: {
      eyebrow: "技术领域 / 04",
      title: "系统集成",
      intro: "连接软件、服务、设备与数据，让各个部分协同工作，而不是彼此孤立。",
      sections: [
        { title: "API 与服务集成", text: "通过定义清晰的接口与稳定的数据交换方式连接应用和服务。" },
        { title: "设备与数据连接", text: "探索受支持的设备与数据源如何融入更广泛的应用或运营环境。" },
        { title: "跨系统工作流程", text: "梳理信息与操作在各组件之间的流动方式，并关注可靠性、可见性与可维护性。" }
      ],
      ctaTitle: "需要让不同系统协同工作？",
      ctaText: "欢迎介绍涉及的系统，以及当前存在的断点或效率问题。",
      ctaLabel: "讨论系统集成", ctaHref: "/contact"
    }
  }
};

const slugs = Object.keys(pages);
export function generateStaticParams() {
  return (["en", "zh"] as const).flatMap((locale) => slugs.map((slug) => ({ locale, slug: slug.split("/") })));
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return { robots: { index: false, follow: false } };
  const page = pages[slug.join("/")];
  if (!page) return { robots: { index: false, follow: false } };
  const content = page[rawLocale];
  const localizedPath = "/" + rawLocale + "/" + slug.join("/");
  return {
    title: content.title,
    description: content.intro,
    alternates: {
      canonical: localizedPath,
      languages: {
        en: "/en/" + slug.join("/"),
        "zh-CN": "/zh/" + slug.join("/"),
        "x-default": "/en/" + slug.join("/")
      }
    },
    openGraph: {
      type: "website",
      locale: rawLocale === "zh" ? "zh_CN" : "en_US",
      url: localizedPath,
      title: content.title,
      description: content.intro
    }
  };
}
export default async function ContentPage({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const page = pages[slug.join("/")];
  if (!page) notFound();
  const locale: Locale = rawLocale;
  const content = page[locale];
  const serviceSlugs = ["services/ai-intelligent-systems", "services/software-digital-platforms", "services/robotics-automation", "services/system-integration"];
  const isServices = slug[0] === "services";
  const pageKey = slug.join("/");
  const visualKind =
    pageKey === "services" ? "capabilities" :
    pageKey === "technology" ? "technology" :
    pageKey === "solutions" ? "workflow" :
    pageKey === "about" ? "architecture" :
    pageKey === "contact" ? "signal" :
    pageKey.endsWith("ai-intelligent-systems") ? "neural" :
    pageKey.endsWith("software-digital-platforms") ? "software" :
    pageKey.endsWith("robotics-automation") ? "robotics" : "integration";
  const visualLabel: Record<string, string> = locale === "zh"
    ? { capabilities: "能力矩阵", technology: "技术架构", workflow: "解决方案架构", architecture: "协同技术核心", signal: "连接已就绪", neural: "智能网络", software: "数字平台", robotics: "机器人系统", integration: "系统互联" }
    : { capabilities: "CAPABILITY MATRIX", technology: "ENGINEERING LAYERS", workflow: "SOLUTION ARCHITECTURE", architecture: "CONNECTED TECHNOLOGY CORE", signal: "SIGNAL READY", neural: "NEURAL NETWORK", software: "DIGITAL PLATFORM", robotics: "ROBOTIC SYSTEM", integration: "SYSTEM INTEGRATION" };
  const labels = locale === "zh"
    ? ["人工智能与智能系统", "软件与数字平台", "机器人与自动化", "系统集成"]
    : ["AI & Intelligent Systems", "Software & Digital Platforms", "Robotics & Automation", "System Integration"];
  return (
    <>
      <SiteHeader locale={locale} currentPath={slug.join("/")} />
      <main className="inner-page">
        <section className={"inner-page-hero" + (pageKey === "about" ? " about-page-hero" : "")}>
          <div className="inner-hero-grid" aria-hidden="true" />
          <div className="inner-hero-glow" aria-hidden="true" />
          <div className={"inner-page-visual page-visual-" + visualKind} aria-hidden="true">
            <div className="page-visual-caption"><span className="kicker-dot" />{visualLabel[visualKind]}</div>
            {visualKind === "capabilities" && <div className="scene scene-service-lab"><div className="lab-platform" /><div className="lab-bus"><i /><i /><i /><i /></div><div className="lab-module lab-ai"><span className="lab-module-cap">01 / AI</span><div className="lab-chip"><i /><i /><i /><i /><b /></div><small>INFERENCE CORE</small></div><div className="lab-module lab-software"><span className="lab-module-cap">02 / SOFTWARE</span><div className="lab-screen"><i /><i /><i /><b /></div><small>DIGITAL PLATFORM</small></div><div className="lab-module lab-robotics"><span className="lab-module-cap">03 / ROBOTICS</span><div className="lab-mini-arm"><i /><b /><em /></div><small>PHYSICAL SYSTEMS</small></div><div className="lab-module lab-integration"><span className="lab-module-cap">04 / SYSTEMS</span><div className="lab-port-grid"><i /><i /><i /><i /></div><small>CONNECTED SERVICES</small></div><span className="lab-data-stream stream-a" /><span className="lab-data-stream stream-b" /><span className="lab-data-stream stream-c" /><span className="lab-data-stream stream-d" /></div>}
            {visualKind === "technology" && <div className="scene scene-tech-platform"><div className="tech-platform-grid" /><div className="tech-platform-core"><span>P</span><i /><b /></div><div className="tech-platform-layer layer-app"><i /><i /><i /><span>APPLICATIONS</span></div><div className="tech-platform-layer layer-intel"><i /><i /><i /><span>INTELLIGENCE</span></div><div className="tech-platform-layer layer-infra"><i /><i /><i /><span>INFRASTRUCTURE</span></div><div className="tech-platform-link link-left" /><div className="tech-platform-link link-right" /><div className="tech-platform-readout">SYSTEM ARCHITECTURE <b>01—03</b></div></div>}
            {visualKind === "workflow" && <div className="scene scene-solution-map">
              <div className="solution-map-grid"/>
              <div className="solution-map-orbit"/>
              <div className="solution-map-hub"><span>PISIMAI</span><b>SOLUTION CORE</b><i/></div>
              <div className="solution-map-node solution-map-ai"><span>01 / INTELLIGENCE</span><b>AI &amp; MODELS</b><small>Inference · APIs</small></div>
              <div className="solution-map-node solution-map-software"><span>02 / DIGITAL</span><b>SOFTWARE</b><small>Products · Data</small></div>
              <div className="solution-map-node solution-map-devices"><span>03 / CONNECTED</span><b>DEVICES &amp; SYSTEMS</b><small>Robotics · IoT</small></div>
              <i className="solution-map-link solution-map-link-a"/>
              <i className="solution-map-link solution-map-link-b"/>
              <i className="solution-map-link solution-map-link-c"/>
              <div className="solution-map-outcomes"><span>ONE COHERENT SOLUTION</span><b>USEFUL BY DESIGN</b><b>READY TO EVOLVE</b></div>
            </div>}
            {visualKind === "architecture" && <div className="scene scene-about-ecosystem"><div className="about-ecosystem-orbit orbit-a" /><div className="about-ecosystem-orbit orbit-b" /><div className="about-ecosystem-core"><span>P</span><small>PISIMAI</small></div><div className="about-ecosystem-node node-ai"><b>AI</b><span>INTELLIGENCE</span></div><div className="about-ecosystem-node node-software"><b>SW</b><span>SOFTWARE</span></div><div className="about-ecosystem-node node-robotics"><b>RO</b><span>ROBOTICS</span></div><div className="about-ecosystem-node node-integration"><b>SI</b><span>INTEGRATION</span></div><i className="about-ecosystem-link link-a" /><i className="about-ecosystem-link link-b" /><i className="about-ecosystem-link link-c" /><i className="about-ecosystem-link link-d" /><div className="about-ecosystem-foot">ONE CONNECTED TECHNOLOGY PARTNER</div></div>}
            {visualKind === "signal" && <div className="scene scene-signal"><div className="signal-envelope"><span /><i /><b /></div><div className="signal-wave signal-wave-a" /><div className="signal-wave signal-wave-b" /><div className="signal-wave signal-wave-c" /><div className="signal-dot" /><span className="signal-status">CHANNEL READY</span></div>}
            {visualKind === "neural" && (
              <div className="scene scene-neural">
                <div className="ai-lab-backdrop"><span>MODEL INFERENCE /  GPU CLUSTER</span><i /><i /><i /></div>
                <div className="ai-server-rack">
                  <div className="ai-rack-top"><span>PISIMAI</span><b>AI COMPUTE / 01</b></div>
                  <div className="ai-rack-unit ai-rack-unit-main">
                    <div className="ai-rack-brand"><i /> INFERENCE NODE <small>H100 / GPU</small></div>
                    <div className="ai-rack-vents"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="ai-rack-lights"><i /><i /><i /><i /></div>
                  </div>
                  <div className="ai-rack-unit">
                    <div className="ai-rack-drive"><i /><i /><i /><i /></div>
                    <div className="ai-rack-vents"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="ai-rack-lights"><i /><i /><i /></div>
                  </div>
                  <div className="ai-rack-unit">
                    <div className="ai-rack-drive"><i /><i /><i /><i /></div>
                    <div className="ai-rack-vents"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="ai-rack-lights"><i /><i /></div>
                  </div>
                  <div className="ai-rack-base"><span>COMPUTE</span><span>NETWORK</span><span>STORAGE</span></div>
                </div>
                <div className="ai-hologram">
                  <div className="ai-holo-ring ai-holo-ring-a" /><div className="ai-holo-ring ai-holo-ring-b" />
                  <div className="ai-holo-core"><span>AI</span><small>MODEL</small></div>
                  <i className="ai-holo-node ai-holo-node-a" /><i className="ai-holo-node ai-holo-node-b" /><i className="ai-holo-node ai-holo-node-c" /><i className="ai-holo-node ai-holo-node-d" />
                  <b className="ai-holo-link ai-holo-link-a" /><b className="ai-holo-link ai-holo-link-b" /><b className="ai-holo-link ai-holo-link-c" />
                </div>
                <div className="ai-lab-readout ai-lab-readout-a"><span>01</span> LANGUAGE MODELS <i /></div>
                <div className="ai-lab-readout ai-lab-readout-b"><span>02</span> VISION / API <i /></div>
                <span className="neural-label">INTELLIGENCE / INFERENCE ACTIVE</span>
              </div>
            )}
            {visualKind === "software" && <div className="scene scene-software"><div className="software-window"><div className="software-top"><i /><i /><i /><span>workspace.app</span></div><div className="software-sidebar"><b /><b /><b /><b /></div><div className="software-content"><span /><span /><span /><div /><div /><i /></div></div><div className="software-panel"><b /><b /><b /></div><span className="software-cursor" /></div>}
            {visualKind === "robotics" && <div className="scene scene-robotics"><div className="robot-base" /><div className="robot-joint robot-joint-a" /><div className="robot-arm robot-arm-a" /><div className="robot-joint robot-joint-b" /><div className="robot-arm robot-arm-b" /><div className="robot-joint robot-joint-c" /><div className="robot-tool"><i /><b /></div><div className="robot-floor" /></div>}
            {visualKind === "integration" && <div className="scene scene-integration"><div className="integration-bus" /><div className="integration-hub"><i /><i /><i /><i /></div><div className="integration-port port-a"><b /></div><div className="integration-port port-b"><b /></div><div className="integration-port port-c"><b /></div><div className="integration-port port-d"><b /></div><span className="integration-packet packet-a" /><span className="integration-packet packet-b" /><span className="integration-packet packet-c" /></div>}
            <div className="page-visual-readout"><span>SYS / 0{slugs.indexOf(pageKey) + 1}</span><i /><span>ACTIVE</span></div>
          </div>
          <div className="inner-page-hero-content">
            <p className="section-kicker"><span className="kicker-dot" />{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="inner-page-intro">{content.intro}</p>
            <div className="inner-breadcrumb"><Link href={"/" + locale}>{locale === "zh" ? "首页" : "HOME"}</Link><span>/</span><span>{slug.map((part) => part.replaceAll("-", " ")).join(" / ").toUpperCase()}</span></div>
          </div>
          <div className="inner-hero-index">PST <span>/</span> {String(slugs.indexOf(slug.join("/")) + 1).padStart(2, "0")}</div>
        </section>
        <section className="inner-content-section">
          <div className="inner-content-heading">
            <p className="section-kicker">{locale === "zh" ? "专业领域与方法" : "CAPABILITIES & APPROACH"}</p>
            <span>{locale === "zh" ? "PISIMAI / 技术" : "PISIMAI / TECHNOLOGY"}</span>
          </div>
          <div className="inner-content-grid">
            {content.sections.map((section, index) => (
              <article className="inner-content-card" key={section.title}>
                <div className="inner-card-index">0{index + 1}<i /></div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </article>
            ))}
          </div>
          {isServices && (
            <div className="inner-service-links">
              {serviceSlugs.map((serviceSlug, index) => {
                const isCurrentService = pageKey === serviceSlug;
                const content = <>
                  <span className="service-link-number">0{index + 1}</span>
                  <strong>{labels[index]}</strong>
                  <span className={"service-view-button" + (isCurrentService ? " is-current" : "")} aria-disabled={isCurrentService || undefined} aria-current={isCurrentService ? "page" : undefined}>{locale === "zh" ? "查看" : "View"}</span>
                </>;
                return isCurrentService ? (
                  <div className="service-link-current" key={serviceSlug}>{content}</div>
                ) : (
                  <Link href={"/" + locale + "/" + serviceSlug} key={serviceSlug}>{content}</Link>
                );
              })}
            </div>
          )}
        </section>
        <PageExperienceSections locale={locale} pageKey={pageKey} />
        {pageKey === "contact" && <ContactForm locale={locale} />}
        <section className="inner-page-cta">
          <div><p className="section-kicker">{locale === "zh" ? "下一步" : "WHAT'S NEXT"}</p><h2>{content.ctaTitle}</h2><p>{content.ctaText}</p></div>
          <Link className="button button-primary" href={"/" + locale + content.ctaHref}>{content.ctaLabel}<span aria-hidden="true"><svg className="ui-arrow-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 12 12 4M5 4h7v7" /></svg></span></Link>
        </section>
      </main>
      <SiteFooter locale={locale} currentPath={slug.join("/")} />
    </>
  );
}
