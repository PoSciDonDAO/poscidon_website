'use client';

import React, { useEffect, useState } from 'react';

export default function Blog1() {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetchBlog();
  });
//https://gateway.irys.xyz/N4Q_V85h-sRijY30dvUzcCAu5c8SmjKrviALUAywkfs
  async function fetchBlog() {
    // const res = await fetch(
    //   'https://arweave.net/D5l5YXYIUqx6mRqjTf60YME_2bALg_NHt-97PRFgp5o'
    // );
    // const res = await fetch(
    //   'https://gateway.irys.xyz/_XhnEPm1WrRKGbqzkCPdcMf48DvFZeHkefr5VBS8-ZE'
    // );
    const res = await fetch(
      'https://gateway.irys.xyz/UogLipTCnhTfx29bAHojHmGZYb6CPL_yrHBed-ctKEw'
    );
    setBlog(await String(res));
  }

  const createPost = () => {
    return { __html: `<html className="">${blog}</html>`}
  }

  return( 
  // <main className='max-w-full'>
  //   {blog}
  // </main>
  <main className='max-w-full w-full h-[40rem]'>
    {/* <div> */}
    <iframe 
    className='overflow-scroll w-[30rem] h-[30rem]'
    src={`${blog}`} width={'100%'} height={'100%'}/>

  </main>
  );
}
