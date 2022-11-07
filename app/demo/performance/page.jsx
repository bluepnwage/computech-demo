import { IconExternalLink } from "@tabler/icons";
import { Section } from "@components/Section";
import { PageSpeedInsights } from "@components/demo/performance/Insights";

export default function Performance() {
  return (
    <>
      <Section>
        <h2 className="font-bold text-3xl text-center mb-2 mt-5">Performance</h2>
        <article className="w-3/5">
          <p>
            According to a{" "}
            <a
              className="text-indigo-600"
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/"
              }
            >
              study by Google
              <IconExternalLink size={12} className="inline-block ml-[2px]" aria-hidden />
            </a>{" "}
            in 2018, abandonmnent rates for a website will increase by <strong>32%</strong> if it takes 1-3 seconds to
            load, <strong>90%</strong> if it takes 1-5 seconds to load, and over <strong>100%</strong> if it takes
            longer than 6 seconds. Based on these numbers, we can conclude that having a highly optimized website is
            crucial for user retention. One of the leading factors to look out for is the handling of images and
            scripts. Images must be served in next-gen formats, such as WebP, and lazy loaded if they are off-screen on
            initial page load. This alone can <em>significantly</em> increase the speed of a website. In terms of
            dealing with scripts, always consider sending the least amount of JavaScript possible, then lazy loading the
            rest. Next.js can help with both of these issues by automatically lazy loading images, serving them in WebP,
            and code splitting your app thus, decreasing the size of your main bundle.
          </p>
        </article>
      </Section>
      <Section>
        <h2 className="text-gray-900 font-bold text-3xl text-center mb-5">See it in action</h2>
        <PageSpeedInsights />
      </Section>
    </>
  );
}
