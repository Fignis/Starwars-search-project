# Starwars-search-project
This is small project that utilizes the SWAPI as an endpoint to search for indivduals, starships or planets through user queries. 

<h1>General Documentation </h1>
<ul> 
  <li>To go to the SWAPI homepage click <a href="https://swapi.dev">here.</a></li>
  <li> For SWAPI documentation click <a target='_blank' href="https://swapi.dev/documentation#search">here.</a></li>
  <li> For the SWAPI search documentation click <a href="https://swapi.dev/documentation#search">here.</a></li>
  </ul>
<h1>How does it work?</h1>
 <p>
    Using the api endpoint of :<pre> <code> https://swapi.dev/api/people/?search= </code> </pre> 
  </p>
 <p>The user is able to search for an individual by entering a search query. The query is saved in a variable and added to the api endpoint. The data is then retrieved and afterwards displayed. </p>
 <p>The same is done for starships and planets. Where for starships the endpoint is :<pre> <code> https://swapi.dev/api/starships/?search= </code> </pre> </p>
 <p>And for planets it is: <pre> <code> https://swapi.dev/api/planets/?search= </code> </pre></p> 
 <p> I originally wanted to have one page dedicated to search through all three endpoints but it is something I have yet to figure out. As a compromise I've split the searches into three pages, one for searching individuals, one for starships and another for planets. </p> 
 <h2>To do list (things I need to figure out): </h2>
 <ul>
  <li>Figure out a way to clear the search results after a user searches again. </li>
    <li>Stylize the search result so it looks presentable </li>
     <li>Possibly incorporate a better way to search through all three endpoints rather than having separate pages for each.</li>
</ul>
<h1>Tech</h1>
<ul>
  <li>HTML</li>
    <li>CSS </li>
     <li>Vanilla Javascript</li>
</ul>
