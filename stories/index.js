import React from 'react'

import { storiesOf } from '@storybook/react'
import ImageDropZone from '../src/components/ImageDropZone'

import imageDefault from './dragme.jpg'

const imagePicked = image => console.log(image)
const imageDeleted = image => console.log(image)

storiesOf('File Drop Zone', module)
  .add('Image Drop Size', () => (
    <ImageDropZone width={640} height={359} imageWidth={640} imageHeight={359} imagePicked={imagePicked} />
  ))
  .add('Image Drop Any Size', () => (
    <ImageDropZone anySize width={512} height={512} imageWidth={512} imageHeight={512} imagePicked={imagePicked} />
  ))
  .add('Image Drop Any Size with Button', () => (
    <ImageDropZone
      style={{ width: '512px', height: '512px' }}
      anySize
      showButton
      width={512}
      height={512}
      imagePicked={imagePicked}
    />
  ))
  .add('Image Drop Any Size with Button + Delete', () => (
    <ImageDropZone
      style={{ width: '512px', height: '512px' }}
      anySize
      showButton
      showDeleteButton
      width={512}
      height={512}
      imagePicked={imagePicked}
      imageDeleted={imageDeleted}
    />
  ))
  .add('Image Drop default image Any Size', () => (
    <ImageDropZone
      style={{ width: '512px', height: '512px' }}
      anySize
      width={512}
      height={512}
      imageDefault={imageDefault}
      imagePicked={imagePicked}
    />
  ))
  .add('Image Drop default image Any Size small font', () => (
    <ImageDropZone
      style={{ width: '512px', height: '512px' }}
      anySize
      width={512}
      height={512}
      fontSize={16}
      imageDefault={imageDefault}
      imagePicked={imagePicked}
    />
  ))
