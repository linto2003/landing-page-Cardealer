import GlareHover from "./GlassClare";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

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
        <div className="contact-glass">

          <h2>Contact Used Car & Loan Experts</h2>

          <p>
            Looking to buy a second-hand car or apply for a vehicle loan?
            Contact our experts for a free consultation.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />

            <select>
              <option>Interested In</option>
              <option>Buying a Used Car</option>
              <option>Car Loan / Vehicle Loan</option>
            </select>

            <button type="submit">Request Callback</button>
          </form>

        </div>
      </GlareHover>

    </section>
  );
}
