// Variables
const tweetList = document.getElementById('tweet-list');
  
  
// Event Listener 
eventListeners();

function eventListeners() {
     //  Form Submission 
     document.querySelector('#form').addEventListener('submit', newTweet);
     
     // Remove tweet from the list 
     tweetList.addEventListener('click', removeTweet);
     
     // Document 
     document.addEventListener ('DOMContentLoaded', localStorageOnLoad);
}


// Functions

function newTweet(e) {
     e.preventDefault();
     
     //Read the textarea value
     const tweet = document.getElementById('tweet').value;
     
     // Create the remove button
     const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-tweet';
     removeBtn.textContent = 'X';
      
     // Create an <li> element
     const li = document.createElement('li');
     li.textContent = tweet;
     
     // Add the remove button to each tweet
     li.appendChild(reemoveBtn);
     
     // Add to the list
     tweetList.appendChild(li);
     
     // add to local storage 
     addTweetLocalStorage(tweet);

} 

// Remove the Tweets from the DOM
function removeTweet(e) {
     if(e.target.classList.contains('remove-tweet')) {
          e.target.parentElement.remove();
     } 
     
     // Remove from Storage
     removeTweetLocalStorage( e.target.parentElement.textContent );
}

// Add the tweets into local storage
function addTweetLocalStorage(tweet) {
     let tweets = getTweetsFromStorage();
     
     // Add the tweet into the array 
     tweets.push(tweet);
     
     // Convert tweet array into string
     localStorage.setItem('tweets',  JSON.stringify(tweets )  );
}

function getTweetsFromStorage() {
     let tweets;
     const tweetsLS = localStorage.getItem('tweets');
     // Get the values. if null is returned then we create an empty array
     if(tweetsLS === null) {
          tweets = [];
     } else {
          tweets = JSON.parse( tweetsLS );
     }
     return tweets;
}

// Prints Local Storage Tweets  on load 
function localStorageOnLoad() {
     let tweets = getTweetsFromStorage();
     
     // loop thought storage and then print the values
     tweets.forEach(function(tweet) {
          // Create the remove button
          const removeBtn = document.createElement('a');
          removeBtn.classList = 'remove-tweet';
          removeBtn.textContent = 'X';
     
          // Create an <li> element
          const li = document.createElement('li');
          li.textContent = tweet;
     
          // Add the remove button to each tweet
          li.appendChild(reemoveBtn);
     
          // Add to the list
          tweetList.appendChild(li);
     });
}

// Removes the tweet from local storage 

function removeTweetLocalStorage(tweet) {
     // get tweets from storage 
     let tweets = getTweetsFromStorage();
     
     
     // Remove the X from the tweet
     
     const tweetDelete = tweet.substring( 0,tweet.length -1 );
     
     // loop throught the tweets and remove the tweet that's equal 
     tweets.forEach(function(tweetLS, index) {
          if(tweetDelete === tweetLS) {
               tweets.splice(index, 1);
          }
     });
}