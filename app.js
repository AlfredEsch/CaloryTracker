const itemctrl = (function(){
   const item = function(id, name, calories){
       this.id = id
       this.name = name
       this. calories = calories
   }
   const data = {
       items: [
           {id: 0, name: 'Steak Dinner', calories: 1200},
           {id: 1, name: 'Cookie', calories: 400},
           {id: 2, name: 'Eggs', calories: 300}
       ],
       total: 0
   }

   return{
       logdata: function (){
           return data
       }
   }
});

const uictrl = (function(){
    console.log('UICtrl')
});

const app = (function(itemctrl, uictrl){
    console.log('app')
    })(itemctrl, uictrl)