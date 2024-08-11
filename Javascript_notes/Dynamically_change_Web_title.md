# How to make Dyncamic web titles when user changes tabs
***NOTE: This was taken from a Medium article on how to do this I directly ripped it from this [article](https://medium.com/@alperen.talaslioglu/changing-page-title-dynamically-when-user-changes-tab-5d372554377c).<br> Since Medium is a subscription service if you access it too many times for free you may not see it until a month has passed***





## First, let’s get the title of page in our hands.

'''

    window.onload = function() {
        var pageTitle = document.title;
    };

'''

## Now we have the current page title. For example, we can change the page title to “Come Back!” when user change the tab.

'''

    window.onload = function() {

        var pageTitle = document.title;
        var attentionMessage = 'Come Back!';
    
    };

'''

## Everything is ready for change our title :) Now we need to detect user’s active / inactive state. We can do this with some js events like this.

'''

    window.onload = function() {

        var pageTitle = document.title;
        var attentionMessage = 'Come Back!';
        
        document.addEventListener('visibilitychange', function(e) {
            console.log(document.hidden);
  });

};

'''

## Now we know is the page is active / inactive. We can create our simple logic.

'''

    window.onload = function() {

        var pageTitle = document.title;
        var attentionMessage = 'Come Back!';

        document.addEventListener('visibilitychange', function(e) {
            var isPageActive = !document.hidden;

            if(!isPageActive){
            document.title = attentionMessage;
            }else {
            document.title = pageTitle;
            }
        });
    };

'''

## So if the page is not active, the title is becoming “Come Back”. If user comes back, the title is again becoming original title.

**Like this:**

insert gif#1 here

## And also we can improve this. We can make the “Come Back” text blink to get more attention of the users.

'''

    window.onload = function() {

        var pageTitle = document.title;
        var attentionMessage = '*Come Back!';
        var blinkEvent = null;

        document.addEventListener('visibilitychange', function(e) {
            var isPageActive = !document.hidden;

            if(!isPageActive){
            blink();
            }else {
            document.title = pageTitle;
            clearInterval(blinkEvent);
            }
        });

        function blink(){
            blinkEvent = setInterval(function() {
            if(document.title === attentionMessage){
                document.title = pageTitle;
            }else {
                document.title = attentionMessage;
            }
            }, 100);
        }
    };

'''

**After our improvements on the code, the final result is:**

insert gif #2 here


## So this is how we can make attention grabbing dynamic titles with simple JavaScript code.