"use strict";


class DoublyList {



  constructor () {

    this. _length = 0;

    this. head = null;

    this. tail = null;

  }



  createNode (value) {

    const node = {

      "data": value,

      "previous": null,

      "next": null,

    };


    return node;

  }




  add (value) {

    let node = this. createNode (value);

    if (this. _length) {

      this. tail. next = node;

      node. previous = this. tail;

      this. tail = node;

      this. _length++;


      return node;

    }


    this. head = node;

    this. tail = node;

    this. _length++;


    return node;

  }




  search (key) {

    let currentNode = this. head;

        let length = this. _length;

        let count = 1;

        let message = {failure: 'Failure: non-existent node in this list.'};


    if (length === 0 || position < 1 || position > length) {

        return message. failure;

    }


    while (count < position) {

        currentNode = currentNode. next;


        count++;

    }


    return currentNode. data;

  }




  remove (key) {

    let currentNode = this. head;

        let length = this. _length;

        let count = 1;

        let message = {failure: 'Failure: non-existent node in this list.'};

        let beforeNodeToDelete = null;

        let nodeToDelete = null;

        let deletedNode = null;


    if (length === 0 || position < 1 || position > length) {

        return message. failure;

    }


    if (position === 1) {

      this. head = currentNode. next;


      if (!this. head) {

        this. head. previous = null;

        this. _length--;


        return message. success;

      }


      this. tail = null;

      this. _length--;


      return message. success;

    }


    if (position === this. _length) {

      this. tail = this. tail. previous;

      this. tail. next = null;

      this. _length--;


      return message. success;

    }



    while (count < position) {

      currentNode = currentNode. next;

      count++;

    }


    beforeNodeToDelete = currentNode. previous;

    nodeToDelete = currentNode;

    afterNodeToDelete = currentNode. next;

    beforeNodeToDelete. next = afterNodeToDelete;

    afterNodeToDelete. previous = beforeNodeToDelete;

    deletedNode = nodeToDelete;

    nodeToDelete = null;

    this. _length--;


    return message.success;

  }



  print () {

    let currentNode = this. head;


    while (currentNode !== null) {

      console. log (currentNode. data);


      currentNode = currentNode. next;

    }

  }



  len () {

    const length = this. _length;


    return length;

  }

}




module. exports = DoublyList;
