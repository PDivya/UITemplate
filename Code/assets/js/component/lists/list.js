define(["lists/listView"], function(view){
	
	var lists = function(){
		this.oView = view;
		this.oController = this.oView.getController();

	};
	lists.prototype.getUI = function(obj) {
		return this.oView.createContent(obj);
	};
	
	return (new lists());
});

