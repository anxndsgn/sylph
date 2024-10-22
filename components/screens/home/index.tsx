import About from "@/components/about";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <About />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="works" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Spacer />
        <div className="mb-2 flex flex-col gap-2 text-muted">
          <h2 className="text-muted">Other Projects</h2>
          <span className="">下面是我的一些其他比赛和课程项目，包括 UX/UI、前端、硬件、工业设计。我还运营一个小型工作室，为独立开发者们设计 App Logo。</span>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="software" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="hardware" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="logo" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
