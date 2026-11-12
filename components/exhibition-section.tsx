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
  file, alt, className, priority = false
}: {
  file: string; alt: string; className?: string; priority?: boolean;
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
        priority={priority}
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
            ? "从沉浸式人工智能体验到新一代人形机器人，我们将技术带到展会现场，与行业伙伴和参观者面对面交流。"
            : "From immersive AI experiences to next-generation humanoid robotics, we bring our work beyond the lab and into the hands of people, partners and curious minds."}</p>
        </div>

        <div className="exhibition-feature exhibition-feature-ai">
          <div className="exhibition-feature-copy">
            <span className="exhibition-index">01 / INTERACTIVE AI</span>
            <h3>{zh ? "AI Photobooth" : "AI Photobooth"}</h3>
            <p>{zh
              ? "让人工智能成为可亲身体验的创意时刻。我们的 AI Photobooth 展示了智能影像体验如何吸引观众、激发互动并创造难忘回忆。"
              : "Turning artificial intelligence into an experience people can step into. Our AI Photobooth brought interactive, creative moments to the exhibition floor—inviting visitors to engage with AI first-hand."}</p>
            <span className="exhibition-tag">{zh ? "人工智能 · 互动体验" : "ARTIFICIAL INTELLIGENCE · INTERACTIVE EXPERIENCE"}</span>
          </div>
          <div className="exhibition-ai-gallery">
            {aiPhotos.map((photo, index) => (
              <PhotoTile key={photo.file} file={photo.file} alt={photo.alt} className={`exhibition-ai-photo exhibition-ai-photo-${index + 1}`} priority={index === 0} />
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
              ? "近距离体验全球首款全球首款可变形人形机器人。Qiyuan T1 Pro 是本次展出的核心亮点之一，展现了机器人形态创新与智能交互的全新可能。"
              : "Meet the world’s first transformable humanoid robot. The Qiyuan T1 Pro was one of our exhibition highlights, bringing an extraordinary new form of robotics and intelligent interaction to the exhibition floor."}</p>
            <span className="exhibition-tag">{zh ? "可变形人形机器人" : "THE WORLD’S FIRST TRANSFORMABLE HUMANOID ROBOT"}</span>
          </div>
        </div>

        <div className="exhibition-location">
          <div className="exhibition-location-heading">
            <span className="exhibition-index">03 / THE EXHIBITION FLOOR</span>
            <h3>{zh ? "相聚印度尼西亚" : "Meeting the world in Indonesia."}</h3>
            <p>{zh ? "来自雅加达与万鸦老的展会现场。" : "A look at the exhibition spaces and the people and places behind the experience in Jakarta and Manado."}</p>
            <div className="exhibition-location-places"><span>JAKARTA</span><i /><span>MANADO</span><i /><span>INDONESIA</span></div>
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
