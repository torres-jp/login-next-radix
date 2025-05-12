'use client'
import { Button, Flex, Text, TextField } from '@radix-ui/themes'
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { useForm, Controller } from 'react-hook-form'

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Flex direction='column' gap='3'>
        <label htmlFor='email'>Email</label>
        <Controller
          name='email'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Email is required',
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type='email'
                placeholder='email@example.com'
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            )
          }}
        />
        {errors.email && (
          <Text className='text-red-400 text-sm'>{errors.email.message}</Text>
        )}

        <label htmlFor='password'>Password</label>
        <Controller
          name='password'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Password is required',
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type='password'
                placeholder='*********'
                {...field}
              >
                <TextField.Slot>
                  <LockClosedIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            )
          }}
        />
        {errors.password && (
          <Text className='text-red-400 text-sm'>
            {errors.password.message}
          </Text>
        )}

        <Button>Sign In</Button>
      </Flex>
    </form>
  )
}

export default SigninForm
