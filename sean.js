var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyparse = require('body-parser');
var request = require('request');

//Application
var app = express();

//Set View Engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyparse.urlencoded({ extended: false}));
app.use(bodyparse.json());

//Homepage Static Directories
app.use('/public/documents', express.static(__dirname + '/public/documents'));
app.use('/public/scripts', express.static(__dirname + '/public/scripts'));
app.use('/public/styles', express.static(__dirname + '/public/styles'));

//HowTo Static Directories
app.use('/public/howTo/scripts', express.static(__dirname + '/public/howTo/scripts'));
app.use('/public/howTo/styles', express.static(__dirname + '/public/howTo/styles'));

//HowTo Static Directories
app.use('/public/howToVolley/javascript', express.static(__dirname + '/public/howToVolley/javascript'));
app.use('/public/howToVolley/styles', express.static(__dirname + '/public/howToVolley/styles'));
app.use('/public/howToVolley/images', express.static(__dirname + '/public/howToVolley/images'));

//Set App Port
app.set('port', process.env.PORT || 3000);

//find new session ID generator
//app.use(session({secret: 'L4fk5OPc34'}));
app.get('/homepage', function(req, res){
	var options = [];
	var context = {};
	context.barOption = options;
	res.render('home', context);
});

app.get('/MTBirthday', function(req, res){
   
   res.render('MTBirthday');
});

app.get('/howTo290/:page', function(req, res){
  
   if(req.params.page == "intro"){
      intro(req, res);
   } else if (req.params.page == "what+are+uris"){
      whatAreUris(req, res);
   } else if (req.params.page == "api+intro"){
      apiIntro(req, res);
   } else if (req.params.page == "api+price"){
      apiPrice(req, res);
   } else if (req.params.page == "api+product"){
      apiProduct(req, res);
   } else if (req.params.page == "api+store"){
      apiStore(req, res);
   } else {
      res.type('text/plain');
      res.status(404);
      res.send('404 - There is nothing here save for vast expanses of nothing');
   }
});

app.get('/howToVolley/:page', function(req, res){

   var c = {};
   c.layout = "howToVolleyMain";
  
   if(req.params.page == "intro"){
      res.render('howToVolley/intro', c);
   } else if (req.params.page == "library"){
      res.render('howToVolley/library', c);
   } else if (req.params.page == "software"){
      res.render('howToVolley/software', c);
   } else if (req.params.page == "requestqueue"){
      res.render('howToVolley/requestqueue', c);
   } else if (req.params.page == "simple"){
      res.render('howToVolley/simple', c);
   } else if (req.params.page == "image"){
      res.render('howToVolley/image', c);
   } else if (req.params.page == "custom"){
      res.render('howToVolley/custom1', c);
   } else if (req.params.page == "incorporate"){
      res.render('howToVolley/incorporate', c);
   } else {
      res.type('text/plain');
      res.status(404);
      res.send('404 - There is nothing here save for vast expanses of nothing');
   }
});

app.use(function(req, res, next){
   res.type('text/plain');
   res.status(404);
   res.send('404 - There is nothing here save for vast expanses of nothing');
});

app.use(function(err, req, res, next){
	res.type('text/plain');
	res.status(500);
	res.send('500 - I made a huge mistake');
});

app.listen(app.get('port'), function(){
        console.log( 'Express started on http://localhost:' + app.get('port') + ' press Ctrl-C to exit' );
});


function intro(req, res){
   var c = {};
   c.layout = 'howToMain';
   res.render('howTo/intro', c);
}

function whatAreUris(req, res){
   var c = {};
   c.layout = 'howToMain';
   res.render('howTo/uris', c);
}

function apiIntro(req, outres){
   var c = {};
   c.layout = 'howToMain';
   var requestTwo = function(err, res, body){
      c.priceJSON = body;
      request('http://www.oregonliquorprices.com/api/v1/product/?limit=1', requestThree);
   };

   var requestThree = function(err, res, body){
      c.productJSON = body;
      request('http://www.oregonliquorprices.com/api/v1/store/?limit=1', function(err, res, body){
	 c.storeJSON = body;

	 if (!err && res.statusCode < 400){
	    outres.render('howTo/apiintro', c);
	 } else {
	    outres.render('howTo/apiintro',c);
	 }
      });
   };
   request('http://www.oregonliquorprices.com/api/v1/price/?limit=1', requestTwo);
}

function apiPrice(req, outres){
   var c = {};
   c.layout = 'howToMain';
   request('http://www.oregonliquorprices.com/api/v1/price/?limit=1', function(err, res, body){
      c.priceJSON = body;
      if(!err && res.statusCode < 400){
	 outres.render('howTo/apiprice', c);
      } else {
	 outres.render('howTo/apiprice', c);
      }
   });
}

function apiProduct(req, outres){
   var c = {};
   c.layout = 'howToMain';
   request('http://www.oregonliquorprices.com/api/v1/product/?limit=1', function(err, res, body){
      c.productJSON = body;
      if(!err && res.statusCode < 400){
	 outres.render('howTo/apiproduct', c);
      } else {
	 outres.render('howTo/apiproduct', c);
      }
   });
}

function apiStore(req, outres){
   var c = {};
   c.layout = 'howToMain';
   request('http://www.oregonliquorprices.com/api/v1/store/?limit=1', function(err, res, body){
      c.storeJSON = body;
      if(!err && res.statusCode < 400){
	 outres.render('howTo/apistore', c);
      } else {
	 outres.render('howTo/apistore', c);
      }
   });

}
