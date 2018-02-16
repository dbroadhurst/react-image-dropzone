# React Image DropZone

A component that enables react developers to add image drag and drop to a page

![](https://s3-us-west-2.amazonaws.com/union25-public/react-image-dropzone-screenshot.png)

[react-image-dropzone Storybook](http://reactimagedropzone.dbroadhurst.net)

### Install

```bash
npm install react-image-dropzone
```

### Examples

```javascript
const imagePicked = image => console.log(image)

<ImageDropZone
  width={640}
  height={359}
  imagePicked={imagePicked}
/>

<ImageDropZone
  anySize
  width={512}
  height={512}
  imagePicked={imagePicked
/>

<ImageDropZone
  anySize
  showButton
  width={512}
  height={512}
  imagePicked={imagePicked}
/>
```

### Storybook
