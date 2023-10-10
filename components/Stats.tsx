import bg from "../assets/images/stats-bg.jpg";

function Stats() {
	return (
		<div className="bg-theme_black py-24 mb-[250px]">
			<div className="max-w-[1200px] w-[90%] mx-auto">
				<div className="flex flex-col gap-16">
					<div className="w-full flex flex-wrap gap-6 items-center justify-between xs:justify-center">
						{[
							{
								count: "11K+",
								para: (
									<>
										Happy Customers
										<br />
										with our services
									</>
								),
							},
							{
								count: "22K+",
								para: (
									<>
										The best property
										<br />
										we provide
									</>
								),
							},
							{
								count: "520+",
								para: (
									<>
										Awesome companies
										<br />
										believe in us
									</>
								),
							},
						].map((val, ind) => (
							<div key={ind} className="flex xs:flex-col items-center gap-4">
								<h1 className="text-[white] text-4xl sm:text-3xl font-medium">
									{val.count}
								</h1>

								<p className="text-sm text-[gray]">{val.para}</p>
							</div>
						))}
					</div>

					<hr className="border-[gray]/50" />

					<div className="flex xs:flex-col xs:items-start xs:gap-10 items-center gap-20 w-full">
						<div className="flex-1 text-[white]">
							<h2 className="text-3xl xs:2xl capitalize">
								where comfort meets convenience
							</h2>
						</div>

						<div className="flex-1 text-sm text-[gray]">
							<p>
								Look for an agency with a proven track record of success in
								buying, selling or renting properties. You want an agency that
								has been in the industry for a while an has experience
							</p>
						</div>
					</div>

					<div
						style={{
							backgroundImage: `url(${bg.src})`,
						}}
						className="w-full rounded-2xl h-[500px] sm:h-[400px] -mb-[250px] bg-no-repeat bg-center bg-cover flex items-center justify-center"
					>
						<div className="w-[50px] h-[50px] rounded-[50%] bg-bg2 flex items-center justify-center">
							<svg
								width="13px"
								height="13px"
								viewBox="0 0 6 7"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<g
									id="Page-1"
									stroke="none"
									strokeWidth="1"
									fill="none"
									fillRule="evenodd"
								>
									<g
										id="Dribbble-Light-Preview"
										className="fill-theme_blue"
										transform="translate(-347.000000, -3766.000000)"
									>
										<g id="icons" transform="translate(56.000000, 160.000000)">
											<path
												d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
												id="play-[#1003]"
											></path>
										</g>
									</g>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Stats;
