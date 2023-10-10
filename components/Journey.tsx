import Button from "./button";
import journey from "../assets/images/journey.jpg";
import Image from "next/image";

function Journey() {
	return (
		<div className="bg-bg2 py-24">
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="flex sm:flex-col-reverse sm:gap-20 xs:px-5 items-center gap-36 px-16">
					<div className="flex-1">
						<div className="flex flex-col gap-7">
							<h2 className="capitalize text-3xl xs:text-2xl font-medium">
								navigate your real estate journey
							</h2>

							<p className="text-sm capitalize">
								look for an agency with aproven track record of success in
								buying, selling and renting properties. You want an agency that
								has been in the industry for a while and has experience dealing
								with various types of properties.
							</p>

							<Button text="Contact Us" />
						</div>
					</div>

					<div className="flex-1">
						<div className="relative">
							<Image
								alt="real estate journey"
								src={journey}
								className="w-full object-cover rounded-xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Journey;
