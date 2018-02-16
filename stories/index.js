import React from 'react'

import { storiesOf } from '@storybook/react'
import ImageDropZone from '../src/components/ImageDropZone'

const imagePicked = image => console.log(image)

storiesOf('File Drop Zone', module)
  .add('Image Drop Size', () => (
    <ImageDropZone width={640} height={359} imagePicked={imagePicked} />
  ))
  .add('Image Drop Any Size', () => (
    <ImageDropZone anySize width={512} height={512} imagePicked={imagePicked} />
  ))
  .add('Image Drop Any Size with Button', () => (
    <ImageDropZone
      anySize
      showButton
      width={512}
      height={512}
      imagePicked={imagePicked}
    />
  ))
