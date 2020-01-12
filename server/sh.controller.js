
// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

//store score and magnitude to determine positivity of comment 
var score = 0;
var magnitude = 0;

exports.comment_create = function (req, res, next) {
	//grab comment 
	const comment = req.body.john;
	//store in natural language api format 
	const document = {
	  content: comment,
	  type: 'PLAIN_TEXT',
	};
	//analyze comment using natural language api (promise)
	client
        .analyzeSentiment({
           document
        })
        .then(results => {
            const sentiment = results[0].documentSentiment;
			//set score and magnitude
			score = sentiment.score;
			magnitude = sentiment.magnitude;
            console.log(`Document sentiment:`);
            console.log(`  Score: ${sentiment.score}`);
            console.log(`  Magnitude: ${sentiment.magnitude}`);
			//if score is lower than 0 - its probably too negative for us 
			if(score < 0){
			//bad comment 
			res.send({ message: "bad" });
			}
			//above 0 means the comment is generally positive 
			else {
				//good comment 
			res.send({ message: "good" });
			}
			})
		  .catch(err => {
            console.error('MY ERROR:', err);
            res.status(400).send("Error in invoking the Natural Language API. Reason : " + err.toString());
        });
	console.log("got post request");
};

