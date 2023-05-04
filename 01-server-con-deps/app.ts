

import { opine, json, urlencoded, type OpineRequest, type OpineResponse } from "./deps";

const app = opine();

app.use(json()); 						
app.use(urlencoded()); 

app.get("/", (req: OpineRequest, res: OpineResponse) => {
  res.send("Hello World");
});

app.post("/", (req: OpineRequest, res: OpineResponse) => {
    res.send(req.body);
})

app.listen(8080, ()=> {
  console.log(`listening on port 8080`);
});
