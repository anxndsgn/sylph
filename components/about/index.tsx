"use client";

import * as FadeIn from "@/components/motion/staggers/fade";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EB_Garamond } from "next/font/google";
import { useState } from "react";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function About() {
  const [isFold, setIsFold] = useState(true);

  return (
    <AnimatePresence>
      <div className="flex justify-between">
        <div>
          <h1>鑫</h1>
          <h2 className={`${ebGaramond.className}`}>UX/UI Designer.</h2>
        </div>
      </div>

      <Spacer />
      <article className="">
        <p>
          你好，我是鑫。现就读于浙江大学软件学院工业设计工程。现在在 Zeabur
          作为一名 UX/UI 设计师。
        </p>

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
                    作为人机界面设计师，我对设计工程、design
                    ops和设计系统感兴趣，我称之为"面向开发的设计（DfD）"，这类似于工业设计领域的"面向制造的设计（DfM）"。除此之外，我始终将自然、直观的设计作为第一原则，当然还有漂亮的外表。正在学习JavaScript
                    和 React。
                  </p>

                  <p>
                    我的设计风格是简约、现代、直观，我喜欢用简单的设计解决复杂的问题。我认为设计是一种解决问题的方法，而不仅仅是美化。我喜欢在设计中融入自然元素，因为我认为自然是最好的设计师。
                  </p>
                </FadeIn.Item>
              </FadeIn.Container>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="mt-6 flex items-center py-1 hover:opacity-80"
          type="button"
          onClick={() => setIsFold(!isFold)}
        >
          <span className="font-semibold">
            {isFold ? "更多关于我" : "收起"}
          </span>

          <div
            className={`ml-1 transition-transform duration-300 ease-in-out ${isFold ? "" : "rotate-180"}`}
          >
            <ChevronDown size={16} />
          </div>
        </button>
      </article>
    </AnimatePresence>
  );
}
