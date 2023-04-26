import * as yup from 'yup'
import api from './api'

const yupSchema = yup.object().shape({
	email: yup
		.string()
		.required('Email is required')
		.email('Invalid email')
		.test('email-available', 'Email is already registered', async (value) => {
			const res = await api.get(`?email=${value}`)
			return res.data.length === 0
		}),
	password: yup
		.string()
		.required('Password is required')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
		),
	confirmPassword: yup
		.string()
		.required('Confirm Password is required')
		.oneOf([yup.ref('password')], 'Passwords must match'),
	accountType: yup
		.string()
		.oneOf(['personal', 'commercial'], 'Account Type must be selected'),
	terms: yup
		.boolean()
		.oneOf([true], 'You must agree to the terms and conditions to proceed'),
})

export default yupSchema
