export default function HeroSection() {
  return (
    <div className="hero-section bg-grey">
      <div className="flex items-center justify-end">
        <img
          src="hero-house.png"
          className="transform -scale-x-100 h-auto md:h-screen"
          alt="Hero House"
        />
      </div>
    </div>
  );
}