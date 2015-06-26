/*
This problem uses the same zip code data as the using $sum quiz. See that quiz for a longer explanation.
Suppose we population by zip code (postal code) data that looks like this
(putting in a query for the zip codes in Palo Alto)

> db.zips.find({state:"CA",city:"PALO ALTO"})
{ "city" : "PALO ALTO", "loc" : [ -122.149685, 37.444324 ], "pop" : 15965, "state" : "CA", "_id" : "94301" }
{ "city" : "PALO ALTO", "loc" : [ -122.184234, 37.433424 ], "pop" : 1835, "state" : "CA", "_id" : "94304" }
{ "city" : "PALO ALTO", "loc" : [ -122.127375, 37.418009 ], "pop" : 24309, "state" : "CA", "_id" : "94306" }

Write an aggregation query that will return the postal codes that cover each city.
The results should look like this:
		{
			"_id" : "CENTREVILLE",
			"postal_codes" : [
				"22020",
				"49032",
				"39631",
				"21617",
				"35042"
			]
		},
Again the collection will be called zips. You can deduce what your result column names
should be from the above output. (ignore the issue that a city may have the same name in
two different states and is in fact two different cities in that case - for eg
Springfield, MO and Springfield, MA)
*/

db.zips.aggregate([
    {$group: {"_id": "$city",  "postal_codes": {$addToSet: "$_id" }}}  
]);
