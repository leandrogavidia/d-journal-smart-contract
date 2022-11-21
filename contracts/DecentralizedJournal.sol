// SPDX-License-Identifier: GPT-3.0

pragma solidity >= 0.7.0 < 0.9.0;

import "hardhat/console.sol";

contract DecentralizedJournal {
    struct note {
        string note;
        uint256 date;
    }

    mapping(address => note[]) journals;
    
    function addNote(string memory _newNote) public {
        note memory newNote = note(_newNote, block.timestamp);
        journals[msg.sender].push(newNote);
        console.log("Hi, you added:", _newNote);
    }

    function getJournal() public view returns(note[] memory) {
        console.log("Hi, you all note", journals[msg.sender].length);
        return journals[msg.sender];
    }

    function getTotalNotes() public view returns(uint256) {
        console.log("You have:", journals[msg.sender].length, msg.sender);
        return journals[msg.sender].length;
    }
}