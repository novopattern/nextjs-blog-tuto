import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import { Post } from '../../lib/type'
import utilStyles from '../../styles/utils.module.css'

type Props = {
  postData: Post
}

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

const Post: FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date}/>
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
    </Layout>
  )
}

export default Post
