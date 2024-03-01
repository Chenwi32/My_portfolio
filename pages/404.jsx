import { Container } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default () => {
  const [count, setCount] = useState(10)
  const router = useRouter()
  setInterval(() => {
    if (count <= 0) return
    setCount(count - 1)
  }, 1000)

  setTimeout(() => {
    router.push('/')
  }, 10000)
  return (
    <Container maxW={1200} pb={10}>
      <h1>
        Uhh!! <span className="Unfoundpage_imojie">&#x1F615;</span>
      </h1>
      <h4>Looks like you want to go somewhere that doesn't exist</h4>
      <p>
        Go back home
        <Link href="/">
          
            <span className="Unfoundpage_link-imojie"> here &#x1F517;</span>
        
        </Link>
      </p>
      <h3>Or</h3>
      <p>You will be re-directed in 10 seconds</p>
      <h5>{count}</h5>
    </Container>
  )
}
