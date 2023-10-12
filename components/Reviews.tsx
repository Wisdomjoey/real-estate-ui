import Image from "next/image";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpeg";

function Reviews() {
	return (
		<div className="bg-bg2 py-24">
			<div className="max-w-[1200px] w-[90%] mx-auto">
				<div className="flex flex-col justify-center items-center gap-12">
					<h2 className="text-3xl xs:2xl xs:w-[85%] capitalize font-medium w-[70%] text-center">
						kind words from our happy customers
					</h2>

					<div className="w-full flex gap-6 items-center overflow-x-auto scrollbar-hidden snap-x snap-mandatory">
						{[pic1, pic2, pic3, pic1, pic2].map((val, ind) => (
							<div
								key={ind}
								className="min-w-[400px] snap-center xs:min-w-[90%] rounded-xl border border-[lightgray] px-8 min-h-[320px] justify-center py-8 flex flex-col gap-6 text-sm"
							>
								<svg
									viewBox="0 0 128 128"
									className="fill-theme_blue w-[30px] h-[30px]"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M30.3544 113.056C45.6409 113.056 58.0331 100.663 58.0331 85.3769C58.0331 70.0904 45.6409 57.6982 30.3544 57.6982C15.0679 57.6982 2.67578 70.0904 2.67578 85.3769C2.67578 100.663 15.0679 113.056 30.3544 113.056Z" />
									<path d="M50.9849 15.1129C40.5604 17.3715 30.9113 22.3264 23.0018 29.4825C15.0923 36.6386 9.19941 45.7453 5.91211 55.8924C12.7739 50.1765 21.4239 47.0496 30.3545 47.0565C31.8916 47.0573 33.4273 47.1497 34.9534 47.3333C39.1335 38.9515 46.2988 32.4373 55.0397 29.0721C56.442 28.5538 57.6535 27.6211 58.5133 26.398C59.3732 25.1749 59.8406 23.7192 59.8537 22.2242V22.2241C59.8509 21.1338 59.604 20.0579 59.131 19.0755C58.658 18.0932 57.9709 17.2292 57.1203 16.5471C56.2696 15.8651 55.277 15.3822 54.2153 15.134C53.1536 14.8858 52.0497 14.8786 50.9849 15.1129V15.1129Z" />
									<path d="M95.8251 113.056C111.112 113.056 123.504 100.663 123.504 85.3769C123.504 70.0904 111.112 57.6982 95.8251 57.6982C80.5386 57.6982 68.1465 70.0904 68.1465 85.3769C68.1465 100.663 80.5386 113.056 95.8251 113.056Z" />
									<path d="M116.456 15.1129C106.031 17.3715 96.382 22.3264 88.4725 29.4825C80.563 36.6386 74.6701 45.7453 71.3828 55.8924C78.2446 50.1765 86.8946 47.0496 95.8252 47.0565C97.3623 47.0573 98.898 47.1497 100.424 47.3333C104.604 38.9515 111.769 32.4373 120.51 29.0721C121.913 28.5538 123.124 27.6211 123.984 26.398C124.844 25.1749 125.311 23.7192 125.324 22.2242V22.2241C125.322 21.1338 125.075 20.0579 124.602 19.0755C124.129 18.0932 123.442 17.2292 122.591 16.5471C121.74 15.8651 120.748 15.3822 119.686 15.134C118.624 14.8858 117.52 14.8786 116.456 15.1129V15.1129Z" />
								</svg>

								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Nesciunt deserunt quisquam voluptate? Quae sapiente quo
									excepturi a, aspernatur neque quas vero aliquam, saepe modi
									numquam ex nam quisquam exercitationem doloribus?
								</p>

								<div className="flex items-center gap-4">
									<Image
										alt="customer picture"
										src={val}
										className="w-[50px] h-[50px] rounded-[50%] object-cover"
									/>

                  <div>
                    <h6 className="font-medium text-base">Andrew Batslak</h6>

                    <p>British</p>
                  </div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
