import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const voteContractAddress = await sdk.deployer.deployVote({
            name: "My VishuDAO",
            voting_token_address: "0x03eA786EBFcefccB9245c8F75edD651B281518c8",
            voting_delay_in_blocks: 0,
            voting_period_in_blocks: 6570,
            voting_quorum_fraction: 0,
            proposal_token_threshold: 0,
        });
        console.log(
            "✅ Successfully deployed vote contract, address:",
            voteContractAddress,
        );
    } catch (err) {
        console.error("Failed to deploy vote contract", err);
    }
})();