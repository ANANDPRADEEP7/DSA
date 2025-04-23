class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
    // this.count = 0; // Track the number of key-value pairs
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  insert(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((items) => items[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
//   this.count++;

//   // Check if resizing is needed
//   if (this.count >= this.size / 2) {
//     this.resize();
//   }
}

  lookup(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((items) => items[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((items) => items[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
  
  resize() {
    const oldTable = this.table;
    this.size *= 2; // Double the size
    this.table = new Array(this.size);
    this.count = 0; // Reset count

    // Rehash all key-value pairs into the new table
    for (const bucket of oldTable) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.insert(key, value);
        }
      }
    }

    console.log(Resized to ${this.size});
  }
}


const ht = new HashTable();
ht.insert("name", "Bruce");
ht.insert("age", 25);
ht.display();
console.log(ht.lookup("name"));
ht.insert("mane", "Clark");
ht.delete("name")
ht.display();