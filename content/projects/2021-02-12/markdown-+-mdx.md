---
title: Markdown + Mdx
date: 2020-02-14
tags: [Projects]
excerpt: markdown + mdx examples
type: project
category: project
---

## Markdown Examples

Since `*.mdx` is a combination of **markdown** and **React components**, I would like to introduce the basic usages of markdown. Click below to see each example.

<!-- Headings -->
<Collapsable title='Headings' titleSize='1rem'>

#### H4 Heading

### H3 Heading

## H2 Heading

</Collapsable>

<!-- Texts -->
<Collapsable title='Texts' titleSize='1rem'>

Here's some basic text
Here's some _italics_
Here's some **bold** text
Here's some **_bold italics_** text
Here's some ~~strikethrough~~ text

</Collapsable>

<!-- Links -->
<Collapsable title='Links' titleSize='1rem'>

[Click here](https://google.com)

</Collapsable>

<!-- Image -->
<Collapsable title='Image' titleSize='1rem'>

!['photo'](photo.jpeg)

</Collapsable>

<!-- HTML -->
<Collapsable title='HTML' titleSize='1rem'>

<div style='color: pink'>
  <span>Hello</span>
</div>

</Collapsable>

<!-- Lists - Numered -->
<Collapsable title='Lists - Numbered' titleSize='1rem'>

1. First
2. Second

</Collapsable>

<!-- Lists - Unordered -->
<Collapsable title='Lists - Unordered' titleSize='1rem'>

- List
- List

</Collapsable>

<!-- Blockquote -->
<Collapsable title='Blockquote' titleSize='1rem'>

> Here is example of blockquote
>
> Est est ipsum tempor eu occaecat. Duis commodo laboris voluptate reprehenderit minim laborum ad deserunt ut magna. Lorem laborum ut officia eu nulla pariatur nulla eiusmod aliquip. Fugiat laboris consectetur tempor anim fugiat.

</Collapsable>

<!-- Nested Blockquote -->
<Collapsable title='Nested Blockquote' titleSize='1rem'>

> > Cupidatat aute ea incididunt dolor mollit ipsum. Eu culpa dolor deserunt nostrud do et commodo consequat. Fugiat tempor sunt qui laborum nulla nostrud eu dolore voluptate non in. Id exercitation consectetur elit voluptate ea et nulla ea ea amet labore sunt ullamco ullamco.

> > > Cupidatat aute ea incididunt dolor mollit ipsum. Eu culpa dolor deserunt nostrud do et commodo consequat. Fugiat tempor sunt qui laborum nulla nostrud eu dolore voluptate non in. Id exercitation consectetur elit voluptate ea et nulla ea ea amet labore sunt ullamco ullamco.

</Collapsable>

<!-- Inline Code -->
<Collapsable title='Inline Code' titleSize='1rem'>

Here is `in-line code block` example

</Collapsable>

<!-- Code block -->
<Collapsable title='Code block' titleSize='1rem'>

```js
const name = 'Ellis'
console.log(name)
```

</Collapsable>

<!-- Code block highlights -->
<Collapsable title='Code block highlights' titleSize='1rem'>

```jsx {3-6}
import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return <div></div>
  }
}
export default Profile
```

</Collapsable>

<!-- Code block title -->
<Collapsable title='Code block title' titleSize='1rem'>

```js:title=example.js
const number 1234;
```

</Collapsable>

<!-- Diff -->
<Collapsable title='Diff' titleSize='1rem'>

```diff
+ {
+
+ import React, { Component } from "react"
+
+ class SomeClass extends Component {
-  render() {
-    return (<div></div>)
-   }
+ }
+
+ export default SomeClass
```

</Collapsable>

## Mdx

### Pre-build components

The blog includes several React components that are ready to use for your blog posts. You <U>don't need to import</U> to use them.

You can expand each list to view each component.

<!-- React Live -->
<Collapsable title='React Live' titleSize='1rem'>

```jsx react-live
const handleClick = () => {
  alert('Hello!')
}

render(<button onClick={handleClick}>Click</button>)
```

</Collapsable>

<!-- Underline -->
<Collapsable title='Underline' titleSize='1rem'>

Underline this <U>word</U> and <U>these words</U>!

</Collapsable>

<!-- Text Blocks -->
<Collapsable title='Text Blocks' titleSize='1rem'>

<Primary>

Eiusmod `culpa duis dolor` consequat mollit aliquip incididunt nostrud veniam laboris. Minim culpa eiusmod pariatur ex consequat irure occaecat veniam nostrud dolor reprehenderit ut consectetur. Nisi cupidatat commodo ea nulla consectetur. Consequat do pariatur ullamco Lorem culpa qui sint. Sit aliqua nulla minim minim officia occaecat nisi est ex ullamco nisi.
</Primary>

<Success>

Eiusmod culpa duis dolor consequat mollit aliquip incididunt nostrud veniam laboris. Minim culpa eiusmod pariatur ex consequat irure occaecat veniam nostrud dolor reprehenderit ut consectetur. Nisi cupidatat commodo ea nulla consectetur. Consequat do pariatur ullamco Lorem culpa qui sint. Sit aliqua nulla minim minim officia occaecat nisi est ex ullamco nisi.
</Success>

<Info>

Eiusmod culpa duis dolor consequat mollit aliquip incididunt nostrud veniam laboris. Minim culpa eiusmod pariatur ex consequat irure occaecat veniam nostrud dolor reprehenderit ut consectetur. Nisi cupidatat commodo ea nulla consectetur. Consequat do pariatur ullamco Lorem culpa qui sint. Sit aliqua nulla minim minim officia occaecat nisi est ex ullamco nisi.
</Info>

<Warning>

Eiusmod culpa duis dolor consequat mollit aliquip incididunt nostrud veniam laboris. Minim culpa eiusmod pariatur ex consequat irure occaecat veniam nostrud dolor reprehenderit ut consectetur. Nisi cupidatat commodo ea nulla consectetur. Consequat do pariatur ullamco Lorem culpa qui sint. Sit aliqua nulla minim minim officia occaecat nisi est ex ullamco nisi.
</Warning>

<Danger>

Eiusmod culpa duis dolor consequat mollit aliquip incididunt nostrud veniam laboris. Minim culpa eiusmod pariatur ex consequat irure occaecat veniam nostrud dolor reprehenderit ut consectetur. Nisi cupidatat commodo ea nulla consectetur. Consequat do pariatur ullamco Lorem culpa qui sint. Sit aliqua nulla minim minim officia occaecat nisi est ex ullamco nisi.
</Danger>

</Collapsable>
