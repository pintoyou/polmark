import Head from 'next/head'
import Image from 'next/image'

import Navbar from "./Navbar";
import Footer from "./Footer";
import NFTItems from "./NFTItems";

export default function Home() {
  return (
    <div>
      <Navbar  />
      <NFTItems  />
      <Footer  />
    </div>
    
    
  
  )
}
