import type { NextPage } from 'next'
import ContainerBlock from '@components/ContainerBlock'
import Container from '@components/Container'
import Intro from '@components/blog/Intro'

const Blog: NextPage = () => {
  return (
    <ContainerBlock title={'Blog'} description={'Blog NextJs Typescript'}>
      <Container>
        <Intro />
      </Container>
    </ContainerBlock>
  )
}

export default Blog
