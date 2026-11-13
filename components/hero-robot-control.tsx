"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const tasks = {
  en: [
    ["VISION", "Scan and identify the workpiece.", "TARGET ACQUIRED"],
    ["MOTION", "Move through a coordinated joint path.", "6 AXES / MOVING"],
    ["TASK", "Grip, lift and place the workpiece.", "PICK & PLACE / RUNNING"],
    ["TELEMETRY", "Monitor joint and system feedback.", "ALL SYSTEMS NOMINAL"]
  ],
  zh: [
    ["视觉", "扫描并识别工件。", "目标已识别"],
    ["运动", "沿协调的关节轨迹运动。", "六轴运动中"],
    ["任务", "夹取、抬升并放置工件。", "抓取与放置 / 运行中"],
    ["遥测", "监测关节与系统反馈。", "系统运行正常"]
  ]
} as const;

export function HeroRobotControl({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(2);
  const labels = tasks[locale];

  return (
    <div className="page-experience-robotics hero-robot-control">
      <div className="px-robot-console">
        <div className={"px-robot-visual px-robot-visual-" + active}>
          <div className="px-robot-grid" />
          <div className="px-robot-hud">
            <span>PISIMAI / ROBOT CELL-01</span>
            <b><i /> {locale === "zh" ? "实时系统" : "LIVE SYSTEM"}</b>
            <em>0{active + 1} / 04</em>
          </div>
          <div className="px-robot-stage">
            <div className="px-robot-floor"><i /><i /><i /></div>
            <div className="px-robot-conveyor"><i /><i /><i /><b /></div>
            <div className="px-robot-workpiece"><i /><b /></div>
            <div className="px-robot-machine">
              <div className="px-robot-plinth"><i /></div>
              <div className="px-robot-pedestal"><i /><b /></div>
              <div className="px-robot-turret">
                <div className="px-robot-upper-arm"><i /><b />
                  <div className="px-robot-elbow"><i /><b />
                    <div className="px-robot-forearm"><i /><b />
                      <div className="px-robot-wrist"><i />
                        <div className="px-robot-gripper"><b /><i /><em /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-robot-camera"><i /><b /><em /></div>
            <div className="px-robot-scan-beam" />
            <div className="px-robot-detection"><i /><b /><em /><span /></div>
            <div className="px-robot-task-route"><i /><i /><i /><i /></div>
            <div className="px-robot-telemetry-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="px-robot-data-packets"><i /><i /><i /></div>
          </div>
          <div className="px-robot-readout" aria-live="polite">
            <span>{labels[active][0]}</span>
            <b>{labels[active][2]}</b>
          </div>
          <small>INDUSTRIAL ROBOT CELL / APPLICATION SIMULATION</small>
          <div className="px-robot-modules" aria-label={locale === "zh" ? "选择机器人任务" : "Select a robot task"}>
            {labels.map((task, i) => (
              <button
                type="button"
                key={task[0]}
                className={active === i ? "active" : ""}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                <span>0{i + 1}</span>
                <b>{task[0]}</b>
                <p>{task[1]}</p>
                <i>{active === i ? (locale === "zh" ? "执行中" : "RUNNING") : (locale === "zh" ? "待机" : "SELECT")}</i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
