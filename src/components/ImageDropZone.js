import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './imagedropzone.css'

const style = {
  frame: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgb(128,128,128)'
  },
  label: {
    textAlign: 'center',
    fontSize: '48px'
  },
  leave: {
    border: '2px solid grey',
    backgroundColor: 'rgb(230,230,230)',
    color: 'rgb(128,128,128)'
  },
  enter: {
    border: '2px dashed grey',
    backgroundColor: 'rgb(200,200,200)',
    color: 'rgb(64,64,64)'
  }
}

class ImageDropZone extends Component {
  static propTypes = {
    anySize: PropTypes.bool,
    showButton: PropTypes.bool,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    imagePicked: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = { image: null, error: '', over: false }
  }

  handleFile = event => {
    let image = URL.createObjectURL(event.target.files[0])
    this.setState({ image: URL.createObjectURL(event.target.files[0]) })
    this.props.imagePicked(image)
  }

  onDragOver = event => {
    event.preventDefault()
  }

  onDragEnter = event => {
    this.setState({ over: true })
  }

  onDragLeave = event => {
    this.setState({ over: false })
  }

  onDrop = event => {
    event.preventDefault()
    let image = URL.createObjectURL(event.dataTransfer.files[0])
    this.setState({
      image,
      over: false
    })
    this.props.imagePicked(image)
  }

  onLoad = event => {
    const { naturalWidth, naturalHeight } = event.target
    const { width, height, anySize } = this.props

    if (
      !anySize &&
      ((width && width !== naturalWidth) ||
        (height && height !== naturalHeight))
    ) {
      this.setState({
        error: `Wrong image dimensions ${naturalWidth}x${naturalHeight}`,
        image: null
      })
    } else {
      this.setState({ error: '' })
    }
  }

  render() {
    const { image, error, over } = this.state
    const { width, height, anySize, showButton } = this.props

    return (
      <div>
        <div
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDragEnter={this.onDragEnter}
          style={Object.assign(
            {},
            {
              width: `${width}px`,
              height: `${height}px`,
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain'
            },
            style.frame,
            over ? style.enter : style.leave
          )}
        >
          {image !== null ? (
            <img onLoad={this.onLoad} src={image} alt="" width={0} height={0} />
          ) : (
            <div style={{ pointerEvents: 'none' }}>
              <div style={style.label}>
                {!anySize ? (
                  <div>
                    {width} x {height}
                  </div>
                ) : (
                  'Drop Here'
                )}

                <div>{error}</div>
              </div>
            </div>
          )}
        </div>

        {showButton ? (
          <div className="button-container">
            <label className="button">
              Choose File
              <input
                style={{ display: 'none' }}
                type="file"
                onChange={this.handleFile}
              />
            </label>
          </div>
        ) : null}
      </div>
    )
  }
}

export default ImageDropZone
