"use client";

import { useState } from "react";

type Locale = "en" | "zh";
type Props = { locale: Locale; pageKey: string };

const copy = {
  en: {
    eyebrow: "INTERACTIVE / ENGINEERING EXPLORER",
    title: "Explore how the pieces come together.",
    intro: "Select a stage to see how we turn a technical challenge into a connected, usable outcome.",
    stages: [
      { label: "Discover", code: "01 / CONTEXT", title: "Understand before choosing technology.", text: "We map the people, goals, constraints, existing tools, and operating environment. This keeps the solution focused on the problem that matters.", items: ["User and workflow needs", "Current systems and constraints", "Success criteria and priorities"] },
      { label: "Architect", code: "02 / DESIGN", title: "Shape a system that fits its environment.", text: "We define the components, interfaces, information flow, and boundaries before implementation—keeping the architecture understandable and adaptable.", items: ["System and data-flow map", "Integration and interface plan", "Security and reliability considerations"] },
      { label: "Engineer", code: "03 / IMPLEMENT", title: "Build the useful parts and connect them.", text: "Software, AI services, devices, and automation are developed or integrated around clear responsibilities, with attention to usability and maintainability.", items: ["Application and service development", "API, model, or device integration", "Practical iteration and feedback"] },
      { label: "Validate", code: "04 / VERIFY", title: "Check the result in its real context.", text: "We review the key workflows, integration behavior, performance, and operational fit so the delivered system is ready for its intended use.", items: ["Workflow and integration checks", "Performance and reliability review", "Handover and next-step clarity"] }
    ],
    note: "A practical process, not a fixed technology stack.",
    status: "SELECT A STAGE",
    modes: {
      services: ["Capability discovery", "Solution architecture", "Implementation", "Validation"],
      solutions: ["Understand the challenge", "Design the combination", "Connect the system", "Measure the outcome"],
      technology: ["Assess the environment", "Define the architecture", "Engineer interfaces", "Verify system behavior"],
      about: ["Listen and understand", "Think across disciplines", "Build with purpose", "Improve responsibly"],
      contact: ["Share your context", "Identify the right expertise", "Plan a first step", "Agree on next actions"],
      ai: ["Define the AI use case", "Select models and data flows", "Integrate into the product", "Evaluate usefulness and safety"],
      software: ["Map users and workflows", "Design the platform", "Develop the experience", "Test and refine"],
      robotics: ["Understand the robot platform", "Plan application-layer architecture", "Develop interaction and automation", "Test in the operating environment"],
      integration: ["Map systems and devices", "Define interfaces and data", "Connect services and workflows", "Verify end-to-end operation"]
    }
  },
  zh: {
    eyebrow: "交互体验 / 工程探索",
    title: "探索各项技术如何协同运作。",
    intro: "选择一个阶段，了解我们如何将技术挑战转化为互联且实用的成果。",
    stages: [
      { label: "探索", code: "01 / 场景", title: "先理解需求，再选择技术。", text: "梳理用户、目标、限制条件、现有工具与运行环境，让方案始终围绕真正重要的问题展开。", items: ["用户与工作流程需求", "现有系统与限制条件", "成功标准与优先事项"] },
      { label: "架构", code: "02 / 设计", title: "构建适合实际环境的系统。", text: "在实施前明确组件、接口、信息流与系统边界，让整体架构清晰且便于调整。", items: ["系统与数据流规划", "集成与接口方案", "安全性与可靠性考量"] },
      { label: "工程", code: "03 / 实施", title: "开发关键能力并连接各个部分。", text: "围绕清晰的职责开发或集成软件、AI 服务、设备与自动化能力，同时关注易用性与可维护性。", items: ["应用与服务开发", "API、模型或设备集成", "实践迭代与反馈"] },
      { label: "验证", code: "04 / 验证", title: "在真实场景中检查最终成果。", text: "检查核心流程、集成行为、性能与运行适配情况，确保交付系统符合预期用途。", items: ["工作流程与集成检查", "性能与可靠性评估", "交付与后续步骤说明"] }
    ],
    note: "以实际需求为导向，而非固定的技术堆栈。",
    status: "请选择阶段",
    modes: {
      services: ["能力需求探索", "解决方案架构", "工程实施", "验证与评估"],
      solutions: ["理解实际挑战", "设计技术组合", "连接系统组件", "评估最终成果"],
      technology: ["评估运行环境", "定义系统架构", "设计工程接口", "验证系统行为"],
      about: ["倾听并理解", "跨领域协同思考", "围绕目标构建", "持续负责地改进"],
      contact: ["介绍项目背景", "确定所需专业能力", "规划第一步", "明确后续行动"],
      ai: ["明确 AI 应用场景", "选择模型与数据流", "集成至产品", "评估实用性与安全性"],
      software: ["梳理用户与流程", "设计数字平台", "开发数字体验", "测试与优化"],
      robotics: ["了解机器人平台", "规划应用层架构", "开发交互与自动化", "在实际环境中测试"],
      integration: ["梳理系统与设备", "定义接口与数据", "连接服务与流程", "验证端到端运行"]
    }
  }
} as const;

function getMode(pageKey: string) {
  if (pageKey === "services") return "services";
  if (pageKey === "solutions") return "solutions";
  if (pageKey === "technology") return "technology";
  if (pageKey === "about") return "about";
  if (pageKey === "contact") return "contact";
  if (pageKey.endsWith("ai-intelligent-systems")) return "ai";
  if (pageKey.endsWith("software-digital-platforms")) return "software";
  if (pageKey.endsWith("robotics-automation")) return "robotics";
  return "integration";
}

export function EngineeringExplorer({ locale, pageKey }: Props) {
  const t = copy[locale];
  const mode = getMode(pageKey) as keyof typeof t.modes;
  const [active, setActive] = useState(0);
  const stage = t.stages[active];
  return (
    <section className="engineering-explorer section-wrap" aria-labelledby="engineering-explorer-title">
      <div className="explorer-heading">
        <p className="section-kicker">{t.eyebrow}</p>
        <h2 id="engineering-explorer-title">{t.title}</h2>
        <p>{t.intro}</p>
      </div>
      <div className="explorer-shell">
        <div className="explorer-stage-list" role="tablist" aria-label={locale === "zh" ? "工程阶段" : "Engineering stages"}>
          {t.stages.map((_, index) => (
            <button key={index} type="button" role="tab" aria-selected={active === index} aria-controls="explorer-panel" id={`explorer-tab-${index}`} className={active === index ? "explorer-stage is-active" : "explorer-stage"} onClick={() => setActive(index)}>
              <span className="explorer-stage-number">0{index + 1}</span>
              <span className="explorer-stage-label">{t.modes[mode][index]}</span>
              <span className="explorer-stage-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div className="explorer-panel" id="explorer-panel" role="tabpanel" aria-labelledby={`explorer-tab-${active}`}>
          <div className="explorer-panel-top"><span>{stage.code}</span><span><i /> {t.status}</span></div>
          <div className="explorer-visual" aria-hidden="true">
            <div className="explorer-visual-orbit orbit-one" /><div className="explorer-visual-orbit orbit-two" />
            <div className="explorer-visual-core"><span>0{active + 1}</span><small>{stage.label.toUpperCase()}</small></div>
            <i className="explorer-visual-node node-one" /><i className="explorer-visual-node node-two" /><i className="explorer-visual-node node-three" />
            <b className="explorer-visual-link link-one" /><b className="explorer-visual-link link-two" /><b className="explorer-visual-link link-three" />
          </div>
          <div className="explorer-detail">
            <span className="explorer-detail-index">PST / 0{active + 1}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
            <ul>{stage.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="explorer-progress" aria-label={`Step ${active + 1} of 4`}><span style={{ width: ((active + 1) * 25) + "%" }} /></div>
        </div>
      </div>
      <p className="explorer-note"><span />{t.note}</p>
    </section>
  );
}
