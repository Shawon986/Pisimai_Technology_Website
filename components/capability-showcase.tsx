import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    actionLabel: "PISIMAI / TECHNOLOGY IN ACTION",
    actionTitle: "Technology capabilities, connected to real-world needs.",
    actionText: "Explore the specialist technologies and engineering services we work with—from AI infrastructure to software extension and network access.",
    capabilities: [
      ["01", "AI Token Solutions", "AI token access and usage solutions designed to help teams connect applications with the AI capabilities they need.", "AI TOKEN", "token"],
      ["02", "AI Aggregation", "A unified integration approach for working with multiple AI models and providers through a more consistent application layer.", "MODEL ROUTING", "aggregation"],
      ["03", "Secondary Development", "Extend and customize existing software, platforms, devices, and SDK-based systems to fit specific workflows and product requirements.", "CUSTOM BUILD", "development"],
      ["04", "Residential Proxy IP", "Residential IP solutions for permitted location-aware testing, localization checks, and region-specific connectivity workflows.", "NETWORK ACCESS", "proxy"]
    ],
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
    processTitle: "A clear route from first idea to working solution.",
    processText: "Every project moves through connected stages. The visual below shows how a challenge is shaped, engineered, built, and checked before it is ready to move forward.",
    steps: [
      ["01", "Discover", "Define the challenge, intended users, goals, and real operating constraints.", "BRIEF"],
      ["02", "Architect", "Shape the experience, technical structure, and components into a workable plan.", "BLUEPRINT"],
      ["03", "Engineer", "Develop the software, integrations, and prototype into a connected solution.", "BUILD"],
      ["04", "Verify", "Test the result against its requirements, usability, and intended environment.", "REVIEW"]
    ],
    ecosystemLabel: "PISIMAI / CONNECTED TECHNOLOGY",
    ecosystemTitle: "Different disciplines. One connected system.",
    ecosystemText: "A solution can combine the layers that make sense for its requirements—from intelligent models and applications to devices, data, and integration.",
    layers: [["AI", "Intelligence"], ["DEV", "Software"], ["ROB", "Robotics"], ["DATA", "Information"], ["SYS", "Integration"]]
  },
  zh: {
    actionLabel: "PISIMAI / 科技实践",
    actionTitle: "连接技术能力，回应真实需求。",
    actionText: "了解我们所涉及的专业技术与工程服务，从人工智能基础能力到软件二次开发及网络连接方案。",
    capabilities: [
      ["01", "AI Token 解决方案", "提供 AI Token 接入与使用相关方案，帮助团队将应用程序连接至所需的人工智能能力。", "AI TOKEN", "token"],
      ["02", "AI 聚合服务", "通过更统一的应用接入层，整合不同 AI 模型与服务提供方，简化多模型协同接入。", "模型路由", "aggregation"],
      ["03", "二次开发", "基于现有软件、平台、设备及 SDK 系统进行扩展与定制，以适配具体业务流程和产品需求。", "定制开发", "development"],
      ["04", "住宅代理 IP", "提供住宅 IP 相关方案，用于合规的地区访问测试、本地化检查及区域网络连接场景。", "网络连接", "proxy"]
    ],
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
    processTitle: "从最初构想到可运行方案的清晰路径。",
    processText: "每个项目都由多个相互衔接的阶段组成。下方展示如何将实际挑战逐步转化为经过验证的工程方案。",
    steps: [
      ["01", "需求探索", "明确实际挑战、目标用户、项目目标与运行环境限制。", "需求"],
      ["02", "架构设计", "规划用户体验、技术架构与所需组件，形成可执行方案。", "蓝图"],
      ["03", "工程开发", "开发软件、系统集成与原型，构建完整的解决方案。", "构建"],
      ["04", "测试验证", "围绕项目需求、易用性及实际环境检查最终结果。", "验证"]
    ],
    ecosystemLabel: "PISIMAI / 互联技术",
    ecosystemTitle: "多元专业领域，协同构建完整系统。",
    ecosystemText: "根据项目需求，将智能模型、应用软件、设备、数据与系统集成等技术层有机连接。",
    layers: [["AI", "人工智能"], ["DEV", "软件开发"], ["ROB", "机器人"], ["DATA", "数据"], ["SYS", "系统集成"]]
  }
} as const;

export function CapabilityShowcase({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <div className="capability-showcase">
      <section className="action-showcase section-wrap" id="technology-in-action">
        <div className="showcase-heading">
          <p className="section-kicker">{t.actionLabel}</p>
          <h2>{t.actionTitle}</h2>
          <p>{t.actionText}</p>
        </div>
        <div className="capability-grid">
          {t.capabilities.map(([number, title, description, tag, visual]) => (
            <article className="capability-card" key={number} tabIndex={0}>
              <div className={"capability-art capability-art-" + visual} aria-hidden="true">
                {visual === "token" && <><div className="token-orbit token-orbit-a" /><div className="token-orbit token-orbit-b" /><div className="token-core"><b>AI</b><span>TOKEN</span></div><i className="token-particle token-particle-a" /><i className="token-particle token-particle-b" /><i className="token-particle token-particle-c" /></>}
                {visual === "aggregation" && <><div className="aggregation-lines"><i /><i /><i /><i /></div><div className="aggregation-hub"><b>AI</b><span>HUB</span></div><div className="aggregation-node aggregation-node-a">01</div><div className="aggregation-node aggregation-node-b">02</div><div className="aggregation-node aggregation-node-c">03</div><div className="aggregation-node aggregation-node-d">04</div></>}
                {visual === "development" && <><div className="dev-window"><div className="dev-window-top"><i /><i /><i /><span>BUILD / EXTEND</span></div><div className="dev-code"><b /><b /><b /><b /><b /><b /></div><div className="dev-layer dev-layer-a">EXISTING SYSTEM</div><div className="dev-layer dev-layer-b">CUSTOM MODULE</div><div className="dev-layer dev-layer-c">NEW CAPABILITY</div></div><span className="dev-plus">+</span></>}
                {visual === "proxy" && <><div className="proxy-globe"><i className="proxy-latitude proxy-latitude-a" /><i className="proxy-latitude proxy-latitude-b" /><i className="proxy-longitude" /><b /></div><span className="proxy-point proxy-point-a" /><span className="proxy-point proxy-point-b" /><span className="proxy-point proxy-point-c" /><div className="proxy-route proxy-route-a" /><div className="proxy-route proxy-route-b" /><div className="proxy-route proxy-route-c" /></>}
              </div>
              <div className="capability-card-copy"><div className="capability-card-meta"><span>{number} / CAPABILITY</span><span>{tag}</span></div><h3>{title}</h3><p>{description}</p><span className="capability-card-arrow" aria-hidden="true">↗</span></div>
            </article>
          ))}
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
        <div className="process-journey">
          <div className="process-grid">{t.steps.map(([number, title, description, tag], index) => <article className={"process-step process-step-" + (index + 1)} key={number}><div className="process-step-top"><span>{number}</span><small>{tag}</small></div><div className={"process-stage-visual process-stage-visual-" + (index + 1)} aria-hidden="true">
                {index === 0 && <div className="stage-brief-board"><div className="stage-window-bar"><i /><i /><i /><b>PROJECT BRIEF</b></div><div className="stage-brief-content"><span className="stage-brief-title" /><span className="stage-brief-line stage-brief-line-long" /><span className="stage-brief-line" /><div className="stage-brief-checks"><i /><i /><i /></div><div className="stage-brief-priority"><b>GOAL</b><span /></div></div></div>}
                {index === 1 && <div className="stage-architecture"><div className="stage-arch-node stage-arch-input"><b>01</b><span>INPUT</span></div><i className="stage-arch-connector stage-arch-connector-a" /><div className="stage-arch-node stage-arch-core"><b>API</b><span>CORE</span></div><i className="stage-arch-connector stage-arch-connector-b" /><div className="stage-arch-node stage-arch-output"><b>UI</b><span>OUTPUT</span></div><i className="stage-arch-branch" /><div className="stage-arch-node stage-arch-data"><b>DB</b><span>DATA</span></div></div>}
                {index === 2 && <div className="stage-editor"><div className="stage-editor-top"><i /><i /><i /><b>solution.ts</b><span>● BUILDING</span></div><div className="stage-editor-body"><div className="stage-editor-gutter">01<br />02<br />03<br />04<br />05</div><div className="stage-editor-code"><i /><i /><i /><i /><i /></div></div><div className="stage-editor-terminal"><b>TERMINAL</b><span>✓ modules connected</span><span>✓ build complete</span></div></div>}
                {index === 3 && <div className="stage-test-report"><div className="stage-test-head"><b>QUALITY CHECK</b><span>4 / 4 PASSED</span></div><div className="stage-test-row"><i>✓</i><span>Requirements</span><b>PASS</b></div><div className="stage-test-row"><i>✓</i><span>Integration</span><b>PASS</b></div><div className="stage-test-row"><i>✓</i><span>Usability</span><b>PASS</b></div><div className="stage-test-row"><i>✓</i><span>Environment</span><b>PASS</b></div><div className="stage-test-progress"><span /></div></div>}
              </div><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="ecosystem-section section-wrap" id="technology-ecosystem">
        <div className="ecosystem-copy"><p className="section-kicker">{t.ecosystemLabel}</p><h2>{t.ecosystemTitle}</h2><p>{t.ecosystemText}</p></div>
        <div className="ecosystem-visual"><span className="ecosystem-link ecosystem-link-1" aria-hidden="true" /><span className="ecosystem-link ecosystem-link-2" aria-hidden="true" /><span className="ecosystem-link ecosystem-link-3" aria-hidden="true" /><span className="ecosystem-link ecosystem-link-4" aria-hidden="true" /><span className="ecosystem-link ecosystem-link-5" aria-hidden="true" /><div className="ecosystem-core"><span>PISIMAI</span><small>CONNECTED CORE</small></div>{t.layers.map(([short, label], i) => <div className={"ecosystem-node ecosystem-node-" + (i + 1)} key={short}><b>{short}</b><span>{label}</span></div>)}<div className="ecosystem-orbit ecosystem-orbit-a" /><div className="ecosystem-orbit ecosystem-orbit-b" /></div>
      </section>
    </div>
  );
}
