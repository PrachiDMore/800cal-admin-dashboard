import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineUpload } from "react-icons/hi"

const UploadComponent = ({ image, setImage, type = "default", children }) => {
	const cloudinaryRef = useRef();
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
			// sources: ["local"],
			theme: "minimal"
		}, (err, res) => {
			if (res.event === "success") {
				setImage(res.info.url)
			}
		});
	}, []);
	return (
		<>
			{<div className='flex flex-col items-center'>
				{image?.length === 0 ? <div className='border flex justify-center items-center h-32 w-32 bg-white/10 rounded-lg'>
					<HiOutlineUpload className='text-3xl' />
				</div> : <img src={image} className='border object-cover h-32 w-32 rounded-lg' />}
				<button type='button' className='mt-3 w-32 bg-lightgreen text-center px-4 py-2 rounded-lg hover:bg-darkgreen duration-300' onClick={() => widgetRef.current.open()}>
					Upload
				</button>
			</div>
			}
		</>
	)
}

export default UploadComponent
