import { Keypair } from "@solana/web3.js"
import { sha256 } from "../utils/sha256"

module.exports.createWallet = async (response) => {
    const hash = await sha256(response.name, response.password)
    const keypair = Keypair.fromSeed(
        Uint8Array.from(
            hash.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
        )
    )
    return keypair
}
