import express from "express";
import { limitText} from "./index";
const server = express();

server.get("/", (request, response) => {
  const LIMITTEXT = limitText("helllo", 3);
  // const DATAFORMATOBR = "dataFormatoBr(): " + dataFormatoBr("1993-10-05");
  // const CALCULARIDADEMESES =
  //   "calcularIdadeComMeses(): " + calcularIdadeComMeses("1993-10-06");
  // console.log(DATAFORMATOBR);
  console.log(LIMITTEXT);
  // console.log(CALCULARIDADEMESES);

  return response.send(LIMITTEXT);
});

server.listen(8001);
