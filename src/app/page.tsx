import Image from "next/image";
import styles from "./page.module.css"; // Import your CSS module
import image from "../app/1.webp"; // Import the image from the app folder
import Navbar from "./components/navbar";
import Card from "./components/card";
import Footer from "./components/footer";

export default function Keyframe() {
  return (
   <div> <Navbar/>
   
      <div className={styles.box}> {/* Use the imported styles */}
        <h6>
          <span><h4 className="font-bold text-3xl">Welcome to Blogging Website</h4></span>
          <br />
          <p className="text-2xl">Read our blogs</p>
        </h6>
        <div className={styles.img}> {/* Correct usage of CSS module */}
          <Image src={image} alt="Blog Image"  />
          <div className={styles.content}><h1>Blogging Site</h1><br/>
          <p>Join us for daily blog readings</p></div>
        </div>
      </div>
  
    <Card/>
    <Footer/></div>);}