<?php

function initializeApp($exec){
	$app_url = 'streamline/streamline-example.trealet';
	$json_string = file_get_contents($app_url);	
	if(!$json_string) die($app_url.' not found!');
	$d = json_decode($json_string, true);	
	if(!$d) die('Cannot parse the trealet content!');	
	if(!isset($d['trealet'])) die('It is not a trealet!');	
	if($d['trealet']['exec']!=$exec) die('Wrong executable name!');
	return $d['trealet'];
}