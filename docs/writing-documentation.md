---
id: writing-documentation
title: Writing Documentation
---


export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

# **What do I need in order to write documentation?
 - Writing documentation is actually really <Highlight color="#0057B7">easy</Highlight>! All you need is a basic understanding of <Highlight color="#0057B7">MarkDown</Highlight>!

   In this tutorial, we are going to teach you <Highlight color="#0057B7">EVERYTHING</Highlight> you need in order to write documentation for AdamBot!

# **Instructions For Writing Good Docs:**
 - Remove the instructions before submission
 - Remove all comments (enclosed in the "///") before submission
 - This documentation uses https://docusaurus.io
 - Add `<Highlight color="#86DB98">your text here</Highlight>` to highlight the words "your text here" in the HEX colour of "#86DB98" (HEX is changeable)
 - Javascript (the highlighting) wont show in markdown editors but it does work on production.
 - You can use https://stackedit.io/app for markdown editing in your browser!
 - When your finished, copy the contents of your page and DM it to @whatisyourname. in codeblock!
 - View this example for how to make a documentation page: ![Example Documentation Page](https://cdn.discordapp.com/attachments/1133303870945239064/1144858534438256801/image.png)
 

Example for <Highlight color="#86DB98">`dogpic`</Highlight> command:

```
---
`/// put the name of the command here (exactly) ///`
id: dogpic
`/// the pages title (usually just expanded & capitalised id) ///`
title: Dog Picture
---
`/// DO NOT TOUCH ///`

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

`/// START OF DOCUMENTATION ///`

`/// Command Group (Utility, Fun, Event, etc.) ///`
# Fun Commands

`/// Exact Command Name ///`
## Command: /docpic

`/// The Commands Description ///`
Info: Show a random dog picture.

`/// Exact Command Name ///`
Usage: `/dogpic`

`/// Example: Include paramaters ///`
Example: <Highlight color="#86DB98">/dogpic [no parameters]</Highlight>

<> = required
[] = optional

`/// A PERMANENT link to your image! ///`
Images:
![Image](https://cdn.discordapp.com/attachments/1133303870945239064/1144861324984201246/image.png)
```



