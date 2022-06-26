fetch("https:www.themealdb.com/api/json/v1/1/search.php?s=Beef")
  .then((data) => {
      return data.json();
  });
  .then((completedata)=>{
      console.log(completedata)
  }
  );
  