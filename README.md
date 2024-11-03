# anantkumarlnu-ASSIGNMENT-7-INFO-6150
7th assignment for the INFO 6150(12566).

PART A

Simple 2 page application named 'Larry's CalC' for implementing the calculator and the login page.
Illustration pack used is name Larry character illustration(https://www.drawkit.com/illustrations/larry-character-illustrations), hence the name of the page.

REQUIREMENTS 
- implemented 2 pages, login and the calculator page
- login page has the four fields, namely, email, username, password, confirm password. Also has the login button.
- Validations are done using jquery
- logged in username is displayed on the top-right corner of the calculator page
- text fields are used for number 1 and number 2, appropriate labels and validations are added(again, using jquery)
- Has the addition, substraction, multiplication and division operations
- third, result input field is made readonly to meet the requirements
- single arrow function is used for all the operations
- basic css implemented


PART B

Portal Timer!!
Timer application that starts the 'star-wars' hyperspace when the timer is started 
Herosection has a still from the gif as the background image, the image is changed to the gif when the timer starts 

•	Async:
	•	Async functions: The functions setBgGif, setBgImg, and updateStopWatch are defined as async, allowing me to use await within them.
•	Await:
	•	await setBgGif(); in the #toStart button’s click event handler. This waits for the background change to the animated GIF to complete before starting the timer.
	•	await updateStopWatch(); in the interval set by setInterval. This waits for the stopwatch update to complete.
	•	await setBgImg(); in the #toStop and #toReset click event handlers. This waits for the background change back to the static image to complete before proceeding.
•	Promises:
	•	In setBgGif and setBgImg, each function returns a new Promise. This allows me to handle asynchronous behavior for the background change.
	•	The resolve() in each of these functions ensures that they complete successfully, allowing the await keywords to function correctly.
•	Set Interval:
	•	intervalId = setInterval(async () => { ... }, 1000); in the #toStart click event handler starts a timer that increments seconds and updates the display every second while the timer is running.
•	Clear Interval:
	•	clearInterval(intervalId); in both #toStop and #toReset click event handlers. This stops the timer, preventing further increments to seconds when the timer is paused or reset.

Date picker has been implemented, current date value is assigned to it and its default behaviour to change the date is getting prevented by using the preventDefault method

basic css also has been implemented

 
