import React from "react";
import { GoogleLogout } from "react-google-login";

// your client id
const clientId =
	"956882651340-1ov5hc9ru58gmbd38l4r2tk1s13qjd65.apps.googleusercontent.com";

export default function Logout() {
	const onSuccess = () => {
		alert("Logout made successfully");
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			/>
		</div>
	);
}
