const deploy = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const DecentralizedJournalFactory = await hre.ethers.getContractFactory("DecentralizedJournal");
    const DecentralizedJournal = await DecentralizedJournalFactory.deploy();
    await DecentralizedJournal.deployed();

    console.log("My contract is deployed in:", DecentralizedJournal.address);

    let getJournal;
    getJournal = await DecentralizedJournal.getJournal();

    let addJournal = await DecentralizedJournal.addNote("Mi primera nota 😎");
    await addJournal.wait();

    getJournal = await DecentralizedJournal.getJournal();

    let totalNotes;
    totalNotes = await DecentralizedJournal.getTotalNotes();

    addJournal = await DecentralizedJournal.connect(randomPerson).addNote("Nueva nota random 1")
    addJournal = await DecentralizedJournal.connect(randomPerson).addNote("Nueva nota random 2")

    totalNotes = await DecentralizedJournal.connect(randomPerson).getTotalNotes();
    totalNotes = await DecentralizedJournal.getTotalNotes();
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