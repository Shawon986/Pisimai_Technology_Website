import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const asset = (name: string) =>
  "https://raw.githubusercontent.com/Shawon986/Pisimai_Technology_Website/master/Exhibition%20assets/" + name;

const content = {
  en: {
    actionLabel: "PISIMAI / TECHNOLOGY IN ACTION",
    actionTitle: "Technology is best understood when you can experience it.",
    actionText: "Explore selected demonstrations and exhibition work that bring intelligent systems and robotics into a real-world setting.",
    aiTitle: "AI Photobooth",
    aiText: "An interactive imaging experience that gives visitors a hands-on introduction to creative AI applications.",
    robotTitle: "Qiyuan T1 Pro",
    robotText: "A humanoid robotics showcase exploring physical design, transformable structure, and the possibilities of human–robot interaction.",
    labLabel: "PISIMAI / INNOVATION & DEVELOPMENT",
    labTitle: "Connect ideas with engineering.",
    labText: "Our work brings together software, intelligent systems, robotics, and integration. Each discipline can contribute to a practical solution, depending on the challenge and its environment.",
    labItems: ["Explore the problem and its context", "Select suitable technologies and components", "Develop and connect the software and systems", "Test the experience against its intended use"],
    industryLabel: "PISIMAI / INDUSTRY APPLICATIONS",
    industryTitle: "Technology shaped around real environments.",
    industryText: "These are application areas where connected software, AI, and automation may create value. They are solution directions—not claims of completed client deployments.",
    industries: [
      ["01", "Smart operations", "Workflow support, connected information, and automation concepts for operational environments."],
      ["02", "Education & research", "Interactive learning experiences, robotics demonstrations, and tools for exploration."],
      ["03", "Commercial experiences", "AI-enabled engagement, digital platforms, and customer-facing interactive applications."],
      ["04", "Connected environments", "Software and device integration that helps information move between systems."]
    ],
    processLabel: "PISIMAI / FROM CONCEPT TO REALITY",
    processTitle: "A considered path from challenge to implementation.",
    processText: "A clear engineering process helps keep the solution aligned with the actual need—not technology for its own sake.",
    steps: [
      ["01", "Discover", "Understand the objective, users, constraints, and operating context."],
      ["02", "Design", "Map the experience, architecture, and technologies required."],
      ["03", "Develop", "Build the software, integrations, and prototype components."],
      ["04", "Validate", "Review behavior, usability, and readiness against agreed requirements."]
    ],
    ecosystemLabel: "PISIMAI / CONNECTED TECHNOLOGY",
    ecosystemTitle: "Different disciplines. One connected system.",
    ecosystemText: "A solution can combine the layers that make sense for its requirements—from intelligent models and applications to devices, data, and integration.",
    layers: [["AI", "Intelligence"], ["DEV", "Software"], ["ROB", "Robotics"], ["DATA", "Information"], ["SYS", "Integration"]],
    globalLabel: "PISIMAI / GLOBAL ENGAGEMENT",
    globalTitle: "Taking technology into the world.",
    globalText: "Our November 2026 exhibition activity brought the AI Photobooth and Qiyuan T1 Pro showcase to audiences in two Indonesian cities.",
    manado: "Manado, North Sulawesi",
    jakarta: "Jakarta, Java",
    exhibitionNote: "Explore the exhibition gallery and event details",
    contact: "Discuss a project"
  },
  zh: {
    actionLabel: "PISIMAI / 科技实践",
    actionTitle: "让技术在真实体验中展现价值。",
    actionText: "通过精选展示与展会记录，了解智能系统和机器人技术如何走进真实场景。",
    aiTitle: "AI 智能拍照亭",
    aiText: "通过互动影像体验，让参观者亲身了解人工智能在创意应用中的可能性。",
    robotTitle: "启元 T1 Pro",
    robotText: "人形机器人展示，探索其结构设计、可变形形态以及人机交互的更多可能。",
    labLabel: "PISIMAI / 创新与开发",
    labTitle: "让创意与工程相连接。",
    labText: "我们的技术方向涵盖软件、智能系统、机器人与系统集成。根据实际挑战与应用环境，选择合适的专业领域共同构建方案。",
    labItems: ["理解问题与实际应用环境", "选择合适的技术与系统组件", "开发软件并连接相关系统", "围绕预期用途进行测试与验证"],
    industryLabel: "PISIMAI / 行业应用方向",
    industryTitle: "围绕真实场景构建技术方案。",
    industryText: "以下展示软件、人工智能与自动化技术可能发挥价值的应用方向，并非已完成的客户部署案例。",
    industries: [
      ["01", "智慧运营", "面向运营场景的流程支持、信息互联与自动化构想。"],
      ["02", "教育与科研", "互动学习体验、机器人展示与探索型工具。"],
      ["03", "商业体验", "人工智能互动、数字平台与面向客户的交互应用。"],
      ["04", "互联环境", "连接软件与设备，促进不同系统之间的信息协同。"]
    ],
    processLabel: "PISIMAI / 从构想到落地",
    processTitle: "从实际挑战出发，稳步推进工程实现。",
    processText: "清晰的工程流程有助于让技术方案始终围绕真实需求，而不是为了技术而堆叠技术。",
    steps: [
      ["01", "需求探索", "理解目标、用户、限制条件与实际环境。"],
      ["02", "方案设计", "规划体验、系统架构与所需技术。"],
      ["03", "开发构建", "开发软件、系统集成与原型组件。"],
      ["04", "测试验证", "依据约定需求检查功能、易用性与实施准备情况。"]
    ],
    ecosystemLabel: "PISIMAI / 互联技术",
    ecosystemTitle: "多元专业领域，协同构建完整系统。",
    ecosystemText: "根据项目需求，将智能模型、应用软件、设备、数据与系统集成等技术层有机连接。",
    layers: [["AI", "人工智能"], ["DEV", "软件开发"], ["ROB", "机器人"], ["DATA", "数据"], ["SYS", "系统集成"]],
    globalLabel: "PISIMAI / 全球交流",
    globalTitle: "让技术走向更广阔的世界。",
    globalText: "2026年11月，我们在印度尼西亚的两座城市展示了 AI 智能拍照亭与启元 T1 Pro 机器人。",
    manado: "北苏拉威西 · 万鸦老",
    jakarta: "爪哇岛 · 雅加达",
    exhibitionNote: "查看展会照片与活动详情",
    contact: "洽谈项目合作"
  }
} as const;

export function CapabilityShowcase({ locale }: { locale: Locale }) {
  const t = content[locale];
  const zh = locale === "zh";
  return (
    <div className="capability-showcase">
      <section className="action-showcase section-wrap" id="technology-in-action">
        <div className="showcase-heading">
          <p className="section-kicker">{t.actionLabel}</p>
          <h2>{t.actionTitle}</h2>
          <p>{t.actionText}</p>
        </div>
        <div className="action-grid">
          <article className="action-card action-card-ai">
            <div className="action-image">
              <Image src={asset("Weixin%20Image_20261111094919_155_65.jpg")} alt={zh ? "展会现场的 AI 智能拍照亭" : "AI Photobooth at the exhibition"} fill sizes="(max-width: 760px) 100vw, 50vw" quality={76} />
              <span className="action-image-index">DEMO / 01</span>
            </div>
            <div className="action-copy"><span>ARTIFICIAL INTELLIGENCE</span><h3>{t.aiTitle}</h3><p>{t.aiText}</p></div>
          </article>
          <article className="action-card action-card-robot">
            <div className="action-image">
              <Image src={asset("Weixin%20Image_20261111094927_162_65.jpg")} alt={zh ? "展会现场的启元 T1 Pro 人形机器人" : "Qiyuan T1 Pro humanoid robot at the exhibition"} fill sizes="(max-width: 760px) 100vw, 50vw" quality={76} />
              <span className="action-image-index">SHOWCASE / 02</span>
            </div>
            <div className="action-copy"><span>HUMANOID ROBOTICS</span><h3>{t.robotTitle}</h3><p>{t.robotText}</p></div>
          </article>
        </div>
      </section>

      <section className="innovation-section section-wrap" id="innovation">
        <div className="innovation-intro"><p className="section-kicker">{t.labLabel}</p><h2>{t.labTitle}</h2><p>{t.labText}</p></div>
        <div className="innovation-list">{t.labItems.map((item, i) => <div className="innovation-row" key={item}><span>0{i + 1}</span><p>{item}</p><i aria-hidden="true">↗</i></div>)}</div>
      </section>

      <section className="industry-section section-wrap" id="industry-applications">
        <div className="showcase-heading"><p className="section-kicker">{t.industryLabel}</p><h2>{t.industryTitle}</h2><p>{t.industryText}</p></div>
        <div className="industry-grid">{t.industries.map(([number, title, text]) => <article className="industry-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><i aria-hidden="true">↗</i></article>)}</div>
      </section>

      <section className="process-section section-wrap" id="development-process">
        <div className="showcase-heading"><p className="section-kicker">{t.processLabel}</p><h2>{t.processTitle}</h2><p>{t.processText}</p></div>
        <div className="process-grid">{t.steps.map(([number, title, text]) => <article className="process-step" key={number}><span>{number}</span><div className="process-mark"><i /><i /><i /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="ecosystem-section section-wrap" id="technology-ecosystem">
        <div className="ecosystem-copy"><p className="section-kicker">{t.ecosystemLabel}</p><h2>{t.ecosystemTitle}</h2><p>{t.ecosystemText}</p></div>
        <div className="ecosystem-visual"><div className="ecosystem-core"><span>PISIMAI</span><small>CONNECTED CORE</small></div>{t.layers.map(([short, label], i) => <div className={"ecosystem-node ecosystem-node-" + (i + 1)} key={short}><b>{short}</b><span>{label}</span></div>)}<div className="ecosystem-orbit ecosystem-orbit-a" /><div className="ecosystem-orbit ecosystem-orbit-b" /></div>
      </section>

      <section className="global-section section-wrap" id="global-engagement">
        <div className="global-heading"><p className="section-kicker">{t.globalLabel}</p><h2>{t.globalTitle}</h2><p>{t.globalText}</p></div>
        <div className="global-stops"><article><span>04 / NOV / 2026</span><h3>{t.manado}</h3><small>INDONESIA</small></article><article><span>08 / NOV / 2026</span><h3>{t.jakarta}</h3><small>INDONESIA</small></article></div>
        <div className="global-footer"><Link href={"/" + locale + "#exhibitions"}>{t.exhibitionNote}<b aria-hidden="true">↗</b></Link><Link className="global-contact" href={"/" + locale + "/contact"}>{t.contact}<b aria-hidden="true">↗</b></Link></div>
      </section>
    </div>
  );
}
