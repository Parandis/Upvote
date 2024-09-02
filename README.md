## Instructions

1 - Start a new React project using JavaScript or TypeScript. 

2 - All components should be reusable, meaning, they should not be made limited just for this implementation

3 - Feel free to use the provided SVG files or your own similar icons

4 - Create the upvote component capable to show two states.
- It has the default (not-selected) and the selected states:
- Default background color #F4F6F8 with arrow #343A40
- Selected background color #E5E8FD with arrow #253CF2

represent the different groups. Use the same state colours for all lists as mentioned above.

5 - Create the upvotes list
- It toggles the current selection state for all the upvote components in the list through the upvote click
- The selection from a list should not interfere with the selection from any other lists
- Allow adding more upvotes to the list by clicking on the add button

6 - Wireframe
- The  +  button should add one new upvote to its own list
- Any newly added upvote should be linked to the same state as the other upvotes in the list
- The colour of the upvote is only a visual representation of their shared state. Your final product should not have multiple colours, only the selected and default states.

7 - Data
- Use React context, a hook or any way where the data state can be managed for all upvote lists together
- Make the data persisted in the browser and allow to show all upvotes with their states when refreshing the page

8 - Provide one test for selection change based on the click event

9 - Take the opportunity to demonstrate the code consistency that you apply on your own job on a daily basis


