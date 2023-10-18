import { ethers } from "ethers";
import { ABI_DONATE } from "./contracts/donateABI";
import { config } from "../config";

export const donate = (userAddress, saleAddress, signer, amount) => {
    return new Promise(async (resolve, reject) => {
        try {
            const contract = new ethers.Contract(
                saleAddress,
                ABI_DONATE,
                signer,
            );
            const value = ethers.utils.parseEther(amount);
            let result;
            await contract
                .donate(userAddress, value)
                .then((r) => {
                    result = r;
                    console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
                })
                .catch((err) => {
                    console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
                });
            await result.wait();
            resolve(result);
        } catch (error) {
            console.log("%c Line:62 🍬 error", "color:#465975", error);
            resolve(false);
        }
    });
};
