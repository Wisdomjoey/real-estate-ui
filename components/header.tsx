"use client";

import { useState, useRef } from "react";
import Button from "./button";

function Header() {
	const navRef = useRef<HTMLElement>(null);

	const openMenu = () => {
		navRef.current?.classList.replace(
			"sm:translate-x-[100%]",
			"sm:translate-x-0"
		);
	};

	const closeMenu = () => {
		navRef.current?.classList.replace(
			"sm:translate-x-0",
			"sm:translate-x-[100%]"
		);
	};

	return (
		<header className="max-w-[1200px] mx-auto w-[90%]">
			<div className="flex items-center sm:justify-between gap-16 h-28 sm:px-5">
				<h1 className="font-bold text-[22px]">JAY Z</h1>

				<nav
					ref={navRef}
					className="flex-1 flex items-center justify-between sm:justify-start sm:fixed sm:items-start z-30 right-0 top-0 sm:bg-bg1 sm:h-full sm:flex-col sm:p-5 transition-all duration-300 sm:translate-x-[100%]"
				>
					<div className="w-full sm:flex items-center justify-end hidden mb-6">
						<div onClick={closeMenu} className="cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 50"
								width="20px"
								height="20px"
							>
								<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
							</svg>
						</div>
					</div>

					<ul className="font-light flex sm:flex-col sm:gap-0 items-center gap-14 text-sm sm:w-full">
						{["Home", "Rent", "Sell", "About"].map((val, ind) => (
							<li
								key={ind}
								className="cursor-pointer sm:w-full sm:px-2 sm:py-4 sm:border-t sm:border-[lightgray]/60"
							>
								<a href="">{val}</a>
							</li>
						))}
					</ul>

					<div className="flex items-center gap-6 mt-auto">
						<p className="cursor-pointer text-sm">Log In</p>

						<Button text="Create Account" />
					</div>
				</nav>

				<div onClick={openMenu} className="hidden sm:flex cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50 50"
						width="25px"
						height="25px"
						className="hidden sm:block cursor-pointer fill-[black]"
					>
						<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
					</svg>
				</div>
			</div>
		</header>
	);
}

export default Header;
