/**
*
*
**/
	function XTools(){
		this.creatTime=new Date();
		return this;
	}
 	function XPage(title,body){
		this.title=title;
		this.body=body;
		return this;
	}
	window.onload=function(){
	
	window.tools=new XTools();
	
	}