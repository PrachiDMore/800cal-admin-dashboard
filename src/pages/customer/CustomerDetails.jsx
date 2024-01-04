import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout'
import CustomerModal from '../../components/modal/CustomerModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai';
import Input from '../../components/Input';

const CustomerDetails = () => {
	const [customer, setCustomer] = useState()
	const [calendar, setCalendar] = useState([])
	const [subscriptions, setSubscriptions] = useState([])
	const { _id } = useParams();

	useEffect(() => {
		if (_id) {
			axios(`${process.env.REACT_APP_BASE_URL}customer/${_id}`)
				.then((res) => {
					setCustomer(res.data.customer)
				})
				.catch((err) => {
					console.log(err)
				})
			axios(`${process.env.REACT_APP_BASE_URL}calendar/order/customer/${_id}`)
				.then((res) => {
					setCalendar(res.data.calendar)
				})
				.catch((err) => {
					console.log(err)
				})
			axios(`${process.env.REACT_APP_BASE_URL}order/user/subscription/${_id}`)
				.then((res) => {

					setSubscriptions(res.data.subscription)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [_id]);
	return (
		<div>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						Customer #{_id.slice(18)}
					</div>
					<div className='w-full grid gap-3 p-5'>
						<div className="w-full text-white overflow-scroll rounded-lg max-h-[86vh] grid grid-cols-2 gap-x-6 gap-y-4">
							<div className='col-span-2 flex justify-center'>
								<img src={customer?.image} alt="" className='h-28 w-28 rounded-lg' />
							</div>
							<Input readOnly={true} value={customer?.firstname} label={"Firstname"} type={"text"} />
							<Input readOnly={true} value={customer?.lastname} label={"Lastname"} type={"text"} />
							<Input readOnly={true} value={customer?.username} label={"Username"} type={"text"} />
							<Input readOnly={true} value={customer?.email} label={"Email"} type={"text"} />
							<Input readOnly={true} value={customer?.height} label={"Height"} type={"text"} />
							<Input readOnly={true} value={customer?.weight} label={"Weight"} type={"text"} />
							<Input readOnly={true} value={customer?.dob} label={"Date of Birth"} type={"text"} />
							<Input readOnly={true} value={customer?.gender} label={"Gender"} type={"text"} />
							<Input readOnly={true} value={customer?.balance} label={"Balance"} type={"text"} />
							<Input readOnly={true} value={customer?.subscriptionId?.length === 0 ? "Not Subscribed" : customer?.subscriptionId} label={"Subscribed"} type={"text"} />
							<Input readOnly={true} value={customer?.referralcode} label={"Referral Code"} type={"text"} />
							<Input readOnly={true} value={customer?.referredby?.length === 0 ? "N/A" : customer?.referredby} label={"Referral Code"} type={"text"} />
							<Input readOnly={true} value={subscriptions.length} label={"Customer Subscriptions"} type={"text"} />
							<Input readOnly={true} value={calendar.length} label={"Customer Orders"} type={"text"} />
							<Input readOnly={true} value={subscriptions.reduce((accumulator, currentValue) => {
								return accumulator + currentValue.total
							}, 0)
							} label={"Customer Value"} type={"text"} />
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}

export default CustomerDetails
