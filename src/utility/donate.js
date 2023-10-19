import { ethers } from "ethers";

import { ABI_DONATE } from "./contracts/donateABI";

export const donate = async (userAddress, saleAddress, signer, amount) => {
  return new Promise((resolve) => {
    try {
      const contract = new ethers.Contract(saleAddress, ABI_DONATE, signer);
      const value = ethers.utils.parseEther(amount);
      contract
        .donate(userAddress, value)
        .then((r) => {
          const result = r;
          result
            .wait()
            .then(() => {
              resolve(result);
            })
            .catch(() => {
              resolve(false);
            });
          console.log("%c Line:62 🍔 r", "color:#4fff4B", result);
        })
        .catch((err) => {
          console.log("%c Line:67 🌶 err", "color:#e41a6a", err);
        });
    } catch (error) {
      console.log("%c Line:62 🍬 error", "color:#465975", error);
      resolve(false);
    }
  });
};
