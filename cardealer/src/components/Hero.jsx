import car1 from "../assets/car4.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car5.png";
import { useEffect, useState } from "react";
import GlareHover from "./GlassClare";
import TrueFocus from "./TrueFocus";
import LogoLoop from "./LogoLoop";
import "../styles/hero.css";
import { vehicleLogos } from "../data/logo.jsx";

export default function Hero() {
  const carImages = [car1, car2, car3, car4];
   const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % carImages.length);
    }, 3800); // smooth pacing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero hero-layered">

      {/* 🔽 BACKGROUND FULL LOGO LOOP */}
      <div className="hero-logo-bg">
        <LogoLoop
          logos={vehicleLogos}
          speed={140}
          direction="left"
          logoHeight={48}
          gap={48}
        />
        <LogoLoop
          logos={vehicleLogos}
          speed={110}
          direction="right"
          logoHeight={44}
          gap={56}
        />
        <LogoLoop
          logos={vehicleLogos}
          speed={80}
          direction="left"
          logoHeight={40}
          gap={64}
        />
      </div>

      {/* 🔼 MAIN GLASS CONTAINER */}
      <GlareHover
            width="90%"
            height="auto"
            background="transparent"
            borderColor="transparent"

            glareColor="rgba(79, 74, 74, 0.9)"
            glareOpacity={0.5}
            glareSize={180}
            glareAngle={-35}

            transitionDuration={1200}
            playOnce={false}
            hoverOnly     // 🔥 glare only on hover (perf + realism)
            followCursor  // 🔥 glare reacts to mouse
            >

        <div className="hero-glass">
          <div className="hero-glass-inner">

            {/* LEFT : TEXT */}
            <div className="hero-content">
              <h1>
                <span className="highlight ">Best Dealer</span> for Your <br />
                <strong>Four Wheeler</strong>
              </h1>

              <p className="hero-sub">
                Get the best price for each type of car
              </p>

              <div className="hero-focus">
                <TrueFocus
                  sentence="True Value"
                  blurAmount={4}
                  borderColor="#ff6b3d"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
                />
              </div>
            </div>

            {/* RIGHT : CAR */}
            <div className="hero-car">
                  {carImages.map((img, i) => {
                    let className = "hero-car-img";

                    if (i === index) {
                      className += " active";
                    } else if (
                      i === (index - 1 + carImages.length) % carImages.length
                    ) {
                      className += " exit";
                    }

                    return (
                      <img
                        key={i}
                        src={img}
                        alt="Featured car"
                        className={className}
                      />
                    );
                  })}
                </div>

          </div>
        </div>
      </GlareHover>

    </section>
  );
}
