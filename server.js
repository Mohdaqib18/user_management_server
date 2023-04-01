import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

app.use(express.json());

const getAccessToken = async () => {
	// First Get Access Token
	let AccessToken;
	let options = {
		method: "POST",
		url: "https://dev-76jmhxudzvoqistv.us.auth0.com/oauth/token",
		headers: { "content-type": "application/x-www-form-urlencoded" },
		data: new URLSearchParams({
			grant_type: "client_credentials",
			client_id: "CKoFB1kKBVii8aKHigNJDKDN0jalz9X5",
			client_secret:
				"-t-BKJLtRO8zaeo3ESvWwxIv_Xpsa53A_AbjLF9OlqhhIWtRz4c76lHFgmbw2h6e",
			audience: "https://dev-76jmhxudzvoqistv.us.auth0.com/api/v2/",
		}),
	};

	try {
		const resp = await axios.request(options);
		console.log(resp.data);
		AccessToken = "Bearer " + resp.data.access_token;
	} catch (err) {
		// Handle Error Here
		console.error(err);
	}
	return AccessToken;
};

app.get("/users", async (req, res) => {
	const authToken = await getAccessToken();
	// Now use the token to fetch the users using the access token
	var optionsUsers = {
		method: "GET",
		url: "https://dev-76jmhxudzvoqistv.us.auth0.com/api/v2/users",
		headers: {
			"content-type": "application/json",
			"cache-control": "no-cache",
			authorization: authToken,
		},
		data: new URLSearchParams({
			grant_type: "client_credentials",
			client_id: "CKoFB1kKBVii8aKHigNJDKDN0jalz9X5",
			client_secret:
				"-t-BKJLtRO8zaeo3ESvWwxIv_Xpsa53A_AbjLF9OlqhhIWtRz4c76lHFgmbw2h6e",
			audience: "https://dev-76jmhxudzvoqistv.us.auth0.com/api/v2/",
		}),
	};
	axios
		.request(optionsUsers)
		.then(function (response) {
			res.json({ result: response.data });
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
});

app.listen(8000, () => {
	console.log("Server is running on port 8000");
});
