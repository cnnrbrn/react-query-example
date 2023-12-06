import { useParams } from "react-router-dom";
import { AUCTION_URL } from "../../constants/api";
import { useQuery } from "@tanstack/react-query";

async function getAuction(id) {
	const response = await fetch(`${AUCTION_URL}/${id}`);

	if (!response.ok) {
		throw new Error("There was an error fetching the listings");
	}

	return response.json();
}

function AuctionDetail() {
	const { id } = useParams();

	const { isPending, error, data } = useQuery({
		queryKey: ["auction", id],
		queryFn: () => getAuction(id),
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	if (isPending) return <div>Loading...</div>;

	if (error) return "An error has occurred: " + error.message;

	return (
		<>
			{data && (
				<>
					<h2>{data.title}</h2>
					<p>{data.description}</p>
				</>
			)}
		</>
	);
}

export default AuctionDetail;
