const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'zUDam9oRwmj0ld75EasNmt8pqokO6MFv';
let url;

const searchTerm = document.querySelector('.search'); //define variable & query select
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

nav.style.display = 'none'; //Setting the inital style to none
 
let pageNumber = 0; //Setting initial page to 0


searchForm.addEventListener('submit', fetchResults); //looking for submission to happen
nextBtn.addEventListener('click', nextPage); //looking for a click event, specifiacally to the next button
previousBtn.addEventListener('click', previousPage); //looking for a click event, specifiacally to the previous button
 
function fetchResults(e) {
  // console.log(e);
  e.preventDefault(); //preventing the form submitting
  console.log(e);
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //We are creating a versatile query string
  //&page= corresponds to the results array and our specific value
  //&q= corresponds to the search query the user makes
  console.log('URL:', url);
 
  if (startDate.value !== '') {
    console.log(startDate.value)
    url +=  '&begin_date=' + startDate.value; //add start date to  url if url is NOT blank
  }
   
  if (endDate.value !== '') { //!== not equal to blank
    console.log(endDate.value)
    url += '&end_date=' + endDate.value; //add end date to  url if url is NOT blank
  }
 
  fetch(url) //make the request to the API
    .then(function(result) {
    //  console.log(result, 'line 45')
      return result.json();
    })
    .then(function(json) {
      console.log(json);
      displayResults(json);
    })
  console.log('this is a test');
}
 
function displayResults(json) {
  // console.log('Display Results', json);
  // console.log(json.response.docs);
 
  while (section.firstChild) { 
    //while continues to run for as long as the condition in the parenthesis is true
    section.removeChild(section.firstChild); //hides section
  }
 
  let articles = json.response.docs;
  // console.log(articles);
 
  if (articles.length === 0) {
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) { 
      console.log(i);
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
 
      let current = articles[i];
      console.log('Current:', current); //prints current: #ofArticles
 
      link.href = current.web_url; // web_url is part of the JSON object
      link.target='blank'
      link.textContent = current.headline.main; //Another value in the object. Narrowing down the object for what populates on page from search results
      //Shows main headline
 
      para.textContent = 'Keywords: '; 
      //Populating text keywords in each result
 
      for (let j = 0; j < current.keywords.length; j++) { //different letter used because i is alredy defined
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value +', ';
        para.appendChild(span);
      }
 
      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main; 
      }
 
      clearfix.setAttribute('class', 'clearfix');
 
      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
 
  if (articles.length === 10) {
    nav.style.display = 'block';
    previousBtn.style.display = pageNumber == 0 ? 'none' : 'block';
    nextBtn.style.display = 'block';
  } else if (articles.length < 10 && pageNumber > 0){
    nav.style.display = 'block';
    previousBtn.style.display = 'block';
    nextBtn.style.display = 'none';
  } else {
    nav.style.display = 'none';
  }
}
 
function nextPage(e) {
  // console.log('Next button clicked');
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}
 
function previousPage(e) {
  // console.log('Previous button clicked');
  if (pageNumber > 0) {
    //need to account for user being on the first page (page 0)
    pageNumber--;
    //if page number is over 0, we invrement the page number by 1
    fetchResults(e);
  } else {
    return; //if value is 0, return nothing
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}
