import { server } from "./app";

server.listen(process.env.PORT || 4000, () => console.log(`🚀 Server is runnig on PORT ${process.env.PORT || 4000}`))