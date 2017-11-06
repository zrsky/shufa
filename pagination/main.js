/*
 * @Author: iceStone
 * @Date:   2016-02-19 17:38:48
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-02-19 18:02:08
 */

define(function(require, exports, module) {
  var Pagination = require('./modules/pagination.js');
  var stringUrl = location.search;
  var current = stringUrl.split("=")[1];
  if(current){
  	  var pager = new Pagination(current, 20, 10);

  	}else{
  		  var pager = new Pagination(1, 20, 10);

  	}
  pager.render('.pagination');
 
});
