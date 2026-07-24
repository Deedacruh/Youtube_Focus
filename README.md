# Youtube Focus

#### Video Demo:

<[(https://www.youtube.com/shorts/dcVH15vopE0?t=5&feature=share)]> 
This video does give a more in depth explanation of this project in action

## Description:

A lightweight Chrome extension that removes the main distractions from the Youtube page while the video is active. When you hit play, it pauses or removes the comments and recommendations from the user's view. Once you pause the video, the comments and recommendations will reappear. It is slightly unintricate, but is still a very important tool to use rather than just straight up disabling and the comments and recommendations. This makes the user feel no sense of fomo and also keeps their attention span in check and stops them from scrolling too far down the comment section and recommendations while the video is playing and frying their attention span for no apparent reason. 
## Youtube Focus's goal and purpose

The most silent yet deadly trap that Youtube plants is to let you scroll through comments and recommendations while something is playing and deliberately hurts the user's attention span to therefore go on Youtube again just to watch more ads and consume more content that will not prove any use later. Lower attention spans affect so many people my age (Middle school/High school) it causes them to read literature less frequently and work less hard for things they are passionate about and their focus deteriorates. I think that this small and free change can affect a lot of people even if it's subtle change, it is still change! 
## What Youtube Focus does

You now know how Youtube is slowly killing our attention spans but now we will answer what does this project stright up do?

- **While the video is playing** The comments and recommendations are turned off and you can only see the pause button and the title and descripion
- **While the video is not playing** The comments and recommendations now reappear and you can now only do one thing at once, which in turn helps your attention span!

These two can be disabled though through the toggle switch button where the extension is located on your extensions window.

## The contents of it

This extension has a **Content** script that utilizes and manipulates the YouTube page and a **Popup** that turns this setting on and off to your liking. 

## Content (content.js)

This is where the actual change happens where the Youtube comments and recommendations can turn on and off when paused and unpaused and runs on the actual `https://www.youtube.com/*`. At its core, it's just a decent bit of functions but here's what the code does

1. You create a variable called `video` and set it to null
2. Also grabs the `#comments`, comments, and the `#secondary`, recommendations, with functions
3. In the function `updateFocusMode` sets the `video` to the actual selection of the video and if there is no video, then just stop the code
4. Makes variables for each of the functions

## Other video resources I used: 
For the toggle button
<[https://www.youtube.com/watch?v=LXgEpkYpnL0]>
For the beginning on how you make an extension
<[https://www.youtube.com/watch?v=Zt_6UXvoKHM]>

#### Small note:
Also this is slightly meant to be paired with the other extension untrap to make Youtube much more optimal for people who want to preserve their attention span. That is just my personal opinion though and the extension still works perfectly fine without it. 

## AI usage:
I used chatGPT twice, firstly used to make the manifest because I didn't know how that worked. And the second time was for the css because I didn't understand past the basics until I had an ai based explanation.

Thank you CS50!