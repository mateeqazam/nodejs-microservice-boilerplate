import app from "./app";
import routes from "./routes";
import { env, port } from "./config";

app.use("/", routes);

app.listen(port, () => {
	console.info(`server started on port ${port} (${env})`); // eslint-disable-line no-console
});

export default app;
