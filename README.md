# backjs
Here is a little tool manage the history path of browser

# Are you kidding?
Since we already have so many history apis such as history.back/hisrtory.forward/history.go , or history.pushState, why we need a tool
to manage the history?

# Think about this case
At the beginning of a new project, you handle all return/back button with history.back(), you thought that's simple and clear, right?
Someday the PM told you that:
`hey, why I clicked the back button in c page, it went back to b page?`
You recurred the case: he jumped from a page to b page, then jumped to c page, then you asked:
`Is there any problem?`
He might go crazy with:
`hey, don't you know b page is a private middle page, in no case should you return to this page!`
Errrrrr.

# Solution
The first idea came into mind might be using history.go(-2) to replace the origin history.back() function. However, if the case went more complicated: a -> b-> c-> d, and both b & c page are private?Should we use history.go(-3) in d page?
Or another case: somebody add b page to favorites. Which page should we redirect to?
Taken we can't get the history paths that users have viewed, we need a simple tool to help us, here is backjs.

#How to use
It's quite small and simple.Just add it to every page in your project.And use this `back` function in place of history.back().

You should maintain an individual setting.js or whatever to save the authority of some private page.
`if a page is private, just set {'a':false}`
Then when you click the back button, it will skip the private page, and return further till the page that is public.

#At last
This tool is quite simple.It just offer an idea.
After reading the source code, you may have better idea, pull requests are appreciated.
