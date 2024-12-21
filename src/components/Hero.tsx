import Image from "next/image";
import "../style/Hero.css";



export default function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
           <Image src={"/image/profile.jpg"} 
           width={200}
           height={200}
           className="header-image"
           alt="profile"/>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I'm Syeda Laiba
                         Front-end Developer</h1>
                 <p className="des-hero">A passionate frontend developer with a growing interest in creating dynamic web applications. Currently exploring TypeScript, Tailwind CSS, and Next.js, I'm dedicated to honing my skills in these technologies. The challenge of learning new things excites me, and I'm eager to apply my knowledge to real-world projects</p>
                 <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
        </div>
    )
}