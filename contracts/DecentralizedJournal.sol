// SPDX-License-Identifier: GPT-3.0

pragma solidity >= 0.7.0 < 0.9.0;

import "hardhat/console.sol";

contract DecentralizedJournal {
    struct note {
        string title;
        string content;
        uint256 date;
        uint256 id;
    }

    mapping(address => note[]) journals;
    
    function addNote(string memory _title, string memory _content) public {
        note memory newNote = note(
            _title, 
            _content, 
            block.timestamp, 
            journals[msg.sender].length + 1
        );
        
        journals[msg.sender].push(newNote);
        console.log("Hi, you added:", _title);
    }

    function getJournal() public view returns(note[] memory) {
        console.log("Hi, you all note", journals[msg.sender].length);
        return journals[msg.sender];
    }

    function getOneNote(uint _noteId) public view returns(note memory) {
        console.log(
            journals[msg.sender][_noteId - 1].title,
            journals[msg.sender][_noteId - 1].content,
            journals[msg.sender][_noteId - 1].date,
            journals[msg.sender][_noteId - 1].id
        );

        return journals[msg.sender][_noteId - 1];
    }

    function getTotalNotes() public view returns(uint256) {
        console.log("You have:", journals[msg.sender].length, msg.sender);
        return journals[msg.sender].length;
    }

    function changeNoteTitle(uint256 _id, string memory _newTitle) public {
        console.log(journals[msg.sender][_id - 1].title);
        journals[msg.sender][_id - 1].title = _newTitle;
        console.log(journals[msg.sender][_id - 1].title);
    }

    function changeNoteContent(uint256 _id, string memory _newContent) public {
        console.log(journals[msg.sender][_id - 1].content);
        journals[msg.sender][_id - 1].content = _newContent;
        console.log(journals[msg.sender][_id - 1].content);
    }

    function deleteJournal() public {
        console.log("You are deleting your journal", getTotalNotes());
        delete journals[msg.sender];
        console.log("Journal delete", getTotalNotes());
    }
}