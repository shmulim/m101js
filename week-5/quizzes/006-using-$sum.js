/*
This problem, and some after it, use the zips collection from media.mongodb.org/zips.json.
You don't need to download it, but you can if you want, allowing you to test your queries within MongoDB.
You can import, once downloaded, using mongoimport
Suppose we have a collection of populations by postal code. The postal codes in are in the _id field, and
are therefore unique. Documents look like this:

{
	"city" : "CLANTON",
	"loc" : [
		-86.642472,
		32.835532
	],
	"pop" : 13990,
	"state" : "AL",
	"_id" : "35045"
}

For students outside the United States, there are 50 non-overlapping states in the US with two
letter abbreviations such as NY and CA. In addition, the capital of Washington is within an
area designated the District of Columbia, and carries the abbreviation DC. For purposes of the mail,
the postal service considers DC to be a "state." So in this dataset, there are 51 states.
We call postal codes "zip codes." A city may overlap several zip codes.

Write an aggregation query to sum up the population (pop) by state and put the result in a
field called population. Don't use a compound _id key (you don't need one and the quiz checker
is not expecting one). The collection name is zips. so something along the lines of db.zips.aggregate...
*/

/*
db.zips.aggregate([
    {$group: {_id: "$state", population: {$sum: "$pop"}}}
]);
*/
