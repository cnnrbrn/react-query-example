import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AuctionPage from "./pages/AuctionPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="auction/:id" element={<AuctionPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
