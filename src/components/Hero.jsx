import hero from "/assets/hero.png"
import filter from "/assets/filter.png"

const Hero = () => {
  return (
    <section style={{backgroundImage: `url("${hero}")`}} className="relative minHeight bg-no-repeat bg-cover">
      <div className="absolute w-full h-full">
        <img className="absolute w-full h-full" src={filter} alt="" />
      </div>
      <h2 className="relative text-right pt-12 pr-12 text-white font-bold text-[30px]">عن الجمعية</h2>
    </section>  
  )
}

export default Hero