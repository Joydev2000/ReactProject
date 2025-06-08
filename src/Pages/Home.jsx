import { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { context } from '../context/Context.jsx'

function Home() {
  let {count, setCount, data, setData} = useContext(context)
  
  console.log('Current context data:', data) // Debug log
  
  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones",
      price: "$773",
      imageSrc: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      imageAlt: "Sony WH-1000XM3 Headphones"
    },
    {
      id: 2,
      name: "Microsoft Xbox X/S Wireless Controller",
      price: "$57",
      imageSrc: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
      imageAlt: "Microsoft Xbox Controller"
    },
    {
      id: 3,
      name: "Logitech G733 Lightspeed Wireless Gaming Headset",
      price: "$384",
      imageSrc: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
      imageAlt: "Logitech G733 Headset"
    },
    {
      id: 4,
      name: "Sony WH-1000XM5 Wireless Headphones",
      price: "$362",
      imageSrc: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
      imageAlt: "Sony WH-1000XM5 Headphones"
    }
  ]

  useEffect(() => {
    console.log('Setting data in useEffect...') // Debug log
    setData(products)
    console.log('Data set in context:', products)
  }, [setData]) // Added setData to dependency array

  return (
    <div>
     <section className='hero'>
     <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[80vh] w-full"
      >
        <SwiperSlide>
          <div>
            <img className='w-full h-full ' src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='w-full h-full' src="https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='w-full h-full' src="https://images.pexels.com/photos/27739873/pexels-photo-27739873/free-photo-of-a-lake-surrounded-by-grass-and-hills.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className='w-full h-full' src="https://images.pexels.com/photos/29212739/pexels-photo-29212739/free-photo-of-foggy-mountain-basketball-court-in-alpine-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
     </section>
     
     <button onClick={() => setCount(count + 1)} className='w-[60px] bg-slate-600 text-center'>click Me</button>
     <h1>{count}</h1>
    <section>
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="product"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Home
