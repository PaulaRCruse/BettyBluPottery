# BettyBluPottery

The purpose of this project was to create a webpage for Betty Blu Pottery which is a local store in The Mellwood Art Center in Louisville, KY. 

This website is going to be used to provide exposure to the pottery and stones available to potential customers looking for unique and handmade art. 

To satisfy the requirements of the project for Code Louisville this project was built “mobile first” design. There are two media queries

Project is built “mobile first”
Media queries do scale up to handle large devices
There are at least 2 media queries to handle sizing
600px break point includes but is not limited to:
Navbar changing from vertical to horizontal and placing the horizontal navbar to the right.
Changing the gallery buttons content postion.
Removing the larger logo and creating a smaller background image that is positioned to the left.
Changing opacity from always viewable to hover to view
Contact us form changes max-width from 300px to 480px 
About page images go from 100% width to 50% width to compensate from growing screen sizes

1000px break point includes:
About page images float left and right respectively causing the text to wrap around them at larger screen sizes. Also changed their max-width as to not cause too much space being taken up from the images.

Project is uploaded to GitHub and has over 20 separate commits using VSCode, Terminal, and the GitHub App. 
Project includes a README file explaining which requirements have been included in code

CSS Features List items included:

1.	A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal – The navbar switches between vertical and horizontal at a breakpoint of 600px. On mobile devices the navbar is a vertical navigation bar and at 600px the navbar switches to a horizontal navigation bar the has been positioned to the right of the screen.
2.	Use Flexbox to organize content areas based on mobile or desktop views. - Created a Flexbox to house images so they wrap or expand based on screen size. The images were centered using justify-content and align-items to perfectly center the images within the main body. As well as using the space-between to space the images perfectly inside the flexbox.  Due to how flexbox works the images change between one column to multiple columns based on screen size without the need of breakpoints.


JavaScript Features List included:

1.	Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - Clickable button (Gallery) that show or hide  based on whether or not it’s been engaged. Will hide if the mouse button clicks anywhere else on the page. When clicked on mobile screen sizes the gallery content pushes the bottom list item down and creates space for its content vertically as if it were part of the list (the shadow of the content lets the viewer know it is a separate entity from the actual navbar). When used in larger devices the content drops below the gallery button to form a list the flows over the main body element and when the user hovers over any list item the contents are semi-transparent.
2.	Create a form (such as a ‘Contact Us’ form), validate at least 1 input (example, ensure email is in the proper format), and then use that information on your page somehow (ex: display it back to the user, or change a setting on the page based on a section) - Contact us form using JavaScript to validate inputs. If name, email, and/or message field are left empty an alert will pop up letting the user know they did not submit a valid form. When the user properly fills out the form a message will appear alerting the user their message was sent. The message produced uses the “name” field and “message” field to create a customized alert message saying “Thank you, “name” your message:  “ ‘message’ “ has been sent to Betty Blu!
