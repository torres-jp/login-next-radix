import { Card, Container, Heading } from '@radix-ui/themes'

function LoginPage() {
  return (
    <>
      <Container size='1' height='100%' className='p-3 md:p-0'>
        <Card>
          <Heading>Sign in</Heading>
        </Card>
      </Container>
    </>
  )
}

export default LoginPage
