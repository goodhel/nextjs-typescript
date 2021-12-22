import type { NextPage } from 'next'
import ContainerBlock from '@components/ContainerBlock'
import Container from '@components/Container'

const About: NextPage = () => {
  return (
    <ContainerBlock title={'About'} description={'About NextJs Typescript'}>
      <Container>This is About</Container>
    </ContainerBlock>
  )
}

export default About
