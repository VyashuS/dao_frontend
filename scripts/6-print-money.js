import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x03eA786EBFcefccB9245c8F75edD651B281518c8");


(async () => {
    try {
        const ammount = 1_000_000;
        await token.mintToSelf(ammount);
        const totalSupply = await token.totalSupply();

        console.log("✅ There now is", totalSupply.displayValue, "$SHOONYA in circulation");
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();