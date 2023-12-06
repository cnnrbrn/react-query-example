import { useQuery } from "@tanstack/react-query";
import { AUCTION_URL } from "../../constants/api";
import { Link } from "react-router-dom";

async function getAuctions() {
	const response = await fetch(AUCTION_URL);

	if (!response.ok) {
		throw new Error("There was an error fetching the listings");
	}

	return response.json();
}

function AuctionList() {
	const {
		isPending,
		error,
		data: auctions,
		isFetching,
	} = useQuery({
		queryKey: ["auctions"],
		queryFn: getAuctions,
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	if (isPending) return <div>Loading...</div>;

	if (error) return "An error has occurred: " + error.message;

	return (
		<>
			{auctions?.map((auction) => {
				return (
					<div key={auction.id} className="mb-5">
						<h2>{auction.title}</h2>
						<p>{auction.description}</p>
						<Link to={`/auction/${auction.id}`}>View Auction</Link>
					</div>
				);
			})}
			;
		</>
	);
}

export default AuctionList;
