import { Link } from "react-router-dom";
import leaf from "../Assets/pexels-photo-5403485-removebg-preview.png";
import award from "../Assets/award-2648055_640-removebg-preview.png";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";



export default function HomePage() {

  const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    })

  return (
    <div className="mainPage">
      <div className="award">
        <img src={award} alt="award" />
      </div>
      <div className=" ">
        <section className="flex flex-col items-center justify-center text-center h-screen">
          <h1 className="uppercase font-bold text-5xl tracking-wide mb-5 md:text-6xl lg:text-8xl bayo">
            Elite Blog
          </h1>
          {/* {isLoading ? (
            <Loader/>
            ) : (
              <button>
                  <Link
                    to="/blog"
                    className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                  >
                    Explore Our Blog Post
                  </Link>
                </button>
              )
            } */}
            
            <button>
                  <Link
                    to="/blog"
                    className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                  >
                    Explore Our Blog Post
                  </Link>
                </button>
          
        </section>
      </div>
        <div className="leaf">
          <img src={leaf} alt="image" />
        </div>
    </div>
  );
}
