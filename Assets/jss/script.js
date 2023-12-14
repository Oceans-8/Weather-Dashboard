<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather Forecast</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  </head>
  <body>
    <header>
      <div>
        <h1>Weather Dashboard</h1>
      </div>
    </header>

    <div class="search-column">
      <h2>Search for Location:</h2>
      <input type="search" placeholder="search..." id="Search-Input" class="Search-Bar">
      <div class="search-button-container">
        <button onclick="searchFunction(); OtherSearchFunction()" class="Search-Button">
          Search
        </button>
      </div>
    <div id="searchResults"></div>


    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script type="text/javascript" src="assets/jss/script.js">
  </body>
</html>

