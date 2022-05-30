/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

type Input = { name: string; mail: string }

export const Components: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<Input>()

  const onSubmit = (data: Input) => {
    console.log(data)
    reset()
  }

  console.log(watch('name'))

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name-input">氏名</label>
          <input
            id="name-input"
            aria-describedby="name-input-helper-text"
            aria-errormessage="name-input-error-message"
            {...register('name', {
              required: '名前を入力してね',
              minLength: { value: 2, message: '2文字以上にしてね' },
            })}
          />
          <div id="name-input-helper-text" />
          <p id="name-input-error-message">{errors.name?.message}</p>
        </div>
        <input {...register('mail', { required: 'メールを入力してね' })} />
        <p>{errors.mail?.message}</p>
        <input type="submit" />
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </div>
  )
}

export default Components
