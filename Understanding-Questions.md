# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* addOne is called to dispatch
* Call back function returns "ADD_ONE"
* Switch statement is evaluated until action is returned to update the state
State is copied and total is replaced with state.total + 1

* TotalDisplay shows the total plus 1
