import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY;
const PIXABAY_BASE_URL = import.meta.env.VITE_PIXABAY_DATA;

axios.defaults.baseURL = PIXABAY_BASE_URL

const Nature = () => {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1);

    const fetchImages = async (pageNum = 1) => {
        try {
            const response = await axios.get(`/?key=${PIXABAY_KEY}&category=mountains&image_type=photo&per_page=10&page=${pageNum}`)
            setImages((prev) => [...prev, ...response.data.hits]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
    fetchImages(page);
    }, [page]);



  return (
    <section className="nature">
        <h2 className="nature-title">Beautiful nature</h2>
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5} // показываем 5 фото
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        onReachEnd={() => setPage((prev) => prev + 1)}
        className="nature-swiper"
      >
        {images.map(({ webformatURL, id }) => (
          <SwiperSlide key={id}>
            <img className="nature__img" src={webformatURL} alt={`nature-${id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Nature;