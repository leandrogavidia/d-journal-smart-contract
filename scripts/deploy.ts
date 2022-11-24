const deploy = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    const DecentralizedJournalFactory = await hre.ethers.getContractFactory("DecentralizedJournal");
    const DecentralizedJournal = await DecentralizedJournalFactory.deploy();
    await DecentralizedJournal.deployed();

    console.log("Deploying contracto with account:", deployer.address);
    console.log("Account balance:", accountBalance.toString());
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