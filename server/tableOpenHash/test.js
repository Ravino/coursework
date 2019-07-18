  rebuild () {

    const oldSize = this. _oldSize;
    const size = this. _size;
    const oldTable = this. table;


    this. table = [];
    this. items = 0;


    for (let i = 0; i < oldSize; i++) {

      if (!oldTable [i]) {

        continue;

      }


      const flatData = oldTable [i]. getFlatList ();


      for (let j = 0; j < flatData. length; j++) {

        const obj = flatData [j];


        this. readd (obj);

      }
    }

  }




  readd (object) {

    const hashKey = this. hashing (object. key);


    if (!this. table [hashKey]) {

      this. table [hashKey] = new DoublyList ();

    }


    if (this. table [hashKey]. search (object. key)) {

      return false;

    }


    this. table [hashKey]. add (object);


    this. incrementItems ();
    this. calculateCoefficient ();


    return true;

  }
