function Button({
	text,
	bg,
	borderColor,
}: {
	text: string;
	bg?: string;
	borderColor?: string;
}) {
	return (
		<button
			className={`min-w-[130px] max-w-fit px-6 py-2 text-sm ${
				bg ?? "bg-theme_black"
			} text-[white] ${
				borderColor ? `border ${borderColor}` : "border-none"
			} rounded-md cursor-pointer`}
		>
			{text}
		</button>
	);
}

export default Button;
