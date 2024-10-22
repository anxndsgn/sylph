import About from "@/components/about";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;
const Seperator = () => <div className="border-border border-t" />;

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
          <h1 className="text-muted">Other Projects</h1>
          <span className="">
            下面是我的一些其他项目，包括UI、前端、硬件、工业设计和icon。
          </span>
        </div>

        <Seperator />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="software" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="hardware" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="icon" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
