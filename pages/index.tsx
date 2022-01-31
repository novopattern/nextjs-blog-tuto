import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../lib/type'
import utilStyles from '../styles/utils.module.css'

type Props = {
  allPostsData: Post[]
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home: FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I&apos;m Jonatan. I&apos;m a software engineer. You cannot contact me, I contact you.
        </p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({
            id,
            date,
            title
          }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <Date dateString={date}/>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home
