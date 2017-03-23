const Node = require('./node');

class LinkedList {
	
    constructor() {
		var node  =  new Node(null,null,null);
		this._head = node;
		this._tail = node;
		this.length =0;
	}

    append(data) {
		 var node = new Node(data,null,null);
			
		if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }        
			this.length ++;	    
	}

    head() {
		if(this._head) return this._head.data;
		else return null;
	}

    tail() {
		if(this._tail) return this._tail.data;
		else return null;
		
	}

    at(index) {
		if (index >= this.length) return null;
		var current = this._head;
		for(var i = 0; i<= index; i++){ //this can be done using WHILE as well...
			if(i === index)return current.data;	
			else current = current.next;        
		}
		return null;
	}

    insertAt(index, data) {
		if(index <= this.length){
			var temp;
			var current = this._head;
			var node = new Node(data,null,null);
			for(var i = 0; i <= index; i++){ 
				if(i == index -1){
					temp = current;
					node.prev = current;
					node.next = temp.next;
					console.log("new node -->",node);
					current.next = node;
					temp.next.prev = node;
				}
				else current = current.next;        
			}
		}	
	}

    isEmpty() {
		return this.length == 0;
	}

    clear() {
		var length = this.length;
		var current = this._head;
		 for(var i = 0; i < length; i++){
			if(i === length -1){
				this._head = null;
				this._tail = null;
			}
			else{
				this._head = current.next;
				current.prev = null;
				current.next=null;
			}
			this.length--; 
		}	 	 
	}
		
    deleteAt(index) {
		var counter = 0;
		var temp;
		var deletingNode;
		var current = this._head;
		if (index === 0) {
			this._head = current.next;
			current = null;
			this.length--;
		}
		
		while (counter < index) {
			temp = current;
			deletingNode = current.next;
			counter++;
		}
		temp.next = deletingNode.next;
		this.length--;   
    }
	
	 deleteAtOld(index) {
		if (index < this.length){
			var current = this._head;
			   if (index == 0){
				  this._head = current.next;
				  if (this._head) this._head.prev = null;
				  else this._tail  = null;    
			   }
			   else{
				   for(var i = 0; i<= index; i++){
						if (index == this.length -1){
							current = this._tail;
							this._tail = current.prev;
							this._tail.next = null;
						} 
						else if(i === index){
							current.prev.next = current.next;
							current.next.prev = current.prev;
						}
						else current = current.next;       
					}
			   }
			   
			this.length --;
		}
	}


    reverseOld() {
		var current = this._head;
		var org_head = this._head
		//var org-tail = this._tail;
		for(var i = 0; i< this.length; i++){
			if(i==0) {
				 current.prev = current.next.next
				 current.next = null;
			}			 
		}
		this._head = this._tail;
		this._tail = org_head;
	}
	
	reverse() {
		   var temp;
		   var current = this._head;
			var head = this._head
  
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
		console.log("length --> ",this.length);
         if(this.length > 1) {
			this._head = this._tail;
			this._tail = head;
		 }
    }

    indexOf(data) {	
		var current = this._head;
		for(var i = 0; i< this.length; i++){ 
				if(current.data == data)return i;	
				else current = current.next;        
			}
		
		return -1;
	}
}




module.exports = LinkedList;
