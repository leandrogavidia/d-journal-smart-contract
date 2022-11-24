const deploy = async () => {
    const DecentralizedJournalFactory = await hre.ethers.getContractFactory("DecentralizedJournal");
    const DecentralizedJournal = await DecentralizedJournalFactory.deploy();
    await DecentralizedJournal.deployed();

    console.log("Contract address:", DecentralizedJournal.address);
}

const runDeploy = async () => {
    try {
        await deploy();
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

runDeploy();