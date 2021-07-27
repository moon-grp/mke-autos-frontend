
/*export default ({ app }) => {
    // Every time the route changes (fired on initialization too)
    app.router.beforeRouteEnter((to, from, next) => {
      //do something to validate
       if(from.path === "garage/details"){
           next(true)
           console.log("test")
       }else{
           next({path:"/"})
           console.log("test else")
       }

    })
 }*/