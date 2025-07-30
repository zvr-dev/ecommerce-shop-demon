"use client"
import { useRef, useState } from "react";
import style from "./video-hero.module.css"
import { CustomButton } from "../buttons/custom-button";
import Link from "next/link";
type VideoHeroProps = {
    src : string;
    title?: string;
    content?:string;
    ctaButtons?: boolean;
}
export const VideoHero = ({src, title, content, ctaButtons} : VideoHeroProps) => {
    const videoElement = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleClick = () => {
        if (videoElement.current) {
            if (isPlaying){
                videoElement.current.pause()
            } 
            else {
                videoElement.current.play()    
            }
            setIsPlaying(!isPlaying)
        }
    }
    return <div className={style.video_wrapper}>
        <div className={`${style.icon} ${ isPlaying ? style.fade : ''}`}>
        {isPlaying ? 
        // play icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg> 
            : 
            // pause icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
        </svg>
        }
        </div>

        <div className={style.video_block_content}>
            <h2>{title}</h2>
            <p>{content}</p>
            {ctaButtons ? <div className={style.cta_btn_group}>
                <Link href='/women'>
                    <CustomButton variant="light">Shop Women's</CustomButton>
                </Link>
                <Link href="men">
                    <CustomButton variant="light">Shop Men's</CustomButton>
                </Link>
            </div> : ""}
        </div>
        <video 
            ref={videoElement} 
            autoPlay={true} 
            muted 
            playsInline 
            preload="metadata"
            width={"100%"}
            onClick={handleClick}
            loop>
          <source type='video/mp4' src={src}/>
        </video>
      </div>
}