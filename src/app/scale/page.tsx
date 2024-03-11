/** @format */

import Hero from '@/components/hero';
import scaleImg from 'public/scale.jpg';

export default function ScalePage() {
   return (
      <Hero
         imgData={scaleImg}
         imageAlt="steel factory"
         title="Scale your application with us!"
      />
   );
}
