import Footer from "@/components/Footer";
import Journey from "@/components/Journey";
import MainHeader from "@/components/MainHeader";
import Popular from "@/components/Popular";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";

export default function Home() {
	return (
		<>
			<main className="min-h-screen">
				<section>
					<MainHeader />
				</section>

				<section>
					<Journey />
				</section>

				<section>
					<Stats />
				</section>

				<section>
					<Popular />
				</section>

				<section>
					<Reviews />
				</section>
			</main>

			<Footer />
		</>
	);
}

