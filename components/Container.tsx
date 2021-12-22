import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>
}

export default Container
