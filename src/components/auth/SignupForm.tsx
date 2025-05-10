'use client'
import { Button, Flex, TextField, Text } from '@radix-ui/themes'
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { useForm, Controller } from 'react-hook-form'

function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
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
        <label htmlFor='name'>Name</label>
        <Controller
          name='name'
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Name is required',
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type='text'
                placeholder='User name'
                {...field}
                autoFocus
              >
                <TextField.Slot>
                  <PersonIcon height='16' width='16' />
                </TextField.Slot>
              </TextField.Root>
            )
          }}
        />
        {errors.name && (
          <Text className='text-red-400 text-sm'>{errors.name.message}</Text>
        )}

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

        <label htmlFor='password'>Passowrd</label>
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

        <Button>Sign Up</Button>
      </Flex>
    </form>
  )
}

export default SignupForm
