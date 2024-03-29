import type { NextPage } from 'next'
import ContainerBlock from '@components/ContainerBlock'
import Container from '@components/Container'

const Home: NextPage = () => {
  return (
    <ContainerBlock title={'Home'} description={'Home NextJs Typescript'}>
      <Container>This is Home</Container>
    </ContainerBlock>
  )
}

export default Home
