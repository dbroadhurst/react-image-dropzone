# React Image DropZone

A component that enables react developers to add image drag and drop to a page

![](https://s3-us-west-2.amazonaws.com/union25-public/react-image-dropzone-screenshot.png)

[react-image-dropzone Storybook](http://reactimagedropzone.dbroadhurst.net)

### Install

```bash
npm install react-image-dropzone
```

### Examples

```html
    const imagePicked = image => console.log(image)

    <ImageDropZone
      width={640}
      height={359}
      imageWidth={640}
      imageHeight={359}
      imagePicked={imagePicked}
    />

    <ImageDropZone
      anySize
      width={512}
      height={512}
      imageWidth={512}
      imageHeight={512}
      imageDefault={imageDefault}
      imagePicked={imagePicked}
    />

    <ImageDropZone
      style={{ width: '512px', height: '512px' }}
      anySize
      showButton
      width={512}
      height={512}
      imageDefault={imageDefault}
      imagePicked={imagePicked}
    />
```
