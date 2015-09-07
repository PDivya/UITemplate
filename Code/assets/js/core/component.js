define(["lists/list","navBar/navBar","items/items"], function(lists,navBar,items){
	
	var Component = function(){
	this.list=lists;
	this.navBar=navBar;
	this.items=items;
	};
	
	Component.prototype.buildlistContent = function(obj){
		return this.list.getUI(obj);
	};
	
	Component.prototype.buildNavContent = function(obj){
		return this.navBar.getUI(obj);
	};
	
	Component.prototype.navlistClick = function(event){
		var id = event.target.parentElement.getAttribute("data");
		this.navBar.oController.listClick(id,this.list);
	};
	
	Component.prototype.Removelist = function(id){
		this.list.oController.removelist(id);
	};
	
	Component.prototype.addlist = function(){
		this.list.oController.addlist(this.list);
	};
	
	Component.prototype.collapselist = function(id){
		this.list.oController.collapselist(id,this.list);
	};
	Component.prototype.addcard = function(card){
		this.items.oController.addcard(card.id);
	};
	Component.prototype.setCardRef = function(id){
		window.location.href="#myModal1";
		this.list.oView.addCardRef=id;
	};
	Component.prototype.removeCard = function(card){
		this.items.oController.removeCard(card.id);
	};
	Component.prototype.editCard = function(card){
		this.items.oController.editCard(card.id);
	};
	Component.prototype.removeEdit = function(card){
		this.items.oController.removeEdit(card.id);
	};	
	return new Component();
});