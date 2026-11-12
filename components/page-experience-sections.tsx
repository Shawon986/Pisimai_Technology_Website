"use client";
import { useState } from "react";

type Props={locale:"en"|"zh";pageKey:string};
const data={
 en:{
  services:{k:"HOW WE DELIVER / FROM BRIEF TO OUTCOME",h:"A considered process. Built around your challenge.",p:"Our work moves through clear engineering stages so that the solution is shaped by real requirements, tested in context, and ready to evolve.",phases:[["01","DISCOVER","Understand the people, environment and operational challenge before selecting a technical direction."],["02","DESIGN","Map the experience, system architecture, integrations and delivery priorities."],["03","ENGINEER","Build the application, intelligence and connected components as one coherent solution."],["04","VALIDATE","Test real workflows, refine performance and prepare a maintainable handover."]],foot:"A flexible delivery framework — the sequence adapts to each project's scope."},
  solutions:{k:"SOLUTION DESIGN / SCENARIO BUILDER",h:"Start with the challenge. Shape the system.",p:"Choose the environment closest to your project to see how different capabilities combine.",tabs:["Smart operations","Digital product","Connected devices"],scenarios:[ [["MONITOR","Bring equipment status, operational events and team activity into one live view."],["OPTIMISE","Use rules and analytics to identify bottlenecks, exceptions and the next best action."],["COORDINATE","Route alerts, assign tasks and track operational follow-through."]], [["UNDERSTAND","Map user needs, journeys and the key jobs the product must support."],["BUILD","Connect interfaces, application logic, identity and dependable data services."],["IMPROVE","Measure usage, resolve friction and release focused product improvements."]], [["CONNECT","Link supported devices through suitable gateways, APIs and messaging protocols."],["INTERPRET","Combine telemetry and device events with application context."],["RESPOND","Trigger commands, notifications or workflows with clear status feedback."]] ],foot:"Illustrative solution logic — final architecture depends on project requirements."},
  technology:{k:"TECHNOLOGY / STACK EXPLORER",h:"A clear view beneath the interface.",p:"Open each layer to explore how a connected solution is structured.",layers:[["01","EXPERIENCE","Interfaces, applications and human interaction.","UI / UX · Web · Mobile"],["02","INTELLIGENCE","Models, decision logic and data processing.","AI / ML · Analytics · APIs"],["03","CONNECTIVITY","Protocols, integration and orchestration.","REST · MQTT · Middleware"],["04","FOUNDATION","Devices, compute and deployment environment.","Edge · Cloud · Robotics"]],foot:"Technology choices are selected to fit the operating environment."},
  about:{k:"ABOUT PISIMAI / OUR PRINCIPLES",h:"How we think. How we build.",p:"Our work is guided by a practical set of principles, from the first conversation to long-term operation.",principles:[["01","Clarity before complexity","Understand the real need before introducing technology."],["02","Systems over silos","Design software, intelligence and devices to work together."],["03","Useful by design","Prioritise outcomes, usability and operational fit."],["04","Build to evolve","Keep solutions understandable, maintainable and adaptable."]],foot:"A considered engineering mindset for connected technology."},
  contact:{k:"CONTACT / PROJECT BRIEF",h:"Give your idea a starting point.",p:"Choose the area closest to your challenge. We’ll help frame the first technical conversation.",choices:["AI or intelligent systems","Software or digital platform","Robotics or automation","System integration","Not sure yet"],foot:"This selection is only a conversation starter. Use the contact form below to send your project details."},
  ai:{k:"AI SYSTEMS / INTELLIGENCE PIPELINE",h:"From raw signal to useful intelligence.",p:"Explore the stages of an applied AI system.",steps:[["INPUT","Images, language, sensor signals or structured data."],["UNDERSTAND","Perception, retrieval and contextual processing."],["DECIDE","Model outputs combined with rules and application logic."],["RESPOND","An insight, assistant, workflow or connected action."]],foot:"Human oversight, privacy and evaluation belong throughout the pipeline."},
  software:{k:"DIGITAL PLATFORMS / PRODUCT ANATOMY",h:"A product is more than its interface.",p:"Switch between product layers to inspect what makes a digital platform work.",tabs:["Experience","Application","Data","Operations"],details:[["The human layer","Clear journeys, accessible interfaces and responsive interactions."],["The logic layer","Business rules, APIs, authentication and dependable services."],["The information layer","Structured data, permissions, search and reliable persistence."],["The operating layer","Monitoring, deployment, performance and ongoing improvement."]],foot:"A balanced product considers every layer, not only the visible screen."},
  robotics:{k:"ROBOTICS / CONTROL DECK",h:"Coordinate perception, motion and action.",p:"Activate a subsystem to see its role in a robotics application.",modules:[["VISION","Camera input and scene understanding."],["MOTION","Movement planning and control interfaces."],["TASK","Task logic, sequencing and decision flow."],["TELEMETRY","Status, diagnostics and operational feedback."]],foot:"Conceptual application-layer view. Hardware capabilities vary by robot platform."},
  integration:{k:"SYSTEM INTEGRATION / CONNECTION MAP",h:"Make independent systems work as one.",p:"Select a node to inspect the role it plays in an integrated environment.",nodes:[["DEVICES","Sensors, robots and connected equipment."],["PLATFORMS","Existing applications and business systems."],["SERVICES","APIs, models and external services."],["DATA","Events, storage and shared information."]],foot:"Integration is planned around documented interfaces and system constraints."}
 },
 zh:{
  services:{k:"交付方式 / 从需求到成果",h:"以清晰流程，应对真实挑战。",p:"通过明确的工程阶段，让方案从实际需求出发，在真实场景中验证，并具备持续演进的能力。",phases:[["01","探索需求","了解用户、环境与运营挑战，再确定合适的技术方向。"],["02","方案设计","梳理体验、系统架构、集成方式与交付重点。"],["03","工程实现","将应用、智能能力与互联组件构建为完整方案。"],["04","验证交付","测试真实工作流程、优化性能，并准备可维护的交付成果。"]],foot:"灵活的交付框架，会根据每个项目的范围进行调整。"},
  solutions:{k:"解决方案设计 / 场景构建",h:"从实际挑战出发，构建合适系统。",p:"选择与项目最接近的场景，了解不同能力如何组合。",tabs:["智能运营","数字产品","互联设备"],scenarios:[ [["监测","汇总设备状态、运营事件与团队活动，形成统一运行视图。"],["优化","通过规则与分析识别瓶颈、异常和优先处理事项。"],["协同","分发告警、安排任务并跟踪处理结果。"]], [["理解","梳理用户需求、使用旅程与产品核心任务。"],["构建","连接界面、应用逻辑、身份验证与可靠的数据服务。"],["改进","分析使用情况，减少体验阻碍并持续迭代产品。"]], [["连接","通过合适的网关、API 与消息协议连接受支持设备。"],["解析","结合遥测数据、设备事件与应用场景进行分析。"],["响应","触发指令、通知或工作流程，并提供清晰状态反馈。"]] ],foot:"以上为示意逻辑，最终架构取决于项目需求。"},
  technology:{k:"技术 / 架构探索",h:"看清界面之下的技术层次。",p:"展开各层，了解互联系统的组成方式。",layers:[["01","体验层","界面、应用程序与人机交互。","UI / UX · Web · Mobile"],["02","智能层","模型、决策逻辑与数据处理。","AI / ML · Analytics · APIs"],["03","连接层","协议、集成与流程编排。","REST · MQTT · Middleware"],["04","基础层","设备、算力与部署环境。","Edge · Cloud · Robotics"]],foot:"根据实际运行环境选择合适的技术。"},
  about:{k:"关于 PISIMAI / 核心理念",h:"我们的思考方式，也是我们的构建方式。",p:"从首次沟通到长期运行，我们始终遵循务实的工程原则。",principles:[["01","先清晰，再复杂","在引入技术之前，先理解真正的需求。"],["02","系统协同，而非孤立","让软件、智能技术与设备协同工作。"],["03","以实用为设计核心","关注成果、易用性与实际运行环境。"],["04","为持续演进而构建","让方案清晰、易维护且能够适应变化。"]],foot:"以审慎务实的工程思维构建互联技术。"},
  contact:{k:"联系 / 项目简述",h:"为您的想法找到起点。",p:"选择最接近您需求的领域，我们将协助梳理首次技术沟通。",choices:["人工智能或智能系统","软件或数字平台","机器人或自动化","系统集成","暂不确定"],foot:"此选择仅用于开启沟通。请使用下方联系表单发送项目详情。"},
  ai:{k:"人工智能 / 智能处理流程",h:"从原始信号到有效智能。",p:"探索应用型 AI 系统的关键阶段。",steps:[["输入","图像、语言、传感器信号或结构化数据。"],["理解","感知、检索与上下文处理。"],["决策","结合模型输出、规则与应用逻辑。"],["响应","生成洞察、助手、工作流或联动操作。"]],foot:"人工监督、隐私保护与效果评估贯穿整个流程。"},
  software:{k:"数字平台 / 产品结构",h:"一个产品不只是它的界面。",p:"切换产品层次，了解数字平台的组成。",tabs:["体验","应用","数据","运营"],details:[["用户体验层","清晰流程、无障碍界面与响应式交互。"],["应用逻辑层","业务规则、API、身份验证与可靠服务。"],["信息数据层","结构化数据、权限、搜索与可靠存储。"],["运行维护层","监控、部署、性能与持续改进。"]],foot:"均衡的产品设计关注每一层，而不只是可见界面。"},
  robotics:{k:"机器人 / 控制面板",h:"协同感知、运动与执行。",p:"激活子系统，了解其在机器人应用中的作用。",modules:[["视觉","摄像头输入与场景理解。"],["运动","运动规划与控制接口。"],["任务","任务逻辑、流程编排与决策。"],["遥测","状态、诊断与运行反馈。"]],foot:"此为应用层概念视图，具体能力取决于机器人平台。"},
  integration:{k:"系统集成 / 连接图谱",h:"让独立系统协同成为整体。",p:"选择节点，了解其在集成环境中的作用。",nodes:[["设备","传感器、机器人与互联设备。"],["平台","现有应用程序与业务系统。"],["服务","API、模型与外部服务。"],["数据","事件、存储与共享信息。"]],foot:"集成方案以已知接口与系统限制为基础。"}
 }
};
function modeFor(key:string){if(key==="services"||key==="solutions"||key==="technology"||key==="about"||key==="contact")return key;if(key.endsWith("ai-intelligent-systems"))return"ai";if(key.endsWith("software-digital-platforms"))return"software";if(key.endsWith("robotics-automation"))return"robotics";return"integration";}
export function PageExperienceSections({locale,pageKey}:Props){
 const mode=modeFor(pageKey) as keyof typeof data.en;const d=data[locale][mode] as any;const [active,setActive]=useState(0);
 return <section className={"page-experience page-experience-"+mode}>
  <header className="px-heading"><p className="section-kicker">{d.k}</p><h2>{d.h}</h2><p>{d.p}</p></header>
  {mode==="services"&&<div className="px-delivery-path">{d.phases.map((x:any,i:number)=><article key={x[0]}><div className="px-delivery-step"><span>{x[0]}</span><i aria-hidden="true" className={i===3?"px-delivery-check":""}>{i===3?null:["◉","⌘","↗"][i]}</i></div><b>{x[1]}</b><p>{x[2]}</p>{i<3&&<span className="px-delivery-connector" aria-hidden="true">→</span>}</article>)}</div>}
  {mode==="solutions"&&<div className="px-scenario"><nav>{d.tabs.map((x:string,i:number)=><button className={active===i?"selected":""} aria-pressed={active===i} onClick={()=>setActive(i)} key={x}>{x}</button>)}</nav><div className={"px-solution-visual px-solution-visual-"+active} key={"visual-"+active} aria-hidden="true">
    <div className="px-solution-visual-top"><span>{active===0?"OPERATIONS / LIVE OVERVIEW":active===1?"DIGITAL PRODUCT / EXPERIENCE":"CONNECTED ENVIRONMENT / DEVICE STATUS"}</span><i><b/> SYSTEM ONLINE</i></div>
    {active===0&&<div className="px-ops-visual"><div className="px-ops-metrics"><div><span>ACTIVE ASSETS</span><b>128</b><i>+12.8%</i></div><div><span>WORKFLOWS</span><b>24</b><i>RUNNING</i></div><div><span>ALERTS</span><b>03</b><i>REVIEW</i></div></div><div className="px-ops-chart"><div className="px-ops-chart-label"><b>Operational activity</b><span>LAST 24 HOURS</span></div><div className="px-ops-bars">{[38,56,45,72,61,88,66,94,73,82,58,96].map((v,i)=><i key={i} style={{height:v+"%"}}/>)}</div></div><div className="px-ops-status"><span><i/> Equipment status</span><b>All systems connected</b><em>98.6%</em></div></div>}
    {active===1&&<div className="px-product-visual"><div className="px-product-browser"><div className="px-product-browser-bar"><i/><i/><i/><span>PRODUCT / WORKSPACE</span></div><div className="px-product-browser-body"><aside><b/><i/><i/><i/><i/></aside><div className="px-product-canvas"><span>OVERVIEW / DASHBOARD</span><b>Make every interaction count.</b><p>A connected digital experience, from interface to data.</p><div className="px-product-widgets"><i/><i/><i/></div><div className="px-product-table"><b/><b/><b/><b/></div></div></div></div><div className="px-product-float"><span>API</span><b>CONNECTED</b><i>↗</i></div></div>}
    {active===2&&<div className="px-device-visual"><div className="px-device-hub"><b>PISIMAI</b><span>DEVICE GATEWAY</span><i/></div><div className="px-device-node px-device-node-a"><i>◉</i><b>SENSOR</b><span>ONLINE</span></div><div className="px-device-node px-device-node-b"><i>⌘</i><b>ROBOT</b><span>ACTIVE</span></div><div className="px-device-node px-device-node-c"><i>▦</i><b>PLATFORM</b><span>SYNCED</span></div><div className="px-device-node px-device-node-d"><i>▤</i><b>DATA</b><span>STREAMING</span></div><div className="px-device-link px-device-link-a"/><div className="px-device-link px-device-link-b"/><div className="px-device-link px-device-link-c"/><div className="px-device-link px-device-link-d"/></div>}
  </div>
  <div className="px-scenario-flow" key={active}>{d.scenarios[active].map((x:any,i:number)=><article key={x[0]}><span>0{i+1}</span><b>{x[0]}</b><p>{x[1]}</p><i>{i===0?"◉":i===1?"⌘":"↗"}</i></article>)}</div><div className="px-scenario-foot">SCENARIO / 0{active+1}<span>{d.tabs[active]}</span></div></div>}
  {mode==="technology"&&<div className="px-tech-architecture" aria-label={locale==="zh"?"从体验层到基础设施的技术架构":"Technology architecture from experience to infrastructure"}>
    <div className="px-tech-architecture-head"><span>PISIMAI / SYSTEM ARCHITECTURE</span><b>4 CONNECTED LAYERS</b></div>
    <div className="px-tech-stack-visual">
      <div className="px-tech-stack-layer px-tech-layer-experience"><i>01</i><span>EXPERIENCE</span><b>UI / UX · WEB · MOBILE</b><em>USER INTERACTION</em></div>
      <div className="px-tech-stack-layer px-tech-layer-intelligence"><i>02</i><span>INTELLIGENCE</span><b>AI / ML · MODELS · APIs</b><em>CONTEXT &amp; DECISIONS</em></div>
      <div className="px-tech-stack-layer px-tech-layer-connectivity"><i>03</i><span>CONNECTIVITY</span><b>REST · MQTT · EVENTS</b><em>DATA EXCHANGE</em></div>
      <div className="px-tech-stack-layer px-tech-layer-foundation"><i>04</i><span>FOUNDATION</span><b>EDGE · CLOUD · DEVICES</b><em>RUNTIME ENVIRONMENT</em></div>
      <div className="px-tech-stack-flow"><i/><i/><i/></div>
    </div>
    <div className="px-tech-architecture-foot"><span>MODULAR BY DESIGN</span><span>BUILT AROUND THE USE CASE</span></div>
  </div>}
  {mode==="technology"&&<div className="px-stack">{d.layers.map((x:any,i:number)=><button key={x[0]} className={active===i?"open":""} onClick={()=>setActive(i)}><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p><small>{x[3]}</small><i>{active===i?"−":"+"}</i>{active===i&&<em>ACTIVE LAYER / EXPLORE COMPONENTS</em>}</button>)}</div>}
  {mode==="about"&&<div className="px-about-system-visual" aria-label={locale==="zh"?"PISIMAI 工程理念示意":"PISIMAI engineering principles"}>
    <div className="px-about-visual-head"><span>PISIMAI / ENGINEERING DNA</span><b>ONE CONNECTED MINDSET</b></div>
    <div className="px-about-orbit-scene"><div className="px-about-orbit-ring px-about-orbit-ring-a"/><div className="px-about-orbit-ring px-about-orbit-ring-b"/><div className="px-about-orbit-core"><b>P</b><span>PISIMAI</span><small>ENGINEERING</small></div>
      <div className="px-about-orbit-node px-about-node-a"><b>01</b><span>CLARITY</span><small>Understand first</small></div>
      <div className="px-about-orbit-node px-about-node-b"><b>02</b><span>CONNECTION</span><small>Work as one</small></div>
      <div className="px-about-orbit-node px-about-node-c"><b>03</b><span>UTILITY</span><small>Purposeful outcomes</small></div>
      <div className="px-about-orbit-node px-about-node-d"><b>04</b><span>EVOLUTION</span><small>Built to adapt</small></div>
    </div>
    <div className="px-about-visual-foot"><span>PEOPLE</span><i/><span>TECHNOLOGY</span><i/><span>REAL-WORLD IMPACT</span></div>
  </div>}
  {mode==="about"&&<div className="px-principles">{d.principles.map((x:any,i:number)=><article key={x[0]}><span>{x[0]}</span><div><b>{x[1]}</b><p>{x[2]}</p></div><i className="px-principle-mark" aria-hidden="true" /></article>)}</div>}
  {mode==="contact"&&<div className="px-contact-journey-visual" aria-label={locale==="zh"?"项目沟通流程":"Project conversation workflow"}>
    <div className="px-contact-journey-head"><span>PROJECT INTAKE / FIRST CONVERSATION</span><b>FROM IDEA TO CLEAR NEXT STEP</b></div>
    <div className="px-contact-journey-track">
      <div className="px-contact-stage"><span>01</span><i className="px-contact-icon-brief"><b/><b/><b/></i><strong>YOUR BRIEF</strong><small>Goals · Context · Constraints</small></div>
      <div className="px-contact-stage"><span>02</span><i className="px-contact-icon-scope"><b/><b/><b/><b/></i><strong>SHARED SCOPE</strong><small>Needs · Priorities · Fit</small></div>
      <div className="px-contact-stage"><span>03</span><i className="px-contact-icon-plan"><b/><b/><b/></i><strong>NEXT STEPS</strong><small>Direction · Discussion · Plan</small></div>
    </div>
    <div className="px-contact-journey-foot"><i/><span>START WITH THE PROBLEM. FIND THE RIGHT TECHNOLOGY.</span></div>
  </div>}
  {mode==="contact"&&<div className="px-contact-picker"><div className="px-contact-options">{d.choices.map((x:string,i:number)=><button key={x} className={active===i?"chosen":""} onClick={()=>setActive(i)}><span>0{i+1}</span>{x}<i>{active===i?"●":"○"}</i></button>)}</div><div className="px-contact-result"><span>PROJECT FOCUS / 0{active+1}</span><b>{d.choices[active]}</b><p>{locale==="zh"?"已选择。您可以在下方联系表单中补充项目背景与目标。":"Selected. Add your project context and goals in the contact form below."}</p></div></div>}
  {mode==="ai"&&<div className="px-ai-pipeline">{d.steps.map((x:any,i:number)=><button key={x[0]} className={active===i?"active":""} onClick={()=>setActive(i)}><span>STAGE / 0{i+1}</span><i className={"px-ai-symbol px-ai-"+i} aria-hidden="true"></i><b>{x[0]}</b><p>{x[1]}</p>{i<3&&<em aria-hidden="true">→</em>}</button>)}</div>}
  {mode==="software"&&<div className="px-product-lab"><aside><span>PRODUCT / LAYERS</span>{d.tabs.map((x:string,i:number)=><button key={x} className={active===i?"on":""} onClick={()=>setActive(i)}><i>0{i+1}</i>{x} <b>↗</b></button>)}</aside><div className="px-product-screen"><div className="px-screen-bar"><i/><i/><i/><span>pisimai / product-system</span></div><div className="px-screen-body"><div className="px-screen-sidebar"><b/><b/><b/><b/></div><div className="px-screen-content"><span>0{active+1} / {d.tabs[active]}</span><h3>{d.details[active][0]}</h3><p>{d.details[active][1]}</p><div className="px-screen-widgets"><i/><i/><i/></div><div className="px-screen-lines"><b/><b/><b/></div></div></div></div></div>}
   {mode==="robotics"&&<div className="px-robot-console">
    <div className={"px-robot-visual px-robot-visual-"+active} aria-label={["Industrial robot vision scene","Industrial robot motion scene","Industrial robot pick and place task","Industrial robot telemetry scene"][active]}>
     <div className="px-robot-grid"/>
     <div className="px-robot-hud"><span>ROBOTICS / CELL-01</span><b><i/> LIVE SYSTEM</b><em>0{active+1} / 04</em></div>
     <div className="px-robot-stage">
      <div className="px-robot-floor"><i/><i/><i/></div>
      <div className="px-robot-conveyor"><i/><i/><i/><b/></div>
      <div className="px-robot-workpiece"><i/><b/></div>
      <div className="px-robot-machine">
       <div className="px-robot-plinth"><i/></div>
       <div className="px-robot-pedestal"><i/><b/></div>
       <div className="px-robot-turret">
        <div className="px-robot-upper-arm"><i/><b/>
         <div className="px-robot-elbow"><i/><b/>
          <div className="px-robot-forearm"><i/><b/>
           <div className="px-robot-wrist"><i/>
            <div className="px-robot-gripper"><b/><i/><em/></div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="px-robot-camera"><i/><b/><em/></div>
      <div className="px-robot-scan-beam"/>
      <div className="px-robot-detection"><i/><b/><em/><span/></div>
      <div className="px-robot-task-route"><i/><i/><i/><i/></div>
      <div className="px-robot-telemetry-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
      <div className="px-robot-data-packets"><i/><i/><i/></div>
     </div>
     <div className="px-robot-readout"><span>{["VISION / OBJECT RECOGNITION","MOTION / JOINT TRAJECTORY","TASK / PICK & PLACE","TELEMETRY / SERVO STATUS"][active]}</span><b>{["TARGET ACQUIRED","6 AXES / MOVING","CYCLE 03 / 04","ALL SYSTEMS NOMINAL"][active]}</b></div>
     <small>INDUSTRIAL ROBOT CELL / APPLICATION SIMULATION</small>
    </div>
    <div className="px-robot-modules">{d.modules.map((x:any,i:number)=><button type="button" key={x[0]} className={active===i?"active":""} aria-pressed={active===i} onClick={()=>setActive(i)}><span>0{i+1}</span><b>{x[0]}</b><p>{x[1]}</p><i>{active===i?"ACTIVE":"STANDBY"}</i></button>)}</div>
   </div>}
  {mode==="integration"&&<div className="px-integration-map"><div className="px-map-center"><b>PISIMAI</b><span>INTEGRATION CORE</span></div>{d.nodes.map((x:any,i:number)=><button key={x[0]} className={"px-map-node node-"+i+(active===i?" active":"")} onClick={()=>setActive(i)}><i>{["◈","▦","⌘","▤"][i]}</i><b>{x[0]}</b><span>0{i+1}</span></button>)}<div className="px-map-detail"><span>NODE / 0{active+1}</span><b>{d.nodes[active][0]}</b><p>{d.nodes[active][1]}</p></div></div>}
  <p className="px-footnote"><i/>{d.foot}</p>
 </section>;
}
