// ==UserScript==
// @name         DTF Weather
// @version      0.1
// @description  Хых
// @author       ётка
// @match        https://dtf.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200){
                    aCallback(anHttpRequest.responseText);
                }}

            anHttpRequest.open( "GET", aUrl, true );
            anHttpRequest.send( null );
        }
    }
    var bar = document.querySelector('.l-fs-16.lm-fs-15.t-ff-1-700');
    var client = new HttpClient();
    client.get('https://wttr.in?format=1', function(response){
        bar.innerText = bar.innerText + '\t' + response.toString()
    })
})();
