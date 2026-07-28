# YouTube Focus

#### Video Demo:

<[(https://www.youtube.com/shorts/dcVH15vopE0?t=5&feature=share)]> 
This video is a more in-depth explanation on what I built. After recording this video, I added a feature that hides the recommended videos when the video is unpaused.

## Description:

A lightweight Chrome extension that removes the main distractions from the YouTube page while the video is active. When you hit play, it pauses or removes the comments and recommendations from the user's view. Once you pause the video, the comments and recommendations will reappear. It is slightly unintricate, but it is still a very important tool to use rather than just straight up disabling and the comments and recommendations. This makes the user feel no sense of FOMO and also keeps their attention span in check and stops them from scrolling too far down the comment section and recommendations while the video is playing and frying their attention span for no apparent reason. 
## YouTube Focus's goal and purpose

The most silent yet deadly trap that YouTube plants is to let you scroll through comments and recommendations while something is playing and deliberately hurts the user's attention span to therefore go on YouTube again just to watch more ads and consume more content that will not prove any use later. Lower attention spans affect so many people my age (middle school/high school) that it causes them to read literature less frequently and work less hard for things they are passionate about and their focus deteriorates. I think that this small and free change can affect a lot of people even if it's a subtle change, it is still change! 
## What YouTube Focus does

You now know how YouTube is slowly killing our attention spans but now we will answer what does this project do?

- **While the video is playing** The comments and recommendations are turned off and you can only see the pause button and the title and description
- **While the video is not playing** The comments and recommendations now reappear and you can now only do one thing at once, which in turn helps your attention span!

These two can be disabled though through the toggle switch button where the extension is located on your extensions window.

## The contents of it

This extension has a **Content** script that utilizes and manipulates the YouTube page and a **Popup** that turns this setting on and off to your liking. 

## Content (content.js)

This is where the actual change happens where the YouTube comments and recommendations can turn on and off when paused and unpaused and runs on the actual `https://www.youtube.com/*`. At its core, it's just a decent bit of functions but here's what the code does

1. You create a variable called `video` and set it to null
2. Also grabs the `#comments`, comments, and the `#secondary`, recommendations, with functions
3. In the function `updateFocusMode` sets the `video` to the actual selection of the video and if there is no video, then just stop the code
4. Makes variables for each of the functions
5. Checks if the video is paused or not, which corresponds to the comments and recommended being on or off. 
6. Creates a function called `setupVideoListeners()`. Selects the video and if the video does not exist then it tries again after 1 second just in case the video didn't load immediately and stops the function immediately with return. Then they add event listeners to check if the video is playing and runs each function relative to the video being paused or unpaused. 

## Popup (YouTube_Focus.html, YouTube_Focus.js)

This is the popup where you can set these settings of YouTube Focus to on and off. 

Clicking this extensions tool bar pops up a window that's 200px wide panel where you can switch on and off a stylized toggle button 
- **(specifically `<input type="checkbox">` + some css of course)**

Additional notes for the popup:
There is text placed at the top of this extension that is in bold saying "YouTube Focus"
And another chunk of text that is not in bold and says "Welcome to YouTube Focus!"
When the button is on, it reads green and shows the text below it as 'Enabled', when off it is grey and reads 'Disabled'.

## The css (styles.css)

This is the css for the project or the tool I used for styling that fixes the popup to edit the button and the body of the popup. 

## Other files in this project

- **manifest.json**
- **.gitattributes**
## Other video resources I used: 
For the toggle button
<[https://www.youtube.com/watch?v=LXgEpkYpnL0]>
For the beginning on how you make an extension
<[https://www.youtube.com/watch?v=Zt_6UXvoKHM]>

#### Small note:
Also this is slightly meant to be paired with the other extension Untrap to make YouTube much more optimal for people who want to preserve their attention span. That is just my personal opinion though and the extension still works perfectly fine without it. 

## AI usage:
I used ChatGPT twice for the code, firstly used to make the manifest because I didn't know how that worked. And the second time was for the css because I didn't understand past the basics until I had an AI based explanation.
For this README I used ChatGPT to help me structure this but I did not copy and paste any words or copy any of the AI's writing. 

Thank you CS50!