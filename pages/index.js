import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id="portrait-div">
      <img class="portrait" src="compressed/DSC_0018-min.jpg" />
      <p class="name">NEHEMIAH WILSON</p>
      <a class="nav" href="posts/about-me">about me</a>
      <a class="nav" href="posts/photography">photography</a>
      <a class="nav" href="posts/contact">contact</a>
    </div>
  )
}
