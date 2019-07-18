"use strict";


class DoublyList {



  constructor () {

    this. _length = 0;
    this. head = null;
    this. tail = null;

  }



  save () {

    return this;
  }


  reload (dt) {

    for (let i in dt) {

      this [i] = dt [i];

    }

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



    if (!currentNode) {

      return false;

    }


    while (currentNode) {

      if (currentNode. data. key == key) {

        return currentNode. data;

      }


        currentNode = currentNode. next;

    }

    if (!currentNode) {

      return false;

    }

  }




  remove (key) {

    let currentNode = this. head;


        let afterNodeToDelete = null;
        let beforeNodeToDelete = null;
        let nodeToDelete = null;


    if (!currentNode) {

      return false;

    }


    if (currentNode. data. key == key) {

      this. head = currentNode. next;


      if (!this. head) {

        this. tail = null;
        this. _length--;


        return true;

      }

    }


    if (this. tail. data. key == key) {

      this. tail = this. tail. previous;
      this. tail. next = null;
      this. _length--;


      return true;

    }



    while (currentNode) {

      if (currentNode. data. key == key) {

        break;

      }


      currentNode = currentNode. next;

    }


    if (!currentNode) {

      return false;

    }


    beforeNodeToDelete = currentNode. previous;
    nodeToDelete = currentNode;
    afterNodeToDelete = currentNode. next;


    beforeNodeToDelete. next = afterNodeToDelete;
    afterNodeToDelete. previous = beforeNodeToDelete;

    nodeToDelete = null;

    this. _length--;


    return true;

  }




  print () {

    let currentNode = this. head;


    while (currentNode !== null) {

      console. log (currentNode. data);


      currentNode = currentNode. next;

    }

  }




  getFlatList () {

    let currentNode = this. head;
    const flatData = [];


    while (currentNode !== null) {

      flatData. push (currentNode. data);


      currentNode = currentNode. next;

    }


    return flatData;

  }




  len () {

    const length = this. _length;


    return length;

  }



}




module. exports = DoublyList;
