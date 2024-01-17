import React from 'react'
import Layout from '../../components/Layout'
import { UseIngredientsContext } from '../../context/Ingredients'
import { Link } from 'react-router-dom'

const ListIngredients = () => {
	const { ingredients } = UseIngredientsContext()
	const handleCreate = (e) => {

	}
	return (
		<>
			<Layout>
				<div className='w-4/5  Lexend'>
					{/* topbar */}
					<div className='w-full p-4 flex items-center justify-between border-b border-textGray text-2xl font-semibold'>
						All Ingredients
					</div>

					<div className='w-full p-4 grid gap-4'>
						<div className='w-full'>
							<input className='w-full outline-none bg-darkGray rounded-lg px-4 py-2' type="text" placeholder='Search...' />
						</div>

						<div className='hidden gap-4'>
							{/* <Button buttonClassName={"w-auto px-3 py-1"} text={"Excel"} />
							<Button buttonClassName={"w-auto px-3 py-1"} text={"Print"} /> */}
						</div>

						<div className="w-full text-white overflow-y-scroll rounded-lg max-h-[80vh]">
							<table className="w-full text-left bg-darkGray h-full max-h-full">
								<thead className='sticky top-0'>
									<tr key={"table-head"} className='bg-mediumGray rounded-t-lg'>
										<th className="px-6 py-3">
											Id
										</th>
										<th className="px-6 py-3">
											Image
										</th>
										<th className="px-6 py-3">
											Name
										</th>
										<th className="px-6 py-3">
											Location
										</th>
										<th className="px-6 py-3">
											Creator
										</th>
									</tr>
								</thead>

								<tbody className='text-sm'>
									{
										ingredients?.map((ingredient) => {
											return <tr key={ingredient?._id} className="border-b border-mediumGray ">
												<Link to={`/ingredients/${ingredient?._id}`} className="flex items-center px-6 py-4 ">
													#{ingredient?._id?.slice(18)}
												</Link>
												<td className="px-6 py-4">
													<img className='h-8 w-8 rounded-lg' src={ingredient?.image} alt="" />
												</td>
												<td className="px-6 py-4">
													{ingredient?.title}
												</td>
												<td className="px-6 py-4">
													{ingredient?.location}
												</td>
												<td className="px-6 py-4">
													{ingredient?.restaurant == null ? "Admin" : ingredient?.restaurant?.title }
												</td>
											</tr>
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default ListIngredients