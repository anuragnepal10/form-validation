const Form = () => {
	return (
		<form noValidate>
			{/* EMAIL */}
			<div className="form-control">
				<label htmlFor="email">Email: </label>
				<input type="email" id="email" />
				<p className="error">Email is required</p>
			</div>

			{/* PASSWORD */}
			<div className="form-control">
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" />
				<p className="error">Password is required</p>
			</div>

			{/* CONFIRM PASSWORD */}
			<div className="form-control">
				<label htmlFor="confirm-password">Confirm Password: </label>
				<input type="password" id="confirm-password" />
				<p className="error">Confirm Password is required</p>
			</div>

			{/* ACCOUNT TYPE */}
			<div className="form-control">
				<label htmlFor="account-type">Select Account Type:</label>
				<select name="pets" id="account-type">
					<option value="">--Choose an option--</option>
					<option value="personal">Personal</option>
					<option value="commercial">Commercial</option>
				</select>
			</div>

			{/* TERMS */}
			<div className="form-control terms">
				<input type="checkbox" name="terms" required />
				<label htmlFor="terms">
					Agree to terms? By checking this box, you confirm that you've read and
					accept our terms and conditions.
				</label>
			</div>

			{/* BUTTONS */}
			<button type="submit">Submit</button>
		</form>
	)
}

export default Form
