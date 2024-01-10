import moment from 'moment';
import QRCode from 'qrcodejs';
import React, { useEffect, useRef } from 'react'
import { BsHandbag } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { LiaCarSideSolid } from 'react-icons/lia';
import { MdClose } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl';
import Button from './Button';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const OrderStickerModal = ({ modal, setModal }) => {

	const orderRef = useRef()

	const handleDownload = () => {
		// const doc = new jsPDF({
		// 	orientation: 'landscape',
		// 	unit: 'in',
		// 	format: [4, 2],
		// });

		// doc.html(orderRef.current, {
		// 	async callback(doc) {
		// 		await doc.save('order');
		// 	},
		// });

	}

	const downloadPdfDocument = () => {
		html2canvas(orderRef.current)
			.then((canvas) => {
				const imgData = canvas.toDataURL('image/png');
				console.log(imgData)

				const pdf = new jsPDF("p", "mm", "a4");
				pdf.addImage(imgData, 'PNG', 0, 0, 210, (canvas.height * 210 / canvas.width));
				pdf.save("download.pdf");
				setModal({show: false, data: undefined})
			})
	}

	let link = `https://api.qrserver.com/v1/create-qr-code/?data=${modal?.data?._id}&amp;size=100x100`
	return (
		<div className={modal.show ? 'h-screen w-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center duration-200 opacity-100' : 'pointer-events-none h-screen w-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center opacity-0 duration-200'}>
			<div onClick={() => { setModal({ show: false, data: undefined }) }} className='h-8 w-8 flex items-center justify-center bg-white/20 rounded-md hover:bg-white/30 cursor-pointer duration-200 absolute top-8 right-8'>
				<MdClose className='text-white' />
			</div>
			<div ref={orderRef} className='p-7 rounded-lg bg-darkGray shadow-lg w-screen h-screen flex flex-col'>
				<div className='flex justify-between items-center'>
					<img src="/assets/logo.png" className='h-20 w-20 rounded-full object-cover border-2 border-green' alt="" />
					<img src={link} className='h-20 w-20' alt="" />
					<img src={modal?.data?.restaurant?.logo} className='h-20 w-20 object-cover rounded-full border-2 border-green' alt="" />
				</div>
				<div className='flex text-white'>
					<div className='bg-darkGray w-1/2 p-4 grid gap-4 rounded-lg'>
						<div className='grid gap-1'>
							<div className='flex items-center gap-6'>
								<div className='flex items-center gap-3'>
									<BsHandbag className='text-textGray text-xl' />
									<p className='text-lg font-medium'>Order #{modal?.data?._id?.slice(18)}</p>
								</div>
								<p className='text-xs text-green bg-green/30 rounded-2xl px-4 py-1 capitalize'>{modal?.data?.status}</p>
							</div>
							<div className='ml-12'>
								<p className='text-sm text-textGray '>Placed on {moment(modal?.data?.date).format("ddd, MMMM DD, YYYY hh:mm a")}</p>
							</div>
						</div>
						<div className='grid gap-1'>
							<div className='flex items-center gap-6'>
								<div className='flex items-center gap-3'>
									<FaRegUser className='text-textGray text-xl' />
									<p className='text-lg font-medium'>Customer</p>
								</div>
							</div>
							<div className='ml-12'>
								<p className='text-sm text-textGray '>{modal?.data?.customer?.firstname} {modal?.data?.customer?.lastname} <br /> {modal?.data?.customer?.phonenumber} <br /> {modal?.data?.customer?.email}</p>
								<p className='text-xs text-green'>{modal?.data?.food?.length} {modal?.data?.food?.length > 1 ? "Orders" : "Order"}</p>
							</div>
						</div>
						<div className='grid gap-1'>
							<div className='flex items-center gap-6'>
								<div className='flex items-center gap-3'>
									<SlLocationPin className='text-textGray text-xl' />
									<p className='text-lg font-medium'>Delivery Information:</p>
								</div>
							</div>
							<div className='ml-12'>
								<p className='text-sm text-textGray '>{modal?.data?.customer?.firstname} {modal?.data?.customer?.lastname} <br /> {modal?.data?.customer?.phonenumber} <br /> Home: {modal?.data?.customer?.address}</p>
								{/* <p className='text-xs text-green'>Get direction</p> */}
							</div>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center gap-6'>
								<div className='flex items-center gap-3'>
									<LiaCarSideSolid className='text-textGray text-xl' />
									<p className='text-lg font-medium'>Driver:</p>
								</div>
							</div>
							<div className='ml-12 '>
								{/* <SearchableSelect options={}/> */}
								{!modal?.data?.rider && <p>No rider assigned</p>}
								{modal?.data?.rider && <div>
									{modal?.data?.rider?.firstname} {modal?.data?.rider?.lastname} ({modal?.data?.rider?.username})
								</div>}
								{/* <Button onClick={assignRider} buttonClassName={"mt-2 w-auto text-sm px-3 py-1"} text={"Assign Driver"} /> */}
							</div>
						</div>
					</div>
					<div className='bg-darkGray w-1/2 p-4 rounded-lg'>
						<p className='text-lg font-medium text-white'>Summary</p>

						<div className="w-full text-white mt-2  rounded-lg">
							<table className="w-full text-left bg-darkGray ">
								<tbody className='text-sm'>
									{
										modal?.data?.food?.map((foodItem, index) => {
											return <tr key={index} className="border-b border-mediumGray">
												<td className="px-6 py-4 ">
													<img className='h-8 w-8' src="/assets/food.png" alt="" />
												</td>
												<td className="px-6 py-4">
													<p className='font-bold'>{foodItem?.name} <br /><span className='text-xs text-textGray'>Note: {modal?.data?.note && modal?.data?.note?.length != 0 ? modal?.data?.note[index] : "None"}</span></p>
												</td>
												<td className="px-6 py-4">
													<p className='text-sm '>Calories {foodItem?.calories}</p>
												</td>
											</tr>
										})
									}

									<tr className="hidden border-b border-mediumGray">
										<td className="px-6 py-4 ">
											<p></p>
										</td>
										<td className="px-6 py-4 ">
											<p className='text-sm text-textGray'>Sub total (2 items)</p>
											<p className='text-sm text-textGray'>Service Fee</p>
											<p className='text-sm text-textGray'>Delivery Fee</p>
											<p className='text-sm text-textGray'>Tax (10% include)</p>
										</td>
										<td className="px-6 py-4">
											<p className='text-sm text-textGray'>KWD 106.00</p>
											<p className='text-sm text-textGray'>KWD 5.00</p>
											<p className='text-sm text-textGray'>KWD 5.00</p>
											<p className='text-sm text-textGray'>KWD 10.00</p>
										</td>
									</tr>

									<tr className="">
										<td className="px-6 py-4 ">
											<p></p>
										</td>
										<td className="px-6 py-4">
											<p className='text-base '>Total</p>
										</td>
										<td className="px-6 py-4">
											<p className=' '>KWD {modal?.data?.order?.category === "gold" ? modal?.data?.meals?.goldprice : modal?.data?.order?.category === "silver" ? modal?.data?.meals?.silverprice : modal?.data?.meals?.platinumprice}</p>
										</td>
									</tr>
									<tr className="">
										<td className="px-6  ">
											<p></p>
										</td>
										<td className="px-6">
											<p className='text-base '>Margin</p>
										</td>
										<td className="px-6">
											<p className=' '>KWD {modal?.data?.order?.category === "gold" ? modal?.data?.meals?.goldprice : modal?.data?.order?.category === "silver" ? modal?.data?.meals?.silverprice : modal?.data?.meals?.platinumprice - modal?.data?.vendor_price?.price}</p>
										</td>
									</tr>

								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='flex justify-center w-1/2 gap-4 mx-auto'>
					<Button onClick={downloadPdfDocument} text={"Print"} />
					<Button onClick={() => {setModal({show: false, data: undefined})}} text={"Close"} />
				</div>
			</div>
		</div>
	)
}

export default OrderStickerModal