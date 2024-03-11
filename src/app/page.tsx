/** @format */
import Hero from '@/components/hero';
import Image from 'next/image';
import homeImage from 'public/home.jpg';

export default function Home() {
   return (
      <Hero
         imgData={homeImage}
         imageAlt="home image"
         title="Professional Cloud hosting"
      />
   );
}
