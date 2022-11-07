import { Suspense } from "react";
import { IconExternalLink } from "@tabler/icons";
import { Section } from "../../../components/Section";
import { PageSpeedInsights } from "../../../components/demo/Insights";

export default function Performance() {
  return (
    <>
      <Section>
        <h2 className="font-bold text-3xl text-center mb-2 mt-5">Performance</h2>
        <article className="w-3/5">
          <p>
            In a{" "}
            <a
              className="text-indigo-600"
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/"
              }
            >
              study by Google
              <IconExternalLink size={12} className="inline-block ml-2" aria-hidden />
            </a>{" "}
            in 2018, abandomnent rates for your website will increase by <strong>32%</strong> if it takes longer than 3
            seconds to load. Having a highly optimzied website is important for user retention. One of the biggest
            factors to look out for is the handling of images and scripts. For images, you should always make sure to
            serve them in next-gen formats, such as <i>.webP</i>, and lazy load off-screen images. This alone can
            significantly increase the speed of your websites. Concerning scripts, you should always try to send the
            least amount of JavaScript possible, and only download the code you absolutely need at first, then lazy load
            the rest. Next.js can help with both of these issues by automatically lazy loading your images and serving
            them in <i>.webP</i>, and code splitting your app thus, decreasing the size of your main bundle.
          </p>
        </article>
      </Section>
      <Section>
        <h2 className="text-gray-900 font-bold text-3xl text-center">See it in action</h2>
        <Suspense fallback={<p>Loading data for demo</p>}>
          <PageSpeedInsights />
        </Suspense>
      </Section>
    </>
  );
}
