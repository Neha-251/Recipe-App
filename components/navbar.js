function navbar() {
   return `
        
   <div id="menu">
       <i class="fa-solid fa-bars"></i>
       
   </div>
   
   <div id="menuDiv">
        <p>
        <a href="index.html">
        Home </a>
        </p>
        <p>
        <a href="latest.html">
            Letest Recipes</a>
        </p>
    </div>

   <div id="logo"><p>Neha's Recipes</p></div>

   <div id="search_div">
   <input type="text" placeholder="What do you want to cook?" id="recipe_input">
   
   <i class="fa-solid fa-magnifying-glass"></i>
</div>
   
`;
}

export default navbar;