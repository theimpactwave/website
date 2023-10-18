import { ethers } from "ethers";
import { TokenABI } from "./contracts/tokenABI";
import { config } from "../config";

export const getTokenBalance = async (userAddress, token, signer) => {
    const contract = new ethers.Contract(
        config.tokens[token].address,
        TokenABI,
        signer,
    );

    const balance = await contract.balanceOf(userAddress);
    const formattedBalance = ethers.utils.formatUnits(
        balance,
        config.tokens[token].decimal,
    );

    return formattedBalance;
};

export const getTokenAllowance = async (
    userAddress,
    token,
    contractAddress,
    signer,
) => {
    const contract = new ethers.Contract(token.address, TokenABI, signer);

    const balance = await contract.allowance(userAddress, contractAddress);
    const formattedBalance = ethers.utils.formatUnits(balance, token.decimal);

    return formattedBalance;
};

export const approveToken = async (
    userAddress,
    token,
    contractAddress,
    signer,
) => {
    return new Promise(async (resolve) => {
        try {
            const contract = new ethers.Contract(
                token.address,
                TokenABI,
                signer,
            );
            let result;
            await contract
                .approve(contractAddress, `1000000000000000000000000000000`)
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
            console.log("%c Line:276 🥕 error", "color:#ed9ec7", error);
            resolve(false);
        }
    });
};
