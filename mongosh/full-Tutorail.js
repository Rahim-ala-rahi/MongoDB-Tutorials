
Enterprise appdb> show dbs
admin        40.00 KiB
config      108.00 KiB
local        88.00 KiB
studentsDB    8.00 KiB
Enterprise appdb> db
appdb
Enterprise appdb> db.users.insertOne({name: "Rahim"})
{
  acknowledged: true,
  insertedId: ObjectId("644c8b0acba229c339fb10ef")
}
Enterprise appdb> db.users.find()
[ { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' } ]
Enterprise appdb> db.users.insertOne({name: "Sally", age: 19, address: {street: "987 North ST"}, hobbies:["Running"]})
{
  acknowledged: true,
  insertedId: ObjectId("644c8f2ecba229c339fb10f0")
}
Enterprise appdb> db.users.find()
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  }
]
Enterprise appdb> db.users.insertMany([{ name: "Jill", {name: "Mike" }])
Uncaught:
SyntaxError: Unexpected token (1:37)

> 1 | db.users.insertMany([{ name: "Jill", {name: "Mike" }])
    |                                      ^
  2 |

Enterprise appdb> db.users.insertMany([{name: "Jill"}, {name: "Mike"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("644c91adcba229c339fb10f1"),
    '1': ObjectId("644c91adcba229c339fb10f2")
  }
}
Enterprise appdb> db.users.find()
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' }
]
Enterprise appdb> db.users.insertMany([
...   { name: 'Alice', age: 25, email: 'alice@example.com' },
...   { name: 'Bob', age: 30, email: 'bob@example.com' },
...   { name: 'Charlie', age: 35, email: 'charlie@example.com' },
...   { name: 'Dave', age: 40, email: 'dave@example.com' },
...   { name: 'Emily', age: 45, email: 'emily@example.com' },
...   { name: 'Frank', age: 50, email: 'frank@example.com' },
...   { name: 'Gina', age: 55, email: 'gina@example.com' },
...   { name: 'Hank', age: 60, email: 'hank@example.com' },
...   { name: 'Isabel', age: 65, email: 'isabel@example.com' },
...   { name: 'John', age: 70, email: 'john@example.com' }
...   { name: 'John', age: 70, email: 'john@example.com' }])
Uncaught:
SyntaxError: Unexpected token, expected "," (12:2)

  10 |   { name: 'Isabel', age: 65, email: 'isabel@example.com' },
  11 |   { name: 'John', age: 70, email: 'john@example.com' }
> 12 |   { name: 'John', age: 70, email: 'john@example.com' }])
     |   ^
  13 |

Enterprise appdb> db.users.insertMany([{name: "Kyle", age: 25, hobbies: ["Weight Lifting", "Bowling"], address: {street:"12
Uncaught:
SyntaxError: Unterminated string constant. (1:102)

> 1 | db.users.insertMany([{name: "Kyle", age: 25, hobbies: ["Weight Lifting", "Bowling"], address: {street:"12
    |                                                                                                       ^
  2 |

Enterprise appdb> db.users.insertMany([{name: "Kyle", age: 25, hobbies: ["Weight Lifting", "Bowling"], address: {street:... cls
Uncaught:
SyntaxError: Unexpected token, expected "," (2:0)

  1 | db.users.insertMany([{name: "Kyle", age: 25, hobbies: ["Weight Lifting", "Bowling"], address: {street:"123 main St", city: "New York City"}
> 2 | cls
    | ^
  3 |

Enterprise appdb> db.users.insertMany([
...   {
...     name: "Kyle",
...     age: 26,
...     hobbies: ["Weight Lifting", "St"],
...     city: "New York City"
...   },
...   {
...     name: "Billy",
...     age: 41,
...     hobbies: ["Swimming", "h St"],
...     city: "New York City"
...   }
... ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("644cbf39cba229c339fb10f3"),
    '1': ObjectId("644cbf39cba229c339fb10f4")
  }
}
Enterprise appdb> db.users.find()
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find().limit(2)
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  }
]
Enterprise appdb> db.users.find().sort({name: 1}).limit(2)
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' }
]
Enterprise appdb> db.users.find().sort({name: -1}).limit(2)
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' }
]
Enterprise appdb> db.users.find().sort({age: -1, name: -1}).limit(2)
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find().sort({age: 1, name: -1}).limit(2)
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' }
]
Enterprise appdb> db.users.find().limit(2)
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  }
]
Enterprise appdb> db.users.find().skip(1).limit(2)
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' }
]
Enterprise appdb> db.users.find({name: "kyle"})

Enterprise appdb> db.users.find({ name: "sally" })

Enterprise appdb> db.users.find({ name: "kyle" })

Enterprise appdb> db.users.find({ name: "Jill" })
[ { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' } ]
Enterprise appdb> db.users.find({ age: 26 })
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find().findById(id)
ReferenceError: id is not defined
Enterprise appdb> db.users.findOne({ _id: ObjectId("12345")})
BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
Enterprise appdb> db.users.findOne({ _id: ObjectId("1")})
BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
Enterprise appdb> r
ReferenceError: r is not defined
Enterprise appdb> > db.users.findOne({_id: ObjectId("12345")})
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | > db.users.findOne({_id: ObjectId("12345")})
    | ^
  2 |

Enterprise appdb> > db.users.findOne({_id: ObjectId("12345")})
Uncaught:
SyntaxError: Unexpected token (1:0)

> 1 | > db.users.findOne({_id: ObjectId("12345")})
    | ^
  2 |

Enterprise appdb> db.users.findOne({_id: ObjectId("12345")})
BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
Enterprise appdb> db.users.findOne({_id: ObjectId("15")})
BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
Enterprise appdb> db.users.findOne({_id: ObjectId( "644cbf39cba229c339fb10f3")})
{
  _id: ObjectId("644cbf39cba229c339fb10f3"),
  name: 'Kyle',
  age: 26,
  hobbies: [ 'Weight Lifting', 'St' ],
  city: 'New York City'
}
Enterprise appdb> db.users.find({ name: "Kyle"}, {name: 1, age: 1})
[
  { _id: ObjectId("644cbf39cba229c339fb10f3"), name: 'Kyle', age: 26 }
]
Enterprise appdb> db.users.find({age: "26" })

Enterprise appdb> db.users.find({ name: "Kyle" }, {name: 1, age: 1 })
[
  { _id: ObjectId("644cbf39cba229c339fb10f3"), name: 'Kyle', age: 26 }
]
Enterprise appdb> db.users.find({ name: "Kyle" }, {name: 1, age: 1, _id: 0 })
[ { name: 'Kyle', age: 26 } ]
Enterprise appdb> db.users.find({ name: "Kyle" }, { age: 0})
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.uses.find({ name: { $neq: "Sally" }})
MongoServerError: unknown operator: $neq
Enterprise appdb> db.uses.find({ name: { $ne: "Sally" }})

Enterprise appdb> db.uses.find({ name: { $ne: "Kyle" }})

Enterprise appdb> db.uses.find({ name: { $ne: "rahim" }})

Enterprise appdb> db.uses.find({ age: { $gt: 13 }})

Enterprise appdb> db.uses.find({ age: { $gt: 20 }})

Enterprise appdb> db.users.find({ age: { $gte: 25 } })
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({ age: { $gt: 25 } })
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({ age: { $gt: 15 } })
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({ age: { $lte: 19 } })
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  }
]
Enterprise appdb> db.users.find({name: { $in: ["Kyle", "Billy"]}})
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({name: { $in: ["New York City", "Billy"]}})
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({city: { $in: ["New York City"]}})
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({name: { $nin: ["Kyle", "Billy"]}})
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' }
]
Enterprise appdb> db.users.find({ age: {$exists: true}})
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({ age: {$exists: false }})
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' }
]
Enterprise appdb> db.users.insertOne({age: null, name: "Bill" })
{
  acknowledged: true,
  insertedId: ObjectId("644e06c0cba229c339fb10f5")
}
Enterprise appdb> db.users.find({ age: {$exists: true}})
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644e06c0cba229c339fb10f5"),
    age: null,
    name: 'Bill'
  }
]
Enterprise appdb> db.users.find({ age: {$gte: 20, $lte: 40}})
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({ age: {$gte: 20, $lte: 40}, name: "Kyle"})
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({ age: {$gte: 20, $lte: 40}, name: "Sally"})

Enterprise appdb> db.users.find({ $and: [{ age: 26 }, { name: "Kyle"}]})
[
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  }
]
Enterprise appdb>


Enterprise test> show dbs
admin       40.00 KiB
appdb       72.00 KiB
config      60.00 KiB
local       88.00 KiB
studentsDB   8.00 KiB
Enterprise test> use appdb
switched to db appdb
Enterprise appdb> db.users.find()
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644e06c0cba229c339fb10f5"),
    age: null,
    name: 'Bill'
  }
]
Enterprise appdb> db.users.find({ $or: [{age: {$lte: 20}, {name: "Kyle"}]})
Uncaught:
SyntaxError: Unexpected token (1:40)

> 1 | db.users.find({ $or: [{age: {$lte: 20}, {name: "Kyle"}]})
    |                                         ^
  2 |

Enterprise appdb> db.users.find({ $or: [{age: {$lte: 20}}, {name: "Kyle"}]})
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  }
]
Enterprise appdb> db.users.find({ age: {$not: { $lte: 20}}})
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644e06c0cba229c339fb10f5"),
    age: null,
    name: 'Bill'
  }
Enterprise appdb> db.users.insertMany([{ name: "Tom", balance: 100, debt: 200}, {name: "Kristin, balance: 20, debt: 0}])
Uncaught:
SyntaxError: Unterminated string constant. (1:69)

> 1 | db.users.insertMany([{ name: "Tom", balance: 100, debt: 200}, {name: "Kristin, balance: 20, debt: 0}])
    |                                                                      ^
  2 |

Enterprise appdb> db.users.insertMany([{ name: "Tom", balance: 100, debt: 200}, {name: "Kristin", balance: 20, debt: 0}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("644e81aa62cd3f397031ab99"),
    '1': ObjectId("644e81aa62cd3f397031ab9a")
  }
}
Enterprise appdb> db.users.find({$expr: {$gt: ["debt", "balance"]})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:48)

> 1 | db.users.find({$expr: {$gt: ["debt", "balance"]})
    |                                                 ^
  2 |

Enterprise appdb> db.users.find({$expr: {$gt: ["debt", "balance"]}})
[
  { _id: ObjectId("644c8b0acba229c339fb10ef"), name: 'Rahim' },
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  },
  { _id: ObjectId("644c91adcba229c339fb10f1"), name: 'Jill' },
  { _id: ObjectId("644c91adcba229c339fb10f2"), name: 'Mike' },
  {
    _id: ObjectId("644cbf39cba229c339fb10f3"),
    name: 'Kyle',
    age: 26,
    hobbies: [ 'Weight Lifting', 'St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644cbf39cba229c339fb10f4"),
    name: 'Billy',
    age: 41,
    hobbies: [ 'Swimming', 'h St' ],
    city: 'New York City'
  },
  {
    _id: ObjectId("644e06c0cba229c339fb10f5"),
    age: null,
    name: 'Bill'
  },
  {
    _id: ObjectId("644e81aa62cd3f397031ab99"),
    name: 'Tom',
    balance: 100,
    debt: 200
  },
  {
    _id: ObjectId("644e81aa62cd3f397031ab9a"),
    name: 'Kristin',
    balance: 20,
    debt: 0
  }
]
Enterprise appdb> db.users.find({$expr: {$gt: ["$debt", "$balance"]}})
[
  {
    _id: ObjectId("644e81aa62cd3f397031ab99"),
    name: 'Tom',
    balance: 100,
    debt: 200
  }
]

Enterprise appdb> db.users.find({ "address.street": "987 North ST"})
[
  {
    _id: ObjectId("644c8f2ecba229c339fb10f0"),
    name: 'Sally',
    age: 19,
    address: { street: '987 North ST' },
    hobbies: [ 'Running' ]
  }
]

Enterprise appdb> db.users.findOne({ age: { $lte: 40}})
{
  _id: ObjectId("644c8f2ecba229c339fb10f0"),
  name: 'Sally',
  age: 19,
  address: { street: '987 North ST' },
  hobbies: [ 'Running' ]
}
Enterprise appdb> db.users.countDocuments({ age: { $lte: 40}})
2
Enterprise appdb>





Enterprise appdb> db.users.updateOne({age:26}, {$set: {age: 27}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Enterprise appdb> db.users.findOne({ age:27})
{
  _id: ObjectId("644cbf39cba229c339fb10f3"),
  name: 'Kyle',
  age: 27,
  hobbies: [ 'Weight Lifting', 'St' ],
  city: 'New York City'
}
Enterprise appdb>

Enterprise appdb> db.users.deleteOne({ age:27})
{ acknowledged: true, deletedCount: 1 }
Enterprise appdb> db.users.findOne({ age:27})
null
Enterprise appdb>