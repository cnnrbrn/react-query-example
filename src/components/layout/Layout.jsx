import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
	return (
		<>
			<Nav />
			<div className="container mx-auto mt-12">
				<Outlet />
			</div>
		</>
	);
}
