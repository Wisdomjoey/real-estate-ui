import Header from "./header";
import bg from "../assets/images/header-bg.jpg";
import Button from "./button";

function MainHeader() {
	return (
		<div className="relative bg-bg1 pb-32">
			<div className="max-w-[1300px] mx-auto">
				<Header />

				<div
					style={{ backgroundImage: `url(${bg.src})` }}
					className="rounded-2xl bg-no-repeat bg-cover bg-center h-[600px] pt-20"
				>
					<div className="max-w-[1200px] w-[90%] h-full mx-auto flex flex-col items-center justify-between">
						<div className="w-[70%] sm:w-[85%] text-center flex flex-col items-center justify-center gap-[20px]">
							<h1 className="text-5xl sm:text-4xl">
								Investing In Your Future One Home At A Time
							</h1>

							<p className="text-sm mb-[10px] text-[darkgrey] mix-blend-exclusion">
								We&apos;ll help you find the key to your dream home. Experience
								the joy of home ownership. Let us make your home buying journey
								simple.
							</p>

							<Button
								text="Get Started"
								borderColor="border-[white]"
								bg="bg-[transparent]"
							/>
						</div>

						<div className="bg-bg2 w-full rounded-xl flex sm:flex-col items-center justify-between gap-10 p-[30px] xs:px-0 -mb-[54px] shadow-[0px_25px_45px_5px_rgba(0,0,0,0.1)]">
							<div className="flex items-center flex-1 sm:w-full">
								{[
									{ head: "Location", text: "Nigeria" },
									{ head: "Property Type", text: "Duplex" },
									{ head: "Budget", text: "$12,000" },
								].map((val, ind) => (
									<div
										key={ind}
										style={{
											borderImage:
												"linear-gradient(to bottom, transparent, dimgray, transparent) 1",
										}}
										className={`flex-1 text-sm min-w-fit ${
											ind === 1
												? "border-l-2 border-r-2 pl-[60px] xs:pl-[15px] xs:pr-[15px] xs:mr-0 pr-[30px] mr-[30px]"
												: "border-none px-[30px] xs:px-[15px]"
										}`}
									>
										<h6 className="mb-2">{val.head}</h6>

										<p className="text-[dimgray]">{val.text}</p>
									</div>
								))}
							</div>

							<Button text="Search Property" bg="bg-theme_blue" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainHeader;
