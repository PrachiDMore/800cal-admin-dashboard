import React from 'react'
import { UseThemeContext } from "../context/Theme"
import Select from 'react-select'

const SearchableSelect = ({ label = false, placeholder, onChange, options = [], value, required = false, id, isMulti, className }) => {
	const { selectTheme } = UseThemeContext()
	return (
		<>
			<div className={'flex flex-col Lexend relative text-white ' + className}>
				{label && <label className='text-white mb-1' htmlFor={id}>{label}</label>}
				<Select styles={selectTheme} isMulti={isMulti} required={required} options={options} onChange={onChange} value={value} placeholder={placeholder} />
			</div>
		</>
	)
}

export default SearchableSelect