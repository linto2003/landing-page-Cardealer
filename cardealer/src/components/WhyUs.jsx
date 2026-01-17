import GlareHover from "./GlassClare";

export default function WhyUs() {
  return (
    <section className="whyus-section">

      <GlareHover
        width="100%"
        height="auto"
        background="transparent"
        borderColor="transparent"
        glareColor="rgba(255,255,255,0.7)"
        glareOpacity={0.4}
        glareSize={180}
        glareAngle={-30}
        transitionDuration={1200}
        hoverOnly
        followCursor
      >
        <div className="whyus-glass">

          <h2>Why Choose AutoTrust Used Cars</h2>

          <ul className="whyus-list">
            <li>Trusted used car dealer with transparent pricing</li>
            <li>Fast car loan approval across major banks</li>
            <li>Complete RC transfer and documentation support</li>
            <li>Serving customers across the city with 5,000+ happy buyers</li>
          </ul>

        </div>
      </GlareHover>

    </section>
  );
}
