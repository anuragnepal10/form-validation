import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import yupSchema from '../yupSchema'
import { DevTool } from '@hookform/devtools'
import { useState } from 'react'
import { ErrorMessage } from '@hookform/error-message'

const Form = () => {
	type FormValues = {
		email: string
		password: string
		confirmPassword: string
		accountType: 'personal' | 'commercial' | ''
		terms: boolean
	}

	const defaultValues: FormValues = {
		email: '',
		password: '',
		confirmPassword: '',
		accountType: '',
		terms: false,
	}

	const form = useForm({
		mode: 'onTouched',
		defaultValues,
		resolver: yupResolver(yupSchema),
	})

	const {
		register,
		control,
		handleSubmit,
		formState: { isValid, errors },
	} = form

	const [isSuccess, setIsSuccess] = useState('')

	const onSubmit = () => {
		setIsSuccess('active')
	}

	return (
		<form noValidate onSubmit={handleSubmit(onSubmit)}>
			{/* ON SUBMIT */}
			<p className={`on-submit ${isSuccess}`}>
				Form has been submitted successfully. Refresh the page to submit again.
			</p>

			{/* EMAIL */}
			<div className="form-control">
				<label htmlFor="email">Email: </label>
				<input type="email" id="email" {...register('email')} />
				<ErrorMessage
					errors={errors}
					name="email"
					render={({ message }) => <p className="error">{message}</p>}
				/>
			</div>

			{/* PASSWORD */}
			<div className="form-control">
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" {...register('password')} />
				<ErrorMessage
					errors={errors}
					name="password"
					render={({ message }) => <p className="error">{message}</p>}
				/>
			</div>

			{/* CONFIRM PASSWORD */}
			<div className="form-control">
				<label htmlFor="confirm-password">Confirm Password: </label>
				<input
					type="password"
					id="confirm-password"
					{...register('confirmPassword')}
				/>
				<ErrorMessage
					errors={errors}
					name="confirmPassword"
					render={({ message }) => <p className="error">{message}</p>}
				/>
			</div>

			{/* ACCOUNT TYPE */}
			<div className="form-control">
				<label htmlFor="account-type">Select Account Type:</label>
				<select id="account-type" {...register('accountType')}>
					<option value="">--Choose an option--</option>
					<option value="personal">Personal</option>
					<option value="commercial">Commercial</option>
				</select>
				<ErrorMessage
					errors={errors}
					name="accountType"
					render={({ message }) => <p className="error">{message}</p>}
				/>
			</div>

			{/* TERMS */}
			<div className="form-control terms" {...register('terms')}>
				<div className="terms">
					<input type="checkbox" name="terms" />
					<label htmlFor="terms">
						Agree to terms? By checking this box, you confirm that you've read
						and accept our terms and conditions.
					</label>
				</div>
				<ErrorMessage
					errors={errors}
					name="terms"
					render={({ message }) => <p className="error">{message}</p>}
				/>
			</div>

			{/* BUTTONS */}
			<button disabled={!isValid} type="submit">
				Submit
			</button>
			<DevTool control={control} />
		</form>
	)
}

export default Form
