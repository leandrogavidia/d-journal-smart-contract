const deploy = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const DecentralizedJournalFactory = await hre.ethers.getContractFactory("DecentralizedJournal");
    const DecentralizedJournal = await DecentralizedJournalFactory.deploy();
    await DecentralizedJournal.deployed();

    // Add one note

    let addNote = await DecentralizedJournal.addNote("Primera nota", "Holaaaaaa");
    await addNote.wait();

    let getJournal = await DecentralizedJournal.getJournal();

    // Change title

    let getOneNote = await DecentralizedJournal.getOneNote(1);

    let changeTitleNote = await DecentralizedJournal.changeNoteTitle(1, "Nueva caja de herramientas");
    await changeTitleNote.wait();

    getOneNote = await DecentralizedJournal.getOneNote(1);

    // Change content

    let changeNoteContent = await DecentralizedJournal.changeNoteContent(1, "Nuevo contenido");
    await changeNoteContent.wait();

    getOneNote = await DecentralizedJournal.getOneNote(1);

    // Delete journal

    getJournal = await DecentralizedJournal.getJournal();

    addNote = await DecentralizedJournal.addNote("Nota 2", "Contenido 2")
    await addNote.wait();

    addNote = await DecentralizedJournal.addNote("Nota 3", "Contenido 3")
    await addNote.wait();

    getJournal = await DecentralizedJournal.getJournal();

    let deleteJournal = await DecentralizedJournal.deleteJournal();
    await deleteJournal.wait();

    getJournal = await DecentralizedJournal.getJournal();

    // addNote = await DecentralizedJournal.addNote("Primera nota", "Holaaaaaa");
    // await addNote.wait();

    // deleteJournal = await DecentralizedJournal.deleteJournal();
    // await deleteJournal.wait();
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