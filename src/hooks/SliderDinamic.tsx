import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Parallax,
  EffectCoverflow,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SliderProps {
  options: SwiperProps;
  children: ReactNode;
  className?: string;
}

export default function SliderDinamic({
  options,
  children,
  className,
}: SliderProps) {
  return (
    <Swiper
      style={{ width: "auto" }}
      modules={[
        Navigation,
        Autoplay,
        EffectCoverflow,
        EffectFade,
        Parallax,
        Pagination,
        A11y,
      ]}
      {...options}
      className={className}>
      {children}
    </Swiper>
  );
}
