
import Image from "next/image";
import styles from "./page.module.css"; // Import your CSS module
import image from "../app/1.webp"; // Import the image from the app folder
import Navbar from "./components/navbar";
import Card from "./components/card";


export default function Keyframe() {
  return (
    <div>
      <Navbar />
      <div className={styles.box}>
        <h4 className="font-bold text-3xl text-center font-mono">Welcome to Blogging Website</h4>
        <p className="text-2xl text-center font-serif">Read our blogs</p>
        <div className={styles.img}>
          <Image src={image} alt="Blog Image" layout="fill" objectFit="cover" />
          <div className={styles.content}>
            <h1>Blogging Site</h1>
            <p>Join us for daily blog readings</p>
          </div>
        </div>
      </div>
      <Card />
      
    </div>
  );
}
