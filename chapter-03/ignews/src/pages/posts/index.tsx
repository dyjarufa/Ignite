import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from "@prismicio/client";

import styles from './styles.module.scss'

export default function () {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>10 de Janeiro de 2022 </time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
          <a href="">
            <time>10 de Janeiro de 2022 </time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
          <a href="">
            <time>10 de Janeiro de 2022 </time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
        </div>
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post'), // qual tipo de documento estou biscando  "posts" (quer eu criei no prismic)
  ], {
    fetch: ['post.title', 'post.content'], // quais conteúdos quero buscar dos "posts" ( title e content)
    pageSize: 100,
  })

  // console.log(response)
  
  // Dica console.log apa paresentar  o conteúdo  de dentro um array oy objeto em cascata
  console.log(JSON.stringify(response, null, 2))


  return {
    props: {}
  }

}