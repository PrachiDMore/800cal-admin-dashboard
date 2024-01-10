import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import { BiLink } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UploadInput = ({ label, onChange, value, id, disabled = false }) => {
	const cloudinaryRef = useRef();
	const [placeholder, setPlaceholder] = useState(value ? value : "Upload Document");
	const widgetRef = useRef();

	useEffect(() => {
		cloudinaryRef.current = window.cloudinary;
		widgetRef.current = cloudinaryRef.current.createUploadWidget({
			cloudName: "dfncnjaz9",
			uploadPreset: "hykcy6yp",
			multiple: false,
			showAdvancedOptions: false,
			showUploadMoreButton: false,
			singleUploadAutoClose: true,
			clientAllowedFormats: ["jpg", "webp", "png", "jpeg"],
			sources: ["local"],
			theme: "minimal"
		}, (err, res) => {
			if (res.event === "success") {
				onChange(res.info.secure_url)
				setPlaceholder(res.info.secure_url)
			}
		});
	}, []);

	return (
		<div className='grid grid-cols-12 items-center '>
			<div onClick={() => {
				if (!disabled) widgetRef.current.open()
			}
			} className='col-span-10'><Input label={label} value={placeholder} disabled={true} /></div>
			{true && <div></div>}
			{true && <Link to={value} target='_blank'>
				<BiLink className='text-xl text-blue-700 col-span-1' />
			</Link>}
		</div>
	)
}

export default UploadInput