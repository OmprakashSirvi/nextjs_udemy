/** @format */

import Hero from '@/components/hero';
import performanceImg from 'public/performance.jpg';

export default function PerformancePage() {
   return (
      <Hero
         imgData={performanceImg}
         imageAlt="Welding"
         title="We serve high performance"
      />
   );
}
