Hooks.on("updateActor", (actor,changes) => {
   if (changes.name!==undefined){
    actor.update({"token.name":changes.name});
   }
});
