import { Button } from "@mui/base";
import { CaseStudy } from "./CaseStudy";

export function Home() {
  return (
    <article className="container mx-auto">
      <div>
        <div className="mt-12">
          <h5 className="text-2xl font-medium">
            Hi, I'm Chas
          </h5>
          <h6 className="font-seriffont-monotext-base">
            UI / UI Designer | Philippines
          </h6>
        </div>

        <h1 className="text-7xl font-bold mt-16">
          I design <span className="text-fuchsia-900">simple.</span>
        </h1>

        <Button className="bg-fuchsia-900 text-white px-10 py-3 font-bold text-xl rounded-full mt-32">
          Check Case Studies
        </Button>

        <div className="mt-64 text-xl">
          Follow me in
        </div>
      </div>
      <CaseStudy />
    </article>
  );
}

