import Button from "./button";

function Footer() {
	return (
		<footer className="bg-theme_black pt-24 text-sm text-[white]">
			<div className="max-w-[1200px] w-[90%] mx-auto">
				<div className="flex sm:flex-col sm:items-start items-center gap-16 pb-9">
					<div className="flex-1 w-full">
						<h1 className="font-bold text-3xl">JAY Z</h1>

						<p className="my-9 font-light text-[lightgray]">Investing in you future one home at a time</p>

						<div className="border border-[gray]/40 rounded-md p-[2px] flex items-center gap-2">
							<input
								type="text"
								placeholder="Enter your email"
								className="border-none bg-[transparent] outline-none h-full w-full ml-2"
							/>

							<Button text="Subscribe" bg="bg-theme_blue" />
						</div>
					</div>

					<div className="flex-[3] flex flex-wrap gap-7">
						{[
							{
								head: "Quick Menu",
								links: ["Home", "Rent", "Sell", "About", "Contact"],
							},
							{
								head: "About Us",
								links: [
									"Payment Plans",
									"Make Saving More",
									"Tax Calculator",
									"Talk To Us",
								],
							},
							{
								head: "Contact Info",
								links: [
									"123 Main Street. Apt 40, Los Angeles, CA 90001, USA",
									"+088(123)456-78-91",
									"jayz@gmail.com",
								],
							},
						].map((val, ind) => (
							<div key={ind} className="min-w-[120px] flex-1">
								<h6 className="mb-7 font-medium">{val.head}</h6>

								<div className="flex flex-col gap-4 font-light text-[lightgray]">
									{val.links.map((val1, ind1) => (
										<a href="" key={ind1}>{val1}</a>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="border-t border-[gray]/40 text-center flex items-center justify-center p-5 font-light text-[lightgray]">
					©2023 JAYZ All Rights Reserved
				</div>
			</div>
		</footer>
	);
}

export default Footer;
