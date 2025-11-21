
import chocolate from './assets/chocolate.png'
import wheat from './assets/wheat.png'
import yogurt from './assets/yogurt.png'
import leaf from './assets/basil-leaf.png'




import './App.css'

function Hero() {

  return (
    <div className='main'>
      <div className="leaf">
          <img src={leaf} alt="leaf"/>
        </div>
        <div className="leaf">
          <img src={leaf} alt="leaf"/>
        </div>
        <div className="leaf">
          <img src={leaf} alt="leaf"/>
        </div>
        <div className="leaf">
          <img src={leaf} alt="leaf"/>
        </div>
        <div className="leaf">
          <img src={leaf} alt="leaf"/>
        </div>
        
        
      <div className='hero'>
        <div className="left">
          <h3 className='flavors'>Explore Unique Flavors</h3>
        </div>
        <div className='products'>
          <img src={chocolate} className="chocolate" alt="chocolate drink" />
          <img src={wheat} className="wheat" alt="wheat drink" />
          <img src={yogurt} className="yogurt" alt="yogurt drink" />
        </div>
        <div className="right">
          <h1 className='slide-text'>Say YEAH to Bold, <br></br>Tasty Refreshment!</h1>
          <div className="product-btn">
            <button>
            OUR PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
