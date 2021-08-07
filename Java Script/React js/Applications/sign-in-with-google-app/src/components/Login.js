import React from "react";
import { GoogleLogin } from "react-google-login";

// YOUR_CLIENT_ID.apps.googleusercontent.com
const clientId =
	"956882651340-1ov5hc9ru58gmbd38l4r2tk1s13qjd65.apps.googleusercontent.com";

export default function Login() {
	const onSuccess = (res) => {
		console.log("[Login Success] currentUser: ", res.profileObj);
	};

	const onFailure = (res) => {
		console.log("[Login Failed] res: ", res);
	};

	return (
		<div>
			<GoogleLogin
				clientId={clientId}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
				style={{ marginTop: "100px" }}
				isSignedIn={true}
			/>
		</div>
	);
}
