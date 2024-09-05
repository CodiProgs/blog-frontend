'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/form-elements/button/Button'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './Auth.module.scss'
import { AuthFields } from './AuthFields'
import { useAuth } from './useAuth'
import { LoginDto, RegisterDto } from '@/__generated__/output'
import AuthImage from '@/public/auth.png'

const Auth: FC = () => {
	const {
		register,
		reset,
		handleSubmit,
		setValue,
		clearErrors,
		formState: { errors }
	} = useForm<LoginDto & RegisterDto>({
		mode: 'onChange'
	})

	const [isLogin, setIsLogin] = useState(true)

	const {
		mutate,
		loading,
		errors: graphqlErrors,
		setErrors
	} = useAuth(reset, isLogin)

	const onSubmit: SubmitHandler<LoginDto & RegisterDto> = data => {
		setErrors({})

		let inputData = isLogin ? { ...data, name: undefined } : { ...data }

		mutate({
			variables: {
				input: inputData as LoginDto & RegisterDto
			}
		})
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.left}>
					<div className={styles.content}>
						<Link
							className={styles.link}
							href={PUBLIC_URL.HOME}
						>
							Home page
						</Link>
						<h1 className={styles.heading}>
							{isLogin ? 'Sign in' : 'Sign up'}
						</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<AuthFields
								register={register}
								errors={errors}
								graphqlErrors={graphqlErrors}
								isLogin={isLogin}
							/>
							<>
								{graphqlErrors?.form && (
									<p className={styles.error}>{graphqlErrors.form as string}</p>
								)}
							</>
							<div className={styles.buttons}>
								<Button
									disabled={loading || Object.keys(errors).length > 0}
									type='submit'
								>
									{loading ? 'Loading...' : isLogin ? 'Login' : 'Register'}
								</Button>
								<button
									className={styles.switch}
									type='button'
									disabled={loading}
									onClick={() => {
										setErrors({})

										if (!isLogin) {
											setValue('name', '')
											clearErrors('name')
										}

										setIsLogin(!isLogin)
									}}
								>
									{isLogin ? 'Register' : 'Login'}
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className={styles.right}>
					<Image
						src={AuthImage}
						alt='Auth'
					/>
					<span>
						Illustration by{' '}
						<a href='https://icons8.com/illustrations/author/VKgWUPlqQ7Ea'>
							AlexManokhi
						</a>{' '}
						from <a href='https://icons8.com/illustrations'>Ouch!</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export { Auth }
