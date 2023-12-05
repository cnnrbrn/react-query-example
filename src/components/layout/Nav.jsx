import { Button, Dropdown, Menu, Navbar } from "react-daisyui";
import { Link, NavLink } from "react-router-dom";
import LogoutButton from "../auth/logout/LogoutButton";
import { useToken } from "../../stores/useUserStore";

function Nav() {
	const token = useToken();

	console.log("token", token);

	return (
		<Navbar className="bg-primary">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Login example
				</Link>
			</div>
			<div className="flex-none">
				<Menu horizontal={true} className="px-1">
					<Menu.Item>
						<NavLink to="/" as={Dropdown.Item}>
							Home
						</NavLink>
					</Menu.Item>
					{!token ? (
						<>
							<Menu.Item>
								<NavLink to="/login" as={Dropdown.Item}>
									Login
								</NavLink>
							</Menu.Item>
						</>
					) : (
						<LogoutButton />
					)}
				</Menu>
			</div>
		</Navbar>
	);
}

export default Nav;
