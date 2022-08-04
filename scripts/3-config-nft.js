import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6c9eeA1B3C9C1c211e01d9fAdCd61A66D58838e9");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "IshaDAO is here",
                description: "This NFT will give you access to IshaDAO!",
                image: readFileSync("scripts/assets/ishalogo.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();