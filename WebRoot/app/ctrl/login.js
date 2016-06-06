define(["BaseView","text!TemplateLogin"],function(BaseView,template){
		//console.log("login.................");
	
	var LoginView=BaseView.extend({
		
		initialize:function(){
			console.log("init............");
			
		},
		onCreate:function(){
			console.log("onCreate............");
			
		},
		onShow:function(){
			console.log("onShow............");
			var tpl= _.template(template);
			var html= tpl({ "data": {}});
			$(html).appendTo($("body"));
		}
		
	});
	return LoginView;
	 /**
  	var LoginView=basePageView.extend({
  		events:{
  			"click #login":"login",
  			"click #register":"register",
  			"click #forget":"forget"
  		},
  		login:function(e){
  			//UC.go("home",{anim:true});
  			this.showLoading("璇锋眰鏈嶅姟鍣�..");
  			var self=this,
  				umodel=new userModel();
  				username=self.$el.find("#username").val(),
  				password=self.$el.find("#password").val();
  				umodel.fetch({
  					url:UC.actionUrl+"appLogin/login",
  					params:{
  						username:username,
  						password:password
  					},
  					success:function(data){
  						self.hideLoading();
  						if(data.attributes){
  							if(data.attributes.flag){
  	  							localStorage.setItem("username",username);
  	  							localStorage.setItem("password",password);
  	  							UC.go("home");
  	  						}else{
  	  							self.showAlert("鐢ㄦ埛鍚嶅瘑鐮侀敊璇�); 
  	  						}
  						}else{
  							
  							if(data.flag){
  	  							localStorage.setItem("username",username);
  	  							localStorage.setItem("password",password);
  	  							UC.go("home");
  	  						}else{
  	  							self.showAlert("鐢ㄦ埛鍚嶅瘑鐮侀敊璇�); 
  	  						}
  						}
  					 
  					},
  					error:function(){
  						
  					}
  				});
  			
  			//this.showLoading();
  		},
  		forget:function(){
  			UC.go("forget",{anim:true});
  		},
  		register:function(){
  			UC.go('register1',{anim:true});
  		},
  		initTemplate: function () {
             return _.template(TemplateLogin);
        },
        render: function (data) {
            var tpl = this.initTemplate(),
            	self=this; 
        	self.$el.html(tpl({ "data": data })); 
        	//self.$el.addClass("app_user_bg");
        	 
        	
        },
        onCreate:function(){
        	 
        	this.render();
        	
        	if(UC.isLogin()){
        		UC.go("yulu");
        	}else{
        		this.render();
        		
        	}
        
        },
        onShow:function(){
        	
        	 
        }
       
  	});
  	 
  	return  LoginView;
    */
});