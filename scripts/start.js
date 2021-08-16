Hooks.on("updateActor", (actor,changes,diff,userId) => {
   if (game.user.id==userId && changes.name!==undefined){
    actor.update({"token.name":changes.name});
   }
});
