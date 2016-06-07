const express = require('express')
const router = express.Router();
const knex = require('../db/knex')

router.get('/', function (req,res){
	knex('pirates').then(function(pirates){
		res.send(pirates);		
	}).catch(function(err){
		res.send(err);
	});
})

router.get('/:id', function(req,res){
	knex('pirates').where('id',req.params.id).first()
	.then(function(pirate){
		res.send(pirate)
	})
})

router.post('/',function(req,res){
	knex('pirates').insert(req.body.pirate, '*')
	.then(function(pirate){
		res.send(pirate)
	})
})

router.delete('/:id', (req,res) => {
	knex('pirates').where('id', req.params.id).del().then(function(){
		res.send('pirate deleted!');
	}).catch(function(err){
		res.send
	})
})

router.put('/:id', (req,res) => {
	knex('pirates')
		.where('id', req.params.id)
		.update(req.body.pirate)
		.then(function(){
			res.send('Pirate Updated!')
		}).catch(function(err){
			res.send(err);
		})
})

//GET '/:id'
//PUT '/:id'
//POST '/'
//DELETE '/:id'


module.exports = router