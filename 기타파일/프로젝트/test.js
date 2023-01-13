require("dotenv").config();
const request = require("request");
const { XMLParser } = require("fast-xml-parser");
const parser = new XMLParser();
let key = process.env.pkey;
const bus =
  "https://apis.data.go.kr/6260000/BusanBIMS/stopArrByBstopid?serviceKey=1XvaT59aF%2F2FopKPt8JuLRHhRWQwGexBw1zpMrdjUcQblYVLRTpKSzVcz2GULXdz7%2B8AMRYi8nyMenbz6zic3A%3D%3D&bstopid=505870000";

request(bus, (e, res, body) => {
  //   const rr = parser.parse(body);
  //   const _ = rr.response.body.itemss;
  console.log(body);
});
