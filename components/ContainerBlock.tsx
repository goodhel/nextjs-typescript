import Head from 'next/head'
import { ReactNode } from 'react'
import Navbar from './layouts/Navbar'
import Meta from './Meta'

type Props = {
  children: ReactNode
  title: string | 'NextJS Typescript'
  description: string | 'Hello NextJs Typescript'
}

const ContainerBlock = ({ children, title, description }: Props) => {
  const meta = {
    title: title,
    description: description
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <Meta />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default ContainerBlock
