"use client";

import * as FadeIn from "@/components/motion/staggers/fade";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function About() {
  const [isFold, setIsFold] = useState(true);

  return (
    <AnimatePresence>
      <div className="flex justify-between">
        <div>
          <h1>ANXNDSGN | 鑫</h1>
          <h2 className={"font-normal text-muted"}>UX/UI 设计师。 杭州，中国。</h2>
          <div className="mt-1 flex gap-2 font-normal text-muted">
            <a href="mailto:anxanxx@gmail.com">E-mail</a>
            <a href="https://x.com/anxndsgn">Twitter</a>
          </div>
        </div>
      </div>

      <Spacer />
      <article className="">
        <p>你好，我是鑫。现就读于浙江大学软件学院工业设计工程。现在在 Zeabur 作为一名 UX/UI 设计师。</p>

        <button className="mt-6 flex items-center py-1 hover:opacity-80" type="button" onClick={() => setIsFold(!isFold)}>
          <span className="font-semibold">{isFold ? "更多关于我" : "收起"}</span>

          <div className={`ml-1 transition-transform duration-300 ease-in-out ${isFold ? "" : "rotate-180"}`}>
            <ChevronDown size={16} />
          </div>
        </button>

        <AnimatePresence>
          {!isFold && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
            >
              <FadeIn.Container>
                <FadeIn.Item>
                  <p className="mt-6">
                    作为人机界面设计师，我对设计工程、design ops
                    和设计系统感兴趣，我称之为"面向开发的设计（DfD）"。除此之外，我始终将自然、直观的设计作为第一原则，当然还有漂亮的外表。正在学习JavaScript 和
                    React。
                  </p>

                  <ul>
                    <p>我的优势：</p>
                    <li>- 熟练掌握 Figma，熟悉 Figma 最新特性，4年 Figma 使用经验。</li>
                    <li>- 熟悉设计系统，搭建过设计色彩系统与组件库。</li>
                    <li>- 掌握html、js 和 CSS 前端知识，掌握 React 框架。</li>
                    <li>- 极强的学习能力。</li>
                    <li>- 小型团队的合作经验。</li>
                  </ul>

                  <ul className="">
                    <p>我还需要学习的：</p>
                    <li>- to C 产品的设计经验。</li>
                    <li>- 大型公司的设计交付流程。</li>
                    <li>- 产品思维。</li>
                    <li>- 任何事。</li>
                  </ul>

                  <button className="mt-6 rounded-md bg-black-a1 px-4 py-2" type="button">
                    <a href="cv.pdf">我的简历</a>
                  </button>
                </FadeIn.Item>
              </FadeIn.Container>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </AnimatePresence>
  );
}
