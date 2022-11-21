// SPDX-License-Identifier: GPT-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract DecentralizedJournal {
    struct note {
        string note;
        uint256 date;
    }

    mapping(address => note[]) journal;
    
    function addNote(string memory _newNote) public {
        journal[msg.sender].push(note(_newNote, block.timestamp));
    }

    function getJournal() public view returns(note[] memory) {
        return journal[msg.sender];
    }
}