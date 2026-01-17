import GlareHover from "./GlassClare";
export default function Services() {
  return (
    <section id="services" className="services-section">

      <GlareHover
        width="100%"
        height="auto"
        background="transparent"
        borderColor="transparent"
        glareColor="rgba(255,255,255,0.8)"
        glareOpacity={0.45}
        glareSize={200}
        glareAngle={-30}
        transitionDuration={1200}
        hoverOnly
        followCursor
      >
        <div className="services-glass">

          <h2>Used Car & Vehicle Loan Services</h2>

          <article className="service-card">
            <h3>Certified Second-Hand Cars</h3>
            <p>
              We sell fully inspected and verified used cars with
              transparent pricing and proper documentation.
            </p>
          </article>

          <article className="service-card">
            <h3>Car & Vehicle Loan Assistance</h3>
            <p>
              Get fast car loan approval with minimal documents,
              flexible EMI options, and competitive interest rates.
            </p>
          </article>

          <article className="service-card">
            <h3>Loan Transfer & Refinancing</h3>
            <p>
              Reduce your monthly EMI by transferring or refinancing
              your existing vehicle loan.
            </p>
          </article>

        </div>
      </GlareHover>

    </section>
  );
}
