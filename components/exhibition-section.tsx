import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const asset = (name: string) =>
  "https://raw.githubusercontent.com/Shawon986/Pisimai_Technology_Website/master/Exhibition%20assets/" + name;

const aiPhotos = [
  { file: "Weixin%20Image_20261111094919_155_65.jpg", alt: "PISIMAI AI Photobooth exhibition showcase, photo 155" },
  { file: "Weixin%20Image_20261111094920_157_65.jpg", alt: "Visitors experiencing the PISIMAI AI Photobooth, photo 157" },
  { file: "Weixin%20Image_20261111094922_158_65.jpg", alt: "PISIMAI AI Photobooth exhibition display, photo 158" },
  { file: "Weixin%20Image_20261111094923_159_65.jpg", alt: "PISIMAI AI Photobooth exhibition interaction, photo 159" },
  { file: "Weixin%20Image_20261111094924_160_65.jpg", alt: "PISIMAI AI Photobooth at the exhibition, photo 160" },
  { file: "Weixin%20Image_20261111094933_164_65.jpg", alt: "PISIMAI AI Photobooth product showcase, photo 164" },
  { file: "Weixin%20Image_20261111094926_161_65.jpg", alt: "PISIMAI exhibition product showcase, photo 161" }
];

const robotPhotos = [
  { file: "Weixin%20Image_20261111094926_161_65.jpg", alt: "Qiyuan T1 Pro humanoid robot exhibition, photo 161" },
  { file: "Weixin%20Image_20261111094927_162_65.jpg", alt: "Qiyuan T1 Pro transformable humanoid robot, photo 162" },
  { file: "Weixin%20Image_20261111094934_165_65.jpg", alt: "Qiyuan T1 Pro robot demonstration, photo 165" },
  { file: "Weixin%20Image_20261111094935_166_65.jpg", alt: "Qiyuan T1 Pro humanoid robot at the exhibition, photo 166" },
  { file: "Weixin%20Image_20261111094936_167_65.jpg", alt: "Qiyuan T1 Pro robot showcase, photo 167" }
];

const venuePhotos = [
  { file: "Weixin%20Image_20261111094919_156_65.jpg", alt: "Exhibition venue in Indonesia, photo 156" },
  { file: "Weixin%20Image_20261111095144_169_65.jpg", alt: "PISIMAI exhibition in Indonesia, photo 169" },
  { file: "Weixin%20Image_20261111095143_168_65.jpg", alt: "Exhibition space in Indonesia, photo 168" }
];

function PhotoTile({
  file, alt, className
}: {
  file: string; alt: string; className?: string;
}) {
  const src = asset(file);
  return (
    <a className={`exhibition-photo ${className ?? ""}`} href={src} target="_blank" rel="noreferrer" aria-label={alt}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 760px) 48vw, (max-width: 1100px) 32vw, 25vw"
        quality={72}
      />
      <span className="exhibition-photo-open" aria-hidden="true"><svg viewBox="0 0 16 16"><path d="M4 12 12 4M5 4h7v7" /></svg></span>
    </a>
  );
}

export function ExhibitionSection({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return (
    <section className="exhibition-section" id="exhibitions">
      <div className="exhibition-inner">
        <div className="exhibition-heading">
          <div>
            <p className="section-kicker">{zh ? "PISIMAI / 全球展示" : "PISIMAI / OUT IN THE WORLD"}</p>
            <h2>{zh ? <>让创新走出实验室，<span>走向真实世界。</span></> : <>Innovation, <span>experienced in the real world.</span></>}</h2>
          </div>
          <p>{zh
            ? "从沉浸式人工智能体验到新一代人形机器人，2026年11月4日万鸦老、11月8日雅加达的展会现场记录了我们与行业伙伴和参观者的面对面交流。"
            : "From immersive AI experiences to next-generation humanoid robotics, our November 4 showcase in Manado and November 8 showcase in Jakarta brought our work beyond the lab and into direct conversations with people and industry partners."}</p>
        </div>

        <div className="exhibition-tour" aria-label={zh ? "印度尼西亚展会行程" : "Indonesia exhibition schedule"}>
          <div className="exhibition-tour-intro">
            <span className="exhibition-index">NOVEMBER 2026 / INDONESIA</span>
            <h3>{zh ? "两座城市，连接真实体验。" : "Two cities. One shared vision."}</h3>
            <p>{zh
              ? "PISIMAI 将互动人工智能与人形机器人带到印度尼西亚的线下展会现场。两场展示让参观者能够近距离了解不同形态的技术创新。"
              : "PISIMAI brought interactive artificial intelligence and humanoid robotics into in-person exhibition settings in Indonesia, creating opportunities to explore both technologies beyond a screen."}</p>
          </div>
          <div className="exhibition-tour-stops">
            <article className="exhibition-tour-stop">
              <span className="exhibition-tour-number">01</span>
              <div><span className="exhibition-tour-city">{zh ? "印度尼西亚 · 北苏拉威西" : "NORTH SULAWESI · INDONESIA"}</span>
                <h4>{zh ? "万鸦老" : "Manado"}</h4>
                <time dateTime="2026-11-04">04 NOVEMBER 2026</time>
                <p>{zh ? "11月4日，PISIMAI 在万鸦老展示互动 AI 体验与机器人技术。" : "On 4 November, PISIMAI presented its interactive AI experience and robotics showcase in Manado."}</p>
              </div>
            </article>
            <article className="exhibition-tour-stop">
              <span className="exhibition-tour-number">02</span>
              <div><span className="exhibition-tour-city">{zh ? "印度尼西亚 · 爪哇岛" : "JAVA · INDONESIA"}</span>
                <h4>{zh ? "雅加达" : "Jakarta"}</h4>
                <time dateTime="2026-11-08">08 NOVEMBER 2026</time>
                <p>{zh ? "11月8日，展示继续在雅加达举行，让更多现场观众近距离了解相关技术。" : "The showcase continued in Jakarta on 8 November, bringing the same technology themes to another in-person audience."}</p>
              </div>
            </article>
          </div>
        </div>

        <div className="exhibition-feature exhibition-feature-ai">
          <div className="exhibition-feature-copy">
            <span className="exhibition-index">01 / INTERACTIVE AI</span>
            <h3>{zh ? "AI Photobooth" : "AI Photobooth"}</h3>
            <p>{zh
              ? "让人工智能成为可亲身体验的创意时刻。AI Photobooth 将智能影像技术转化为直观的现场互动：参观者可以参与拍摄体验，感受 AI 如何为日常影像加入新的创意表达。它也让复杂的人工智能能力以更亲切、更容易理解的方式呈现在观众面前。"
              : "Turning artificial intelligence into an experience people can step into. The AI Photobooth translated intelligent imaging into an approachable, hands-on moment: visitors could take part in the photo experience and explore how AI can add a creative layer to everyday imagery. It made an advanced technology theme tangible and easy to engage with on the exhibition floor."}</p>
            <span className="exhibition-tag">{zh ? "人工智能 · 互动体验" : "ARTIFICIAL INTELLIGENCE · INTERACTIVE EXPERIENCE"}</span>
          </div>
          <div className="exhibition-ai-gallery">
            {aiPhotos.map((photo, index) => (
              <PhotoTile key={photo.file} file={photo.file} alt={photo.alt} className={`exhibition-ai-photo exhibition-ai-photo-${index + 1}`} />
            ))}
            <span className="exhibition-gallery-count">07 <i /> AI PHOTOBOOTH</span>
          </div>
        </div>

        <div className="exhibition-feature exhibition-feature-robot">
          <div className="exhibition-robot-gallery">
            {robotPhotos.map((photo, index) => (
              <PhotoTile key={`robot-${photo.file}`} file={photo.file} alt={photo.alt} className={`exhibition-robot-photo exhibition-robot-photo-${index + 1}`} />
            ))}
            <span className="exhibition-gallery-count">05 <i /> QIYUAN T1 PRO</span>
          </div>
          <div className="exhibition-feature-copy exhibition-robot-copy">
            <span className="exhibition-index">02 / HUMANOID ROBOTICS</span>
            <h3>{zh ? "Qiyuan T1 Pro" : "Qiyuan T1 Pro"}</h3>
            <p>{zh
              ? "近距离了解全球首款可变形人形机器人。Qiyuan T1 Pro 将人形机器人与可变形结构结合，成为本次展出的重要亮点。它让观众从真实产品的外观与结构出发，直观认识机器人形态创新，也为智能机器人在不同场景中的发展带来更多想象空间。"
              : "Meet the world’s first transformable humanoid robot. The Qiyuan T1 Pro combines humanoid robotics with a transformable structure, making it a standout part of the showcase. Seeing the robot in person gave visitors a closer look at its physical design and engineering concept, and opened up conversations about how new robotic forms may evolve for different real-world settings."}</p>
            <span className="exhibition-tag">{zh ? "全球首款可变形人形机器人" : "THE WORLD’S FIRST TRANSFORMABLE HUMANOID ROBOT"}</span>
          </div>
        </div>

        <div className="exhibition-location">
          <div className="exhibition-location-heading">
            <span className="exhibition-index">03 / THE EXHIBITION FLOOR</span>
            <h3>{zh ? "相聚印度尼西亚" : "Meeting the world in Indonesia."}</h3>
            <p>{zh ? "从展位环境到现场产品展示，这些影像记录了 PISIMAI 于 2026 年 11 月在印度尼西亚开展的两场线下展示。11月4日万鸦老，11月8日雅加达。我们将互动 AI 与人形机器人带到现场，让技术通过真实产品和体验被看见、被了解。" : "From the exhibition spaces to the technology on display, this photo record captures PISIMAI’s two in-person showcases in Indonesia in November 2026. Manado on 4 November, followed by Jakarta on 8 November. Interactive AI and humanoid robotics were brought into the exhibition environment so people could discover the work through real products and experiences."}</p>
            <div className="exhibition-location-places"><span>MANADO</span><i /><span>JAKARTA</span><i /><span>INDONESIA</span></div>
            <div className="exhibition-event-dates" aria-label={zh ? "展会日期" : "Exhibition dates"}>
              <div><span>{zh ? "万鸦老" : "MANADO"}</span><strong>04 NOV 2026</strong></div>
              <div><span>{zh ? "雅加达" : "JAKARTA"}</span><strong>08 NOV 2026</strong></div>
            </div>
          </div>
          <div className="exhibition-venue-gallery">
            {venuePhotos.map((photo, index) => (
              <PhotoTile key={photo.file} file={photo.file} alt={photo.alt} className={`exhibition-venue-photo exhibition-venue-photo-${index + 1}`} />
            ))}
          </div>
        </div>

        <div className="exhibition-footer-line">
          <span>{zh ? "技术创新 · 真实体验 · 全球连接" : "ENGINEERED WITH PURPOSE. SHARED WITH THE WORLD."}</span>
          <a href="#contact">{zh ? "与我们交流" : "LET'S BUILD WHAT'S NEXT"} <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg></a>
        </div>
      </div>
    </section>
  );
}
