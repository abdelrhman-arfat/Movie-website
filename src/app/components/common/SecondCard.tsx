"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="title">Small Portfolio</div>
        <div className="icons-container">
          <Link
            href="https://www.linkedin.com/in/abdo-yasser-946493221/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg
              fill="white"
              height="25px"
              width="25px"
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
            >
              <path
                d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13
	c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3
	c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13
	c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"
              />
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            href={"https://abdoyasser.vercel.app/"}
          >
            <svg
              fill="white"
              width="25px"
              height="25px"
              viewBox="0 -32 576 576"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>web</title>
              <path d="M288 32Q350 32 402 63 453 93 483 145 512 196 512 256 512 318 482 370 451 421 400 451 348 480 288 480 226 480 175 450 123 419 94 368 64 316 64 256 64 194 95 143 125 91 177 62 228 32 288 32ZM272 83Q235 95 218 151 245 158 272 160L272 83ZM304 160Q331 158 358 151 341 95 304 83L304 160ZM367 98Q380 118 387 141 403 133 411 128 392 111 367 98ZM189 141Q197 117 209 98 185 110 166 129L189 141ZM463 240Q460 193 432 153 412 166 396 172 403 205 404 240L463 240ZM180 172Q165 166 145 153 118 191 113 240L172 240Q173 205 180 172ZM272 192Q238 189 210 182 205 208 204 240L272 240 272 192ZM372 240Q371 208 366 182 338 189 304 192L304 240 372 240ZM113 272Q118 321 145 359 159 349 180 340 173 307 172 272L113 272ZM204 272Q205 304 210 330 238 323 272 320L272 272 204 272ZM304 320Q338 323 366 330 371 304 372 272L304 272 304 320ZM396 340Q411 346 431 359 458 321 463 272L404 272Q403 307 396 340ZM304 429Q341 417 358 361 331 354 304 352L304 429ZM272 352Q245 354 218 361 235 417 272 429L272 352ZM189 371Q176 376 166 383 185 401 208 413 195 391 189 371ZM387 371Q380 394 367 413 390 403 410 383L387 371Z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/abdelrhman-arfat"}
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <svg
              fill="#fff"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
            </svg>
          </Link>
        </div>
        <div className="box box3">
          <div className="content">
            <span className="box-title">About This Web</span>
            <span className="box-text">
              This website was built with Next js and Redux-
              {"'Toolkit-persist-Query'"} & tailwind css & Typescript & Some API
              Routes to fetch data
            </span>
          </div>
        </div>
        <div className="box box2">
          <div className="content">
            <span className="box-title">More Info</span>
            <span className="box-text">
              My name is: Abdelrhman Yasser , I am 18 years old , i am studying
              in the faculty of computer science in tanta university,
            </span>
          </div>
        </div>
        <div className="box box1">
          <div className="content">
            <span className="box-title">About Me</span>
            <span className="box-text">
              Hello , I am AbdelRhman Yasser , i am a NextJs and React JR
              front-end developer and using modern tools to develop websites
              like - typescript & tailwind css - bootstrap - Redux toolkit and
              Redux Query
            </span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 230px;
    height: 400px;
    background: linear-gradient(-45deg, rgb(0, 153, 255) 0%, cyan 100%);
    overflow: hidden;
    border: 1px solid black;
    box-shadow: rgba(141, 177, 205, 0.618) 0px 40px 30px -25px;
    transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card:hover {
    transform: scale(1.08);
    box-shadow: rgba(141, 177, 205, 0.618) 0px 30px 30px -25px;
  }

  .icons-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    z-index: 999;
  }

  .icons-container .svg {
    stroke: white;
    width: 20px;
    transition: transform 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .icons-container .svg:hover {
    transform: scale(1.5);
    stroke: black;
  }

  .icons-container .twitter {
    fill: white;
  }

  .icons-container .twitter:hover {
    fill: black;
    stroke: none;
  }

  .logo {
    width: 50px;
    padding: 1rem;
  }

  .logo .svg {
    fill: white;
  }

  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: White;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: rgba(66, 66, 66, 0.349) 5px 0px 10px 0px inset;
    transition: all 0.5s ease-in-out;
    display: grid;
    place-content: center;
    padding: 2rem 2rem 3rem 2rem;
    border: 1px solid black;
  }

  .box .content {
    position: relative;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.5s ease-in-out 0.3s;
  }

  .box .content .box-title {
    display: block;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .box .content .box-text {
    color: rgba(255, 255, 255, 0.738);
    font-size: 0.8rem;
    font-weight: 700;
  }

  .box:hover {
    right: 0;
    top: 0;
    border-radius: 0;
    border: 1px solid transparent;
    box-shadow: rgba(66, 66, 66, 0) 5px 0px 10px 0px inset;
  }

  .box:hover .content {
    transform: translate(0, 0);
    opacity: 1;
  }

  .box1 {
    top: -85%;
    right: -40%;
    background: rgb(255, 112, 60);
    border-radius: 200px;
  }

  .box2 {
    top: -70%;
    right: -45%;
    background: rgb(255, 174, 0);
    border-radius: 200px;
  }

  .box3 {
    top: -62%;
    right: -30%;
    background: rgb(255, 194, 52);
    border-radius: 200px;
  }
`;

export default Card;
