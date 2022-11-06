import { create, IPFSHTTPClient } from "ipfs-http-client";
// IPFS http code
const projectId = '2GGrPVPK7M6XYbWBzrX6GzKefIH';
const projectSecret = 'a8314de9cffa57989e80a363f66981d5';
const authorization = "Basic " + btoa(projectId + ":" + projectSecret);
let ipfs = IPFSHTTPClient | undefined;

try {
    ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",
        headers: {
            authorization,
        },
    });
} catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
}
export default ipfs;